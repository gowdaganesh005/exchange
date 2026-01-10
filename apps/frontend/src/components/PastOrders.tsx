import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area.tsx";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table.tsx";

export function  PastOrders(){

    const [transactions,setTransactions]= useState<any>([])
    const [loading ,setLoading ] = useState<boolean>(true)


    return(
        <>
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
        </>
    )
}