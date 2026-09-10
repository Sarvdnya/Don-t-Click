import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}