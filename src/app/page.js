"use client";
import Scene from "@/components/three/Scene";
import Contact from "@/components/ui/Contact";
import Marque from "@/components/ui/Marque";
import Section1 from "@/components/ui/Section1";
import Services from "@/components/ui/Services";
import Button from "@/components/utils/Button";
import Cursor from "@/components/utils/Cursor";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import useTalhaStore from "@/store/useStore";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const { isLoading, setIsLoading } = useTalhaStore();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      smooth: true,
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
    offset: ["start 80%", "end end"],
  });

  return (
    <>
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      <Cursor />
      <Scene scrollY={scrollYProgress} />

      <main className="min-h-screen bg-[#001420] bg-custom-gradient ">
        <div className="container flex flex-col items-center justify-center h-[90vh] relative logo">
          <h2 className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 ~text-xl/4xl font-nunito font-bold ">
            Embracing Todays Technology
          </h2>
          <Button className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Get Started
          </Button>
        </div>
        <Marque />
      </main>
      <div ref={section1} className="relative">
        <Section1 scrollY={scrollYProgress} />
        <Services scrollY={scrollYProgress} />
      </div>
      <Contact />
    </>
  );
}
