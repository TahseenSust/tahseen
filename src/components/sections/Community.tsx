"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { BookOpen, Scale, Handshake, Dot } from "lucide-react"

const teachingExperience = [
  {
    title: "Trainer, SUST Competitive Programming Camp",
    period: "Jan 2022 – Mar 2023",
    description:
      "Conducted training sessions on algorithms, data structures, and problem solving, while mentoring students and organizing practice contests.",
  },
  {
    title: "Industry Expert, World Bank EDGE Project",
    period: "Sep 2024 – Jan 2025",
    description:
      "Delivered lectures on “Python Programming and Basic Data Science” and “Basic Programming with Python” under the EDGE Project at Shahjalal University of Science and Technology and Metropolitan University, training 300+ students.",
  },
]

const contestContributions = [
  "Problem Setter & Judge, Kite Games Studio SUST Inter University Programming Contest 2024",
  "Problem Setter & Judge, Intra SUST Programming Contest 2024",
  "Problem Setter & Judge, Cefalo SUST Inter University Programming Contest 2023",
  "Problem Setter & Judge, Sylhet Engineering College Junior Inter University Programming Contest 2022",
]

const communityWork = [
  {
    title: "Lead Coordinator, Orbitax SUST SWE Technovent 2023",
    description:
      "Managed and organized competitive coding events, ensuring smooth execution and fair judging processes for participants.",
  },
  {
    title: "Coordinator, Cybersecurity Seminar 2025",
    description:
      "Organized an academic seminar on cybersecurity, hosting a guest lecture by a Senior Engineering Manager to facilitate knowledge exchange and discussion of emerging challenges.",
  },
]

export function Community() {
  return (
    <Section id="community" className="bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="max-w-3xl space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Community
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">
            Teaching & Community
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I enjoy teaching, mentoring, and contributing to technical communities
            through training, contest organization, and academic events.
          </p>
        </div>

        <div className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <h4 className="text-xl font-semibold">Teaching Experience</h4>
            </div>

            <div className="space-y-8 border-l border-border pl-6">
              {teachingExperience.map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h5 className="font-medium text-foreground">{item.title}</h5>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Scale className="h-5 w-5 text-primary" />
              <h4 className="text-xl font-semibold">Contest Contributions</h4>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {contestContributions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded-xl border border-border/50 bg-background/50 p-4 text-sm leading-6 text-foreground"
                >
                  <Dot className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Handshake className="h-5 w-5 text-primary" />
              <h4 className="text-xl font-semibold">Community & Volunteer Work</h4>
            </div>

            <div className="space-y-6 border-l border-border pl-6">
              {communityWork.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h5 className="font-medium text-foreground">{item.title}</h5>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}