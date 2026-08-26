import { Section, SectionHeading } from "@/components/ui/Section"

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

const ratings = [
  {
    label: "Codeforces",
    value: "1626 max",
    href: "https://codeforces.com/profile/Tahseen",
  },
  {
    label: "CodeChef",
    value: "1941 max",
    href: "https://www.codechef.com/users/tahseen_syl",
  },
  {
    label: "UVA",
    value: "~600 solved",
    href: "https://uhunt.onlinejudge.org/id/646297",
  },
  {
    label: "LightOJ",
    value: "~250 solved",
    href: "https://lightoj.com/user/tahseenrchow",
  },
]

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        label="Competitive Programming"
        description="Contest work that shaped my algorithmic thinking and problem-solving approach."
      />

      <div className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
        {achievements.map((item) => (
          <div
            key={item}
            className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
          >
            <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
        {ratings.map((rating) => (
          <a
            key={rating.label}
            href={rating.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
          >
            <span className="font-medium text-foreground">{rating.label}</span>{" "}
            {rating.value}
          </a>
        ))}
      </div>
    </Section>
  )
}
