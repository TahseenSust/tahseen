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
        
        <div className="prose prose-neutral dark:prose-invert text-lg leading-relaxed text-foreground max-w-3xl">
          <p>
            I am a software engineer with cross-disciplinary experience across backend engineering, full-stack product development, AI systems, machine learning, and developer tooling. 
          </p>
          <p className="mt-4">
            My work spans building critical components like payment orchestration systems that handle high transaction volumes securely, designing RAG pipelines of LangGraph-based agentic workflows, engineering full-stack web platforms, and developing semantic segmentation pipelines. I have architected and deployed scalable cloud solutions that solve real business problems.
          </p>
          <p className="mt-4">
            I am deeply interested in the intersection of software engineering, machine learning, security, and the practical, everyday applications of artificial intelligence. I focus on writing clean, tested, and maintainable code to build systems that scale gracefully.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
