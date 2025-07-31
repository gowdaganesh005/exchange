import Card from "./Card.tsx";
function DataBar(){
    return(
        <>
        <div className="px-4">
        <Card insetShadow={false} className=" shadow-[0_8px_30px_rgb(200,200,200,0.1)]   max-w-full w-full bg- ">
            <div className="text-amber-50 px-2 py-3 w-full flex justify-between">
                <Card insetShadow={false} className="py-2 px-4 bg-[rgb(var(--foreground2-rgb))]  flex items-center font-medium rounded-xl">
                    BTC/USDT
                </Card>
                <div className="px-4">
                    <div className="text-xl  font-medium ">
                         {0.0834}
                    </div>
                    <div>
                        ${0.083}
                    </div>
                </div>
            </div>
            
        </Card>
        </div>
        
        </>
    )
}


export default DataBar;