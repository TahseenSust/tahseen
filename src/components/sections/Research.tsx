"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { BookOpen } from "lucide-react"

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
            Research
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">
            Research Experience
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl rounded-2xl border border-border/60 bg-background/60 p-6"
        >
          <div className="flex gap-4">
            <div className="mt-1 shrink-0 text-muted-foreground">
              <BookOpen className="h-5 w-5" />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold leading-snug text-foreground">
                  Efficient and Accurate Color-Based Segmentation Using Deep Learning and K-D Tree
                </h4>

                <p className="text-sm text-muted-foreground">
                  Supervised by{" "}
                  <a
                    href="https://scholar.google.com/citations?user=BwC_9VIAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Partha Protim Paul
                  </a>
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  Worked on a computer vision research project focused on improving
                  color-based segmentation accuracy and efficiency through a combination
                  of deep learning and K-D tree–based methods.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="text-sm leading-6 text-muted-foreground">
                  <span className="mr-2 text-foreground">•</span>
                  Automated trimap generation using semantic segmentation
                </li>
                <li className="text-sm leading-6 text-muted-foreground">
                  <span className="mr-2 text-foreground">•</span>
                  Used K-D tree–based classification to identify the class of unknown regions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}