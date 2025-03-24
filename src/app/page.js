"use client";
import Scene from "@/components/three/Scene";
import Contact from "@/components/ui/Contact";
import Marque from "@/components/ui/Marque";
import Section1 from "@/components/ui/Section1";
import Section2 from "@/components/ui/Section2";
import SerText from "@/components/ui/SerText";
import Services from "@/components/ui/Services";
import Button from "@/components/utils/Button";
import Cursor from "@/components/utils/Cursor";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import useTalhaStore from "@/store/useStore";
import { useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const { isLoading, setIsLoading } = useTalhaStore();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      smooth: true,
      wheelMultiplier: 0.5,
    });

    lenis.stop();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleLoadingCompletion = () => {
      setIsLoading(false);
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    };

    if (!isLoading) handleLoadingCompletion();

    return () => {
      lenis.stop();
      lenis.destroy();
    };
  }, [isLoading]);

  const section1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: section1,
    offset: ["start 30%", "end end"],
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  const section2 = useRef(null);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2,
    offset: ["start 50%", "end end"],
  });

  const smoothScrollY2 = useSpring(scrollYProgress2, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      <Cursor />
      <Scene scrollY={smoothScrollY} scrollY2={smoothScrollY2} />

      <main className="min-h-screen bg-[#001420] bg-custom-gradient ">
        <div className="container flex flex-col items-center justify-center h-[90vh] relative logo">
          <h2 className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 ~text-xl/4xl font-nunito font-bold text-center">
            Embracing Todays Technology
          </h2>
          <Button className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Get Started
          </Button>
        </div>
        <Marque />
      </main>
      <SerText />
      <div ref={section1} className="relative">
        <Section1 scrollY={smoothScrollY} />
        <Services scrollY={smoothScrollY} />
      </div>

      <div ref={section2} className="relative ">
        <Section2 scrollY={smoothScrollY2} />
      </div>
      <Contact />
    </>
  );
}
