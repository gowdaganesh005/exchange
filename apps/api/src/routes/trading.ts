import { Router, Request, Response } from "express";
import { orderBodySchema } from "@repo/zod/trading";
import { RedisManager } from "../utils/RedisManager.js";
import { CREATE_ORDER } from "../types/trading.js";
import { isAuthenticated } from "../middleware/authentication.js";
import { client } from "@repo/db/client";

export const tradingRoute = Router();

tradingRoute.post("/order", async (req: any, res: any) => {
  const body = req.body;
  console.log(body)
  let userBalance=null;
  try {
    const { symbol,price,quantity,side,type,timestamp} = orderBodySchema.parse(body);

      const scaledPrice = Math.floor(price*1000)
      const totalCost = Math.floor((scaledPrice * Math.floor(quantity*1000))/1000);
      
        try{
          userBalance = await client.balances.findFirst({
            where:{
              userId:req.session.user.userId,
              asset: side=="BUY"?'USDT':symbol
            },
            select:{
              freeBalance:true,
              balanceId: true
              
            }
          })
          if(userBalance){
            if(userBalance.freeBalance>0 && side=="BUY"?(userBalance.freeBalance>=totalCost):(userBalance.freeBalance>=Math.floor(quantity*1000))){
              await client.balances.update({
                where:{
                  balanceId:userBalance.balanceId
                },
                data:{
                  freeBalance:{
                    decrement:side=="BUY"?totalCost:Math.floor(quantity*1000)
                  },
                  lockedBalance:{
                    increment:side=="BUY"?totalCost:Math.floor(quantity*1000)
                  }
                }
              })
  
            }else{
              return res.status(401).json({message:"Insufficient Funds"})
            }
          }
          else{
            return res.status(500).json({message:"Cannot get the balance Id"})
          }
        }catch(error:any){
          console.log("Error while Locking Balance:: ",error)
        }
  
      
      
      
    try{
      const response = await RedisManager.getInstance().sendAndAwait({
        type:CREATE_ORDER,
        message:{
          price,quantity,symbol,side,userId:req.session.user.userId,type,timestamp
        } 
      })
      console.log(response)
      return res.json(response)

    }catch(error:any){
        await client.balances.update({
          where:{
            balanceId:userBalance?.balanceId,
           
          },
          data:{
            lockedBalance:{
              decrement: side=="BUY"?totalCost:Math.floor(quantity*1000)
            },
            freeBalance: {
              increment: side=="BUY"?totalCost:Math.floor(quantity*1000)
            }
          }

        })
        return res.status(500).json({message:"Failed to place Order"})
    }
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Invalid Body" });
  }


});
