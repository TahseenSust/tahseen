import { Section, SectionHeading } from "@/components/ui/Section"

const teachingExperience = [
  {
    title: "Industry Expert, World Bank EDGE Project",
    period: "Sep 2024 – Jan 2025",
    description:
      "Delivered lectures on “Python Programming and Basic Data Science” and “Basic Programming with Python” at Shahjalal University of Science and Technology and Metropolitan University, training 300+ students.",
  },
  {
    title: "Trainer, SUST Competitive Programming Camp",
    period: "Jan 2022 – Mar 2023",
    description:
      "Conducted training sessions on algorithms, data structures, and problem solving, while mentoring students and organizing practice contests.",
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
    title: "Coordinator, Cybersecurity Seminar 2025",
    description:
      "Organized an academic seminar on cybersecurity, hosting a guest lecture by a Senior Engineering Manager to facilitate knowledge exchange on emerging challenges.",
  },
  {
    title: "Lead Coordinator, Orbitax SUST SWE Technovent 2023",
    description:
      "Managed and organized competitive coding events, ensuring smooth execution and fair judging for participants.",
  },
]

export function Community() {
  return (
    <Section id="teaching">
      <SectionHeading
        label="Teaching & Service"
        description="Training, contest organization, and academic events."
      />

      <div className="space-y-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Teaching
          </p>
          <div className="mt-3 space-y-4">
            {teachingExperience.map((item) => (
              <div key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Contest Problem Setting &amp; Judging
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {contestContributions.map((item) => (
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

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Community &amp; Volunteer Work
          </p>
          <div className="mt-3 space-y-4">
            {communityWork.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
