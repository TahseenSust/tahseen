"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { contactData } from "@/data/contact"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen pb-0 pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex max-w-3xl flex-col gap-6"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-foreground"
          >
            Tahseen Rasheed Chowdhury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            Engineer · Explorer · Researcher
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="max-w-3xl text-xl font-medium tracking-tight text-foreground sm:text-2xl md:text-3xl"
          >
            Software Engineer building AI systems, backend infrastructure, and practical machine learning products
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          I build reliable software across backend systems, agentic AI workflows, retrieval pipelines, and applied machine learning. My work focuses on turning complex ideas into usable, production-ready systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <a href="#expertise">
            <Button size="lg" className="rounded-full gap-2 group cursor-pointer">
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="rounded-full cursor-pointer">
              Get in Touch
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-5 pt-8 text-muted-foreground"
        >
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-foreground transition-colors p-2 -ml-2 rounded-full hover:bg-muted/50"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/tahseenrchowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted/50"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/TahseenSust"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted/50"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </Section>
  )
}