import { Github, Linkedin, Mail } from "lucide-react"
import { Section, SectionHeading } from "@/components/ui/Section"
import { contactData } from "@/data/contact"

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading label="Contact" />

      <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          I&apos;m glad to hear from faculty and researchers about graduate
          study, research collaboration, or engineering work in machine
          learning, software security, and AI systems. The fastest way to reach
          me is email.
        </p>

        <a
          href={`mailto:${contactData.email}`}
          className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-foreground underline decoration-accent/40 underline-offset-8 transition-colors hover:text-accent"
        >
          <Mail className="h-4 w-4" />
          {contactData.email}
        </a>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  )
}
