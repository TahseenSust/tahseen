"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { EXPERTISE } from "@/data/expertise"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Expertise() {
  return (
    <Section id="expertise">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="space-y-12"
      >
        <div className="space-y-3 max-w-3xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Selected Work
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">
            Engineering Focus
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My work spans backend systems, AI applications, applied machine learning,
            and full-stack product development, with an emphasis on building reliable,
            production-ready software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((exp, index) => {
            const Icon = exp.icon

            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full flex flex-col transition-all hover:border-primary/20 hover:shadow-primary/5">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-3 text-lg font-semibold">{exp.title}</h4>
                  <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}