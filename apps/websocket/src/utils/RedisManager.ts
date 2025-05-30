import { createClient, RedisClientType } from "redis"

const redis_url = process.env.REDIS_URL || "redis://localhost:6379"

export class RedisManager{
    private client:RedisClientType;
    private static instance: RedisManager

    private constructor(){
       this.client = createClient({url:redis_url}) 
       this.client.connect()

    }

    public static getInstance(){
        if(!RedisManager.instance){
            RedisManager.instance = new RedisManager()
        }
        return RedisManager.instance
    }

    public async subscribeTo(resource: string, callback: any){
        try {
            await this.client.subscribe(resource,callback)
        } catch (error:any) {
            console.log(error)
        }
    }

    public async unsubscribeTo(resource: string){
        try{
            await this.client.unsubscribe(resource)
        }catch(error:any){
            console.log(error)
        }
    }


}