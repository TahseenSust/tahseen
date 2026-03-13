import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32 flex flex-col justify-center",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}
