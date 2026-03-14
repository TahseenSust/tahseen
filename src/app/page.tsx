import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Expertise } from "@/components/sections/Expertise"
import { Research } from "@/components/sections/Research"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Achievements } from "@/components/sections/Achievements"
import { Community } from "@/components/sections/Community"
import { Contact } from "@/components/sections/Contact"
import { Interests } from "@/components/sections/Interest"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full">
          <Hero />
          <About />
          <Interests />
          <Experience />
          <Expertise />
          <Education />
          <Research />
          <Achievements />
          <Skills />
          <Community />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
