import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Research from "../components/research"
import Certifications from "../components/certifications"
import Awards from "../components/awards"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
