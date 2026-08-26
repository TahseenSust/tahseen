import { Blocks, BrainCircuit, Bug, Shield } from "lucide-react"
import { Section, SectionHeading } from "@/components/ui/Section"

const interests = [
    {
        title: "ML for Vulnerability Detection",
        description:
            "Applying machine learning to detect software vulnerabilities, uncover defects, and strengthen software quality and security.",
        icon: Bug,
    },
    {
        title: "ML Model Security & Trustworthiness",
        description:
            "Security risks of machine learning systems: robustness, misuse, and the dependable deployment of models in real-world settings.",
        icon: BrainCircuit,
    },
    {
        title: "Application Security",
        description:
            "Vulnerability analysis and techniques for identifying and understanding weaknesses in software systems.",
        icon: Shield,
    },
    {
        title: "Model Orchestration",
        description:
            "Orchestration systems where multiple models coordinate, interact, and share information to address complex tasks.",
        icon: Blocks,
    },
]

export function Interests() {
    return (
        <Section id="interests">
            <SectionHeading
                label="Research Interests"
                description="Where I want to do graduate-level work: intelligent systems that are reliable, secure, and practically useful."
            />

            <div className="grid gap-3 sm:grid-cols-2">
                {interests.map((item) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={item.title}
                            className="rounded-xl border border-border/60 bg-muted/30 p-4"
                        >
                            <div className="flex items-center gap-2.5">
                                <Icon className="h-4 w-4 shrink-0 text-accent" />
                                <h3 className="text-sm font-semibold text-foreground">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
