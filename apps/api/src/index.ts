import express from "express";
import { tradingRoute } from "./routes/trading.js";

const app = express();

app.use(express.json());

app.use("/api/v1",tradingRoute);

app.listen(3000);
