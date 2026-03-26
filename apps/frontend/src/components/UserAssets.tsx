import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton.tsx";
import axios from "axios";

export function UserAssets(){
    const [ loading ,setLoading ] = useState<boolean>(true)
    const [assetBalances,setAssetBalances] = useState<any>([]);

    useEffect(()=>{
        async function fetchMyAssets(){
            const { data } = await axios.get("http://localhost:3000/api/v1/my_assets",{withCredentials:true})
            console.log(" User Assests Fetch :: ",data)
            setAssetBalances(data)
        } 

        try {
          fetchMyAssets();
        } catch (error) {
          console.log("Error Fetching the Assets Balances")
        }
       
        
        setLoading(false);
    },[])
    return(
        <>
        <ScrollArea className="h-50 md:h-141 bg-card  w-full shadow-[rgba(50,50,93,0.5)_0px_50px_100px_-20px,rgba(0,0,0,0.5)_0px_30px_60px_-30px,rgba(10,37,64,0.5)_0px_-2px_6px_0px_inset]  rounded-sm border text-xs ">
            <div className="p-4">
              <h2 className="mb-4  leading-none font-medium">Your Assets</h2>
              <div className="flex justify-between py-2">
                <div>Asset</div>
                <div>Available</div>
                <div>Locked</div>
              </div>
              {loading?
              <>
                {[...Array(5)].map((_,i)=>
                <div key={i}
                className={`
                    flex justify-between gap-1 py-2 `}>
                  <Skeleton className="h-6 w-[20%]" />
                  <Skeleton className="h-6 w-[40%]" />
                  <Skeleton className="h-6 w-[40%]" />
                </div>)} 
              </>:
              assetBalances.map((tag:any) => (
                <div >
                  <div className="flex justify-between py-2 ">
                      <div>{tag.asset.split("/")[0]}</div>
                      
                      <div className="text-chart-3 pr-5">{tag.freeBalance}</div>
                      <div className="text-destructive">{tag.lockedBalance}</div>
                      
                  </div>
                  <Separator className="bg-muted" />
                </div>
              ))}
            </div>
        </ScrollArea>
        
        </>
    )
}