"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <Section id="education" className="bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Academic Background
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-semibold">Degree</h4>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-lg">B.Sc. in Software Engineering</h5>
              <p className="text-primary/80">Shahjalal University of Science and Technology (SUST)</p>
              <div className="text-sm text-muted-foreground flex flex-col sm:flex-row justify-between pt-2 border-t border-border mt-4 gap-2">
                <span>2018 – 2023</span>
                <div className="flex flex-col sm:items-end">
                  <span className="font-medium text-foreground">CGPA: 3.35 / 4.00</span>
                  <span className="text-xs mt-0.5">Average 3.75 in last 4 semesters</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-border">
              <h6 className="text-sm font-medium mb-3 text-foreground/80">Key Activities & Leadership</h6>
              <ul className="space-y-3">
                {[
                  "Represented SUST in national competitive programming contests",
                  "Mentored students through specialized training sessions in Data Structures and Algorithms",
                  "Organized and led intra-university programming competitions",
                  "Took on leadership responsibilities in national technology festivals",
                ].map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex gap-3">
                    <span className="text-primary/40 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-current" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}
