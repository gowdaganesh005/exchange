import { client } from "@repo/db/client"
import { Router } from "express"

export const candles_route = Router()

candles_route.post("/candles",async(req:any,res:any)=>{
    const { symbol, time } = req.body 
    try {
        const tableName = `candle_${time}`
        const query = `SELECT bucket as time ,open,high,low,close from  ${tableName} WHERE symbol = $1 ORDER by bucket DESC`
        let candle_info:any = await client.$queryRawUnsafe(query,symbol)
        console.log("Query Output :: " ,candle_info)
        candle_info.map((ele:any)=>{ 
            ele.time = Math.floor(ele.time.getTime()/1000)

        })
        candle_info.sort((a:any,b:any)=>a.time-b.time)
        candle_info  = candle_info.map((e:any)=>({
            time: e.time,
            open: e.open/1000,
            high: e.high/1000,
            low: e.low/1000,
            close: e.close/1000
        }))
        return res.json({data:candle_info}).status(200)
    } catch (error:any) {
        console.log(error.message)
        return res.json({error:error.message})
    } 

})
