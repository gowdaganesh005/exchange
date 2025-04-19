import { Router, Request, Response } from "express";
import { orderBody } from "@repo/zod/trading";

export const tradingRoute = Router();

tradingRoute.post("/order", async (req: any, res: any) => {
  const body = req.body;
  try {
    const parsedbody = orderBody.parse(body);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Invalid Body" });
  }
  return res.json({ message: "hello" });
});
