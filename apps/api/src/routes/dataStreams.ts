import { Router } from "express";
import { RedisManager } from "../utils/RedisManager.js";

export const dataStream = Router()

dataStream.post('/snapshot',async (req:any,res:any)=>{
    const { symbol } = req.body;


   const redisClient = RedisManager.getInstance()
   let data = await redisClient.getSnapshot(symbol)
   data = JSON.parse(data?.toString() || "")

   
   return res.status(200).json(data)
})

dataStream.post("/price",async(req:any,res:any)=>{
    const redisClient = RedisManager.getInstance()
    const { symbol } = req.body
    let data = await redisClient.getPrice(symbol)
    if(!data) return res.status(200).json(0)
    data = JSON.parse(data?.toString() || "")
    return res.status(200).json(data)
    
})

