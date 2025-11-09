import { Router } from "express";
import { isAuthenticated } from "../middleware/authentication.js";
import { client } from "@repo/db/client";
import { z,amountSchema } from "@repo/zod/wallet";

export const walletHandler = Router();

walletHandler.get("/balance",isAuthenticated,async (req:any,res:any)=>{
    const userId = req.session.user.userId
    if(userId){
        const wallet = await client.wallet.findFirst({
            where:{
                userId:userId
            }
        })
        if(wallet){
            return res.status(200).json({data:{
                freebalance:wallet.freeBalance,
                lockedbalance: wallet.lockedBalance,
                walletId: wallet.walletId
            },
                message:"Fetched Balance"})
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
        let userId = req.session.user.userId
        let { amount } = amountSchema.parse(req.body)
        

        amount = Math.round(amount*10**3);
        const credit = await client.$transaction(async (tx)=>{
            const wallet= await tx.wallet.findUnique({
                where:{ userId:userId },
                select: { walletId:true }

            })
            if(!wallet) throw new Error("Cannot access your wallet")
                await tx.ledger.create({
                data:{
                    walletId:wallet?.walletId,
                    reason:"credit to wallet",
                    type:"CREDIT",
                    amount:amount

                }})
                const newbalance = await tx.wallet.update({
                    where:{
                        userId:userId
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
            freeBalance:credit.freeBalance,
            lockedBalance:credit.lockedBalance
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
        let { amount } = amountSchema.parse(req.body)
        
        amount = Math.round(amount*10**3);
        const credit = await client.$transaction(async (tx)=>{
            const wallet= await tx.wallet.findUnique({
                where:{ userId:userId },
                select: { walletId:true,freeBalance:true }

            })
            
            if(!wallet) throw new Error("Cannot access your wallet")
            if(wallet?.freeBalance<amount) throw new Error("Not enought funds to debit")
                await tx.ledger.create({
                data:{
                    walletId:wallet?.walletId,
                    reason:"debit from wallet",
                    type:"DEBIT",
                    amount:amount

                }})
                const newbalance = await tx.wallet.update({
                    where:{
                        userId:userId
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
    const wallet = await client.wallet.findUnique({ where: { userId } });
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
  
    const ledger = await client.ledger.findMany({
      where: { walletId: wallet.walletId },
      orderBy: { createdAt: "desc" },
      take: 50, 
    });
  
    return res.json({ transactions: ledger });
  });
  