import express from "express";
import { tradingRoute } from "./routes/trading.js";
import { dataStream } from "./routes/dataStreams.js";
import { candles_route } from "./routes/candles.js";
import cors from 'cors';
import session from "express-session";
import { createClient } from "redis";
import { authHandler } from "./routes/auth.js";
import { walletHandler } from "./routes/wallet.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    
}));

app.options("*", cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
  

app.use(express.json());

const redis_client = createClient({ url: process.env.REDIS_URL });

async function connect_To_Store() {
    await redis_client.connect();
}
connect_To_Store();

class RedisSessionStore extends session.Store {
    constructor(private client: any) {
        super();
    }

    async get(sid: string, callback: (err?: any, session?: any) => void) {
        try {
            const data = await this.client.get(`sess:${sid}`);
            callback(null, data ? JSON.parse(data) : null);
        } catch (err) {
            callback(err);
        }
    }

    async set(sid: string, sessionData: any, callback?: (err?: any) => void) {
        try {
            const ttl = sessionData.cookie?.maxAge ? Math.floor(sessionData.cookie.maxAge / 1000) : 86400;
            await this.client.set(`sess:${sid}`, JSON.stringify(sessionData), { EX: ttl });
            callback?.();
        } catch (err) {
            callback?.(err);
        }
    }

    async destroy(sid: string, callback?: (err?: any) => void) {
        try {
            await this.client.del(`sess:${sid}`);
            callback?.();
        } catch (err) {
            callback?.(err);
        }
    }

    async touch(sid: string, sessionData: any, callback?: (err?: any) => void) {
        try {
            const ttl = sessionData.cookie?.maxAge ? Math.floor(sessionData.cookie.maxAge / 1000) : 86400;
            await this.client.expire(`sess:${sid}`, ttl);
            callback?.();
        } catch (err) {
            callback?.(err);
        }
    }
}

app.use(session({
    store: new RedisSessionStore(redis_client),
    secret: "12344444",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'lax'
    }
}));

app.use("/api/v1", tradingRoute);
app.use("/api/v1", dataStream);
app.use("/api/v1", candles_route);
app.use("/api/v1", authHandler);
app.use("/api/v1",walletHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});