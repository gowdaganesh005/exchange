
import { OrderBook } from "../utils/orderbook.js"

import { workerData, parentPort } from "node:worker_threads"

const symbol = workerData.symbol
console.log(`Starting the order book for symbol ${symbol}`)

const orderbook = new OrderBook(symbol)


parentPort?.on("message",(data)=>{
    // console.log("parent Port   ",data)
    console.log(" Data type  :: ",data.type)
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
       console.log("Cancel Order in the Orderbook trade :: ",data.data)
       const response =  orderbook.cancelOrder(data.data)
       parentPort?.postMessage({type:"cancel",clientId:data.clientId,response})
    }
})   









