"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Award, Trophy } from "lucide-react"

const achievements = [
  "ICPC Dhaka Regional 2019 — Ranked 21st",
  "ICPC Dhaka Regional 2018 — Ranked 30th",
  "National High School Programming Contest 2016 (National Round) — Ranked 6th",
  "Leading University CSE Carnival 2019 — Ranked 12th",
  "MIST NCPC 2020 — Ranked 30th",
  "ICPC Dhaka Regional Preliminary 2019 — Ranked 15th",
  "ICPC Dhaka Regional Preliminary 2020 — Ranked 24th",
  "SUST Techfest 2019 — Ranked 16th",
]

export function Achievements() {
  return (
    <Section id="achievements" className="bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-3 max-w-3xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Achievements
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">
            Competitive Programming
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Competitive programming has played a strong role in shaping my
            problem-solving approach, algorithmic thinking, and ability to work
            through complex technical challenges.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl"
        >
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                <Trophy className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-semibold">Selected Achievements</h4>
            </div>

            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6 text-foreground">
                  <Award className="mt-1 h-4 w-4 shrink-0 text-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              Also active on online judges, with a <u><a href="https://codeforces.com/profile/Tahseen" target="_blank" rel="noopener noreferrer">Codeforces</a></u> max rating of 1626,
              a <u><a href="https://www.codechef.com/users/tahseen_syl" target="_blank" rel="noopener noreferrer">CodeChef</a></u>  max rating of 1941, around 250 problems solved on <u><a href="https://lightoj.com/user/tahseenrchow" target="_blank" rel="noopener noreferrer">LightOJ</a></u>,
              and around 600 problems solved on <u><a href="https://uhunt.onlinejudge.org/id/646297" target="_blank" rel="noopener noreferrer">UVA</a></u>.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}