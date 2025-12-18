import { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Card } from "./ui/card.tsx";
import { Input } from "./ui/input.tsx";
import { Info } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router";

interface BullSellSectionProps{
  symbol:string,
  balances:{
    asset: string,
    balance: string,
  }[],
  price: string,                                
  onPlaceOrder:()=>void,
  isLoading: boolean,
  isAuthenticated: boolean
} 


export const BuySellSection = ({symbol,balances,price,onPlaceOrder,isLoading=false,isAuthenticated}:BullSellSectionProps ) => {
  const [activeTab, setActiveTab] = useState<"BUY" | "SELL">("BUY");
  const [symbolQuant, setSymbolQuant] = useState<string>("1");
  const [buyPrice,setBuyPrice]= useState<string>(price)

  const navigate = useNavigate();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Regex to allow numbers with max 3 decimal places
    const regex = /^\d*\.?\d{0,3}$/;
    
    if (value === '' || regex.test(value)) {
      setBuyPrice(value);
      if (value && value !== '.') {
        
        const quantity = parseFloat(value);
        const total = (Math.floor(quantity * 1000) / Math.floor(parseFloat(price) * 1000)) ;
        setSymbolQuant(total.toFixed(3));
      } else {
        setBuyPrice('');
        setSymbolQuant('0')
      }
    }
   
  };
  const handleSymQuantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Regex to allow numbers with max 3 decimal places
    const regex = /^\d*\.?\d{0,3}$/;
    
    if (value === '' || regex.test(value)) {
      setSymbolQuant(value)
      if (value && value !== '.') {
        
        const quantity = parseFloat(value);
        const total = (Math.floor(parseFloat(price) * 1000) * Math.floor(quantity * 1000)) / 1000000;
        setBuyPrice((total.toFixed(3)));
      } else {
        setSymbolQuant('');
        setBuyPrice('0')
      }
    }
  }

  


  return (
    <Card className="h-full">
      {/* Tabs */}
      <div className=" w-full gap-4 justify-between  px-1 pt-4  ">
        <div className="flex w-full gap-4 justify-between  ">
        <div className="relative flex justify-between w-full text-sm mx-2 ">
          {/* Animated background indicator */}
          <div
            className={`h-11 absolute -top-1 left-0 w-1/2 rounded-xs border border-b-2 border-t-0 border-r-0 border-l-0 mt-[1px] z-0 transition-transform duration-300 ease-in-out ${
              activeTab === "BUY"
                ? "rounded-tl-lg bg-chart-3"
                : "rounded-tr-lg bg-destructive"
            }`}
            style={{
              transform:
                activeTab === "BUY" ? "translateX(0%)" : "translateX(100%)",
            }}
          ></div>


          {/* Buttons */}
          <div className={`h-10 text-md flex w-full justify-between relative z-10 rounded-sm border border-t-0 border-r-0 border-l-0 border-b-2 ${activeTab === "BUY" ? "border-chart-3" : "border-destructive"}`}>
            <button
              onClick={() => setActiveTab("BUY")}
              className={`font-bold text-center w-1/2 rounded-2xl transition-colors ${
                activeTab === "BUY" ? "text-muted " : "text-foreground hover:text-chart-3"
              }`}
            >
              BUY
            </button>


            <button
              onClick={() => setActiveTab("SELL")}
              className={`font-bold text-center w-1/2 rounded-2xl transition-colors ${
                activeTab === "SELL" ? "text-muted " : "text-foreground hover:text-destructive"
              }`}
            >
              SELL
            </button>
          </div>
        </div>
      </div>


      {/* Form Content */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <form className="flex flex-col gap-4">
          {/* Available Balance */}
          <div className="grid gap-2">
            <label className="text-xs  font-medium text-gray-400">Available Balance</label>
            <div className=" rounded-lg px-3 py-2 flex justify-between bg-popover items-center">
              <span className=" text-popover-foreground">{activeTab=="BUY"? "USDT":symbol.split('/')[0]}</span>
              {isAuthenticated ?<div>
              <span className="text-popover-foreground font-semibold">{ activeTab=="BUY"? (balances.filter((e)=>(e.asset=="USDT"))[0]?.balance) || '0.000' : balances.filter((e)=>(e.asset==symbol.split('/')[0]))[0]?.balance || "0.00"}</span>
              </div>:
              <div>
                  <span>
                    <Button
                      onClick={()=>navigate('/signin')}
                      className="font-bold bg-accent hover:bg-[#afe5ee] text-accent-foreground">Sign In</Button>
                  </span>
                
              </div>}
            </div>
          </div>


          {/* Price Input */}
          <motion.div layout className="flex flex-col gap-4">
          <motion.div 
            layout 
            transition={{duration:0.35,ease:"easeInOut"}}
            className={`${activeTab =='BUY'?"order-1":"order-2"}`}>
          <div className="grid gap-2 ">
            <label htmlFor="price" className=" flex items-center text-xs font-medium text-gray-400">
              <span>Price </span>
              <span className="px-3 text-destructive">
                {(activeTab=='BUY' && isAuthenticated && parseFloat(buyPrice)>parseFloat(balances?.find((ele)=>(ele.asset=="USDT"))?.balance ?? "0"))&&(
                  <span className="inline-flex gap-1 py-0">
                  <Info className="w-3 h-3 mt-0.5 " />
                  Insufficient Funds
                  </span>
                )}
              </span>
            </label>
            
            
            <div className="relative">
              <Input
                id="price"
                type="number"
                value={buyPrice}
                onChange={handlePriceChange}
                // className="w-full border border-neutral-600 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all"
                placeholder="0.000"
                inputMode="numeric"                  
                pattern="[0-9]*"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                USDT
              </span>
            </div>
          </div>
          </motion.div>


          {/* Amount Input */}
          <motion.div
            layout
            transition={{duration:0.35,ease:"easeInOut"}} 
            className={` ${activeTab =='BUY'?"order-2":"order-1"}`}>

          <div className="grid gap-2">
          <label htmlFor="amount" className="flex items-center text-xs font-medium text-gray-400">
         <span>Amount</span>

            <span className="px-3 text-destructive">
              {(activeTab === "SELL" && isAuthenticated &&
                parseFloat(symbolQuant) >
                  parseFloat(
                    balances?.find(
                      ele => ele.asset === symbol.split("/")[0]
                    )?.balance ?? "0"
                  )) && (
                <span className="inline-flex gap-1 py-0">
                  <Info className="w-3 h-3 mt-0.5" />
                  Insufficient Funds
                </span>
              )}
            </span>
            </label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                value={symbolQuant}
                onChange={handleSymQuantChange}
                placeholder="0.00"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                BTC
              </span>
            </div>
          </div>
          </motion.div>
        </motion.div>


         
         


         
          
        </form>
      </div>


      {/* Submit Button */}
      <div className="px-4 pb-4">
        <Button
          className={`w-full py-3 rounded-lg font-bold text-white transition-all shadow-[0px_2px_6px_rgba(200,200,200,0.3)] 
            
            ${ activeTab === "BUY"
              ? "bg-chart-3 text-muted hover:bg-[#89c983]"
              : "bg-destructive text-muted hover:bg-[#ce5a7b]"
          }`}
        >
          {activeTab} 
        </Button>
      </div>
      </div>
    </Card>
  );
}