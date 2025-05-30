import { webSocketStreamRequest }from "@repo/zod/websocket"
import z from 'zod'

export type wsStreamRequestType = z.infer<typeof webSocketStreamRequest>