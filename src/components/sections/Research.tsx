import { Section, SectionHeading } from "@/components/ui/Section"

export function Research() {
  return (
    <Section id="research">
      <SectionHeading label="Research" title="Undergraduate Thesis" />

      <article className="rounded-xl border border-border/60 p-5">
        <h3 className="text-base font-semibold leading-snug text-foreground">
          Efficient and Accurate Color-Based Segmentation Using Deep Learning
          and K-D Tree
        </h3>

        <p className="mt-1.5 text-sm text-muted-foreground">
          Supervised by{" "}
          <a
            href="https://scholar.google.com/citations?user=BwC_9VIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            Partha Protim Paul
          </a>{" "}
          · Shahjalal University of Science and Technology
        </p>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          A computer vision project focused on improving color-based
          segmentation accuracy and efficiency by combining deep learning with
          K-D tree–based methods.
        </p>

        <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
          <li className="flex gap-2.5">
            <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
            Automated trimap generation using semantic segmentation
          </li>
          <li className="flex gap-2.5">
            <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
            K-D tree–based classification to identify the class of unknown
            regions
          </li>
        </ul>
      </article>
    </Section>
  )
}
