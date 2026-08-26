"use client"

import { NAV_ITEMS } from "@/data/nav"
import { useActiveSection } from "@/lib/useActiveSection"
import { cn } from "@/lib/utils"

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

/** Sticky, horizontally scrollable section nav for viewports without the sidebar. */
export function MobileNav() {
  const active = useActiveSection(NAV_IDS)

  return (
    <div className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md lg:hidden">
      <nav
        aria-label="Sections"
        className="flex gap-1 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors",
              active === item.id
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
