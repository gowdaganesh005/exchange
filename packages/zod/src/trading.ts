import {  z } from 'zod';
import { sideEnum, typeEnum } from './enums.js'
import { symbol } from 'zod/v4';



export const orderBodySchema = z.object({
    symbol: z.string(),
    side: sideEnum,
    type: typeEnum,
    quantity: z.number(),
    price: z.number(),
    timestamp: z.number(),    
})

export const cancelOrderSchema = z.object({
    orderId: z.string(),
    symbol: z.string(),
    side: z.string(),
})

