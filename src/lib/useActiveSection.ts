"use client"

import { useEffect, useState } from "react"

/**
 * Tracks which section is currently nearest the top of the viewport so the nav
 * can highlight it. Uses scroll position rather than IntersectionObserver
 * because sections are short and several are visible at once.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "")

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.3
      let current = ids[0] ?? ""

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = id
      }

      // Anything within a screen of the bottom counts as the last section.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80
      ) {
        current = ids[ids.length - 1] ?? current
      }

      setActive(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [ids])

  return active
}
