import { Card } from "../components/ui/card.tsx"
import { HoverCard,HoverCardContent,HoverCardTrigger } from "../components/ui/hover-card.tsx"
import { InfoIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { UserAssets } from "@/components/UserAssets.tsx"
import { PastOrders } from "@/components/PastOrders.tsx"
import axios from "axios"
import { Skeleton } from "@/components/ui/skeleton.tsx"

export const Dashboard=()=>{

    const [ assetBalance , setAssetBalance ] = useState<any>()
    const [loading ,setLoading] = useState<boolean>(true);

    useEffect(()=>{
      async function fetchBalances(){
        try {
          const { data } = await axios.get(
            "http://localhost:3000/api/v1/balance",
            { withCredentials: true }
          );
    
          setAssetBalance({
            lockedBalance: data.wallets[0]?.lockedBalance ?? 0,
            freeBalance: data.wallets[0]?.freeBalance ?? 0,
            profit: data.profit ?? 0
          });
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false); 
        }
      }
      fetchBalances()
      
    },[])


    

    return (
        <>
        <div className="w-screen py-15 h-screen min-h-[680px] bg-background flex justify-center pb-2">
        <Card className="w-full h-[128%]  max-w-4xl bg-background  rounded-sm p-4 ">
            <div className="text-2xl font-medium"
            >Dashboard</div>
            <div className=" text-sm text-secondary">See your balances and transactions</div>

        
        <div className="grid grid-cols-1 bg-background  lg:grid-cols-3 py-2 gap-1">
        <Card className="rounded-sm p-2 px-4 bg-card  shadow-[inset_-8px_-25px_45px_rgba(0,0,0,0.35)]">              
            <div className="text-muted-foreground font-semibold">Total Profit</div>              
              <div className=" flex pt-5 text-secondary-foreground">
              <div className="font-semibold text-chart-3 text-2xl inline ">{
                  loading?
                  <>
                    <div>
                      <Skeleton className=" h-6 w-15" />
                    </div>
                  </>:
                  <>
                    {assetBalance.profit}
                  </>}</div>
                <div className="text-lg pt-1 pl-2 inline ">USDT </div>
              </div>
            </Card>
            <Card className="  rounded-sm p-2 px-4 bg-card shadow-[inset_6px_20px_45px_rgba(0,0,0,0.32)] ">
              <div className=" font-semibold">Available Balance</div>
              <div className=" text-xs font-medium  -my-1.5">Free Balance
              <HoverCard>
                <HoverCardTrigger>
                    <InfoIcon className="inline mx-1 w-2.5"/>
                </HoverCardTrigger>
                <HoverCardContent>
                    This is your available balance for placing trades.               
                </HoverCardContent>
                </HoverCard>
              </div>
              <div className="py-2 flex  ">
                <div className="font-semibold text-2xl inline ">{
                  loading?
                  <>
                    <div>
                      <Skeleton className=" h-6 w-15" />
                    </div>
                  </>:
                  <>
                    {assetBalance.freeBalance}
                  </>}</div>
                <div className="text-lg pt-1 pl-2 inline font-medium">USDT </div>
              </div>
            </Card>
           
            <Card className="  rounded-sm p-2 px-4 bg-card shadow-[inset_10px_-25px_45px_rgba(0,0,0,0.32)] ">
              <div className=" font-semibold">Locked Balance</div>
              <div className=" text-xs font-medium  -my-1.5">Lock Balance
              <HoverCard>
                <HoverCardTrigger>
                    <InfoIcon className="inline font-bold mx-1 w-2.5"/>
                </HoverCardTrigger>
                <HoverCardContent>
                    Funds locked in open orders and cannot be used until those orders are completed or canceled.               
                </HoverCardContent>
                </HoverCard>
              </div>
               <div className=" flex  py-2 ">
               <div className="font-semibold text-2xl inline ">{
                  loading?
                  <>
                    <div>
                      <Skeleton className=" h-6 w-15" />
                    </div>
                  </>:
                  <>
                    {assetBalance.lockedBalance}
                  </>}</div>                
                  <div className="text-lg pt-1 pl-2 font-medium inline ">USDT </div>
              </div>
            </Card>
            
            
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-1 ">
             
        <UserAssets />
        <PastOrders />
        
        
        </div>

        </Card>
        </div>
        </>
    )
}