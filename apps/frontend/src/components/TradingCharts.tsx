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
    const buttonContainerRef = useRef<HTMLDivElement>(null)
    const activeButtonRef = useRef<HTMLButtonElement>(null)

    const [chartTime,setchartTime] = useState<"1_minute" | "5_minutes" | "10_minutes" | '30_minutes' | '1_hour' | '1_day'>("1_minute")
    const [sliderPosition, setSliderPosition] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    
    useEffect(()=> {
        dataRef.current = data
    },[data])

    // Update slider position based on active button
    useEffect(() => {
        if (activeButtonRef.current && buttonContainerRef.current) {
            const containerRect = buttonContainerRef.current.getBoundingClientRect()
            const buttonRect = activeButtonRef.current.getBoundingClientRect()
            
            setSliderPosition(buttonRect.left - containerRect.left )
            setSliderWidth(buttonRect.width)
        }
    }, [chartTime])

    // Recalculate on window resize
    useEffect(() => {
        const handleResize = () => {
            if (activeButtonRef.current && buttonContainerRef.current) {
                const containerRect = buttonContainerRef.current.getBoundingClientRect()
                const buttonRect = activeButtonRef.current.getBoundingClientRect()
                
                setSliderPosition(buttonRect.left - containerRect.left)
                setSliderWidth(buttonRect.width)
            }
        }

        window.addEventListener('resize', handleResize)
        // Initial calculation
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])


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
            if(chartRef.current && chartContainerRef.current){
                chartRef.current.applyOptions({
                    width: chartContainerRef.current.clientWidth,
                    height: chartContainerRef.current.clientHeight-10
                })
            }
        }
        if(chartContainerRef.current && !chartRef.current) {
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
            if(chartRef.current){
                chartRef.current.remove()
                chartRef.current= null
            }
        }
        
    },[])

    useEffect(()=>{
        if(chartRef.current && !seriesRef.current && data && data.length >0){
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
        <div className="relative bg-[#161921] w-full rounded-md ">
        <div className="relative h-5 bg-[#161921] rounded-md mr-10 z-10 px-4 pb-4 pt-1">
        
            {/* Dynamic slider */}
            <div 
                className="absolute  top-0 left-0 h-[28px] bg-[#32353d] border border-t-0 border-l-0 border-r-0 border-b-2 border-amber-50 rounded-xs my-[2px] transition-all duration-200 ease-in-out z-0" 
                style={{ 
                    transform: `translateX(${sliderPosition+15}px)`,
                    width: `${sliderWidth}px`
                }}
            />

            <div className="relative flex z-10" ref={buttonContainerRef}>

            <button
                ref={chartTime === '1_minute' ? activeButtonRef : null}
                onClick={()=>{
                    setchartTime("1_minute")
                }} 
                className="text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md whitespace-nowrap px-2">
                <span className="hidden sm:inline">1 min</span>
                <span className="sm:hidden">1m</span>
            </button>
            <button 
                ref={chartTime === '5_minutes' ? activeButtonRef : null}
                onClick={()=>{ 
                    setchartTime("5_minutes") 
                }}   
                className="text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md whitespace-nowrap px-2">
                <span className="hidden sm:inline">5 mins</span>
                <span className="sm:hidden">5m</span>
            </button>
            <button 
                ref={chartTime === '10_minutes' ? activeButtonRef : null}
                onClick={()=>{ 
                    setchartTime("10_minutes") 
                }}   
                className="text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md whitespace-nowrap px-2">
                <span className="hidden sm:inline">10 mins</span>
                <span className="sm:hidden">10m</span>
            </button>
            <button 
                ref={chartTime === '30_minutes' ? activeButtonRef : null}
                onClick={()=>{ 
                    setchartTime("30_minutes") 
                }}   
                className="text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md whitespace-nowrap px-2">
                <span className="hidden sm:inline">30 mins</span>
                <span className="sm:hidden">30m</span>
            </button>
             
            <button 
                ref={chartTime === '1_hour' ? activeButtonRef : null}
                onClick={()=>{ 
                    setchartTime("1_hour") 
                }}   
                className="text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md whitespace-nowrap px-2">
                <span className="hidden sm:inline">1 hour</span>
                <span className="sm:hidden">1h</span>
            </button>
 
            <button 
                ref={chartTime === '1_day' ? activeButtonRef : null}
                onClick={()=>{ 
                    setchartTime("1_day") 
                }}   
                className="text-emerald-400 font-medium text-sm inline p-0.5 pb-1 rounded-md whitespace-nowrap px-2">
                <span className="hidden sm:inline">1 day</span>
                <span className="sm:hidden">1d</span>
            </button>
 
            </div> 

        </div>
        <div className="top-0 left-0 mt-5 w-full h-[60vh] z-0 px-2 overflow-hidden" style={{ overflow:"hidden"}} ref={chartContainerRef}>

        </div>
        </div>

        </>
    )
}