import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table.tsx";
import axios from "axios";
import { OrderIdCell } from "./OrderIdCell.tsx";
import { Badge } from "./ui/badge.tsx";
import { Skeleton } from "./ui/skeleton.tsx";


export function  PastOrders(){

    const [orders,setOrders]= useState<any>([])
    const [loading ,setLoading ] = useState<boolean>(true)


    useEffect(()=>{
        async function fetchOrders(){
        try {
            const { data } = await axios.get("http://localhost:3000/api/v1/orders",{ withCredentials: true })
            console.log(data)
            setOrders(data);

        } catch (error) {
            console.log(error)
        }

        

        }
        fetchOrders();
        setLoading(false)
    },[])

    return(
        <>
        <ScrollArea className="h-86 md:h-141 w-full col-span-2 rounded-sm border">
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
            Type
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
          <TableHead className="px-2 py-1 font-medium">
            Date
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {loading? 
            [...Array(6)].map((_,i)=>
                <TableRow key={i} className="h-8 hover:bg-muted/40">
                    <TableCell className="px-2 py-1 whitespace-nowrap">
                        <Skeleton className="h-4 w-[70%]" />
                    </TableCell>
                    <TableCell className="px-2 py-1 whitespace-nowrap">
                        <Skeleton className="h-4 w-[70%]" />
                    </TableCell>
                    <TableCell className="px-2 py-1 whitespace-nowrap">
                        <Skeleton className="h-4 w-[70%]" />
                    </TableCell>
                    <TableCell className="px-2 py-1 whitespace-nowrap">
                        <Skeleton className="h-4 w-[70%]" />
                    </TableCell>

                    <TableCell className="px-2 py-1 whitespace-nowrap">
                        <Skeleton className="h-4 w-[70%]" />
                    </TableCell>
                    <TableCell className="px-2 py-1 whitespace-nowrap">
                        <Skeleton className="h-4 w-[70%]" />
                    </TableCell>
                    <TableCell className="  whitespace-nowrap">
                        <Skeleton className="h-4 " />
                    </TableCell>
                  </TableRow>
                )
        :
        orders.map((tag: any, idx: number) => (
          <TableRow key={idx} className="h-8 hover:bg-muted/40">
            <TableCell className="px-2 py-1 whitespace-nowrap">
              <OrderIdCell orderId={tag.orderId} />
            </TableCell>
            
            <TableCell className="px-2 py-1">
              {tag.symbol}
            </TableCell>

            <TableCell className={`${tag.side == 'BUY'? "text-chart-3":"text-destructive"} px-2 py-1`}>
              {tag.side}
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
            <TableCell className="px-2 py-1 whitespace-nowrap">
            <div className="text-[11px] font-medium">
    {new Date(tag.timestamp).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short"
    })}
  </div>
  <div className="text-[10px] text-muted-foreground">
    {new Date(tag.timestamp).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    })}
  </div>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</ScrollArea>
        </>
    )
}