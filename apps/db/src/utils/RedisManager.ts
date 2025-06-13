import { createClient, RedisClientType } from "redis";

export class RedisManager{
    private static instance: RedisManager
    private subsciber: RedisClientType

    private constructor(){
        this.subsciber = createClient({url:process.env.REDIS_URL || ""})
        this.subsciber.connect()

    }
    public static getInstance(){
        if(RedisManager.instance==null){
            RedisManager.instance = new RedisManager()
        }
        return RedisManager.instance
    }

    public async fetchQueueItems(){
        try{
            const item = await this.subsciber.rPop("DB_QUEUE")
            return item;
        }catch(error){
            console.log(error)
            return null
        }
    }
}