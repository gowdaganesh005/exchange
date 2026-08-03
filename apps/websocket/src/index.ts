import express from 'express'
import WebSocket , { WebSocketServer } from "ws"
import http from 'http'
import { wsStreamRequestType } from './types'
import { webSocketStreamRequest } from '@repo/zod/websocket'
import { RedisManager } from './utils/RedisManager'

const app = express()

const server = http.createServer(app) 

const wsServer = new WebSocketServer({ server })
const redisClient = RedisManager.getInstance()

let candles= new Map<string,Map<string,{time:number,open:number,close:number,low:number,high:number}>>();
let timeinSeconds:Record<string,number>={
    "1m":60,
    "5m":5*60,
    "10m":10*60,
    "30m":30*60,
    "1h":60*60,
    "1d":24*60*60
}
/*

{ 
    method: "SUBSCRIBE"
    id: 1,
    params: [ "bookticker.SHFL_USDC" ]
}

*/

function getBucketStart(timestamp:number,intervalSeconds:number){
   return  Math.floor(timestamp/(intervalSeconds*1000))*(intervalSeconds*1000)
}

let subscriptionMap = new Map()
let clientMap :Map<string,Set<WebSocket>> = new Map()

wsServer.on("connection",(ws:WebSocket)=>{
    console.log("websocket client connected")
    ws.on("message",(data)=>{
        try{
            const parseddata = webSocketStreamRequest.parse(JSON.parse(data.toString()))
            if(parseddata.method=="SUBSCRIBE"){

                const params = parseddata.params[0]
                if(!clientMap.get(params)){
                    clientMap.set(params,new Set())
                    clientMap.get(params)?.add(ws)
                }else{
                    clientMap.get(params)?.add(ws)
                }
                console.log(subscriptionMap.get(params))
                if(!subscriptionMap.get(params)){
                    subscriptionMap.set(params,true)

                    
                    redisClient.subscribeTo(params,(data: string)=>{
                        console.log(data)
                        console.log("data came to pubsub")
                        console.log(params)

                        // { 
                        //     method: "SUBSCRIBE"
                        //     id: 1,
                        //     params: [ "kline.1m.SHFL_USDC" ]
                        // }
                        if (params.startsWith('bookticker.') ) {
                            const [_,symbol] = params.split('.')
                            console.log("Inside the kline part ")
                            let newdata = JSON.parse(data)

                            for( const [interval,intervalSec] of Object.entries(timeinSeconds)){
                                const klineStream = `kline.${interval}.${symbol}`
                                if(clientMap.has(klineStream) && clientMap.get(klineStream)){
                                    const bucketStart = getBucketStart(newdata.timestamp, intervalSec)
                                    if (!candles.has(symbol)) candles.set(symbol, new Map())
                                    const symbolMap:any = candles.get(symbol)

                                    if (!symbolMap.has(interval)) symbolMap.set(interval, new Map());
                                    const intervalMap = symbolMap.get(interval);
                                     
                                    let candle = intervalMap.get(bucketStart)
                                    if (!candle) {
                                    // Create a new candle for this bucket
                                    candle = {
                                        open: newdata.tickerPrice,
                                        high: newdata.tickerPrice,
                                        low: newdata.tickerPrice,
                                        close: newdata.tickerPrice,
                                        time: Math.floor(bucketStart/1000)
                                    }
                                    } else {
                                    // Update existing candle
                                    candle.high = Math.max(candle.high, newdata.tickerPrice)
                                    candle.low = Math.min(candle.low, newdata.tickerPrice)
                                    candle.close = newdata.tickerPrice
                                    }

                                    intervalMap.set(bucketStart, candle)

                                    clientMap.get(klineStream)?.forEach(socket=>{
                                        socket.send(JSON.stringify({
                                            data:candle,
                                            stream:params
                                        }))
                                    })
                                }
                            }
                          }
                          
                          
                        clientMap.get(params)?.forEach(socket=>{
                            
                            socket.send(JSON.stringify({
                                data,
                                stream: params
                            }))
                        })
                    })
                
                }
               

            }
            else if( parseddata.method == "UNSUBSCRIBE"){
                const params = parseddata.params[0]
                clientMap.get(params)?.delete(ws)
                if(clientMap.get(params)?.size==0){
                    subscriptionMap.delete(params)
                    redisClient.unsubscribeTo(params)
                }
            }
            
            
        }catch(error:any){
            console.log(error.message)
        }
        }

        
    )
   
    
})

server.listen(8000)