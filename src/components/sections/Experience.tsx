"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { EXPERIENCES } from "@/data/experience"
import { MapPin } from "lucide-react"

export function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Experience
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Work History</h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="font-medium text-primary/80 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right shrink-0">
                    <p className="font-medium">{exp.period}</p>
                    <p className="flex items-center gap-1 mt-1 md:justify-end">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-3">
                      <span className="text-primary/40 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-current" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
