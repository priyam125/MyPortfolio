import About from "@/components/About";
import Email from "@/components/Email";
import Hero from "@/components/Hero";
import SocialIcons from "@/components/SocialIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-0 px-60">
      <Hero />
      <SocialIcons />
      <Email />
      <About />
    </main>
  );
}
