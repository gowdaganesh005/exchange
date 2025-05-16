import { orderBody } from "@repo/zod/trading";
import { z } from "zod";

export type orderBody = z.infer<typeof orderBody>;

export const CREATE_ORDER = 'CREATE_ORDER'

export const CANCEL_ORDER = 'CANCEL_ORDER'

export type Messagetype = {
    type: typeof CREATE_ORDER
    message: {
        symbol: string,
        price: number,
        quantity: number,
        side: 'BUY' | 'SELL',
        userId: string,
        type: 'LIMIT' | 'MARKET',
        timestamp: number

    }
} | {
    type: typeof CANCEL_ORDER
    message: {
        symbol: string,
        orderId: string
    }

}
