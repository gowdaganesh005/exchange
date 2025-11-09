import { useState } from "react";

export const BuySellSection = () => {
  const [activeTab, setActiveTab] = useState<"BUY" | "SELL">("BUY");

  return (
    <div className="text-white">
      {/* Tabs */}
      <div className="flex w-full gap-4 justify-between rounded-t-2xl">
        <div className="relative flex justify-between w-full text-sm">
          {/* Animated background indicator */}
          <div
            className={`h-11 absolute -top-1 left-0 w-1/2 rounded-xs border border-b-2 border-t-0 border-r-0 border-l-0 mt-[1px] z-0 transition-transform duration-200 ease-in-out ${
              activeTab === "BUY"
                ? "rounded-tl-2xl bg-emerald-400"
                : "rounded-tr-2xl bg-red-700"
            }`}
            style={{
              transform:
                activeTab === "BUY" ? "translateX(0%)" : "translateX(100%)",
            }}
          ></div>

          {/* Buttons */}
          <div className="h-10 text-md flex w-full justify-between relative z-10 rounded-2xl">
            <button
              onClick={() => setActiveTab("BUY")}
              className={`font-bold text-center w-1/2 rounded-2xl transition-colors ${
                activeTab === "BUY" ? "text-emerald-700" : ""
              }`}
            >
              BUY
            </button>

            <button
              onClick={() => setActiveTab("SELL")}
              className={`font-bold text-center w-1/2 rounded-2xl transition-colors ${
                activeTab === "SELL" ? "text-red-300" : ""
              }`}
            >
              SELL
            </button>
          </div>
        </div>
      </div>

      
      <div className="relative h-full px-1 pr-3">
        
        <div className="w-full text-center py-3 text-blue-50 my-2 px-3 flex justify-between items-center rounded-4xl mx-1 bg-neutral-700">
          <div className="flex items-center gap-3 opacity-50">
            
            <img
              src="crypto.svg"
              alt="symbol"
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                objectFit: "contain",
              }}
            />
            <div className="text-gray-400 opacity-65">BTC</div>
          </div>

          <div className="font-bold">
          <input
              type="text"
              className="border-0 max-w-28 lg:w-24 w-12 h-10 text-right rounded-3xl bg-neutral-800 text-white   px-2"
              value={1}
              readOnly
            />
          </div>
        </div>
          <div className="absolute left-1/2 top-13">
          <svg className="w-8" viewBox="-4 -4 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#38cc78" stroke-width="0.24"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4" y="-4" width="24.00" height="24.00" rx="12" fill="#262626" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#05df72"> <path d="M1.45 3.74a.75.75 0 001.1 1.02l1.95-2.1v5.59a.75.75 0 101.5 0V2.66l1.95 2.1a.75.75 0 101.1-1.02L5.8.24a.75.75 0 00-1.1 0l-3.25 3.5zM10.75 7a.75.75 0 00-.75.75v5.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75a.75.75 0 00-.75-.75z"></path> </g> </g></svg>          </div>

        
        <div className="w-full text-center py-3 text-blue-50 my-2 px-3 flex justify-between items-center rounded-4xl mx-1 bg-neutral-700">
          <div className="flex items-center gap-3 opacity-50">
            
            <img
              src="usd.svg"
              alt="symbol"
              style={{
                
                flexShrink: 0,
                objectFit: "contain",
                
              }}
              className="size-11 -mx-1 -my-1"
              
            />
            <div className="text-gray-400 opacity-65">USD</div>
          </div>

          <div className="font-bold">
            <input
              type="text"
              className=" max-w-28 lg:w-24 w-12 h-10 text-right rounded-3xl bg-neutral-800 text-white  px-2"
              value={100000}
              
            />
          </div>
        </div>
      </div>
      <div className="px-2">
        <button className="w-full py-3 bg-emerald-500 -400 rounded-3xl ">
          BUY 
        </button>
      </div>
    </div>
  );
};
