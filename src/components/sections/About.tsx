import { Section } from "@/components/ui/Section"

const AT_A_GLANCE = [
  { value: "B.Sc. SWE", label: "SUST, 2023" },
  { value: "4+ yrs", label: "Software engineering" },
  { value: "300+", label: "Students trained" },
  { value: "ICPC 21st", label: "Dhaka Regional 2019" },
]

export function About() {
  return (
    <Section id="about">
      <h1 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
        Building AI and backend systems, and studying how to make machine
        learning secure and dependable.
      </h1>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border/60 py-5 sm:grid-cols-4">
        {AT_A_GLANCE.map((stat) => (
          <div key={stat.label}>
            <p className="text-base font-semibold tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-2xl space-y-4 text-sm leading-6 text-muted-foreground">
        <p>
          I am a software engineer working across backend systems, AI
          applications, full-stack product development, and applied machine
          learning. I have built payment orchestration infrastructure,
          retrieval-augmented generation pipelines, LangGraph-based agent
          workflows, full-stack web platforms, and computer vision pipelines
          such as semantic segmentation.
        </p>
        <p>
          My research interest sits at the intersection of software engineering,
          machine learning, and security — particularly machine learning for
          vulnerability detection, and the robustness and trustworthiness of
          deployed models. I care about systems that are scalable and
          maintainable, with clean architecture, strong testing practices, and
          long-term usability in mind.
        </p>
      </div>
    </Section>
  )
}
