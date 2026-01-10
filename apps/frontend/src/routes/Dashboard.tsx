import { Card } from "../components/ui/card.tsx"
import { HoverCard,HoverCardContent,HoverCardTrigger } from "../components/ui/hover-card.tsx"
import { InfoIcon } from "lucide-react"
import { ScrollArea } from "../components/ui/scroll-area.tsx"
import React, { useState } from "react"
import { Separator } from "../components/ui/separator.tsx"
import { Badge } from "../components/ui/badge.tsx"
import { OrderIdCell } from "../components/OrderIdCell.tsx"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table.tsx"
import { UserAssets } from "@/components/UserAssets.tsx"
import { PastOrders } from "@/components/PastOrders.tsx"

export const Dashboard=()=>{

    const [ assetBalance , setAssetBalance ] = useState<any>()
    return (
        <>
        <div className="w-screen h-fit min-h-[680px] flex justify-center pb-2">
        <Card className="w-full md:h-190  max-w-4xl  rounded-sm p-4">
            <div className="text-2xl font-medium"
            >Dashboard</div>
            <div className=" text-sm text-secondary">See your balances and transactions</div>

        
        <div className="grid grid-cols-1  lg:grid-cols-3 py-2 gap-1">
            <Card className="  rounded-sm p-2 px-4">
              <div className="text-muted-foreground font-semibold">Available Balance</div>
              <div className="text-muted-foreground text-xs font-medium  -my-1.5">Free Balance
              <HoverCard>
                <HoverCardTrigger>
                    <InfoIcon className="inline mx-1 w-2.5"/>
                </HoverCardTrigger>
                <HoverCardContent>
                    This is your available balance for placing trades.               
                </HoverCardContent>
                </HoverCard>
              </div>
              <div className="py-2 text-secondary-foreground">
                <div className="font-semibold text-2xl inline ">$4332.124 </div>
                <div className="text-sm inline ">USDT </div>
              </div>
            </Card>
           
            <Card className="  rounded-sm p-2 px-4 ">
              <div className="text-muted-foreground font-semibold">Locked Balance</div>
              <div className="text-muted-foreground text-xs font-medium  -my-1.5">Lock Balance
              <HoverCard>
                <HoverCardTrigger>
                    <InfoIcon className="inline mx-1 w-2.5"/>
                </HoverCardTrigger>
                <HoverCardContent>
                    Funds locked in open orders and cannot be used until those orders are completed or canceled.               
                </HoverCardContent>
                </HoverCard>
              </div>
               <div className="py-2 text-secondary-foreground">
                <div className="font-semibold text-2xl inline ">$4332.124 </div>
                <div className="text-sm inline ">USDT </div>
              </div>
            </Card>
            <Card className="  rounded-sm p-2 px-4 ">
              <div className="text-muted-foreground font-semibold">Total Profit</div>              
              <div className="pt-5 text-secondary-foreground">
                <div className="font-semibold text-2xl inline ">$4332.124 </div>
                <div className="text-sm inline ">USDT </div>
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