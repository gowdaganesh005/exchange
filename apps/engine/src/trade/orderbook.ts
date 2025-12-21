
import { OrderBook } from "../utils/orderbook"

import { parentPort } from "node:worker_threads"

export const OB_BTCUSDT = new OrderBook("BTC/USDT")

console.log("🔥 WORKER TS FILE LOADED 🔥");

parentPort?.on("message",(data)=>{
    console.log("parent Port   ",data)
    if(data.type == "snapshot"){
        const snapshot = OB_BTCUSDT.getCurrentOrderBook()
        parentPort?.postMessage({type:"snapshot",data: snapshot,id:data.id})

    }
    if(data.type == "order"){
        const response = OB_BTCUSDT.matchOrders(data.data,data.orderId)
        if(response){
            parentPort?.postMessage({type:"order",clientId:data.clientId,response})
        }
    }
    if(data.type == "cancel"){
       const response =  OB_BTCUSDT.cancelOrder(data.data)
       parentPort?.postMessage({type:"cancel",data:response})
    }
})   









