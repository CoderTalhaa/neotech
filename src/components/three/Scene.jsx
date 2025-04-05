"use client";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Exp from "./experience/Exp";
import { Suspense, useState, useEffect } from "react";
import CameraRig from "./experience/CameraRig";
import { Logo } from "./experience/model/Logo";
import TechnoLogo from "./experience/TechnoLogo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GradientSky } from "./experience/GradientSky";

export default function Scene({ scrollY, scrollY2 }) {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    setEventSource(window);
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)", false);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      // camera={{ position: [0, 0, 2] }}
      className="canvas"
      eventSource={eventSource}
    >
      <PerspectiveCamera
        position={[0, 0, 5]}
        fov={30}
        makeDefault
        near={0.1}
        far={1000}
      />
      <Suspense fallback={null}>
        <GradientSky />
        <CameraRig>
          <Logo
            position={[0, isMobile ? 0.1 : -0.2, 0]}
            scale={isMobile ? 0.3 : 0.8}
          />
        </CameraRig>
        <Exp scrollY={scrollY} />
        <TechnoLogo scrollY={scrollY2} />
        <Sparkles color="white" count={200} scale={[-5, 4, 5]} size={2} />
      </Suspense>

      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
