import DataBar from "../components/DataBar.tsx";
import OrderBook from "../components/OrderBook.tsx";
import  TradingCharts  from "../components/TradingCharts.tsx";
import { BuySellSection } from "../components/BuySellSection.tsx";
export default function Trade(){
    return (
        <>
         <div className="pt-16">
            <DataBar />

        </div>
        <div className="flex w-[100vw] ">
            <div className="w-4/5 p-2 pr-1 mx-1">
                <TradingCharts/>
            </div>
            <div className="max-w-1/4 w-1/4  bg-neutral-800   rounded-2xl my-3">
                <OrderBook symbol="BTCUSDT"/>
            </div>
            <div className="max-w-1/4 w-1/4 mx-2 bg-neutral-800   rounded-2xl my-3 mr-5">
                <BuySellSection/>
            </div>
        </div>
        
        
        </>
    )
}