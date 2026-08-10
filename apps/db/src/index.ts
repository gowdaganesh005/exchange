import   { client } from "@repo/db/client"
import { RedisManager } from "./utils/RedisManager.js"


const redisclient = RedisManager.getInstance()




async function ProcessRequest(){
    while(true){
        let data:any = await redisclient.fetchQueueItems()
        
    
        
        if(data){
            
            console.log(data)
            data = JSON.parse(data)

            

            console.log(data)
            if(data && data.type=="create"){
                try{
                    data.data.timestamp= new Date(Number(data.data.timestamp));
            data.data.updatedAt = new Date(Number(data.data.updatedAt));
                    await client.orders.create({
                        data: data.data
                    })
                }catch(error:any){
                    console.log(error.message)
                }
            }else if(data.type == "tradeUpdate"){
                console.log(data)
                data.updates.forEach(async (ele:any) => {
                    try{
                        await client.orders.update({
                            where:{
                                orderId: ele.orderId
                            },
                            data:{
                                filled_price: ele.filled_price,
                                filled_quantity: { increment: ele.filled_quantity},
                                status: ele.status,
                                updatedAt:new Date( ele.updatedAt),
                            },
                            
                        })
                    }catch(error:any){
                        console.log(error)

                    }
                    
                });

                try {
                    await client.trades.create({
                        data:{
                            tradeId:data.tradeId,
                            price: data.updates[0].filled_price,
                            volume: data.updates[0].filled_quantity,
                            timestamp: new Date(data.updates[0].updatedAt),
                            symbol: data.symbol
                        }
                    })
                    console.log("added the trade data to the db")
                } catch (error:any) {
                    console.log(error.message)
                }
            }
            else if(data.type=="walletUpdate"){
                if(data.debit){
                try{
                    await client.$transaction(async (tx)=>{
                        //credit to the reciever balance 
                        const USDTcrediter = await tx.balances.update({
                            where:{
                                userId_asset:{
                                    userId:data.credit,
                                    asset: "USDT"
                                }
                                
                            },
                            data:{
                                freeBalance: {
                                    increment: data.amount
                                }
                            },
                           
                            select:{
                                balanceId: true,
                                freeBalance: true,
                                lockedBalance: true
                            }
                        })

                        // creditere ledger entry
                        await tx.ledger.create({
                            data:{
                                userId: data.credit,
                                balanceId: USDTcrediter.balanceId,
                                amount:data.amount,
                                type:"CREDIT",
                                symbol:"USDT",
                                reason:"TRADE_PROFIT"

                            }
                        })

                        // Asset transfering from the user
                        const asssetDebit = await tx.balances.upsert({
                            where:{
                                userId_asset:{
                                    userId: data.credit,
                                    asset: data.symbol
                                }
                            },
                            update:{
                                lockedBalance: { decrement:data.quantity }
                            },
                            create:{
                                userId:data.credit,
                                asset: data.symbol,
                            }
                        })

                        await tx.ledger.create({
                            data:{
                                userId: data.credit,
                                balanceId: asssetDebit.balanceId,
                                amount:data.quantity,
                                type:"DEBIT",
                                symbol:data.symbol,
                                reason:"ASSET_DEBIT"

                            }
                        })
                        // debit from the recivers balance
                        const USDTdebiter = await tx.balances.update({
                            where:{
                                userId_asset:{
                                    userId: data.debit,
                                    asset: "USDT"
                                }
                                
                            },
                            data:{
                                lockedBalance:{
                                    decrement: data.amount
                                }
                            },
                            select:{
                                balanceId: true,
                                freeBalance: true,
                                lockedBalance: true
                            }
                        })

                        // debiter ledger data to make the entry

                        await tx.ledger.create({
                            data:{
                                userId: data.debit,
                                balanceId:USDTdebiter.balanceId,
                                amount: data.amount,
                                symbol:"USDT",
                                type:"DEBIT",
                                reason:"TRADE_COST"
                            }
                        })

                        // Crediting the asset to the buyer

                        const assetCrediter = await tx.balances.upsert({
                            where:{
                                userId_asset:{
                                    userId:data.debit,
                                    asset: data.symbol
                                }
                            },
                            update:{
                                freeBalance:{
                                    increment: data.quantity,
                                }
                            },
                            create:{
                                userId:data.debit,
                                asset: data.symbol,
                                freeBalance: data.quantity
                            }
                        })

                        await tx.ledger.create({
                            data:{
                                userId: data.debit,
                                balanceId: assetCrediter.balanceId,
                                symbol: data.symbol,
                                type:"CREDIT",
                                amount: data.quantity,
                                reason: "ASSET_CREDIT"

                            }
                        })

                    })

                    
                }catch(error:any){
                    console.log("Error Updating Balance :: Transaction Failed :: ",error)
                }
            }
        }else{
            try{
                await client.$transaction(async (tx)=>{
                    await tx.balances.update({
                        where:{
                            userId_asset:{
                                userId: data.credit,
                                asset: data.symbol,
                            }
                        },
                        data:{
                            lockedBalance:{
                                decrement: data.amount,
                            },
                            freeBalance:{
                                increment: data.amount
                            }
                        }
                    })
                })
            }catch(error:any){
                console.log("ERROR: :: ",error)
            }
        }
        }

    }
}
ProcessRequest();