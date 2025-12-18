import DataBar from "../components/DataBar.tsx";
import OrderBook from "../components/OrderBook.tsx";
import TradingCharts from "../components/TradingCharts.tsx";
import { BuySellSection } from "../components/BuySellSection.tsx";
import { useState } from "react";


export function Trade({symbol}:{symbol:string}) {
  const [isLoading,setLoading] = useState<boolean>(true)

  return (
    <>
      <div className="pt-16 w-full px-1">
        <DataBar />
      </div>

      <div className="flex flex-col lg:flex-row w-full px-2 gap-2">
        <div className="w-full lg:w-[58%] p-2">
          <TradingCharts />
        </div>
        <div className="w-full lg:w-[21%] bg-neutral-800 rounded-md my-3">
          <OrderBook symbol="BTCUSDT" />
        </div>
        <div className="w-full lg:w-[21%]  rounded-2xl my-3 pr-3 lg:pr-1">
          <BuySellSection isAuthenticated={false} symbol="BTC/USDT" price={"100.44"} balances={[{asset:'USDT',balance:"2304"}]} onPlaceOrder={()=>{console.log("placed the order")}} isLoading={false} />
        </div>
      </div>
    </>
  );
}