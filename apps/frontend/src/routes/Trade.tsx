import DataBar from "../components/DataBar.tsx";
import OrderBook from "../components/OrderBook.tsx";
import TradingCharts from "../components/TradingCharts.tsx";
import { BuySellSection } from "../components/BuySellSection.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {
  AuthContextType,
  useAuth,
} from "@/components/providers/AuthContext.tsx";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable.tsx";

function useIsMobile() {
  const [isMobile, setIsMobile ] = useState(window.innerWidth <1024)
  useEffect(() =>{
    const handleResize = () =>{
      setIsMobile(window.innerWidth < 1024)

    };

    window.addEventListener("resize", handleResize);
    
    return ()=> window.removeEventListener("resize", handleResize);
  },[])
  return isMobile
}

export function Trade() {
  let { symbol } = useParams();

  let userContext: AuthContextType | null = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [userBalances, setUserBalances] = useState([]);
  const [price, setPrice] = useState(0);

  symbol = symbol?.replace("-", "/");
  const isMobile = useIsMobile()

  useEffect(() => {
    const fetchBalances = async () => {
      setLoading(true);

      try {
        if (userContext?.user) {
          try {
            const { data } = await axios.get(
              "http://localhost:3000/api/v1/balance",
              {
                withCredentials: true,
              }
            );

            let balanceData;

            if (data.wallets) {
              balanceData = data.wallets.map((bal: any) => ({
                asset: bal.asset,
                balance: bal.freeBalance,
              }));

              setUserBalances(balanceData);
            }
          } catch (error: any) {
            console.log(error.error);
            setUserBalances([]);
          }
        }

        try {
          const { data } = await axios.post(
            `http://localhost:3000/api/v1/price`,
            {
              symbol,
            },
            {
              withCredentials: true,
            }
          );

          setPrice(parseFloat(data.price));
        } catch (error: any) {
          console.log("failed to fetch the price data ");
          console.log(error.error);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchBalances();
  }, [userContext?.user, symbol]);

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
  
      {/* TOP BAR */}
      <div className="shrink-0 px-2 pt-2">
        <DataBar />
      </div>
  
      {/* MAIN */}
      <div className="flex-1 min-h-0 p-2">
  
        <ResizablePanelGroup
          orientation={isMobile ? "vertical" : "horizontal"}
          className="h-full w-full"
        >
  
          {/* CHART */}
          <ResizablePanel
            defaultSize={70}
            minSize={30}
            className="min-h-0 min-w-0"
          >
            <div className="h-[90%] w-full min-h-0 min-w-0 rounded-md overflow-hidden">
              <TradingCharts />
            </div>
          </ResizablePanel>
  
          <ResizableHandle withHandle />
  
          {/* RIGHT SIDE */}
          <ResizablePanel
            defaultSize={30}
            minSize={20}
            className="min-h-0 min-w-0"
          >
  
            <ResizablePanelGroup
              orientation="vertical"
              className="h-full w-full"
            >
  
              {/* ORDERBOOK */}
              <ResizablePanel
                defaultSize={55}
                minSize={20}
                className="min-h-0"
              >
                <div className="h-full w-full rounded-md overflow-hidden bg-neutral-900">
                  <OrderBook symbol={symbol || ""} />
                </div>
              </ResizablePanel>
  
              <ResizableHandle withHandle />
  
              {/* BUY/SELL */}
              <ResizablePanel
                defaultSize={45}
                minSize={25}
                className="min-h-0"
              >
                <div className="h-calc w-full overflow-auto rounded-md bg-[#161921]">
                  <BuySellSection
                    isAuthenticated={userContext?.user}
                    symbol={symbol || ""}
                    price={price?.toFixed(3).toString()}
                    balances={userBalances}
                    isLoading={loading}
                  />
                </div>
              </ResizablePanel>
  
            </ResizablePanelGroup>
  
          </ResizablePanel>
  
        </ResizablePanelGroup>
  
      </div>
  
    </div>
  
  );
}