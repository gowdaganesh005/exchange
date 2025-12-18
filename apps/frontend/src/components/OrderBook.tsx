import { useEffect, useState, useRef } from "react"
import axios from "axios";


function OrderBook({symbol}:{symbol:string}){
    const [orderBook,setOrderBook] = useState<any>(null);
    const wsRef = useRef<WebSocket |null>(null)
    const orderBookRef = useRef<any>(null)
    const [trades,setTrades] = useState<any>(null)
    const tradesRef = useRef<any>([])
    const [price,setPrice]= useState<any>(0)
    const [activeTab , setActiveTab] = useState<'orderbook'|'trades'>('orderbook')
    const [visibleRows, setVisibleRows] = useState(10)

    // Update visible rows based on screen size
    useEffect(() => {
        const updateVisibleRows = () => {
            const width = window.innerWidth
            if (width >= 1024) { // lg breakpoint
                setVisibleRows(15)
            } else {
                setVisibleRows(10)
            }
        }

        updateVisibleRows()
        window.addEventListener('resize', updateVisibleRows)
        return () => window.removeEventListener('resize', updateVisibleRows)
    }, [])

    useEffect(()=>{
        const fetchSnapshot= async ()=>{
            try{
                const { data } = await axios.get(`http://localhost:3000/api/v1/snapshot/${symbol}`)
                const priceData = await axios.get(`http://localhost:3000/api/v1/price/${symbol}`)
                
                console.log(priceData)
                const price = priceData.data
                if(price && price > 0) {
                    setPrice(price)
                } else if(data && data.asks && data.bids && data.asks.length > 0 && data.bids.length > 0) {
                    setPrice((data.asks[0][0] + data.bids[0][0])/2)
                }
                
                const ws = new WebSocket('ws://localhost:8000')
                wsRef.current = ws;
                


                ws.onopen = () => {
                    console.log("Connected To Websocket !" )
                    const DepthsubscriptionMsg = {
                        "method":"SUBSCRIBE",
                        "id":1,
                        "params":[`depth.200ms.${symbol}`]
                    }
                    const updateSubMsg = {
                        "method":"SUBSCRIBE",
                        "id":2,
                        "params":["bookticker.BTCUSDT"]
                    }
                    
                    ws.send(JSON.stringify(DepthsubscriptionMsg));
                    ws.send(JSON.stringify(updateSubMsg));
                }


                ws.onmessage = (event)=>{
                    try{
                        
                        const updates = JSON.parse(event.data)
                        console.log(updates)

                        if(JSON.parse(updates.data).e == 'depth'){
                        console.log(JSON.parse(updates.data))
                        const updateData = JSON.parse(updates.data)


                        if(updateData.i==orderBookRef.current.lastupdateId){
                            let hasUpdates = false
                            if(updateData.a.length > 0){
                                updateData.a.map((ele:number[])=>{
                                    const index = orderBookRef.current.asks.findIndex((a:number[])=>a[0]==ele[0])
                                    if(index!=-1){

                                        orderBookRef.current.asks[index][1] += ele[1]
                                        if(orderBookRef.current.asks[index][1]==0){
                                            orderBookRef.current.asks.splice(index,1);
                                        }
                                        let cumm =0
                                        orderBookRef.current.asks.map((ele:any)=>{
                                            cumm = cumm + ele[1]
                                            ele[2] = cumm
                                            return ele
                                        })

                                    }else{
                                        if(ele && ele[1] !=0){
                                        const newEntry = [ele[0],ele[1],0]
                                        orderBookRef.current.asks.push(newEntry)
                                        orderBookRef.current.asks.sort((a:any,b:any)=>a[0]-b[0])
                                        let cumm = 0;
                                        orderBookRef.current.asks.map((ele:any)=>{
                                            cumm = cumm + ele[1]
                                            ele[2] = cumm
                                            return ele
                                    })
                                        console.log(orderBookRef.current.asks)
                                    }
                                        
                                    }
                                })
                                hasUpdates=true
                            }
                            if(updateData.b.length > 0){
                                updateData.b.map((ele:number[])=>{
                                    const index = orderBookRef.current.bids.findIndex((a:number[])=>a[0]==ele[0])
                                    console.log(ele[0])
                                    if(index!=-1){
                                        orderBookRef.current.bids[index][1] += ele[1]
                                        if(orderBookRef.current.bids[index][1]==0){
                                            orderBookRef.current.bids.splice(index,1);
                                        }
                                        let cumm =0
                                        orderBookRef.current.bids.map((ele:any)=>{
                                            cumm = cumm + ele[1]
                                            ele[2] = cumm
                                            return ele
                                        })
                                    }else{
                                        if( ele  && ele[1] != 0){
                                        const newEntry = [ele[0],ele[1],0]
                                        orderBookRef.current.bids.push(newEntry)
                                        orderBookRef.current.bids.sort((a:any,b:any)=>b[0]-a[0])
                                        let cumm = 0;
                                        orderBookRef.current.bids.map((ele:any)=>{
                                            cumm = cumm + ele[1]
                                            ele[2] = cumm
                                            return ele
                                    })
                                        console.log(orderBookRef.current.bids)
                                        
                                    }
                                    
                                }
                                })
                                hasUpdates = true
                            }
                            if(hasUpdates){
                                orderBookRef.current.lastupdateId ++;
                                console.log(orderBookRef.current)
                                setOrderBook({...orderBookRef.current})

                            }
                        }
                    }
                    if(JSON.parse(updates.data).type == 'bookticker'){
                        const updatedPrice = JSON.parse(updates.data)
                        console.log(updatedPrice)
                        setPrice(updatedPrice.tickerPrice)
                        tradesRef.current.push([updatedPrice.tickerPrice,updatedPrice.size])
                        setTrades([...tradesRef.current])
                        console.log(trades)
                    }
                    }catch(error:any){
                        console.log(error)
                    }
                }


                ws.onclose = ()=>{
                    const DepthUnsubscriptionMsg = {
                        "method":"SUBSCRIBE",
                        "id":1,
                        "params":[`depth.200ms.${symbol}`]
                    }
                    const updateUnSubMsg = {
                        "method":"SUBSCRIBE",
                        "id":2,
                        "params":["bookticker.BTCUSDT"]
                    }
                    ws.send(JSON.stringify(DepthUnsubscriptionMsg));
                    ws.send(JSON.stringify(updateUnSubMsg));
                    console.log("Websocket disconnected ")

                }


                let cummSize = 0
                data.asks.map((ele:any)=>{
                    cummSize +=ele[1]
                    ele.push(cummSize)
                   
                })
                cummSize=0
                data.bids.map((ele:any)=>{
                    cummSize +=ele[1]
                    ele.push(cummSize)
                   
                })
                console.log(data)
                setOrderBook(data)
                orderBookRef.current=data
            }
        catch(error:any){
            setOrderBook(error)
        }
        }


        fetchSnapshot()

        return () => {
            if (wsRef.current) {
                console.log("Cleaning up old WebSocket connection");
                wsRef.current.close();
                wsRef.current = null;
            }
        };
       


    },[])
    

    if (!orderBook || !orderBook.asks || !orderBook.bids) {
        return <div className="p-4 text-white">NO Trades</div>;
    }
    const reversedAsks = [...orderBook.asks].reverse();
    const topAsks = reversedAsks.slice(0, visibleRows);
    const maxCumulativeA = reversedAsks.length > 0 ? reversedAsks[0][2] : 1;

    const reversedBids = [...orderBook.bids]
    const topBids = reversedBids.slice(0, visibleRows);
    const maxCumulativeB = reversedBids.length > 0 ? reversedBids[reversedBids.length-1][2] : 1;



    return (
        <>
        <div className="w-full rounded-2xl h-full flex flex-col">
        <div  className=" relative text-white flex justify-between   text-sm">
            <div 
                className={`h-10 absolute -top-1 left-0 w-1/2 rounded-xs   bg-[#32353d] border border-b-2 border-t-0 border-r-0 border-l-0 mt-[1px] 0 z-0 transition ease-in-out ${activeTab==='orderbook'?"rounded-tl-2xl":"rounded-tr-2xl"}` }
                style={{
                    
                    transform:
                activeTab==='orderbook' ? "translateX(0px)": `translateX(100%)`
                
                }}></div>
            <div  className="h-10 flex w-full justify-between relative z-10 rounded-2xl ">
            <button 
            onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
                setActiveTab("orderbook")
            }}
            className="  text-center w-1/2 rounded-2xl">Order Book</button>
            
            <button 
            onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
                setActiveTab("trades")
            }}
            className=" rounded text-center w-1/2 h-full ">Trades</button>

            </div>
            
        </div>
        {activeTab=="orderbook" && <div className=" bg-[rgb(var(--foreground-rgb))] text-blue-100 flex  z-10  top-0 w-full text-[13px]  font-light px-2 ">
                        <div className="w-3/5 font-semibold">Price</div>
                        <div className="w-1/2 font-medium flex justify-between">
                            <div className="-mx-1">Size</div>
                            <div>Total</div>
                        </div>
            </div>}
       { activeTab=='orderbook' && ( <div className=" bg-[rgb(var(--foreground-rgb))] text-blue-100  w-full flex flex-col flex-1 justify-center rounded-b-2xl overflow-y-auto">
            <div className="flex-1 w-full overflow-y-auto">
            
           {topAsks && 
            topAsks.map((element:any, idx:number) => {
                const Lightwidth = (element[2]/maxCumulativeA)*100;
                const Darkwidth = (element[1]/maxCumulativeA)*100;
                return(
                <div key={`ask-${idx}`} className="relative m-0 p-0 my-[2px] py-[2px] ">
                    <div className="absolute z-0 bg-[#3a1e24]  h-full top-0 right-0" style={{ width: `${Lightwidth}%` }} ></div>  
                    <div className="absolute z-0 bg-[#782c31]  h-full top-0 right-0" style={{ width: `${Darkwidth}%` }} ></div>  


                    <div className="flex relative z-10 bg-transparent  w-full text-[13px]  font-light px-2 ">
                        <div className="w-3/5 text-red-500">{element[0]}</div>
                        <div className="w-1/2 font-medium flex justify-between">
                            <div>{element[1]}</div>
                            <div>{element[2]}</div>
                        </div>
                    </div>
                </div>)
            })}
            </div>


            {/* Trade Price */}
            {
                (price>0)? (<div className="px-3 font-semibold py-2">${price}</div>):(<div></div>)
            }
           




            <div className="flex-1 w-full overflow-y-auto">
           {orderBook && topBids &&
            topBids.map((element:any, idx:number) => {
                const length = orderBook.bids.length
                const Lightwidth = (element[2]/maxCumulativeB)*100;
                const Darkwidth = (element[1]/maxCumulativeB)*100;
                return(
                <div key={`bid-${idx}`} className="relative m-0 p-0 my-[2px] py-[2px] ">
                    <div className="absolute z-0 bg-[#11312a]  h-full top-0 right-0" style={{ width: `${Lightwidth}%` }} ></div>  
                    <div className="absolute z-0 bg-[#0c5f43]  h-full top-0 right-0" style={{ width: `${Darkwidth}%` }} ></div>  


                    <div className="flex relative z-10 bg-transparent  w-full text-[13px]  font-light px-2 ">
                        <div className="w-3/5 text-green-500">{element[0]}</div>
                        <div className="w-1/2 font-medium flex justify-between">
                            <div>{element[1]}</div>
                            <div>{element[2]}</div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>)
            })}
            
            </div>
        </div>)
        }

        {activeTab=='trades' && (<div className="w-full mr-4 text-white bg-[rgb(var(--foreground-rgb))] flex-1 overflow-y-auto">
            <div className="flex justify-between text-sm px-2 font-semibold">
                <div>
                    Price
                </div>
                <div>
                    Size
                </div>
            </div>
            {/* { trades && trades.map((ele:any)=>( */}
                <div className="relative  flex justify-between px-2 my-[2px]  ">
                    <div className="absolute inset-0 w-[100%] bg-indigo-800 opacity-35 rounded"></div>
                    <div className="font-semibold  ">
                        $30
                    </div>
                    <div>
                        19
                    </div>
                </div>
            {/* ))} */}
        </div>)}
        </div>
        </>
    )
}

export default OrderBook