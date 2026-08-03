import { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Card } from "./ui/card.tsx";
import { Input } from "./ui/input.tsx";
import { Spinner } from "./ui/spinner.tsx";
import { Info } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

interface BullSellSectionProps{
  symbol:string,
  balances:{
    asset: string,
    balance: string,
  }[],
  price: string,                                
  isLoading: boolean,
  isAuthenticated: boolean
} 


export const BuySellSection = ({symbol,balances,price,isLoading=false,isAuthenticated}:BullSellSectionProps ) => {
  const [activeTab, setActiveTab] = useState<"BUY" | "SELL">("BUY");
  const [symbolQuant, setSymbolQuant] = useState<string>("1");
  const [buyPrice,setBuyPrice]= useState<string>(price)
  const [Loading,setLoading] = useState<boolean>(isLoading);
  const [totalPrice,setTotalPrice] = useState<string>("0.000")

  const navigate = useNavigate();

  const onPlaceOrder=async ()=>{
    setLoading(true);
    try{
      const response = await axios.post("http://localhost:3000/api/v1/order",{
        symbol,
        price: Number(parseFloat(buyPrice).toFixed(3)),
        quantity: Number(parseFloat(symbolQuant).toFixed(3)),
        side:activeTab,
        type:"LIMIT",
        timestamp:parseInt(Date.now().toString())
  
      },{ withCredentials: true })
      console.log(response)
      toast.success("Order Placed Successfully" ,
        { className:'bg-chart-3 text-muted rounded-md'}
      )
      

    }catch(error){
      console.log(error)
    }
    setLoading(false)
    
  }

  

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    
    
    // Regex to allow numbers with max 3 decimal places
    const regex = /^\d*\.?\d{0,3}$/;
    
    if (value === '' || regex.test(value)) {
      setBuyPrice(value);
      if (value && value !== '.') {
        
        const quantity = parseFloat(value);
        const total = (Math.floor(parseFloat(symbolQuant) * 1000) * Math.floor(quantity * 1000)) / 1000000;
        setTotalPrice(total.toFixed(3));
      } else {
        setBuyPrice('');
        setTotalPrice('0')
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
        const total = (Math.floor(parseFloat(buyPrice) * 1000) * Math.floor(quantity * 1000)) / 1000000;
        setTotalPrice((total.toFixed(3)));
      } else {
        setSymbolQuant('');
        setTotalPrice('0')
      }
    }
  }

  useEffect(() => {
    if (price && price !== "0") {
      setBuyPrice(price);
  
      // recalc amount from price
      const curprice = parseFloat(price);
      if (!isNaN(curprice)) {
        setTotalPrice(((Math.floor(curprice*1000)*Math.floor(1*1000))/1000000).toFixed(3));
      }
    }
  }, [price]);

  const hasInsufficientFunds =
  isAuthenticated &&
  (
    activeTab === "BUY"
      ? parseFloat(totalPrice) >
        parseFloat(
          balances.find(b => b.asset === "USDT")?.balance ?? "0"
        )
      : parseFloat(symbolQuant) >
        parseFloat(
          balances.find(b => b.asset === symbol)?.balance ?? "0"
        )
  );


  const isButtonDisabled =
    Loading || !isAuthenticated || hasInsufficientFunds;

  

  


  return (
    <>
    <Card className="relative h-full min-h-0 min-w-0 overflow-hidden flex flex-col bg-background">

{/* HEADER */}
<div className="shrink-0 px-2 sm:px-3 pt-3 sm:pt-4">

  <div className="relative flex w-full text-sm mx-auto">

    {/* Animated background */}
    <div
      className={`absolute top-0 left-0 h-8 sm:h-10 w-1/2 rounded-xs border-b-2 z-0 transition-transform duration-300 ease-in-out ${
        activeTab === "BUY"
          ? "bg-chart-3 border-chart-3"
          : "bg-destructive border-destructive"
      }`}
      style={{
        transform:
          activeTab === "BUY"
            ? "translateX(0%)"
            : "translateX(100%)",
      }}
    />

    {/* Tabs */}
    <div
      className={`relative z-10 flex h-8 sm:h-10 w-full border-b-2 ${
        activeTab === "BUY"
          ? "border-chart-3"
          : "border-destructive"
      }`}
    >
      <button
        onClick={() => setActiveTab("BUY")}
        className={`w-1/2 text-xs sm:text-sm md:text-base font-semibold transition-colors ${
          activeTab === "BUY"
            ? "text-muted"
            : "text-foreground hover:text-chart-3"
        }`}
      >
        BUY
      </button>

      <button
        onClick={() => setActiveTab("SELL")}
        className={`w-1/2 text-xs sm:text-sm md:text-base font-semibold transition-colors ${
          activeTab === "SELL"
            ? "text-muted"
            : "text-foreground hover:text-destructive"
        }`}
      >
        SELL
      </button>
    </div>
  </div>
</div>

{/* SCROLLABLE CONTENT */}
<div className="flex-1 min-h-0 overflow-y-auto px-2 sm:px-3 md:px-4 py-3 sm:py-4">

  <form className="flex flex-col gap-3 sm:gap-4">

    {/* Market + Balance */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

      {/* Market Price */}
      <div className="grid gap-1.5">
        <label className="text-[10px] sm:text-xs md:text-sm text-gray-400">
          Market Price
        </label>

        <div className="rounded-md px-2 sm:px-3 py-2 flex justify-between bg-popover items-center">
          <span className="text-xs sm:text-sm">
            {symbol?.split("/")[0]}
          </span>

          <span className="font-medium text-xs sm:text-sm md:text-base">
            {price}
          </span>
        </div>
      </div>

      {/* Balance */}
      <div className="grid gap-1.5">
        <label className="text-[10px] sm:text-xs md:text-sm text-gray-400">
          Available Balance
        </label>

        <div className="rounded-md px-2 sm:px-3 py-2 flex justify-between bg-popover items-center">

          <span className="text-xs sm:text-sm">
            {activeTab === "BUY"
              ? "USDT"
              : symbol?.split("/")[0]}
          </span>

          {isAuthenticated ? (
            <span className="font-medium text-xs sm:text-sm md:text-base">
              {activeTab === "BUY"
                ? balances.find(e => e.asset === "USDT")?.balance || "0.000"
                : balances.find(e => e.asset === symbol)?.balance || "0.000"}
            </span>
          ) : (
            <Button
              onClick={() => navigate("/signin")}
              className="text-[10px] sm:text-xs md:text-sm px-2 py-1"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </div>

    {/* Price */}
    <div className="grid gap-1.5">
      <label className="text-[10px] sm:text-xs md:text-sm text-gray-400">
        Price per Unit
      </label>

      <div className="relative">
        <Input
          id="price"
          type="number"
          value={buyPrice}
          onChange={handlePriceChange}
          placeholder="0.000"
          className="h-9 sm:h-10 text-xs sm:text-sm md:text-base pr-14"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm text-gray-400">
          USDT
        </span>
      </div>
    </div>

    {/* Amount */}
    <div className="grid gap-1.5">
      <label className="text-[10px] sm:text-xs md:text-sm text-gray-400">
        Amount
      </label>

      <div className="relative">
        <Input
          id="amount"
          type="number"
          value={symbolQuant}
          onChange={handleSymQuantChange}
          placeholder="0.00"
          className="h-9 sm:h-10 text-xs sm:text-sm md:text-base pr-14"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm text-gray-400">
          BTC
        </span>
      </div>
    </div>

    {/* Total */}
    <div className="grid gap-1.5">

      <label className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs md:text-sm text-gray-400">

        <span>Total Price</span>

        {(activeTab === "BUY" &&
          isAuthenticated &&
          parseFloat(totalPrice) >
            parseFloat(
              balances.find(ele => ele.asset === "USDT")?.balance ?? "0"
            )) && (
          <span className="inline-flex items-center gap-1 text-destructive">
            <Info className="w-3 h-3" />
            Insufficient Funds
          </span>
        )}
      </label>

      <div className="rounded-md px-2 sm:px-3 py-2 flex justify-between bg-popover items-center">

        <span />

        <span className="font-medium text-xs sm:text-sm md:text-base">
          {totalPrice}
        </span>
      </div>
    </div>

  </form>
</div>

{/* FIXED BUTTON */}
<div className="shrink-0 p-2 sm:p-3 md:p-4 border-t bg-background mb-10">

  <Button
    onClick={onPlaceOrder}
    disabled={isButtonDisabled}
    className={`w-full h-9 sm:h-10 md:h-11 text-xs sm:text-sm md:text-base font-semibold transition-all
    ${
      activeTab === "BUY"
        ? "bg-chart-3 hover:bg-[#89c983]"
        : "bg-destructive hover:bg-[#ce5a7b]"
    }`}
  >
    {Loading && isAuthenticated ? (
      <>
        <Spinner />
        Processing
      </>
    ) : (
      activeTab
    )}
  </Button>
</div>
</Card>
    </>
    
  );
}