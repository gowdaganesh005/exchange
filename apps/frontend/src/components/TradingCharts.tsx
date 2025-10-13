import axios from "axios"
import { AreaSeries, CandlestickSeries, createChart } from "lightweight-charts"
import { useEffect,useRef, useState } from "react"


export default function TradingCharts(){
    const chartContainerRef = useRef<any>(null)
    const [data,setData] = useState<any>(null);

    useEffect(()=>{
        
        const fetchData = async ()=>{
            const data =await  axios.post('http://localhost:3000/api/v1/candles',{
                "symbol":"BTCUSDT",
                "time": "1_hour"
            })

            setData(data.data.data)
            console.log(data.data.data)

        

        }
        fetchData();
    },[]);


    useEffect(()=>{
        
        

        const handleResize = () =>{
            chart.applyOptions({width:chartContainerRef.current.clientWidth})
        }
        if(!chartContainerRef) return

        const chart = createChart(chartContainerRef.current,{timeScale:{
            timeVisible:true
        }})
        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(CandlestickSeries)
        if(data)
        newSeries.setData(data);

        window.addEventListener('resize',handleResize)

        return () =>{
            window.removeEventListener('resize',handleResize)
            chart.remove()
        }
        
    },[data])

    
    return(
        <>
        <div className=" h-80" ref ={chartContainerRef}>

        </div>

        </>
    )
}