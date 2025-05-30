import dotenv from "dotenv"
import axios from "axios"
import {  createClient, RedisClientType } from "redis"
import { snapshotZod } from "@repo/zod/snapshot"

dotenv.config();

const redis_client:RedisClientType = createClient({url:process.env.REDIS_URL}) 

/*
{
    timestamp: 95093458093,
    snapshot: [
        {
            symbol: BTC_USDT,
            bids: [],
            asks: [],
            lastUpdatedId: 54325,
            timestamp: 54524524    
        },
        {
            symbol: ETH_USDT,
            bids: [],
            asks: [],
            lastUpdatedId: 54325,
            timestamp: 54524524    
        } 
    ]
}

*/

async function main(){
    await redis_client.connect()
    console.log("Snapshot Server started...")
    
    setInterval(async()=>{
        const data:any = await axios.get(process.env.ENGINE || "").catch((reason:any)=>{
            console.log(reason)
        }) 
        console.log("requested data ...")
        console.log(data.data)


        try{
            if(data){
                const parsed_data = snapshotZod.parse(data.data)

                const pipeline =  redis_client.multi()

                for(const ob of parsed_data.snapshot){
                    const key: string = ob.symbol

                    const bids = ob.bids.map(ele=>[ele.price,ele.quantity] )
                    const asks = ob.asks.map(ele=>[ele.price,ele.quantity])
                    
                    pipeline.hSet("SNAPSHOT",key,JSON.stringify({
                        bids,
                        asks,
                        lastupdateId: ob.lastupdateId,
                        timestamp: ob.timestamp
                    }))
                } 

                const response = await pipeline.exec()
                console.log(response)
            }
        }catch(error:any){
            console.log(error)
        }

    
    },3000)

}

main()