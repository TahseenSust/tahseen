import { Section, SectionHeading } from "@/components/ui/Section"

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "Swift", "Bash"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "LangChain", "LangGraph", "RAG", "ChromaDB"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "NestJS", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "GraphQL"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["Next.js", "React", "React Native", "Tailwind CSS"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
  },
  {
    category: "Engineering Practices",
    skills: ["Testing", "Microservices", "Observability", "SDK Development"],
  },
]

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading label="Skills & Tools" />

      <dl className="space-y-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="grid gap-x-6 gap-y-1 sm:grid-cols-[180px_minmax(0,1fr)]"
          >
            <dt className="text-sm font-medium text-foreground">
              {group.category}
            </dt>
            <dd className="text-sm leading-6 text-muted-foreground">
              {group.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
