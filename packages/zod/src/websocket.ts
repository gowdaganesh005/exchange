import z, { bigint } from 'zod'
import { wsMethod } from './enums'

export const webSocketStreamRequest = z.object({
    method: wsMethod,
    params: z.array(z.string()),
    id: z.number()
})

const basedata= z.object({
    T: z.bigint(),
    e: z.literal("depth"),
    i: z.bigint(),
    s: z.string(),
    a: z.array(z.array(z.number())),
    b: z.array(z.array(z.number())),

})
   


export const engineDepthUpdates = z.object({
   data: basedata,
})

export const wsDepthUpdates = engineDepthUpdates.extend({
   data: basedata.extend({
    E:z.bigint(),
    U: z.bigint(),
    u: z.bigint()
    })
    .omit({i :true}) ,
   stream: z.string()
})