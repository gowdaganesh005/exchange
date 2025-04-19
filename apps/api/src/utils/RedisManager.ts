import { createClient, CLient, RedisClientType } from "redis";
import { orderBody } from "../types/trading.js";

const url = process.env.REDIS_URL;


class RedisManager{
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

}
