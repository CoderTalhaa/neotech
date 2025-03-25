import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, useTransform } from "framer-motion";
import { Logo2 } from "./model/Logo2";

export default function TechnoLogo({ scrollY }) {
  const logoRef = useRef();

  const springConf = { stiffness: 100, damping: 20, mass: 0.1 };

  // Logo animation based on scrollY (0 to 1 over 500vh)
  const logoX = useSpring(
    useTransform(
      scrollY,
      [0, 0.05, 0.3, 0.4, 0.7, 0.9, 1],
      [5, 1, -0.8, 1, -0.8, 1.5, 0]
    ),
    springConf
  );
  const logoY = useSpring(
    useTransform(
      scrollY,
      [0, 0.07, 0.3, 0.4, 0.7, 0.9, 1],
      [0, 0, -0.6, -0.7, -0.8, 0, 0]
    ),
    springConf
  );

  const logoRY = useTransform(
    scrollY,
    [0, 0.07, 0.3, 0.4, 0.7, 0.9, 1],
    [0, -Math.PI / 4, Math.PI / 4, -Math.PI / 4, Math.PI / 4, -Math.PI / 4, 0]
  );

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.position.x = logoX.get();
      logoRef.current.position.y = logoY.get();
      logoRef.current.rotation.y = logoRY.get();
    }

    // console.log(scrollY.get());
  });

  return (
    <group ref={logoRef}>
      <Logo2 scale={0.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  );
}
