import { createClient, RedisClientType } from "redis";
import { Messagetype, orderBody } from "../types/trading.js";

const url = process.env.REDIS_URL;


export class RedisManager{
  private client: RedisClientType
  private publisher: RedisClientType
  private static instance: RedisManager

  private constructor(){
    this.client = createClient({url})
    this.client.connect()
    this.publisher = createClient({url});
    this.publisher.connect();
  }

  public static getInstance(){
    if(!this.instance){
      this.instance = new RedisManager();

    }
    return this.instance;
  }

  public sendAndAwait(message:Messagetype){
    return new Promise<any>((resolve)=>{
      const clientId = this.getRandomClientId()
      this.client.subscribe(clientId,(message)=>{
        this.client.unsubscribe(clientId);
        resolve(JSON.parse(message));
      });
      this.publisher.lPush("messages",JSON.stringify({clientId:clientId,message:message}))
      
    }) 
  }

  public getRandomClientId(){
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);

  }

}
