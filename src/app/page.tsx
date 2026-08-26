import { MobileNav } from "@/components/ui/MobileNav"
import { Sidebar } from "@/components/ui/Sidebar"
import { Footer } from "@/components/ui/Footer"
import { About } from "@/components/sections/About"
import { Interests } from "@/components/sections/Interest"
import { Research } from "@/components/sections/Research"
import { PaperShelf } from "@/components/sections/PaperShelf"
import { Education } from "@/components/sections/Education"
import { Community } from "@/components/sections/Community"
import { Experience } from "@/components/sections/Experience"
import { Achievements } from "@/components/sections/Achievements"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <MobileNav />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-16 px-6 lg:grid-cols-[19rem_minmax(0,1fr)] lg:px-10">
        <Sidebar />
        <main className="min-w-0 pt-8 pb-8 lg:pt-14">
          <About />
          <Interests />
          <Research />
          <PaperShelf />
          <Education />
          <Community />
          <Experience />
          <Achievements />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
