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
wsServer.on("connection",(ws:WebSocket)=>{
    ws.on("message",(data)=>{
        try{
            const parseddata = webSocketStreamRequest.parse(JSON.parse(data.toString()))
            if(parseddata.method=="SUBSCRIBE"){
                const params = parseddata.params[0].split('.')
                if(params[0]=="depth"){
                    const entity = "depth"
                    const symbol = params[2]
                }else{
                    const entity = params[0]
                    const symbol = params[1]
                }

              

               redisClient.subscribeTo(params[0],(data: string)=>{
                ws.emit('stream',params[0])
               })

            }
            console.log(data.toString())
            
        }catch(error:any){
            console.log(error)
        }
        }
        
    )
   
    
})

server.listen(8000)