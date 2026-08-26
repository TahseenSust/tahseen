import { ArrowUpRight } from "lucide-react"
import { Section, SectionHeading } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"
import { PAPERS } from "@/data/papers"

export function PaperShelf() {
  return (
    <Section id="paper-shelf">
      <SectionHeading
        label="Paper Shelf"
        description="Papers that shaped how I think about machine learning systems, with a note on why each one stays here."
      />

      <div className="space-y-3">
        {PAPERS.map((paper) => (
          <a
            key={paper.url}
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-border/60 p-5 transition-colors hover:border-accent/40 hover:bg-muted/30"
          >
            <h3 className="flex items-start gap-1.5 text-base font-semibold leading-snug text-foreground">
              {paper.title}
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {paper.authors} · {paper.venue} {paper.year}
            </p>

            <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
              {paper.note}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {paper.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
