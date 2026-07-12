import { ReactNode } from "react";
import { motion, type HTMLMotionProps} from "motion/react"

type CardProps = HTMLMotionProps<"div"> & {
  children: ReactNode,
  insetShadow?: boolean
}

function Card({
  children,
  className = "",
  insetShadow = true,
  ...props
}:CardProps) {
  return (
    <motion.div
    {...props}
      className={`bg-[rgb(var(--foreground-rgb))]  ${insetShadow ? 'shadow-[0px_1px_2px_rgb(255,255,255,0.1)_inset,0px_-1px_4px_1px_rgba(255,255,255,0.1)_inset]' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
