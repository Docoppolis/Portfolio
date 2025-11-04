import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  const scrollRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1,
      wheelMultiplier: 0.8, // controls speed
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 flex">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-violet-900 opacity-[0.25] pointer-events-none" />

      {/* Left column */}
      <div className="w-[40%] sticky top-0 h-screen flex items-center justify-center pb-90">
        <Hero lenisRef={lenisRef} />
      </div>

      {/* Right column (Lenis-controlled scroll area) */}
      <div className="flex-1 pr-[calc(100vw-100%)] pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-24">
          <section id="about"><About /></section>
          <section id="experience"><Experience lenisRef={lenisRef} /></section>
        </div>

        <section id="skills"><Skills /></section>

        <section id="projects"><Projects /></section>


      </div>
    </div>
  );
}
