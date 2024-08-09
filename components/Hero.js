import Image from "next/image";
import Hero1 from "@/public/hero2.jpg";

export default function Hero() {
  return (
    <div className="h-[70vh] flex items-center" id="hero-conatiner">
      <div className="flex-1" id="hero-info--container">
        <div className="flex flex-col" id="hero-info--div">
          <h1 className="mb-8 text-[clamp(1.5rem,16vmin,20rem)] font-extrabold leading-none tracking-tighter">
            <span className="block text-slate-300">Hi, I&apos;m</span>
            <span className="-mt-[.2em] block text-slate-500">Priyam</span>
          </h1>
          <span className="opacity-100 block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase 2xl:tracking-[.2em] xl:tracking-[.15em] tracking-[0.1rem] text-transparent md:text-3xl">
            Frontend Developer
          </span>
        </div>
      </div>
      <div className="flex-1 bg-green-300" id="hero-image-container">
        <div id="hero-image--div">
          <Image
            src={Hero1}
            alt="Hero"
            height={1500}
            width={500}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
