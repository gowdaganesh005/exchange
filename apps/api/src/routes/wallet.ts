import { Router } from "express";
import { isAuthenticated } from "../middleware/authentication.js";
import { client } from "@repo/db/client";
import { z,amountSchema } from "@repo/zod/wallet";

export const walletHandler = Router();

walletHandler.get("/balance",isAuthenticated,async (req:any,res:any)=>{
    const userId = req.session.user.userId
    if(userId){
        const wallet = await client.balances.findMany({
            where:{
                userId:userId,
            },
            select:{
                balanceId:true,
                asset:true,
                freeBalance:true,
                lockedBalance:true
            }
        })
        const profitQuery:any= await client.$queryRaw`
        SELECT
        COALESCE(
          SUM(
            CASE
              WHEN type = 'CREDIT' THEN amount
              ELSE -amount
            END
          ), 0
        ) AS total_profit
        FROM "Ledger"
        WHERE
        "userId" = ${userId}
        AND (reason = 'TRADE_PROFIT' OR reason = 'TRADE_COST');
        `
        console.log("This is profitQuery ",profitQuery)
        let serializedWallet;
        if(wallet){
         serializedWallet = wallet.map(balance =>({
            balanceId: balance.balanceId,
            asset: balance.asset,
            freeBalance: Number(balance.freeBalance)/1000,
            lockedBalance: Number(balance.lockedBalance)/1000
        }))
        }

        if(wallet){
            return res.status(200).json({
                wallets: serializedWallet,
                profit: Number(profitQuery[0]?.total_profit>0?profitQuery[0]?.total_profit:0 || 0) / 1000
                })
        }else{
            return res.status(500).json({
                message:"Error fetching balance"
            })
        }

    }
    return res.status(500).json({
        message:"Error fetching balance"
    })
    
})

walletHandler.post("/addAmt",isAuthenticated,async (req:any,res:any)=>{
    try{
        let userId:string = req.session.user.userId
        let { amount,asset } = amountSchema.parse(req.body)
        

        amount = Math.round(amount*10**3);
        const credit = await client.$transaction(async (tx)=>{
            const wallet= await tx.balances.findUnique({
                where:{ userId_asset:{
                    userId:userId,
                    asset:asset
                } },
                select: { balanceId:true }

            })
            if(!wallet) throw new Error("Cannot access your wallet")
                await tx.ledger.create({
                data:{
                    userId:userId,
                    symbol: asset,
                    balanceId:wallet?.balanceId,
                    type:"CREDIT",
                    amount:amount,
                    reason:"DEPOSIT"

                }})
                const newbalance = await tx.balances.update({
                    where:{
                        userId_asset:{
                            userId:userId,
                            asset:asset,
                        }
                    },
                    data:{
                        freeBalance:{
                            increment: amount
                        }
                    },
                    select:{
                        freeBalance:true,
                        lockedBalance:true
                    }
                })
                return newbalance
        })
        if(credit ) return res.status(200).json({
            freeBalance:Number(credit.freeBalance),
            lockedBalance:Number(credit.lockedBalance)
        })



    }catch(error:any){
        if(error instanceof z.ZodError) return res.status(400).json({message:`Input error \n `,errors:error.errors})
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });

    }
})

walletHandler.post("/debit",isAuthenticated,async (req:any,res:any)=>{
    try{
        let userId = req.session.user.userId
        let { amount,asset } = amountSchema.parse(req.body)
        
        amount = Math.round(amount*10**3);
        const credit = await client.$transaction(async (tx)=>{
            const wallet= await tx.balances.findUnique({
                where:{ userId_asset:{
                    userId:userId,
                    asset: asset,
                } },
                select: { balanceId:true,freeBalance:true,lockedBalance:true }

            })
            
            if(!wallet) throw new Error("Cannot access your wallet")
            if(wallet?.freeBalance<amount) throw new Error("Not enought funds to debit")
                await tx.ledger.create({
                data:{
                    balanceId:wallet?.balanceId,
                    userId: userId,
                    type:"DEBIT",
                    amount:amount,
                    symbol:asset,
                    reason:"WITHDRAWAL"

                }})
                const newbalance = await tx.balances.update({
                    where:{
                        userId_asset:{
                            userId:userId,
                            asset: asset
                        }
                    },
                    data:{
                        freeBalance:{
                            decrement: amount
                        }
                    },
                    select:{
                        freeBalance:true,
                        lockedBalance:true
                    }
                })
                return newbalance
        })
        if(credit ) return res.status(200).json({
            freeBalance:credit.freeBalance,
            lockedBalance:credit.lockedBalance
        })



    }catch(error:any){
        if(error instanceof z.ZodError) return res.status(400).json({message:`Input error \n `,errors:error.errors})
        console.error(error);
        return res.status(500).json({ message: error });

    }
})

walletHandler.get("/transactions", isAuthenticated, async (req:any, res:any) => {
    const userId = req.session.user.userId;
    const wallet = await client.balances.findUnique({ where: { userId_asset:{userId,asset:'USDT' }} });
    
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
  
    let ledger = await client.ledger.findMany({
      where: { balanceId: wallet.balanceId },
      orderBy: { createdAt: "desc" },
      take: 50, 
    });
    
    const serializedLedger = ledger.map((ele)=>({
        ...ele,
        amount: Number(ele.amount)/1000

    }))
    console.log(serializedLedger)
  
    return res.json({ transactions: serializedLedger });
  });


walletHandler.get("/my_assets",isAuthenticated,async (req:any,res:any)=>{
    const userId = req.session.user.userId;
    console.log(userId)
    try {
        const mywallets = await client.balances.findMany({
            where:{
                userId: userId
            },
            select:{
                freeBalance: true,
                asset: true,
                lockedBalance: true
            }
        })
        console.log(mywallets)
        const wallets = mywallets.filter((ele)=>(ele.freeBalance>0 || ele.lockedBalance>0)&&(ele.asset!='USDT'))
        console.log(wallets)
        const serializedWallet = wallets.map((ele)=>({
            ...ele,
            freeBalance: Number(ele.freeBalance)/1000,
            lockedBalance: Number(ele.lockedBalance)/1000
        }))
        console.log(serializedWallet)
        return res.json(serializedWallet)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({data:"Something Went Wrong"})
    }
    
})