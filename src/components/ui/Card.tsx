import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-border/40 bg-background/50 p-6 text-foreground shadow-xs backdrop-blur-md transition-all duration-300 hover:border-border/80 hover:bg-background/80 hover:shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
