import { ReactNode } from "react";

function Card({
  children,
  className = "",
  insetShadow = true,
}: {
  children: ReactNode;
  className?: string;
  insetShadow?: boolean;
}) {
  return (
    <div
      className={`bg-[rgb(var(--foreground-rgb))] w-fit rounded-sm ${insetShadow ? 'shadow-[0px_1px_2px_rgb(255,255,255,0.1)_inset,0px_-1px_4px_1px_rgba(255,255,255,0.1)_inset]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
