import { Router, Request, Response } from "express";
import { orderBodySchema, cancelOrderSchema } from "@repo/zod/trading";
import { RedisManager } from "../utils/RedisManager.js";
import { CANCEL_ORDER, CREATE_ORDER } from "../types/trading.js";
import { isAuthenticated } from "../middleware/authentication.js";
import { client } from "@repo/db/client";
import z from "zod";

export const tradingRoute = Router();

tradingRoute.post("/order", async (req: any, res: any) => {
  const body = req.body;
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

tradingRoute.post("/cancel", async(req: any, res: any) => {
  
  try{
    const userId: string = req.session.user.userId
    if(userId==null) return res.status(401).json({"message":"Unauthorized"})
    const body = req.body;
    const { orderId, symbol } = cancelOrderSchema.parse(body);

    const order = await client.orders.findFirst({
      where:{
        userId: userId,
        orderId: orderId
      }
    })

    if(order==null) return res.status(400).json({"message":"Invalid Operation"})
    
    const response = await RedisManager.getInstance().sendAndAwait({
      type: CANCEL_ORDER,
      message:{
        symbol,orderId
      }
    })

    const unLockAmt = order.side === "BUY"
      ? Math.floor(((Math.floor(order.quote_price*1000))* (Math.floor(order.quote_quantity*1000)))/1000) :
      Math.floor((Math.floor(order.quote_quantity*1000)))

    const updateBalance =  await client.balances.update({
      where:{
        userId_asset:{
          userId: order.userId,
          asset: order.side === "BUY" ? "USDT" : order.symbol,
        }
      },
      data:{
        lockedBalance:{
          decrement: unLockAmt
        },
        freeBalance:{
          increment: unLockAmt
        }
      }
      
    })

    return res.json(response)


    
    
  }catch(error){
    console.log(error)
    if(error instanceof z.ZodError) return res.status(400).json({message: "Input Error "})
    return res.status(500).json({message:"Internal Server Error"})
  }
})

