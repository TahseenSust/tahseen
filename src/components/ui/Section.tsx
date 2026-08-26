import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
}

/**
 * Content sections stack inside the scrolling column. Spacing is deliberately
 * tight so a visitor sees several sections per screen instead of one.
 */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "border-t border-border/60 py-10 first:border-t-0 first:pt-0 md:py-12",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export interface SectionHeadingProps {
  label: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export function SectionHeading({
  label,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
      <div className="space-y-1.5">
        <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {label}
        </h2>
        {title ? (
          <p className="text-xl font-semibold tracking-tight text-foreground">
            {title}
          </p>
        ) : null}
        {description ? (
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  )
}
