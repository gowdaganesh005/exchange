import { client } from "@repo/db/client"
import { Router } from "express"

export const candles_route = Router()

candles_route.post("/candles",async(req:any,res:any)=>{
    const { symbol, time } = req.body 
    try {
        const candle_info = await client.$executeRaw`SELECT * from candles_${time} from trades WHERE symbol = ${symbol} ORDER by bucket DESC`;
        return res.json({data:candle_info}).status(200)
    } catch (error:any) {
        console.log(error.message)
        return res.json({error:error.message})
    } 

})
