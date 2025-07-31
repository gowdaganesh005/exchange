import express from "express";
import { tradingRoute } from "./routes/trading.js";
import { dataStream } from "./routes/dataStreams.js";
import { candles_route } from "./routes/candles.js";
import cors from 'cors'

const app = express();
app.use(cors({
    origin: '*'
}
))

app.use(express.json());

app.use("/api/v1",tradingRoute);
app.use("/api/v1",dataStream);
app.use("/api/v1",candles_route)

app.listen(3000);
