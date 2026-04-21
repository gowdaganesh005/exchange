
import { OrderBook } from "../utils/orderbook"

import { workerData, parentPort } from "node:worker_threads"

const symbol = workerData.symbol
console.log(`Starging the order book for symbol ${symbol}`)

const orderbook = new OrderBook(symbol)


parentPort?.on("message",(data)=>{
    console.log("parent Port   ",data)
    if(data.type == "snapshot"){
        const snapshot = orderbook.getCurrentOrderBook()
        parentPort?.postMessage({type:"snapshot",data: snapshot,id:data.id})

    }
    if(data.type == "order"){
        const response = orderbook.matchOrders(data.data,data.orderId)
        if(response){
            parentPort?.postMessage({type:"order",clientId:data.clientId,response})
        }
    }
    if(data.type == "cancel"){
       const response =  orderbook.cancelOrder(data.data)
       parentPort?.postMessage({type:"cancel",data:response})
    }
})   









