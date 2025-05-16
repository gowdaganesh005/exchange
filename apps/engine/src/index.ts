
import { OB_BTCUSDT } from "./trade/orderbook";
import { RedisManager } from "./utils/RedisManager";

const redisClient  =  RedisManager.getInstance()

const allOrderBooks:any = {
    "BTCUSDT": OB_BTCUSDT
}

async function  main(){
    
    while(true){
        const data =  await redisClient.getMessage()
        if(data){
            const {clientId,message} = JSON.parse(data)
            console.log(clientId)
            console.log(data)
            const response = allOrderBooks[message.message.symbol].matchOrders(message.message)
            console.log(allOrderBooks[message.message.symbol])
            console.log(message)
            console.log(response)
            if(response){
                redisClient.publish(clientId,response)
            }
            
            
            
        }
        
    }
}

main()
