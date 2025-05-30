import { consolidatedBook, orderBook, fill, engineDepthUpdates } from "../types/orderbook.types";
import { orderBody } from "../types/orderbook.types";
import { parentPort } from "node:worker_threads"
export class OrderBook{
    private orderBook : orderBook
    private consolidatedBook: consolidatedBook
    private symbol: string
    private eventQueue: Array<engineDepthUpdates>

    private updateId = 0;

    public constructor(symbol: string){
        this.orderBook = {
            buys : [],
            sells: []
        }

        this.consolidatedBook = {
            buys: [],
            sells: []
        }
        this.symbol = symbol
        this.eventQueue = []
    }

    public matchOrders({symbol, type, side, price,quantity,userId,timestamp,}:orderBody){
        console.log(timestamp ,"inside matching engine")
        
        if(symbol != this.symbol){
            return null
        }
        this.updateId++;
        

        let filledQuantity:number = 0;
    
        let fills :fill[] = [];

        if(side == "BUY"){
            while(quantity>0 && this.orderBook.sells.length > 0 && price >= this.orderBook.sells[0].price ){
                if(quantity < this.orderBook.sells[0].quantity){
                    filledQuantity += quantity
                    this.orderBook.sells[0].quantity -= quantity 
                    this.consolidatedBook.sells[0].quantity -= quantity
                    fills.push({
                        price:this.orderBook.sells[0].price , 
                        quantity: quantity , 
                        timestamp: Date.now()
                    })
                    quantity = 0
                }
                else{
                    let curQuantity = this.orderBook.sells[0].quantity
                    this.orderBook.sells[0].quantity = 0
                    this.consolidatedBook.sells[0].quantity -= curQuantity
                    quantity -= curQuantity
                    filledQuantity += curQuantity
                    fills.push({
                        price:this.orderBook.sells[0].price , 
                        quantity: curQuantity , 
                        timestamp: Date.now()
                    })
                    this.orderBook.sells.shift()
                    if(this.consolidatedBook.sells[0].quantity == 0){
                        this.consolidatedBook.sells.shift()
                    }
                    

                }

                
            }
            console.log(fills)
            if(quantity > 0){

                this.orderBook.buys.push({price,quantity,timestamp,userId})
                this.orderBook.buys.sort((a,b)=>{ 
                    if(a.price == b.price ){
                        return a.timestamp - b.timestamp
                    }
                    return b.price - a.price

                })

                const value = this.consolidatedBook.buys.findIndex((a)=>a.price == price)
                if(value != -1){
                    this.consolidatedBook.buys[value].quantity += quantity
                }else{
                    this.consolidatedBook.buys.push({price,quantity})
                }

                this.consolidatedBook.buys.sort((a,b)=>b.price - a.price)

                }

                console.log(this.orderBook," this is a orderbook \n " , this.consolidatedBook ," this is a consolidated book \n")

                this.eventQueue.push({
                    data:{
                        T: BigInt(Date.now()),
                        a: [ [ price,quantity ] ],
                        e: "depth",
                        i: BigInt(this.updateId),
                        s: this.symbol,
                        b: []
                    }
                    
                })
                
                parentPort?.postMessage({
                    T: BigInt(Date.now()),
                    a: [ [ price,quantity ] ],
                    e: "depth",
                    i: BigInt(this.updateId),
                    s: this.symbol,
                    b: []
                })




                return {
                    executedQuantity:filledQuantity,
                    fills
                }
        }
        else if(side == "SELL"){
            while(quantity>0 && this.orderBook.buys.length>0 && price <= this.orderBook.buys[0].price ){
                if(quantity < this.orderBook.buys[0].quantity){
                    filledQuantity += quantity
                    this.orderBook.buys[0].quantity -= quantity 
                    this.consolidatedBook.buys[0].quantity -= quantity
                    fills.push({
                        price:this.orderBook.buys[0].price , 
                        quantity: quantity , 
                        timestamp: Date.now()
                    })
                    quantity = 0
                }
                else{
                    let curQuantity = this.orderBook.buys[0].quantity
                    this.orderBook.buys[0].quantity = 0
                    this.consolidatedBook.buys[0].quantity -= curQuantity
                    quantity -= curQuantity
                    filledQuantity += curQuantity
                    fills.push({
                        price:this.orderBook.buys[0].price , 
                        quantity: curQuantity , 
                        timestamp: Date.now()
                    })

                    this.orderBook.buys.shift()
                    if(this.consolidatedBook.buys[0].quantity == 0){
                        this.consolidatedBook.buys.shift()
                    }
                   
                }

                
            }
            console.log(fills)
            if(quantity > 0){

                this.orderBook.sells.push({price,quantity,timestamp,userId})
                this.orderBook.sells.sort((a,b)=>{ 
                    if(a.price == b.price ){
                        return a.timestamp - b.timestamp
                    }
                    return a.price - b.price

                })

                const value = this.consolidatedBook.sells.findIndex((a)=>a.price == price)
                if(value != -1){
                    this.consolidatedBook.sells[value].quantity += quantity
                }else{
                    this.consolidatedBook.sells.push({price,quantity})
                }

                this.consolidatedBook.sells.sort((a,b)=>a.price - b.price)

                }

                // this.eventQueue.push({
                //     data:{
                //         T: BigInt(Date.now()),
                //         b: [ [ price,quantity ] ],
                //         e: "depth",
                //         i: BigInt(this.updateId),
                //         s: this.symbol,
                //         a: []
                //     }
                    
                // })
                parentPort?.postMessage({
                    T: BigInt(Date.now()),
                    a: [ [ price,quantity ] ],
                    e: "depth",
                    i: BigInt(this.updateId),
                    s: this.symbol,
                    b: []
                })



                return {
                    executedQuantity:filledQuantity,
                    fills
                }
            }
        }

        /**
         * getCurrentOrderBook
         */
        public getCurrentOrderBook() {
            return {
                bids: this.consolidatedBook.buys,
                asks: this.consolidatedBook.sells,
                timestamp: Date.now(),
                lastupdateId: this.updateId
            } 
        }

        // Giving access for the queue elements to the outer process to add to pub sub

        // Todo -- making sure no new task are added to the items or handled after its value is copied to the items variable and before the queue is initalized to empty array
        
        // public flushEventQueue(){
        //     const items = this.eventQueue
        //     this.eventQueue = []
        //     return items;
        // }

        

        
    
}