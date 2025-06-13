import   { client } from "@repo/db/client"
import { RedisManager } from "./utils/RedisManager.js"


const redisclient = RedisManager.getInstance()




async function ProcessRequest(){
    while(true){
        let data:any = await redisclient.fetchQueueItems()
        
        if(data){
            data = JSON.parse(data)
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
                                updatedAt: ele.updateAt,
                            },
                            
                        })
                    }catch(error:any){
                        console.log(error)

                    }
                    
                });
            }
        }

    }
}
ProcessRequest();