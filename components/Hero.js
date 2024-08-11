"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

function Model({ modelPath, scale }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} />;
}

export default function Hero() {
  const [modelScale, setModelScale] = useState(0.7);

  useEffect(() => {
    console.log();

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);

      if (screenWidth <= 500) {
        setModelScale(0.8);
      } else if (screenWidth <= 768) {
        setModelScale(0.2); // Smaller scale for mobile devices
      } else if (screenWidth <= 1024) {
        setModelScale(0.3); // Medium scale for tablets
      } else if (screenWidth <= 1280) {
        setModelScale(0.4);
      } else if (screenWidth <= 1440) {
        setModelScale(0.6); // Default scale for larger screens
      } else {
        setModelScale(0.7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the correct scale

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-[70vh] flex flex-col md:flex-row lg:gap-6 2xl:gap-0 space-y-6 md:space-y-0"
      id="hero-container"
    >
      <div className="flex-1 items-center flex" id="hero-info--container">
        <div className="flex flex-col" id="hero-info--div">
          <h1 className="mb-8 text-[clamp(0.5rem,20vmin,20rem)] md:text-[clamp(0.5rem,10vmin,20rem)] lg:text-[clamp(0.5rem,13vmin,20rem)] xl:text-[clamp(1.5rem,16vmin,20rem)] font-extrabold leading-none tracking-tighter">
            <span className="block text-slate-300">Hi, I&apos;m</span>
            <span className="-mt-[.2em] block text-slate-500">Priyam</span>
          </h1>
          <span className="opacity-100 block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase 2xl:tracking-[.2em] xl:tracking-[.15em] tracking-[0.1rem] text-transparent md:text-3xl">
            Frontend Developer
          </span>
        </div>
      </div>
      <div className="flex-1 items-center" id="hero-image-container">
        <div
          id="hero-image--div"
          className="max-w-full w-full md:h-full h-[90%]"
        >
          <Canvas
            camera={{ position: [20, 10, 5], fov: 5 }}
            resize={{ scroll: true, debounce: { scroll: 50, resize: 50 } }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Model modelPath="/work-station4.glb" scale={modelScale} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
