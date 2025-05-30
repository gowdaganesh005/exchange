
import { OrderBook } from "../utils/orderbook"

import { parentPort } from "node:worker_threads"

export const OB_BTCUSDT = new OrderBook("BTCUSDT")

parentPort?.on("message",(data)=>{
    if(data.type == "snapshot"){
        const snapshot = OB_BTCUSDT.getCurrentOrderBook()
        parentPort?.postMessage({type:"snapshot",data: snapshot,id:data.id})

    }
    if(data.type == "order"){
        const response = OB_BTCUSDT.matchOrders(data.data)
        if(response){
            parentPort?.postMessage({clientId:data.clientId,response})
        }
    }
})









