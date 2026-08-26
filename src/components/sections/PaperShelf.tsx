"use client"

import { motion } from "framer-motion"
import { FileText, ArrowUpRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"
import { PAPERS } from "@/data/papers"

export function PaperShelf() {
  return (
    <Section id="paper-shelf">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div className="space-y-3 max-w-3xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Paper Shelf
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">
            Papers I Keep Coming Back To
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A running shelf of papers that shaped how I think about machine learning
            systems, with a short note on why each one stays here.
          </p>
        </div>

        <div className="space-y-4">
          {PAPERS.map((paper, index) => (
            <motion.a
              key={paper.url}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group block rounded-2xl border border-border/60 bg-background/60 p-6 shadow-sm transition-all hover:border-border hover:bg-background/80"
            >
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 text-muted-foreground">
                  <FileText className="h-5 w-5" />
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="flex items-start gap-1.5 text-lg font-semibold leading-snug text-foreground">
                      {paper.title}
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {paper.authors} · {paper.venue} {paper.year}
                    </p>
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {paper.note}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
