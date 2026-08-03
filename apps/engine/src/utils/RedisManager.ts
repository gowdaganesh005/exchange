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

    public async publishPrice(symbol:string,data:any){
        console.log(data)
        const now = Date.now();

        
        const prevPrice = await this.client.hGet("PRICE",symbol);
        const prev = prevPrice ? JSON.parse(prevPrice):null;

        const last = prev ? parseFloat(prev.price): null;
        const current = parseFloat(data);

        const tickData = last ? current - last :0;
        const tickDeltaprice = last ? (tickData / last )*100 : 0;

        let open24h = prev?.open24h ?? current;
        let openTimestamp = prev?.openTimestamp ?? now
        if(prev && now - prev.openTimestamp > 24*60*60*1000){
            open24h = current;
            openTimestamp = now;
        }

        const high24h = prev ? Math.max(prev.high24h ,current) : current;
        const low24h = prev ? Math.min(prev.low24h,current):current;

        let priceData= {
            price:data.toString(),
            Up: true,
            tickData: tickDeltaprice,
            open24h: open24h,
            openTimestamp: openTimestamp,
            high24h: high24h,
            low24h: low24h,

        }
        

        if(prevPrice && parseFloat(JSON.parse(prevPrice).price)>parseFloat(data)){
            priceData.Up=false;
        }
        
        await this.client.hSet("PRICE",symbol,JSON.stringify(priceData,(_,value)=> typeof value == 'bigint' ? value.toString() : value))
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