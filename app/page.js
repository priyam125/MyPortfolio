import About from "@/components/About";
import Contact from "@/components/Contact";
import Email from "@/components/Email";
import Experience from "@/components/Experience";
import Experiences from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialIcons from "@/components/SocialIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-20 gap-20 md:px-60 px-8">
      <Hero />
      <SocialIcons />
      <Email />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
