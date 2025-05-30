import express from "express";
import { tradingRoute } from "./routes/trading.js";
import { dataStream } from "./routes/dataStreams.js";

const app = express();

app.use(express.json());

app.use("/api/v1",tradingRoute);
app.use("/api/v1",dataStream)

app.listen(3000);
