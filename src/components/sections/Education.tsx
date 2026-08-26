import { Section, SectionHeading } from "@/components/ui/Section"

const ACTIVITIES = [
  "Represented SUST in national competitive programming contests",
  "Mentored students through specialized training sessions in Data Structures and Algorithms",
  "Organized and led intra-university programming competitions",
  "Took on leadership responsibilities in national technology festivals",
]

export function Education() {
  return (
    <Section id="education">
      <SectionHeading label="Education" />

      <div className="rounded-xl border border-border/60 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-base font-semibold text-foreground">
            B.Sc. in Software Engineering
          </h3>
          <span className="text-sm text-muted-foreground">2018 – 2023</span>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          Shahjalal University of Science and Technology (SUST), Sylhet,
          Bangladesh
        </p>

        <p className="mt-3 text-sm text-foreground">
          CGPA 3.35 / 4.00
          <span className="text-muted-foreground">
            {" "}
            · 3.75 average across the last four semesters
          </span>
        </p>

        <div className="mt-4 border-t border-border/60 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Activities &amp; Leadership
          </p>
          <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
            {ACTIVITIES.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
              >
                <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
