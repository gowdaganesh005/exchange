import { orderBody } from "@repo/zod/trading"
import { engineDepthUpdates } from "@repo/zod/websocket"
import { z } from 'zod'

export interface orderBook{
     buys:{
        price: number,
        quantity: number,
        userId: string,
        timestamp: number
     }[],
     sells:{
        price: number,
        quantity: number,
        userId: string,
        timestamp: number
     }[]
}

export interface consolidatedBook{
   buys:{
      price: number,
      quantity:  number,

   }[],
   sells:{
      price: number,
      quantity: number
   }[]
}

export type orderBody = z.infer< typeof orderBody>

export interface fill{
   price: number,
   quantity: number
   timestamp: number
}

export type engineDepthUpdates= z.infer<typeof engineDepthUpdates>

