import { Section, SectionHeading } from "@/components/ui/Section"
import { EXPERIENCES } from "@/data/experience"
import { EXPERTISE } from "@/data/expertise"

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        label="Experience"
        description="Four years building production systems across backend infrastructure, AI applications, and applied machine learning."
      />

      <div className="mb-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((exp) => {
          const Icon = exp.icon

          return (
            <div key={exp.title} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm leading-snug text-foreground">
                {exp.title}
              </span>
            </div>
          )
        })}
      </div>

      <div className="space-y-6 border-l border-border pl-5">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-[26px] top-1.5 block h-2 w-2 rounded-full border-2 border-background bg-accent"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {exp.company}
                </span>
              </h3>
              <span className="text-xs text-muted-foreground">
                {exp.period} · {exp.location}
              </span>
            </div>

            <ul className="mt-2 space-y-1 text-sm leading-6 text-muted-foreground">
              {exp.description.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-border" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
