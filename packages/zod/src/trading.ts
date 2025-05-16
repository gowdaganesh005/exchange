import { symbol, z } from 'zod';
import { sideEnum, typeEnum } from './enums.js'



export const orderBody = z.object({
    symbol: z.string(),
    side: sideEnum,
    type: typeEnum,
    quantity: z.number(),
    price: z.number(),
    timestamp: z.number(),
    userId: z.string()
    
})

export const OrderBookBody = z.object({
    
})