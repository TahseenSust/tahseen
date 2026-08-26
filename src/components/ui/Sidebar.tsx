"use client"

import {
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react"
import { contactData } from "@/data/contact"
import { NAV_ITEMS } from "@/data/nav"
import { useActiveSection } from "@/lib/useActiveSection"
import { cn } from "@/lib/utils"

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

export function Sidebar() {
  const active = useActiveSection(NAV_IDS)

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-14">
      <div className="pt-8 lg:pt-0">
        <div className="flex items-center gap-4">
          <div
            aria-hidden
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted text-lg font-semibold tracking-tight text-foreground"
          >
            TC
          </div>
          <div className="min-w-0">
            <p className="text-xl font-semibold leading-tight tracking-tight text-foreground">
              Tahseen Rasheed Chowdhury
            </p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              Software Engineer · ML &amp; Software Security
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
          I build production AI and backend systems, and I&apos;m pursuing
          research at the intersection of machine learning, software security,
          and trustworthy model deployment.
        </p>

        <nav
          aria-label="Sections"
          className="mt-7 hidden lg:block"
        >
          <ul className="space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "group flex items-center gap-3 rounded-lg py-1.5 text-sm transition-colors",
                    active === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-px transition-all duration-300",
                      active === item.id
                        ? "w-8 bg-accent"
                        : "w-4 bg-border group-hover:w-8 group-hover:bg-muted-foreground"
                    )}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 lg:mt-0">
        {contactData.cv ? (
          <a
            href={contactData.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileText className="h-4 w-4" />
            Curriculum Vitae
          </a>
        ) : null}

        <IconLink
          href={`mailto:${contactData.email}`}
          label="Email"
          icon={<Mail className="h-4 w-4" />}
        />
        <IconLink
          href={contactData.linkedin}
          label="LinkedIn"
          external
          icon={<Linkedin className="h-4 w-4" />}
        />
        <IconLink
          href={contactData.github}
          label="GitHub"
          external
          icon={<Github className="h-4 w-4" />}
        />
        {contactData.scholar ? (
          <IconLink
            href={contactData.scholar}
            label="Google Scholar"
            external
            icon={<GraduationCap className="h-4 w-4" />}
          />
        ) : null}
      </div>
    </aside>
  )
}

function IconLink({
  href,
  label,
  icon,
  external,
}: {
  href: string
  label: string
  icon: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  )
}
