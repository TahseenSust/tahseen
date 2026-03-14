"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          About
        </h3>

        <div className="prose prose-neutral dark:prose-invert max-w-3xl text-lg leading-relaxed text-foreground">
          <p>
            I am a software engineer working across backend systems, AI applications, full-stack product development, and applied machine learning. My work is centered on building reliable software that is technically strong, practical to use, and ready for real-world deployment.
          </p>
          <p className="mt-4">
            Over time, I have worked on a wide range of systems, including payment orchestration infrastructure, retrieval-augmented generation pipelines, LangGraph-based agent workflows, full-stack web platforms, and computer vision pipelines such as semantic segmentation. I enjoy moving between system design, implementation, and product thinking to turn complex ideas into usable software.
          </p>
          <p className="mt-4">
            I am especially interested in the intersection of software engineering, machine learning, security, and trustworthy AI. I care about building systems that are scalable, maintainable, and thoughtfully engineered, with clean architecture, strong testing practices, and long-term usability in mind.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}