"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { BookOpen } from "lucide-react"

const RESEARCH_ITEMS = [
  "Efficient and Accurate Color-Based Segmentation using Deep Learning and K-D Tree",
  "Automated trimap generation using semantic segmentation",
  "K-D tree-based classification for unknown regions"
]

export function Research() {
  return (
    <Section id="research">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Academic
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Research</h2>
        </div>

        <ul className="space-y-4 max-w-3xl">
          {RESEARCH_ITEMS.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
            >
              <div className="mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                <BookOpen className="h-5 w-5" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {item}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
