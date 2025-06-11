import { Router, Request, Response } from "express";
import { orderBody } from "@repo/zod/trading";
import { RedisManager } from "../utils/RedisManager.js";
import { CREATE_ORDER } from "../types/trading.js";

export const tradingRoute = Router();

tradingRoute.post("/order", async (req: any, res: any) => {
  const body = req.body;
  console.log(body)
  try {
    const { symbol,price,quantity,side,type,timestamp,userId} = orderBody.parse(body);
    
    const response = await RedisManager.getInstance().sendAndAwait({
      type:CREATE_ORDER,
      message:{
        price,quantity,symbol,side,userId,type,timestamp
      } 
    })
    console.log(response)
    return res.json(response)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Invalid Body" });
  }


});
