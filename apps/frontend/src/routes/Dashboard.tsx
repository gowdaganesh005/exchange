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
        <ScrollArea className="h-56 sm:h-72 md:h-141 w-full col-span-2 rounded-sm border">
  <div className="p-3 sm:p-4">
    <h4 className="mb-3 text-sm font-medium">Orders</h4>

    <Table className="text-[11px] sm:text-xs tracking-tight">
      <TableHeader>
        <TableRow className="h-7">
          <TableHead className="px-2 py-1 font-medium">
            Order ID
          </TableHead>
          <TableHead className="px-2 py-1 font-medium">
            Symbol
          </TableHead>
          <TableHead className="px-2 py-1 font-medium">
            Price
          </TableHead>
          <TableHead className="px-2 py-1 font-medium">
            Qty
          </TableHead>
          <TableHead className="px-2 py-1 text-right font-medium">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {/* {transactions.map((tag: any, idx: number) => (
          <TableRow key={idx} className="h-8 hover:bg-muted/40">
            <TableCell className="px-2 py-1 whitespace-nowrap">
              <OrderIdCell orderId={tag.orderId} />
            </TableCell>

            <TableCell className="px-2 py-1">
              {tag.symbol}
            </TableCell>

            <TableCell className="px-2 py-1 font-mono">
              {tag.quote_price}
            </TableCell>

            <TableCell className="px-2 py-1 font-mono">
              {tag.quote_quantity}
            </TableCell>

            <TableCell className="px-2 py-1 text-right">
              {tag.status === "FULL_FILLED" ? (
                <Badge className="px-2 py-0.5 text-[10px] bg-chart-3 hover:bg-chart-3">
                  Completed
                </Badge>
              ) : (
                <Badge className="px-2 py-0.5 text-[10px] bg-chart-4 hover:bg-chart-4">
                  Pending
                </Badge>
              )}
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  </div>
</ScrollArea>
        
        
        </div>

        </Card>
        </div>
        </>
    )
}