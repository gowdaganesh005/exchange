import express from "express"
import { OB_BTCUSDT } from "./trade/orderbook";
import { RedisManager } from "./utils/RedisManager";
import { OrderBook } from "./utils/orderbook";
import  { Worker } from "node:worker_threads"
import { randomUUID } from "node:crypto";

const redisClient  =  RedisManager.getInstance()

const allOrderBooks:Record<string,Worker | null> = {
    "BTCUSDT": null
}




const app = express()

app.use(express.json())


function getSnapShot(worker: Worker):Promise<any>{
    return new Promise((resolve,reject)=>{
        const id = Date.now()
        const handleMessage = (msg:any)=>{
            if(msg.type=='snapshot' && msg.id == id){
                worker.off('message',handleMessage)
                resolve(msg.data);
            }
        }
        worker.on("message",handleMessage);
        worker.postMessage({type: "snapshot",id})
        
    })
}

app.get("/snapshot",async (req:any,res:any)=>{
    const orderbooks = Object.keys(allOrderBooks)
    let snapshot:any=[]
    for(const obj of orderbooks){
        let curOrderBook = {}
        if(allOrderBooks[obj]){

        curOrderBook = await getSnapShot(allOrderBooks[obj])
        }
        // const curOrderBook = allOrderBooks[obj]?.getCurrentOrderBook()
        if(curOrderBook){
           snapshot.push(
            { 
                symbol:obj,
                ...curOrderBook
            }
            )
        }
     
    }

    return res.status(200).json({
        timestamp: Date.now(),
        snapshot
    })
})

function startAllOrderBooks(){
    const worker = new Worker("./dist/trade/orderbook.js")
    allOrderBooks["BTCUSDT"] = worker

    worker?.on('message',async (data)=>{
        if(data.type=="order")
        {
            const {clientId,response} = data
        
            if(response){
            await redisClient.publishToApi(clientId,response);
            }
        }else if(data.type=='depthUpdates'){
            const updateData = data.data
            console.log(updateData)
            await redisClient.publishStream(`depth.200ms.${data.symbol}`,updateData)
        }else if(data.type == 'bookticker'){
            const updatedData = data
            await redisClient.publishStream(`${data.type}.${data.symbol}`,updatedData)
        }else if(data.type == 'dbUpdate'){
            const dbUpdateData = data.data
            await redisClient.pushToDb(dbUpdateData)

        }

    })
}

async function  main(){

    
    while(true){
        const data =  await redisClient.getMessage()
        if(data){
            const {clientId,message} = JSON.parse(data)

            const required_worker = allOrderBooks[message.message.symbol]

            const orderId = randomUUID()

            const dbData = {
                type: "create",
                data:{
                    orderId,
                    symbol: message.message.symbol,
                    userId: message.message.userId,
                    side: message.message.side,
                    type: message.message.type,
                    quote_price: message.message.price,
                    quote_quantity: message.message.quantity,
                    status: "PENDING",
                    timestamp: Date.now(),
                    updatedAt: Date.now()
                }
            }

            redisClient.pushToDb(dbData)

            required_worker?.postMessage({type:"order" ,data:message.message,clientId,orderId})

            
            
            // const response = allOrderBooks[message.message.symbol].matchOrders(message.message)
           
        }
        
    }
}
startAllOrderBooks()
main()

app.listen(5000,()=>{
    console.log("Engine is running....")
})
