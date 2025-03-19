import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { useControls } from "leva";
import { useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const cameraTarget = new THREE.Vector3(0, 0, 0);

export default function CameraAnimation({ scrollY }) {
  const tl = gsap.timeline();
  const camera = useThree((state) => state.camera);

  // const { posX, posY, posZ, lookX, lookY, lookZ } = useControls("position", {
  //   posX: { value: 0, min: -10, max: 30, step: 0.1 },
  //   posY: { value: 0, min: -10, max: 30, step: 0.1 },
  //   posZ: { value: 6, min: -10, max: 30, step: 0.1 },
  //   lookX: { value: 0, min: -10, max: 30, step: 0.1 },
  //   lookY: { value: 0, min: -10, max: 30, step: 0.1 },
  //   lookZ: { value: 0, min: -10, max: 30, step: 0.1 },
  // });

  const x = useTransform(
    scrollY,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );
  const y = useTransform(
    scrollY,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  );
  const z = useTransform(
    scrollY,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]
  );

  const LookX = useTransform(
    scrollY,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );
  const LookY = useTransform(
    scrollY,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  );
  const LookZ = useTransform(
    scrollY,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]
  );

  useFrame((state, delta) => {
    camera.lookAt(cameraTarget);
    // camera.position.set(x.get(), y.get(), z.get());
    // camera.position.set(posX, posY, posZ);
    // camera.lookAt(lookX, lookY, lookZ);
  });

  useGSAP(
    () => {
      // 1
      tl.to(
        camera.position,
        {
          x: 0.6,
          y: 0,
          z: 6,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section1",
            start: "top center",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true,
          },
        },
        "20%"
      );
      // 2
      tl.to(camera.position, {
        x: -2.2,
        y: 0,
        z: 5.6,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".section1",
          start: "top center",
          end: "bottom bottom",
          scrub: 0.5,
          markers: true,
        },
      }).to(
        cameraTarget,
        {
          x: 3.9,
          y: 0,
          z: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section1",
            start: "top center",
            end: "bottom bottom",
            scrub: 0.5,
            markers: true,
          },
        },
        "<"
      );
    },
    { dependencies: [] }
  );

  return null;
}
