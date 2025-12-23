import { Router } from "express";
import { RedisManager } from "../utils/RedisManager.js";

export const dataStream = Router()

dataStream.post('/snapshot',async (req:any,res:any)=>{
    const { symbol } = req.body;

    console.log(" -- fetching snapshot --- ",symbol)

   const redisClient = RedisManager.getInstance()
   let data = await redisClient.getSnapshot(symbol)
   data = JSON.parse(data?.toString() || "")

   console.log(data)
   
   return res.status(200).json(data)
})

dataStream.post("/price",async(req:any,res:any)=>{
    console.log("---fetching the symbol price-----")
    const redisClient = RedisManager.getInstance()
    console.log(req.body)
    const { symbol } = req.body
    console.log(symbol)
    let data = await redisClient.getPrice(symbol)
    console.log(data)
    if(!data) return res.status(200).json(0)
    console.log(data)
    data = JSON.parse(data?.toString() || "")
    return res.status(200).json(data)
    
})

