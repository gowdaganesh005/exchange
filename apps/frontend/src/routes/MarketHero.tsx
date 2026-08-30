import Card from "@/components/Card.tsx"
import { ScrollArea } from "@/components/ui/scroll-area.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"


export const  MarketHero = ()=>{
    const [marketData , setMarketData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchmarketData(){
        setLoading(true);
        const data = await  axios.get("http://localhost:3000/api/v1/allPrice")
        if(data) setMarketData(data.data)
             
        data.data.map(ele => {
            const up = ele.prevdayClose <= ele.price ? true: false;
            ele["up"]= up;
            const changePercent = Math.abs(ele.prevdayClose-ele.price)/100;
            ele['changePrecent'] = changePercent;
            const wordSplit = ele.code.split("/");
            const page = wordSplit[0]+'-'+wordSplit[1];
            ele['redirect'] = page;



        });
   console.log(data)

        setLoading(false)
        
    } 

    useEffect(()=>{

        fetchmarketData();
        console.log(marketData)
    },[])

    const navigate = useNavigate();
    
    return(
    <>
        <Card className=" h-[calc(100vh-60px)] w-full flex justify-center border-primary/60 rounded-xl p-4">
        <div className="xl:max-w-5/7">
        <div className="relative w-full">
            <div className="absolute z-10 top-5 left-5">
                <div className="text-4xl font-semibold">
                    Live Market
                </div>
                <div className="abolute text-xl opacity-80 font-medium">
                    Zenex Trading starts now , Maximize you benefits
                </div>    
            </div>
            <img
                src="walletHero.png"
                alt="Markets"
                className="hidden md:block w-full opacity-50 h-auto mb-5"
            />

            
            <img
                src="marketHeroMobile.png"
                alt="Markets"
                className="block md:hidden w-full opacity-50 h-auto mb-5"
            />

        </div>


            <div className="h-1 w-full bg-foreground/70 rounded-full" />
            <div className="p-4 grid xl:grid-cols-2 gap-5 overflow-scroll ">
                
                    {!loading && marketData.map((tag) => (
                    <React.Fragment  key={tag}>
                    <Card 
                        onClick={()=>navigate(`/trade/${tag.redirect}`)} 
                        className="bg-card p-5 md:pr-15 rounded-xl flex justify-between xl:h-40 items-center gap-4"> 
                        <div className="flex items-center gap-10">
                        <img className="w-10 xl:w-25" src={`${tag.img}.png`} alt="" />
                        <div className="text-lg md:text-2xl font-semibold">
                            <div>{tag.symbol.toUpperCase()}</div>
                            <div className="text-sm md:text-xl font-medium">{tag.code}</div>
                        </div>
                        </div>
                        <div className="flex md:text-3xl text-xl font-light gap-5 md:gap-15">
                           <div> 
                                {tag.price}
                            </div>
                            <div className={tag.up?'text-chart-3':'text-destructive'+"flex"}>
                                {tag.up? '+':'-'}{tag.prevdayClose}{'%'}
                            </div>
                        </div>
                    </Card>
                    </React.Fragment>
                    ))}
            </div>
            </div> 
        </Card>
    
    
    </>)

}