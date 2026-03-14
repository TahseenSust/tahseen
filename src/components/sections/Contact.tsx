"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Mail } from "lucide-react"
import { contactData } from "@/data/contact"

export function Contact() {
  return (
    <Section
      id="contact"
      className="min-h-[70vh] items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-2xl flex-col items-center space-y-8"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
          <Mail className="h-8 w-8" />
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Let’s connect
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            I’m always open to thoughtful conversations around software engineering, AI systems,
            machine learning, security, and impactful technical work. If you’d like to discuss
            a collaboration, research, or an engineering opportunity, I’d be glad to connect.
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <a
            href={`mailto:${contactData.email}`}
            className="text-2xl font-medium text-foreground underline decoration-primary/30 underline-offset-8 transition-colors hover:text-primary md:text-3xl"
          >
            {contactData.email}
          </a>

          <a href={`mailto:${contactData.email}`} className="inline-block">
            <Button
              size="lg"
              className="h-12 cursor-pointer rounded-full px-8 text-base"
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </motion.div>
    </Section>
  )
}