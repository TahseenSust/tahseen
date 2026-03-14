"use client"

import { motion } from "framer-motion"
import { Bug, Shield, BrainCircuit, Blocks, Code2 } from "lucide-react"
import { Section } from "@/components/ui/Section"

const interests = [
    {
        title: "Application Security",
        description:
            "Exploring application security, vulnerability analysis, and techniques for identifying and understanding weaknesses in software systems.",
        icon: Shield,
    },
    {
        title: "ML for Vulnerability Detection",
        description:
            "Interested in applying machine learning to detect software vulnerabilities, uncover defects, and strengthen software quality and security.",
        icon: Bug,
    },
    {
        title: "ML Model Security & Trustworthiness",
        description:
            "Exploring the security risks of machine learning systems, including robustness, misuse, and the dependable deployment of models in real-world settings.",
        icon: BrainCircuit,
    },
    {
        title: "Model Orchestration",
        description:
            "Interested in building orchestration systems where multiple models coordinate, interact, and share information to address complex tasks.",
        icon: Blocks,
    },
]

export function Interests() {
    return (
        <Section id="interests">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Research & Engineering Interests
                    </h3>
                    <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        My interests lie at the intersection of software engineering, security, and machine
                        learning, with a particular focus on building intelligent systems that are reliable,
                        secure, and practically useful.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {interests.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="rounded-2xl border border-border/60 bg-background/60 p-6 shadow-sm"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                                    <Icon className="h-5 w-5 text-foreground" />
                                </div>

                                <h4 className="text-base font-semibold text-foreground">
                                    {item.title}
                                </h4>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </Section>
    )
}