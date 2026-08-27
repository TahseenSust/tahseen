import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/ui/Footer"
import { PaperCard } from "@/components/ui/PaperCard"
import { PAPERS } from "@/data/papers"

export const metadata: Metadata = {
  title: "Paper Shelf | Tahseen Rasheed Chowdhury",
  description:
    "Papers that shaped how Tahseen Rasheed Chowdhury thinks about machine learning systems, with a note on why each one stays on the shelf.",
}

export default function PaperShelfPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <Link
        href="/#paper-shelf"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back to home
      </Link>

      <header className="mt-8 space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Paper Shelf
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Papers I keep coming back to
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          Papers that shaped how I think about machine learning systems, with a
          note on why each one stays here.
        </p>
      </header>

      <div className="mt-8 space-y-3">
        {PAPERS.map((paper) => (
          <PaperCard key={paper.url} paper={paper} />
        ))}
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}
