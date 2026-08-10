import express from "express"
import { RedisManager } from "./utils/RedisManager";
import  { Worker, workerData } from "node:worker_threads"
import { randomUUID } from "node:crypto";

const redisClient  =  RedisManager.getInstance()

const SUPPORTED_SYMBOLS = [
    "BTC/USDT",
    "ETH/USDT",
    "SOL/USDT"
]

const allOrderBooks:Record<string,Worker | null> = {}

for ( const symbol of SUPPORTED_SYMBOLS){
    allOrderBooks[symbol] = null
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

// async function fetchTickers(){
//     const tickerData = await 
// }

function startAllOrderBooks(){
    for ( const symbol of SUPPORTED_SYMBOLS){
        const worker = new Worker("./dist/trade/orderbook.js",{ workerData: { symbol }})
    
    allOrderBooks[symbol] = worker;

    worker?.on('online',()=>{
        console.log(`Worker online for symbol ${symbol}`)
    })
    
    worker?.on('message',async (data)=>{
        // console.log(data)
        if(data.type=="order")
        {
            const {clientId,response} = data
            console.log("order pushed to api table to redis ")
            console.log(response)
        
            if(response){
            await redisClient.publishToApi(clientId,response);
            }
        }else if(data.type=='depthUpdates'){
            const updateData = data.data
            console.log(updateData)
            await redisClient.publishStream(`depth.200ms.${data.symbol}`,updateData)
        }else if(data.type == 'bookticker'){
            const updatedData = data
            await redisClient.publishPrice(`price.${data.symbol}`,data.tickerPrice)
            await redisClient.publishStream(`${data.type}.${data.symbol}`,updatedData)
            
        }else if(data.type == 'dbUpdate' ){
            console.log("dbUpdate :: ",data)
            const dbUpdateData = data.data
            await redisClient.pushToDb(dbUpdateData)

        }else if(data.type === "cancel"){
            const {clientId,response} = data
            if(response){
                await redisClient.publishToApi(clientId,response)
            }
        }

    });
}
}
async function  main(){

    
    while(true){
        const data =  await redisClient.getMessage()
        
        if(data){
            console.log("inside index engine",data)
            const {clientId,message} = JSON.parse(data)
            console.log("Incoming order symbol:", message.message.symbol);
            console.log("Known workers:", Object.keys(allOrderBooks));


            const required_worker = allOrderBooks[message.message.symbol]
            if(required_worker) console.log("worker is there")
            
            if(message.type=="CREATE_ORDER"){

            
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
            console.log("Sending order to worker:", {
                symbol:message.message.symbol,
                orderId,
                side: message.message.side,
                price: message.message.price,
                quantity: message.message.quantity
              });
              
            required_worker?.postMessage({type:"order" ,data:message.message,clientId,orderId})

            
            // if(message.message.symbol!=null){
            //     const response = allOrderBooks[message.message.symbol].matchOrders(message.message)

            // }
            }else if(message.type == "CANCEL_ORDER"){
                console.log("Cancel order called in index.ts")
                // console.log(required_worker)
                required_worker?.postMessage({type:"cancel",data:message.message,clientId})
            }
           
        }
        
    }
}
startAllOrderBooks()
main()

app.listen(5000,()=>{
    console.log("Engine is running....")
})
