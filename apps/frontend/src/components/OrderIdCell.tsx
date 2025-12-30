import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip.tsx";

export function OrderIdCell({ orderId }: { orderId: string }) {
  const [copied, setCopied] = useState(false);

  const shortDesktop = `${orderId.slice(0, 4)}…${orderId.slice(-3)}`;
  const shortMobile = orderId.slice(0, 4);

  const copy = async () => {
    await navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-center gap-1 max-w-[64px] sm:max-w-[120px]">
      {/* Mobile text */}
      <span className="font-mono text-[11px] sm:hidden truncate">
        {shortMobile}
      </span>

      {/* Desktop text */}
      <span className="hidden sm:block font-mono text-xs truncate">
        {shortDesktop}
      </span>

      {/* Copy button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={copy}
            className="opacity-70 hover:opacity-100 transition shrink-0"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3 text-muted-foreground hover:text-foreground" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {copied ? "Copied" : "Copy order ID"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
