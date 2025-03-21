import { useRef, useState } from "react";
import CameraRig from "./CameraRig";
import { Camera } from "./model/Camera";
import { Case } from "./model/Case";
import { Logo } from "./model/Logo";
import { Meter } from "./model/Meter";
import { Network } from "./model/Network";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSpring, useTransform } from "framer-motion";

export default function Exp({ scrollY }) {
  const cameraRef = useRef();
  const caseRef = useRef();
  const networkRef = useRef();
  const meterRef = useRef();

  const groupRef = useRef();

  // const y = useTransform(
  //   scrollY,
  //   [0, 0.015, 0.2, 0.22, 0.5, 0.55, 0.7, 0.75, 1],
  //   [0, -5, -5, -10, -10, -15, -15, -20, -20]
  // );

  const y = useTransform(
    scrollY,
    [0, 0.01667, 0.2625, 0.26667, 0.5125, 0.51667, 0.7625, 0.76667, 1],
    [0, -5, -5, -10, -10, -15, -15, -20, -20]
  );

  const sy = useSpring(y, { stiffness: 100, damping: 20, mass: 0.8 });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = -sy.get();
    }

    console.log(scrollY.get());
  });

  return (
    <>
      <CameraRig>
        <Logo position={[0, -0.2, 0]} scale={0.8} />
      </CameraRig>
      <group ref={groupRef}>
        <group
          ref={cameraRef}
          scale={0.5}
          rotation={[0, Math.PI / 2, 0]}
          position={[1, -5, 0]}
        >
          <Camera />
        </group>
        <group ref={caseRef} position={[0, -10, 0]} scale={1.5}>
          <Case position={[0, -0.4, 0]} />
        </group>
        <group ref={networkRef} position={[0, -15, 0]} scale={2}>
          <Network position={[0, -0.3, 0]} />
        </group>
        <group ref={meterRef} position={[0, -20, 0]}>
          <Meter
            scale={0.7}
            position={[0, -0.2, 0]}
            rotation={[0, Math.PI / -2, 0]}
          />
        </group>
      </group>
    </>
  );
}
