import DataBar from "../components/DataBar.tsx";
import OrderBook from "../components/OrderBook.tsx";
import  TradingCharts  from "../components/TradingCharts.tsx";

export default function Trade(){
    return (
        <>
         <div className="pt-16">
            <DataBar />

        </div>
        <div className="flex">
            <div className="w-3/4">
                <TradingCharts/>
            </div>
            <div className="max-w-1/4 w-1/4">
                <OrderBook symbol="BTCUSDT"/>
            </div>
        </div>
        
        </>
    )
}