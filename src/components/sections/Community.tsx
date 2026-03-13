"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Users } from "lucide-react"

export function Community() {
  return (
    <Section id="community" className="bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Giving Back
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Teaching & Community</h2>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            "Trainer, SUST Competitive Programming Camp",
            "Industry Expert, World Bank EDGE project",
            "Problem Setter & Judge for university programming contests",
            "Organized and contributed to academic and technical events",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-3 items-start p-4 rounded-xl hover:bg-background/50 transition-colors"
            >
              <div className="mt-0.5 shrink-0 text-muted-foreground">
                <Users className="h-4 w-4" />
              </div>
              <p className="text-foreground text-sm font-medium leading-relaxed">
                {item}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
