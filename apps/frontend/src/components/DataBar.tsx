import { useState, useEffect, useRef } from "react";
import Card from "./Card.tsx";
import axios from "axios";




const DataBar = () => {
  const [curPrice , setCurPrice ] = useState<number>(0)
  const [up , setUp] = useState<boolean>(true)
  let [prevdayClose ,setPrevDayCLose  ]= useState<{
    price : number,
    date: string | null
  }>({
    price : 0,
    date: null
  });

  const [ priceDelta, setPriceDelta ] = useState<{ value: string , percent: string }>({
    value: '0', percent: '0'
  })

  const wsRef = useRef<WebSocket | null>(null)



  async function fetchLastClose(symbol:string){
    const prevDate = (new Date())
    prevDate.setDate(prevDate.getDate() -1);
    prevDate.setHours(0,0,0,0)

    if(prevdayClose.date!=null ) {
      const dataClosePrice = new Date(prevdayClose.date)
      if(dataClosePrice.getTime() == prevDate.getTime()) return;

    }
    
    
    
    const response = await axios.post("http://localhost:3000/api/v1/prevday-close",{ symbol })
    console.log(response.data)
    setPrevDayCLose({
      price: (response.data.prevDayClose/1000),
      date: response.data.date
    })

    const priceData = await axios.post(`http://localhost:3000/api/v1/price`,{
      symbol,
    })
    setCurPrice(priceData.data.price)
    if(priceData.data.price < response.data.prevDayClose/1000) setUp(false)

  }


  async function connect_ws(symbol:string){
    const ws = new WebSocket('ws://localhost:8000')
    wsRef.current = ws

    ws.onopen = () =>{
      const updateSubMsg = {
        "method":"SUBSCRIBE",
        "id":3,
        "params": [`bookticker.${symbol}`]
      }
      ws.send(JSON.stringify(updateSubMsg));
    }

    ws.onmessage = (event) =>{
      try{
        const updates = JSON.parse(event.data)

        if(JSON.parse(updates.data).type == 'bookticker'){
          const updatedPrice = JSON.parse(updates.data)
          console.log(updatedPrice)
          setCurPrice(updatedPrice.tickerPrice)
          
         
        } 
      }catch(error){
        console.log(error)

      }
    }
  }

  useEffect(()=>{
    fetchLastClose("BTC/USDT")
    connect_ws("BTC/USDT")

    return ()=>{
      wsRef.current?.close()
    }
  },[])

  useEffect(()=>{
    if(prevdayClose.price<=0 || curPrice<=0) return;
    const absoluteDelta = curPrice - prevdayClose.price;
    const percentDelte = (absoluteDelta /prevdayClose.price)*100

    if(absoluteDelta >= 0) setUp(true)
    else setUp(false);

    setPriceDelta({
      value: absoluteDelta.toFixed(3),
      percent: percentDelte.toFixed(3)
    })
  },[curPrice, prevdayClose.price])

  console.log(prevdayClose)
  console.log(curPrice)

  
  return(
  <div className="px-2 sm:px-6 w-full">
    <div className="w-full bg-transparent shadow-[0_8px_30px_rgba(200,200,200,0.1)] rounded-md">
      <div className="flex items-center justify-between gap-4 p-3 sm:p-5">
        <div className="px-4 py-2 bg-[rgb(var(--foreground2-rgb))] text-lg font-semibold rounded-xl flex items-center">
          BTC / USDT
        </div>
        <div>
        <div className="text-right ">
          <div className={`text-2xl  font-semibold  leading-tight ${up ? 'text-chart-3':'text-destructive'}`}>
            ${curPrice}
          </div> 
          <div className="flex gap-2">
            <div className={`text-md ${up ? 'text-chart-3':'text-destructive'}`}>
              {priceDelta.value}$
            </div>
            <div className={` text-md ${up ? 'text-chart-3':'text-destructive'}`}>
              ({priceDelta.percent}%)
            </div>
            <div className={` font-thin text-md text-md`}>
               1D 
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>)
};

export default DataBar;
