import { orderBody } from "@repo/zod/trading";
import { z } from "zod";
export type orderBody = z.infer<typeof orderBody>;
