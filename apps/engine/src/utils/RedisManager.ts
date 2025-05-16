import { createClient, RedisClientType } from 'redis'

export class RedisManager{
    private client:RedisClientType;
    private static instance : RedisManager

    private constructor(){
        this.client = createClient()
        this.client.connect()

    }

    public static getInstance(){
        if(!this.instance){
            this.instance = new RedisManager()
        }
        return this.instance
    }

    public  async getMessage(){
        return  await this.client.rPop('messages')
    }

    public async publish(clientId : string,data:{executedQuantity: number,fills:{ price: number, quantity: number}[]}){
        await this.client.publish(clientId,JSON.stringify(data))
        
    }

    

}