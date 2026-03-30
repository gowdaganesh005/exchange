import DataBar from "../components/DataBar.tsx";
import OrderBook from "../components/OrderBook.tsx";
import TradingCharts from "../components/TradingCharts.tsx";
import { BuySellSection } from "../components/BuySellSection.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext, useParams } from "react-router";
import { AuthContextType, useAuth } from "@/components/providers/AuthContext.tsx";


export function Trade() {
  let {symbol} = useParams();
  let userContext: AuthContextType | null = useAuth();
  const [loading,setLoading] = useState<boolean>(false);
  const [userBalances,setUserBalances] = useState([])
  const [price,setPrice] = useState(0)
  

  symbol = symbol?.replace("-", "/");

  console.log("User Context user obj ::",userContext?.user)

  useEffect(()=>{
    const fetchBalances=async ()=>{
      setLoading(true)
      
      try{
      
      if(userContext?.user) {
        
        try{
          const { data } = await axios.get("http://localhost:3000/api/v1/balance",{
            withCredentials:true 
          })
          console.log(data)
          let balanceData;
          if(data.wallets){
            balanceData = data.wallets.map((bal:any)=>({
              asset:bal.asset,
              balance: bal.freeBalance
            }))
            setUserBalances(balanceData);
            console.log(balanceData)
          }

        }catch(error:any){
            console.log(error.error);
            setUserBalances([]);
        }
      
      }
      try{
        const { data } = await axios.post(`http://localhost:3000/api/v1/price`,{
            symbol
        },{
          withCredentials: true,
        })
        setPrice(parseFloat(data.price))
        // setPrice()
        
      }catch(error:any){
        console.log("failed to fetch the price data ")
        console.log(error.error);

      }
    }catch(error){
        console.log(error);

    }
      
    }
    fetchBalances();
    console.log(userBalances)
    setLoading(false)
    
  },[userContext?.user,symbol])

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
          <OrderBook symbol={ symbol || ""} />
        </div>
        <div className="w-full lg:w-[21%]  rounded-2xl my-3 pr-3 lg:pr-1">
          <BuySellSection isAuthenticated={userContext?.user} symbol={symbol || ""} price={price?.toFixed(3).toString() } balances={userBalances} isLoading={loading} />
        </div>
      </div>
    </>
  );
}