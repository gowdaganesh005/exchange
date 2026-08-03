import {  z } from 'zod';
import { sideEnum, typeEnum } from './enums.js'



export const orderBodySchema = z.object({
    symbol: z.string(),
    side: sideEnum,
    type: typeEnum,
    quantity: z.number(),
    price: z.number(),
    timestamp: z.number(),    
})

