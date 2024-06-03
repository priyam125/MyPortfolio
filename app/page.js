import About from "@/components/About";
import Email from "@/components/Email";
import Experience from "@/components/Experience";
import Experiences from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SocialIcons from "@/components/SocialIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-20 px-60">
      <Hero />
      <SocialIcons />
      <Email />
      <About />
      <Experience />
    </main>
  );
}
