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
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Expertise() {
  return (
    <Section id="expertise" className="bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="space-y-12"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Selected Work & Expertise
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Areas of Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full flex flex-col hover:border-primary/20 hover:shadow-primary/5 transition-all">
                  <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
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
