"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { contactData } from "@/data/contact"

export function Contact() {
  return (
    <Section id="contact" className="min-h-[70vh] items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto space-y-8 flex flex-col items-center"
      >
        <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4">
          <Mail className="h-8 w-8" />
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's build something.</h2>

        <p className="text-lg text-muted-foreground">
          I am always open to discussing system architecture, AI applications, or interesting engineering challenges. Whether you have a project in mind or just want to connect, my inbox is open.
        </p>

        <div className="space-y-4 flex flex-col items-center gap-y-4">
          <a
            href={`mailto:${contactData.email}`}
            className="text-2xl md:text-3xl font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-8"
          >
            {contactData.email}
          </a>

          <div className="">
            <a href={`mailto:${contactData.email}`} className="inline-block">
              <Button size="lg" className="rounded-full gap-2 px-8 h-12 text-base cursor-pointer">
                Say Hello
              </Button>
            </a>
          </div>
        </div>


      </motion.div>
    </Section>
  )
}
