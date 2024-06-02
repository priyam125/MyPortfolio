import Image from "next/image";
import Hero1 from "@/public/hero2.jpg";

export default function Hero() {
  return (
    <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2 mt-16">
      <div className="flex items-center justify-center">
        <Image src={Hero1} alt="Hero" height={500} width={500} />
      </div>
      <div className="col-start-1 md:row-start-1 " data-speed=".2">
        <h1
          className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
          //   aria-label={slice.primary.first_name + " " + slice.primary.last_name}
        >
          <span className="block text-slate-300 ">Hi, I&apos;m</span>
          <span className="-mt-[.2em] block text-slate-500  ">Priyam</span>
        </h1>
        <span className="opacity-100 block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent md:text-4xl">
          Frontend Developer
        </span>
      </div>
    </div>
  );
}
