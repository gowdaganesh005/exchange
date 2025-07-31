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
                    await client.orders.create({
                        data: data.data
                    })
                }catch(error:any){
                    console.log(error.message)
                }
            }else if(data.type == "update"){
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
                                updatedAt: ele.updatedAt,
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
                            timestamp: data.updates[0].updatedAt,
                            symbol: data.symbol
                        }
                    })
                    console.log("added the trade data to the db")
                } catch (error:any) {
                    console.log(error.message)
                }
            }
        }

    }
}
ProcessRequest();