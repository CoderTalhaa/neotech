import { useRef } from "react";
import { Camera } from "./model/Camera";
import { Case } from "./model/Case";
import { Meter } from "./model/Meter";
import { Network } from "./model/Network";
import { useFrame } from "@react-three/fiber";
import { useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Exp({ scrollY }) {
  const cameraRef = useRef();
  const caseRef = useRef();
  const networkRef = useRef();
  const meterRef = useRef();

  const isMobile = useMediaQuery("(max-width: 768px)", false);

  // Total height: 2000vh
  // 4 models: 500vh each
  // Model 1: 0 to 0.25
  // Model 2: 0.25 to 0.5
  // Model 3: 0.5 to 0.75
  // Model 4: 0.75 to 1

  // Model 1: Case (0 to 0.25, 500vh)
  const caseX = useTransform(
    scrollY,
    [0, 0.075, 0.175, 0.25],
    [-5, -0.2, -0.2, 5]
  );
  const caseRY = useTransform(
    scrollY,
    [0, 0.075, 0.175, 0.25],
    [0, Math.PI / 2, Math.PI / 2, Math.PI]
  );

  // Model 2: Network (0.25 to 0.5, 500vh)
  const networkX = useTransform(
    scrollY,
    [0.25, 0.325, 0.425, 0.5],
    [-5, 0, 0, 5]
  );
  const networkRY = useTransform(
    scrollY,
    [0.25, 0.325, 0.425, 0.5],
    [0, Math.PI / 2, Math.PI / 2, Math.PI]
  );

  // Model 3: Camera (0.5 to 0.75, 500vh)
  const cameraX = useTransform(
    scrollY,
    [0.5, 0.575, 0.675, 0.75],
    [-5, 0, 0, 5]
  );
  const cameraRY = useTransform(
    scrollY,
    [0.5, 0.575, 0.675, 0.75],
    [0, Math.PI / 2, Math.PI / 2, Math.PI]
  );

  // Model 4: Meter (0.75 to 1, 500vh)
  const meterX = useTransform(scrollY, [0.75, 0.825, 0.925, 1], [-5, 0, 0, 5]);
  const meterRY = useTransform(
    scrollY,
    [0.75, 0.825, 0.925, 1],
    [0, Math.PI / 2, Math.PI / 2, Math.PI]
  );

  // Animation loop
  useFrame(() => {
    // Update positions and rotations
    caseRef.current.position.x = caseX.get();
    caseRef.current.rotation.y = caseRY.get();

    networkRef.current.position.x = networkX.get();
    networkRef.current.rotation.y = networkRY.get();

    cameraRef.current.position.x = cameraX.get();
    cameraRef.current.rotation.y = cameraRY.get();

    meterRef.current.position.x = meterX.get();
    meterRef.current.rotation.y = meterRY.get();

    // console.log(scrollY.get());
  });

  return (
    <>
      <group ref={caseRef}>
        <Case
          scrollY={scrollY}
          scale={isMobile ? 2 : 2.5}
          rotation={[0, Math.PI / -2.5, 0]}
          position={[0, -0.8, -0.2]}
        />
      </group>

      <group ref={networkRef}>
        <Network
          scale={isMobile ? 2 : 2.6}
          rotation={[0, Math.PI / -1.5, 0]}
          position={[0, -0.7, -0.3]}
        />
      </group>

      <group ref={cameraRef}>
        <Camera
          scale={isMobile ? 0.5 : 0.7}
          rotation={[0, Math.PI / -5, 0]}
          position={[0, 0, 0.5]}
        />
      </group>

      <group ref={meterRef}>
        <Meter
          scale={isMobile ? 1 : 1.3}
          rotation={[0, Math.PI / 1.1, 0]}
          position={[0, -0.5, 0.3]}
        />
      </group>
    </>
  );
}
