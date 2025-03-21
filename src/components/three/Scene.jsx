"use client";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Exp from "./experience/Exp";
import { Suspense, useState, useEffect } from "react";
import CameraLogger from "./helper/Cameralogger";
import CameraAnimation from "./experience/CameraAnimation";

export default function Scene({ scrollY }) {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    setEventSource(window);
  }, []);

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
        <Exp scrollY={scrollY} />
      </Suspense>

      <CameraAnimation scrollY={scrollY} />

      {/* <axesHelper scale={20} /> */}

      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
