"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Award, Trophy } from "lucide-react"

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
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Milestones
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Achievements</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl"
        >
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Trophy className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-semibold">Competitive Programming</h4>
            </div>
            <ul className="space-y-3">
              {[
                "ICPC Dhaka Regional Contest 2019: Rank 21th",
                "ICPC Dhaka Regional Contest 2018: Rank 30th",
                "MIST NCPC 2020: Rank 30th",
                "NHSPC 2016 National Round: Rank 6th",
                "Champion, SUST Science Arena Math Olympiad 2018 & 2019",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Award className="h-4 w-4 shrink-0 mt-0.5 text-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border leading-relaxed">
              Active participant across platforms including Codeforces, LeetCode, AtCoder, Meta, Google, HackerRank, CodeChef, LightOJ, and UVA.
            </p>
          </Card>

        </motion.div>
      </motion.div>
    </Section>
  )
}
