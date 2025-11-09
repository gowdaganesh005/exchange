import axios from "axios"
import { AreaSeries, CandlestickSeries, createChart } from "lightweight-charts"
import { useEffect,useRef, useState } from "react"



export default function TradingCharts(){
    const chartContainerRef = useRef<any>(null)
    const chartRef = useRef<any>(null)
    const seriesRef = useRef<any>(null)
    const [data,setData] = useState<any>(null);
    const dataRef = useRef<any>([])
    const wsRef = useRef<any>(null)
    const widgetRef = useRef<any>(null)

    const [chartTime,setchartTime] = useState<"1_minute" | "5_minutes" | "10_minutes" | '30_minutes' | '1_hour' | '1_day'>("1_minute")
    
    useEffect(()=> {
        dataRef.current = data
    },[data])

    

    


    useEffect(()=>{
        if(seriesRef.current){
            chartRef.current.removeSeries(seriesRef.current)
            seriesRef.current = null
        }
        
        const fetchData = async ()=>{
            const data =await  axios.post('http://localhost:3000/api/v1/candles',{
                "symbol":"BTCUSDT",
                "time": `${chartTime}`
            })

            setData(data.data.data)
            console.log(data.data.data)
            dataRef.current = data.data.data

        

        }
        fetchData();
        const ws = new WebSocket('ws://localhost:8000')
                wsRef.current = ws;
                const intervalMap ={
                    "1_minute":"1m",
                    "5_minutes":"5m",
                    "10_minutes":"15m",
                    "30_minutes":"30m",
                    "1_hour":"1h",
                    "1_day":"1d"
            
                }
                const wsinterval = intervalMap[chartTime]
                


                ws.onopen = () => {
                    console.log("Connected To Websocket !" )
                    const KlinesubscriptionMsg = {
                        "method":"SUBSCRIBE",
                        "id":1,
                        "params":[`kline.${wsinterval}.BTCUSDT`]
                    }
                    
                    
                    ws.send(JSON.stringify(KlinesubscriptionMsg));
                    
                }

                ws.onmessage = (event) => {
                    console.log("trading websocket");
                    const newcand = JSON.parse(event.data).data;

                    const prevdata = dataRef.current || []

                    console.log(prevdata)
                    console.log(newcand)

                    if(!seriesRef.current) return
                    let updatedData

                  
                    
                      if (prevdata?.length && prevdata[prevdata.length - 1].time === newcand.time) {
                        // Create a new array with last element replaced immutably
                        updatedData = [...prevdata];
                        updatedData[updatedData.length - 1] = newcand;
                        seriesRef.current.update(newcand)
                      }else {
                            updatedData = [...prevdata,newcand]
                            seriesRef.current.update(newcand);
                      }
                  
                        // Update the chart with new candle
                        
                  
                        setData(updatedData)
                        dataRef.current= updatedData
                      
                }
                return () => ws.close()
                  
    },[chartTime]);

    

    


    useEffect(()=>{
        
        const handleResize = () =>{
            chartRef.current.applyOptions({
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight-10
            })
        }
        if(chartContainerRef && !chartRef.current) {
            const chart = createChart(chartContainerRef.current,
                {timeScale:{
                    timeVisible:true
                }, 
                layout:{
                    background: { color: "#161921"},
                    textColor:"#FFFFFF"

                },
                grid:{
                    horzLines: { color: "#32353d"},
                    vertLines: { color: "#323531"}
                },
               

            })
            chart.timeScale().fitContent();
            chart.timeScale().scrollToPosition(3,true);
            chartRef.current = chart
        }

        window.addEventListener('resize',handleResize)

        return () =>{
            window.removeEventListener('resize',handleResize)
            chartRef.current.remove()
            chartRef.current= null
        }
        
    },[])

    useEffect(()=>{
        if(chartRef && !seriesRef.current && data && data.length >0){
            const newseries = chartRef.current.addSeries(CandlestickSeries,{
                upColor: '#26a69a',
                downColor: '#ef5350',
                borderVisible: false,
                wickUpColor: '#26a69a',
                wickDownColor: '#ef5350',
                color: '#FFFFFF',
            })
            newseries.setData(data)
            seriesRef.current = newseries
        }
    },[data])

    

    
    return(
        <>
        <div className="relative bg-[#161921] w-full rounded-2xl ">
        <div className=" relative  h-5 bg-[#161921] rounded-t-2xl  mr-10 z-10 px-4  pb-4 pt-1">
        
            <div className="absolute top-0 left-0  h-[28px] bg-[#32353d] border border-t-0 border-l-0 border-r-0 border-b-2 border-amber-50 w-16 rounded-xs my-[2px] transition-transform duration-200 ease-in-out z-0" style={{ 
                transform:
                    chartTime==='1_minute' ? "translateX(18px)":
                    chartTime==='5_minutes' ? "translateX(92px)":
                    chartTime==='10_minutes' ? "translateX(162px)":
                    chartTime==='30_minutes' ? "translateX(236px)":
                    chartTime==='1_hour' ? "translateX(306px)": "translateX(380px)"

            }}> </div>

            <div className="relative flex z-10">

            <button
                onClick={()=>{
                    setchartTime("1_minute")
                }} 
                className=" text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md  w-18  ">1 min</button>
            <button 
                onClick={()=>{ 
                    setchartTime("5_minutes") 
                }}   
                className=" text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md  w-18 ">5 mins</button>
            <button 
                onClick={()=>{ 
                    setchartTime("10_minutes") 
                }}   
                className=" text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md  w-18  ">10 mins</button>
            <button 
                onClick={()=>{ 
                    setchartTime("30_minutes") 
                }}   
                className=" text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md  w-18 ">30 mins</button>
             
            <button 
                onClick={()=>{ 
                    setchartTime("1_hour") 
                }}   
                className=" text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md  w-18 ">1 hour</button>
 
            <button 
                onClick={()=>{ 
                    setchartTime("1_day") 
                }}   
                className=" text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md  w-18 ">1 day</button>
 
            </div> 

        </div>
        <div className="  top-0 left-0 mt-5 w-full h-[60vh] z-0 px-2 overflow-hidden  " style={{ overflow:"hidden"}} ref ={chartContainerRef}>

        </div>
        </div>

        </>
    )
}