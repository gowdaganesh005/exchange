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
/*
{ 
    method: "SUBSCRIBE"
    id: 1,
    params: [ "bookticker.SHFL_USDC" ]
}

*/

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