"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 transition-all duration-300 md:px-12",
        scrolled
          ? "bg-background/70 backdrop-blur-lg border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="text-sm font-medium tracking-tight text-foreground">
        <a href="#hero" className="hover:opacity-80 transition-opacity">
          Tahseen<span className="text-muted-foreground">.</span>
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
        <a href="#research" className="hover:text-foreground transition-colors">Research</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
    </header>
  )
}
