"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "Swift", "Bash"]
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "NestJS", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "GraphQL"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["Next.js", "React", "React Native", "Tailwind CSS"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "LangChain", "LangGraph", "RAG", "ChromaDB"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS"]
  },
  {
    category: "Engineering Practices",
    skills: ["Testing", "Microservices", "Observability", "SDK Development"]
  }
]

export function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Technical Arsenal
          </h3>
          <h2 className="text-3xl font-semibold tracking-tight">Skills & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-medium mb-4 text-foreground/80 border-b border-border/60 pb-2">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="font-normal text-sm hover:bg-primary/5 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
