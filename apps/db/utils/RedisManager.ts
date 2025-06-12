import { createClient, RedisClientType } from "redis";

class RedisManager{
    private static instance: RedisManager
    private subsciber: RedisClientType

    private constructor(){
        this.subsciber = createClient(process.env.REDIS_URL)

    }
    public getInstance(){
        if(RedisManager.instance==null){
            RedisManager.instance = new RedisManager()
        }
        return RedisManager.instance
    }

    public fetchQueueItems(){
        const
    }
}