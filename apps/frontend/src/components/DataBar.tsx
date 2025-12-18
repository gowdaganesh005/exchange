import Card from "./Card.tsx";

const DataBar = () => (
  <div className="px-3 sm:px-6 w-full">
    <div className="w-full bg-transparent shadow-[0_8px_30px_rgba(200,200,200,0.1)] rounded-md">
      <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
        <div className="px-4 py-2 bg-[rgb(var(--foreground2-rgb))] text-sm font-semibold rounded-xl flex items-center">
          BTC / USDT
        </div>
        <div className="text-right">
          <div className="text-lg sm:text-xl font-semibold text-white leading-tight">
            0.0834
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            $0.083
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataBar;
