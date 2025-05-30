import { z } from "zod"

export const snapshotZod = z.object({
    timestamp: z.number(),
    snapshot:z.array(z.object({
        symbol: z.string(),
        timestamp: z.number(),
        lastupdateId: z.number(),
        bids: z.array(z.object({ 
            price: z.number(),
            quantity: z.number()
        }
        )),
        asks: z.array(z.object({ 
            price: z.number(),
            quantity: z.number()
        }
        ))
        }))
})
