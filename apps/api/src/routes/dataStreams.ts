import { Router } from "express";
import { RedisManager } from "../utils/RedisManager.js";
import { client } from "@repo/db/client";
import { isAuthenticated } from "../middleware/authentication.js";

export const dataStream = Router()

dataStream.post('/snapshot',async (req:any,res:any)=>{
    const { symbol } = req.body;


   const redisClient = RedisManager.getInstance()
   let data = await redisClient.getSnapshot(symbol)
   data = JSON.parse(data?.toString() || "")
   console.log(data)

   
   return res.status(200).json(data)
})

dataStream.get("/allPrice",async( req:any, res: any)=>{
    const redisClient = RedisManager.getInstance()

    
    const symbols = await client.symbol.findMany({
        select:{
            name: true,
            img: true,
            code: true,
        }
    }
    )

    console.log("Symbols:",symbols)

    const returnData = await Promise.all(
        symbols.map(async (value)=>{
        const priceData = await redisClient.getPrice(value.name)
        // console.log("Price Data", priceData)
        const prevdayClose = await client.$queryRaw<{close: number; bucket: Date }[]>`
            SELECT  close , bucket 
            FROM candle_1_day
            WHERE symbol = ${value.name}
            AND bucket < date_trunc('day',NOW())
            ORDER BY bucket DESC
            LIMIT 1
        `;
        const price = priceData?JSON.parse(priceData || "").price: 0;
        const close = prevdayClose.length > 0 ? prevdayClose[0].close:0
        console.log("prevdayClose ",prevdayClose)
        return({
            symbol: value.name,
            price: price,
            prevdayClose: close,
            img: value.img,
            code: value.code,
        })
    }))
    

    console.log(returnData);

    return res.json(returnData).status(200);



    
})

dataStream.post("/price",async(req:any,res:any)=>{
    const redisClient = RedisManager.getInstance()
    const { symbol } = req.body
    let data = await redisClient.getPrice(symbol)
    if(!data) return res.status(200).json(0)
    data = JSON.parse(data?.toString() || "")
    return res.status(200).json(data)
    
})

dataStream.post("/prevday-close",async(req:any,res:any)=>{
    const { symbol } = req.body
    const data = await client.$queryRaw<{close: number; bucket: Date }[]>`
        SELECT  close , bucket 
        FROM candle_1_day
        WHERE symbol = ${symbol}
        AND bucket < date_trunc('day',NOW())
        ORDER BY bucket DESC
        LIMIT 1
    `;

    console.log(data)

    if(!data.length){
        return res.status(404).json({error: "No data found for the symbol"});
    }
    return res.json({
        symbol,
        prevDayClose: data[0].close,
        date: data[0].bucket
    });
})


dataStream.get("/orders",isAuthenticated,async(req:any,res:any)=>{
    const userId = req.session.user.userId;
    try {
        const orders = await client.orders.findMany({
            where:{
                userId: userId
            },
            select:{
                orderId:true,
                symbol: true,
                quote_price: true,
                quote_quantity: true,
                status: true,
                side: true,
                timestamp: true,
            },
            orderBy:{
                timestamp: "desc"
            }

        })
        return res.json(orders)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something is Wrong on Our Side"})
    }
})

dataStream.get("/tickers",async(req:any,res:any)=>{
    try{

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Something is Wrong on Our Side"})
    }
    const tickerData = await client.tickers.findMany();
    console.log(tickerData)
    
})

