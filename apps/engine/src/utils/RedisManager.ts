import { createClient, RedisClientType } from 'redis'
import { fill } from '../types/orderbook.types';

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

    public async publishToApi(clientId : string,data:{executedQuantity: number,fills:fill[]}){
        await this.client.publish(clientId,JSON.stringify(data))
        
    }

    public async publishStream(stream:string,data:any){
        console.log(data)
        await this.client.publish(stream,JSON.stringify(data,(_,value)=> typeof value == 'bigint' ? value.toString() : value))
    }

    public async pushToDb(data:any){
        try{
            await this.client.lPush("DB_QUEUE",JSON.stringify(data))
        }catch(error:any){
            console.log(error)
        }
    }

    

}