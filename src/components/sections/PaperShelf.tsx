import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Section, SectionHeading } from "@/components/ui/Section"
import { PAPERS } from "@/data/papers"

/** Home page keeps the shelf short — the first few entries, then the full page. */
const PREVIEW_COUNT = 3

export function PaperShelf() {
  const preview = PAPERS.slice(0, PREVIEW_COUNT)

  return (
    <Section id="paper-shelf">
      <SectionHeading
        label="Paper Shelf"
        description="Papers that shaped how I think about machine learning systems, with a note on why each one stays here."
      />

      <ul className="divide-y divide-border/60 border-y border-border/60">
        {preview.map((paper) => (
          <li key={paper.url}>
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-3.5"
            >
              <h3 className="flex items-start gap-1.5 text-sm font-semibold leading-snug text-foreground">
                {paper.title}
                <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {paper.authors} · {paper.venue} {paper.year}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <Link
        href="/paper-shelf"
        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        See the full paper shelf ({PAPERS.length} papers)
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Section>
  )
}
