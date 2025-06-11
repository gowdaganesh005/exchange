import { consolidatedBook, orderBook, fill, engineDepthUpdates } from "../types/orderbook.types";
import { orderBody } from "../types/orderbook.types";
import { parentPort } from "node:worker_threads"
export class OrderBook{
    private orderBook : orderBook
    private consolidatedBook: consolidatedBook
    private symbol: string
    private eventQueue: Array<engineDepthUpdates>

    private updateId = 1;

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

    public matchOrders({symbol, type, side, price,quantity,userId,timestamp,}:orderBody,orderId: string){
        console.log(timestamp ,"inside matching engine")
        
        if(symbol != this.symbol){
            return null
        }
        
        

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

                    parentPort?.postMessage({
                        data:{
                            T: BigInt(Date.now()),
                            i: BigInt(this.updateId++),
                            e: "depth",
                            a: [ this.orderBook.sells[0].price,this.orderBook.sells[0].quantity - filledQuantity],
                            s: this.symbol,
                            b: []
                        },
                        symbol: this.symbol,
                        type: "depthUpdates"

                    })

                    parentPort?.postMessage({
                        type: "bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.sells[0].price
                    })

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "update",
                            updates:[{
                            orderId,
                            filled_quantity:filledQuantity,
                            status:"FULL_FILLED",
                            filled_price: this.orderBook.sells[0].price,
                            updatedAt: Date.now()
                            },{
                            orderId: this.orderBook.sells[0].orderId,
                            filled_quantity: filledQuantity,
                            status: "PARTIALLY_FILLED",
                            filled_price: this.orderBook.sells[0].price,
                            updatedAt: Date.now()

                                }]
                        }                        
                    })
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
                    parentPort?.postMessage({
                        data:{
                            T: BigInt(Date.now()),
                            i: BigInt(this.updateId++),
                            e: "depth",
                            a: [ this.orderBook.sells[0].price,0],
                            s: this.symbol,
                            b: []
                        },
                        type:"depthUpdates",
                        symbol: this.symbol

                    })

                    parentPort?.postMessage({
                        type:"bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.sells[0].price
                    })
                    
                    
                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "update",
                        
                            udpates:[{
                                orderId,
                                filled_quantity: filledQuantity,
                                status: "PARTIALLY_FILLED",
                                filled_price: this.orderBook.sells[0].price,
                                updatedAt: Date.now()
                                },{
                                orderId: this.orderBook.sells[0].orderId,
                                filled_quantity: filledQuantity,
                                status: "FULL_FILLED",
                                filled_price: this.orderBook.sells[0].price,
                                updateAt: Date.now()
                            }]
                    }
                    })

                    // remove the order from the orderbokk and consolidated book too
                    this.orderBook.sells.shift()
                    if(this.consolidatedBook.sells[0].quantity == 0){
                        this.consolidatedBook.sells.shift()
                    }


                }

                
            }
            console.log(fills)
            if(quantity > 0){

                this.orderBook.buys.push({price,quantity,timestamp,userId,orderId})
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

                // this.eventQueue.push({
                //     data:{
                //         T: BigInt(Date.now()),
                //         a: [ [ price,quantity ] ],
                //         e: "depth",
                //         i: BigInt(this.updateId),
                //         s: this.symbol,
                //         b: []
                //     }
                    
                // })
                
                parentPort?.postMessage({
                    data:{
                        T: BigInt(Date.now()),
                        a: [ [ price,quantity ] ],
                        e: "depth",
                        i: BigInt(this.updateId++),
                        s: this.symbol,
                        b: []
                    },
                    type:"depthUpdates",
                    symbol: this.symbol
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

                    //sending the update of reduced  quantity of the order that is matched
                    parentPort?.postMessage({
                        data:{
                            T: BigInt(Date.now()),
                            i: BigInt(this.updateId++),
                            e: "depth",
                            b: [ this.orderBook.buys[0].price,this.orderBook.buys[0].quantity - filledQuantity],
                            s: this.symbol,
                            a: []
                        },
                        type: "depthUpdates",
                        symbol: this.symbol

                    })

                    parentPort?.postMessage({
                        type:"bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.buys[0].price
                    })
                    
                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "update",
                        
                        updates:[{
                            orderId,
                            filled_quantity:filledQuantity,
                            status:"FULL_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()
                        },{
                            orderId: this.orderBook.buys[0].orderId,
                            filled_quantity: filledQuantity,
                            status: "PARTIALLY_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()

                        }]
                    }
                        
                    })
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

                    parentPort?.postMessage({
                        data:{
                            T: BigInt(Date.now()),
                            i: BigInt(this.updateId++),
                            e: "depth",
                            b: [ this.orderBook.buys[0].price,0],
                            s: this.symbol,
                            a: []
                        },
                        type:"depthUpdates",
                        symbol: this.symbol

                    })

                    parentPort?.postMessage({
                        type:"bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.buys[0].price
                    })

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "update",
                        
                        updates:[{
                            orderId,
                            filled_quantity: filledQuantity,
                            status: "PARTIALLY_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()
                        },{
                            orderId: this.orderBook.buys[0].orderId,
                            filled_quantity: filledQuantity,
                            status: "FULL_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updateAt: Date.now()
                        }]
                    }
                    })

                    this.orderBook.buys.shift()
                    if(this.consolidatedBook.buys[0].quantity == 0){
                        this.consolidatedBook.buys.shift()
                    }
                   
                }

                
            }
            console.log(fills)
            if(quantity > 0){

                this.orderBook.sells.push({price,quantity,timestamp,userId,orderId})
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
                    data:{
                        T: BigInt(Date.now()),
                        a: [ [ price,quantity ] ],
                        e: "depth",
                        i: BigInt(this.updateId++),
                        s: this.symbol,
                        b: []
                    },
                    type:"depthUpdates",
                    symbol: this.symbol
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