import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { useEffect, useState } from "react";
import { Empty, EmptyContent, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty.tsx";
import { Spinner } from "./ui/spinner.tsx";
import { Skeleton } from "./ui/skeleton.tsx";

export function UserAssets(){
    const [ loading ,setLoading ] = useState<boolean>(true)
    const [assetBalances,setAssetBalances] = useState<any>([]);

    useEffect(()=>{
        setAssetBalances([ {
            asset: "BTC/USDT",
            balance:  78.23
        }])
    },[])
    return(
        <>
        <ScrollArea className="h-72 md:h-141   w-full  rounded-sm border">
            <div className="p-4">
              <h2 className="mb-4  leading-none font-medium">Your Assets</h2>
              {loading?
              <>
                {[...Array(6)].map((_,i)=>
                <div key={i}
                className={`
                    flex justify-between py-2 `}>
                  <Skeleton className="h-6 w-[20%]" />
                  <Skeleton className="h-6 w-[70%]" />
                </div>)} 
              </>:
              assetBalances.map((tag:any) => (
                <div >
                  <div className="flex justify-between py-2">
                      <div>{tag.asset.split("/")[0]}</div>
                      <div>{tag.balance}</div>
                  </div>
                  <Separator className="bg-muted" />
                </div>
              ))}
            </div>
        </ScrollArea>
        
        </>
    )
}