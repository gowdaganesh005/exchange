import { consolidatedBook, orderBook, fill, engineDepthUpdates } from "../types/orderbook.types";
import { orderBody } from "../types/orderbook.types.ts";
import { parentPort } from "node:worker_threads"
export class OrderBook{
    private orderBook : orderBook
    private consolidatedBook: consolidatedBook
    private symbol: string
    

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
    }

    private  mulprec=(a:number,b:number)=>{
        return Math.floor((Math.floor(a*1000)*Math.floor(b*1000))/1000);
    }

    public matchOrders({symbol, type, side, price,quantity,userId,timestamp}:any,orderId: string){
        console.log(timestamp ,"inside matching engine")
        console.log(this.symbol,"<-this symbol")
        console.log(symbol,"<-symbol")
        
        if(symbol != this.symbol){
            return null
        }
        
        

        let filledQuantity:number = 0;
    
        let fills :fill[] = [];

        if(side == "BUY"){
            while(quantity>0 && this.orderBook.sells.length > 0 && price >= this.orderBook.sells[0].price ){
                if(quantity <= this.orderBook.sells[0].quantity){

                    filledQuantity += quantity
                    this.orderBook.sells[0].quantity -= quantity 
                    this.consolidatedBook.sells[0].quantity -= quantity

                    fills.push({
                        price:this.orderBook.sells[0].price , 
                        quantity: quantity , 
                        timestamp: Date.now()
                    })
                    let matchedQuantity = quantity;

                    quantity = 0

                    // parentPort?.postMessage({
                    //     data:{
                    //         T: BigInt(Date.now()),
                    //         i: BigInt(this.updateId++),
                    //         e: "depth",
                    //         a: [[ this.consolidatedBook.sells[0].price,this.consolidatedBook.sells[0].quantity]],
                    //         s: this.symbol,
                    //         b: []
                    //     },
                    //     symbol: this.symbol,
                    //     type: "depthUpdates"

                    // })

                    parentPort?.postMessage({
                        type: "bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.sells[0].price,
                        size: matchedQuantity,
                        timestamp: Date.now()
                    })

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "tradeUpdate",
                            symbol: this.symbol,
                            tradeId: this.updateId.toString(),
                            updates:[{
                            orderId,
                            filled_quantity:matchedQuantity,
                            status:"FULL_FILLED",
                            filled_price: this.orderBook.sells[0].price,
                            updatedAt: Date.now()
                            },{
                            orderId: this.orderBook.sells[0].orderId,
                            filled_quantity: matchedQuantity,
                            status:  this.orderBook.sells[0].quantity === 0 ? "FULL_FILLED" : "PARTIALLY_FILLED",
                            filled_price: this.orderBook.sells[0].price,
                            updatedAt: Date.now()

                                }]
                        }                        
                    })
                    const totalScaledAmount = this.mulprec(matchedQuantity,this.orderBook.sells[0].price);

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "walletUpdate",
                            symbol: this.symbol,
                            quantity: matchedQuantity,
                            amount: totalScaledAmount,
                            credit: this.orderBook.sells[0].userId,
                            debit: userId
                        }
                    })

                    
                    if(this.orderBook.sells[0].quantity == 0){
                        this.orderBook.sells.shift()
                    }
                    if(this.consolidatedBook.sells[0].quantity == 0){
                        this.consolidatedBook.sells.shift()
                    }
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
                    
                    const matchedQuantity= curQuantity;
                    // parentPort?.postMessage({
                    //     data:{
                    //         T: BigInt(Date.now()),
                    //         i: BigInt(this.updateId++),
                    //         e: "depth",
                    //         a: [[ this.orderBook.sells[0].price,0]],
                    //         s: this.symbol,
                    //         b: [[ price,quantity]]
                    //     },
                    //     type:"depthUpdates",
                    //     symbol: this.symbol

                    // })

                    parentPort?.postMessage({
                        type:"bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.sells[0].price,
                        size: matchedQuantity,
                        timestamp: Date.now()
                    })
                    
                    
                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "tradeUpdate",
                            tradeId: this.updateId.toString(),
                            symbol: this.symbol,
                        
                            updates:[{
                                orderId,
                                filled_quantity: matchedQuantity,
                                status: "PARTIALLY_FILLED",
                                filled_price: this.orderBook.sells[0].price,
                                updatedAt: Date.now()
                                },{
                                orderId: this.orderBook.sells[0].orderId,
                                filled_quantity: matchedQuantity,
                                status: "FULL_FILLED",
                                filled_price: this.orderBook.sells[0].price,
                                updatedAt: Date.now()
                            }]
                    }
                    })

                    const totalScaledAmount = this.mulprec(matchedQuantity,this.orderBook.sells[0].price);

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "walletUpdate",
                            symbol: this.symbol,
                            amount: totalScaledAmount,
                            credit: this.orderBook.sells[0].userId,
                            debit: userId,
                            quantity: matchedQuantity
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
                // parentPort?.postMessage({
                //     data:{
                //         T: BigInt(Date.now()),
                //         b: [[ price,actualquantity ]],
                //         e: "depth",
                //         i: BigInt(this.updateId++),
                //         s: this.symbol,
                //         a: []
                //     },
                //     type:"depthUpdates",
                //     symbol: this.symbol
                // })

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
                
                


                console.log(fills)
                let asksmsg:any = []
                if(fills.length >0){
                    fills.forEach((element:fill) => {
                        let i = asksmsg.findIndex((e:any)=>e[0]==element.price)
                        if(i!=-1){
                            asksmsg[i][1]-=element.quantity
                        }else{
                            asksmsg.push([element.price,-element.quantity])
                        }
                    });
                }

                let bidsmsg :any=[]
                if(quantity>0){
                    bidsmsg= [[price,quantity]]
                }

                parentPort?.postMessage({
                        data:{
                            T: BigInt(Date.now()),
                            b: bidsmsg,
                            e: "depth",
                            i: BigInt(this.updateId++),
                            s: this.symbol,
                            a: asksmsg
                        },
                        type:"depthUpdates",
                        symbol: this.symbol
                    })


                return {
                    orderId:orderId,
                    executedQuantity:filledQuantity,
                    fills
                }
        }
        else if(side == "SELL"){
            while(quantity>0 && this.orderBook.buys.length>0 && price <= this.orderBook.buys[0].price ){
                if(quantity <= this.orderBook.buys[0].quantity){
                    filledQuantity += quantity
                    this.orderBook.buys[0].quantity -= quantity 
                    this.consolidatedBook.buys[0].quantity -= quantity
                    fills.push({
                        price:this.orderBook.buys[0].price , 
                        quantity: quantity , 
                        timestamp: Date.now()
                    })
                    const matchedQuantity= quantity;
                    quantity = 0

                    //sending the update of reduced  quantity of the order that is matched
                    // parentPort?.postMessage({
                    //     data:{
                    //         T: BigInt(Date.now()),
                    //         i: BigInt(this.updateId++),
                    //         e: "depth",
                    //         b: [ [this.consolidatedBook.buys[0].price,this.consolidatedBook.buys[0].quantity ]],
                    //         s: this.symbol,
                    //         a: []
                    //     },
                    //     type: "depthUpdates",
                    //     symbol: this.symbol

                    // })

                    parentPort?.postMessage({
                        type:"bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.buys[0].price,
                        size: matchedQuantity,
                        timestamp: Date.now()
                    })
                    
                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "tradeUpdate",
                            tradeId: this.updateId.toString(),
                            symbol:this.symbol,
                        
                        updates:[{
                            orderId,
                            filled_quantity:matchedQuantity,
                            status:"FULL_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()
                        },{
                            orderId: this.orderBook.buys[0].orderId,
                            filled_quantity: matchedQuantity,
                            status: this.orderBook.buys[0].quantity === 0 ? "FULL_FILLED" : "PARTIALLY_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()

                        }]
                    }
                        
                    })

                    const totalScaledAmount = this.mulprec(matchedQuantity,this.orderBook.buys[0].price);

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "walletUpdate",
                            symbol: this.symbol,
                            amount: totalScaledAmount,
                            debit: this.orderBook.buys[0].userId,
                            credit: userId,
                            quantity: matchedQuantity
                        }
                    })

                    if(this.orderBook.buys[0].quantity == 0){
                        this.orderBook.buys.shift()
                    }
                    if(this.consolidatedBook.buys[0].quantity == 0){
                        this.consolidatedBook.buys.shift()
                    }
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

                    let matchedQuantity = curQuantity;

                    // parentPort?.postMessage({
                    //     data:{
                    //         T: BigInt(Date.now()),
                    //         i: BigInt(this.updateId++),
                    //         e: "depth",
                    //         b: [ [this.consolidatedBook.buys[0].price,0]],
                    //         s: this.symbol,
                    //         a: [[price,quantity]]
                    //     },
                    //     type:"depthUpdates",
                    //     symbol: this.symbol

                    // })

                    parentPort?.postMessage({
                        type:"bookticker",
                        symbol: this.symbol,
                        tickerPrice: this.orderBook.buys[0].price,
                        size: matchedQuantity,
                        timestamp: Date.now()
                    })

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "tradeUpdate",
                            tradeId: this.updateId.toString(),
                            symbol: this.symbol,
                        
                        updates:[{                           orderId,
                            filled_quantity: matchedQuantity,
                            status: "PARTIALLY_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()
                        },{
                            orderId: this.orderBook.buys[0].orderId,
                            filled_quantity: matchedQuantity,
                            status: "FULL_FILLED",
                            filled_price: this.orderBook.buys[0].price,
                            updatedAt: Date.now()
                        }]
                    }
                    })
                    const totalScaledAmount = this.mulprec(matchedQuantity,this.orderBook.buys[0].price);

                    parentPort?.postMessage({
                        type: "dbUpdate",
                        data:{
                            type: "walletUpdate",
                            symbol: this.symbol,
                            amount: totalScaledAmount,
                            debit: this.orderBook.buys[0].userId,
                            credit: userId,
                            quantity: matchedQuantity
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
                // parentPort?.postMessage({
                //     data:{
                //         T: BigInt(Date.now()),
                //         a: [[ price,actualquantity]  ],
                //         e: "depth",
                //         i: BigInt(this.updateId++),
                //         s: this.symbol,
                //         b: []
                //     },
                //     type:"depthUpdates",
                //     symbol: this.symbol
                // })

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

                let bidsmsg:any = []
                if(fills.length >0){
                    fills.forEach((element:fill) => {
                        let i = bidsmsg.findIndex((e:any)=>e[0]==element.price)
                        if(i!=-1){
                            bidsmsg[i][1]-=element.quantity
                        }else{
                            bidsmsg.push([element.price,-element.quantity])
                        }
                    });
                }

                let asksmsg :any=[]
                console.log(quantity)
                if(quantity>0){
                    asksmsg= [[price,quantity]]
                }

                parentPort?.postMessage({
                        data:{
                            T: BigInt(Date.now()),
                            b: bidsmsg,
                            e: "depth",
                            i: BigInt(this.updateId++),
                            s: this.symbol,
                            a: asksmsg
                        },
                        type:"depthUpdates",
                        symbol: this.symbol
                    })
                




                return {
                    orderId:orderId,
                    executedQuantity:filledQuantity,
                    fills
                }
        }
        
    }
    
    public cancelOrder({symbol,side,orderId}:{symbol:string,side:"BUY"|"SELL" ,orderId: string}){
        try{
        if(side== "BUY"){
            const index = this.orderBook.buys.findIndex((a)=>(
                a.orderId == orderId
            ))
            const order = this.orderBook.buys[index]
            
            this.orderBook.buys.splice(index,1);

            // remove from consolidated orderbook
            const index2 = this.consolidatedBook.buys.findIndex((a)=>(
                a.price==order.price
            ))
            this.consolidatedBook.buys[index2].quantity-=order.quantity
            const corder = this.consolidatedBook.buys[index2]
            if(this.consolidatedBook.buys[index2].quantity==0) this.consolidatedBook.buys.splice(index2,1);

            const bidsmsg = [[corder.price,corder.quantity]]

            //updating id
            this.updateId=this.updateId+1;
            parentPort?.postMessage({
                type: "dbUpdate",
                data:{
                    type: "tradeUpdate",
                    tradeId: this.updateId.toString(),
                    symbol: this.symbol,
                
                updates:[{                           
                    orderId,
                    filled_quantity: order.quantity,
                    status: "CANCELLED",
                    filled_price: 0,
                    updatedAt: Date.now()
                }]
            }
            })

            const totalScaledAmount = this.mulprec(order.quantity,order.price);

            parentPort?.postMessage({
                type: "dbUpdate",
                data:{
                    type: "walletUpdate",
                    symbol: "USDT",
                    amount: totalScaledAmount,
                    credit: order.userId,    
                }
            })
            parentPort?.postMessage({
                data:{
                    T: BigInt(Date.now()),
                    b: bidsmsg,
                    e: "depth",
                    i: BigInt(this.updateId++),
                    s: this.symbol,
                    a: []
                },
                type:"depthUpdates",
                symbol: this.symbol
            })

            return ({
                orderId,
                response:{
                    success: true,
                    message: "Order Cancellation Initiated"
                }

                })

        }
        else if(side=='SELL'){
            const index = this.orderBook.sells.findIndex((a)=>(
                a.orderId == orderId
            ))
            const order = this.orderBook.sells[index]
            
            this.orderBook.sells.splice(index,1);

            // remove from consolidated orderbook
            const index2 = this.consolidatedBook.sells.findIndex((a)=>(
                a.price==order.price
            ))
            this.consolidatedBook.sells[index2].quantity-=order.quantity
            const corder = this.consolidatedBook.sells[index2]
            if(this.consolidatedBook.sells[index2].quantity==0) this.consolidatedBook.sells.splice(index2,1);

            const asksmsg = [[corder.price,corder.quantity]]

            //updating id
            this.updateId=this.updateId+1;
            parentPort?.postMessage({
                type: "dbUpdate",
                data:{
                    type: "tradeUpdate",
                    tradeId: this.updateId.toString(),
                    symbol: this.symbol,
                
                updates:[{                           
                    orderId,
                    filled_quantity: order.quantity,
                    status: "CANCELLED",
                    filled_price: 0,
                    updatedAt: Date.now()
                }]
            }
            })

            const totalScaledAmount = this.mulprec(order.quantity,order.price);

            parentPort?.postMessage({
                type: "dbUpdate",
                data:{
                    type: "walletUpdate",
                    symbol: symbol,
                    amount: totalScaledAmount,
                    credit: order.userId
                }
            })
            parentPort?.postMessage({
                data:{
                    T: BigInt(Date.now()),
                    b: [],
                    e: "depth",
                    i: BigInt(this.updateId++),
                    s: this.symbol,
                    a: asksmsg
                },
                type:"depthUpdates",
                symbol: this.symbol
            })
            return ({
                success: true,
                message: "Order Cancellation Initiated"
            })
        
        }
    }catch(error:any){
            return {
                success: false,
                message: "Failed Operation to Cancel Order"
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