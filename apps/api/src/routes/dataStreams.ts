import { Router } from "express";
import { RedisManager } from "../utils/RedisManager.js";

export const dataStream = Router()

dataStream.get('/snapshot/:symbol',async (req:any,res:any)=>{
    console.log(req.params.symbol)

   const redisClient = RedisManager.getInstance()
   let data = await redisClient.getSnapshot(req.params.symbol)
   data = JSON.parse(data?.toString() || "")

   console.log(data)
   
   return res.status(200).json(data)
})

dataStream.post("/price",async(req:any,res:any)=>{
    console.log("---fetching the symbol price-----")
    const redisClient = RedisManager.getInstance()
    const { symbol } = req.body
    let data = await redisClient.getPrice(symbol)
    console.log(data)
    if(!data) return res.status(200).json(0)
    console.log(data)
    data = JSON.parse(data?.toString() || "")
    return res.status(200).json(data)
    
})

