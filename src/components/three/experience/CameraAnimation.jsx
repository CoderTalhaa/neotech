import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { useControls } from "leva";
import { useSpring, useTransform } from "framer-motion";

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

  const y = useTransform(
    scrollY,
    [0, 0.01667, 0.2625, 0.26667, 0.5125, 0.51667, 0.7625, 0.76667, 1],
    [0, -5, -5, -10, -10, -15, -15, -20, -20]
  );
  const cameraX = useTransform(
    scrollY,
    [
      // 🌟 FIRST MODEL (Camera) 🌟
      0, // Start of Camera model
      0.01667, // Camera stays still (holding position)
      0.09861, // 📷 First animation for Camera (angle change 1)
      0.18055, // 📷 Second animation for Camera (angle change 2)
      0.2625, // Camera stays still again

      // // 🌟 SECOND MODEL (Case) 🌟
      0.26667, // Case stays still (holding position)
      0.34861, // 📷 First animation for Case (angle change 1)
      0.43055, // 📷 Second animation for Case (angle change 2)
      0.5125, // Case stays still again

      // // 🌟 THIRD MODEL (Network) 🌟
      0.51667, // Network stays still (holding position)
      0.59861, // 📷 First animation for Network (angle change 1)
      0.68055, // 📷 Second animation for Network (angle change 2)
      0.7625, // Network stays still again

      // // 🌟 FOURTH MODEL (Meter) 🌟
      0.76667, // Meter stays still (holding position)
      0.84444, // 📷 First animation for Meter (angle change 1)
      0.92222, // 📷 Second animation for Meter (angle change 2)
      1, // Meter stays still again
    ],
    [
      // 🌟 FIRST MODEL (Camera) 🌟
      0, // Camera start position
      2.6, // Camera stays still
      -1.7, // 🎥 First movement (changing angle 1)
      3, // 🎥 Second movement (changing angle 2)
      0.8, // Camera stays still again

      // // 🌟 SECOND MODEL (Case) 🌟
      0.8, // Case stays still
      -2.6, // 🎥 First movement (changing angle 1)
      -1.1, // 🎥 Second movement (changing angle 2)
      0, // Case stays still again

      // // 🌟 THIRD MODEL (Network) 🌟
      0, // Network stays still
      1.8, // 🎥 First movement (changing angle 1)
      2.1, // 🎥 Second movement (changing angle 2)
      2.1, // Network stays still again

      // // 🌟 FOURTH MODEL (Meter) 🌟
      2.1, // Meter stays still
      1.1, // 🎥 First movement (changing angle 1)
      2.1, // 🎥 Second movement (changing angle 2)
      0.6, // Meter stays still again
    ]
  );

  const cameraZ = useTransform(
    scrollY,
    [
      0, // Start
      0.01667, // Camera linger start
      0.09861, // Camera linger midpoint 1
      0.18055, // Camera linger midpoint 2
      0.2625, // Camera linger end

      0.26667, // Case linger start / Transition (hold)
      0.34861, // Case linger midpoint 1
      0.43055, // Case linger midpoint 2
      0.5125, // Case linger end

      0.51667, // Network linger start / Transition (hold)
      0.59861, // Network linger midpoint 1
      0.68055, // Network linger midpoint 2
      0.7625, // Network linger end

      0.76667, // Meter linger start / Transition (hold)
      0.84444, // Meter linger midpoint 1
      0.92222, // Meter linger midpoint 2
      1, // Meter linger end
    ],
    [
      6, // Start
      4.1, // Camera linger start
      3.6, // Animate 1 (example)
      4, // Animate 2 (example)
      4.5, // Camera linger end

      4.5, // Case linger start / Transition (hold)
      4.1, // Animate 1 (example)
      2.2, // Animate 2 (example)
      2.6, // Case linger end

      2.6, // Network linger start / Transition (hold)
      2.3, // Animate 1 (example)
      -1.5, // Animate 2 (example)
      -1.5, // Network linger end

      -1.5, // Meter linger start / Transition (hold)
      -1.5, // Animate 1 (example)
      2.3, // Animate 2 (example)
      2.3, // Meter linger end
    ]
  );

  const cameraXLookat = useTransform(
    scrollY,
    [
      0, // Start
      0.01667, // Camera linger start
      0.09861, // Camera linger midpoint 1
      0.18055, // Camera linger midpoint 2
      0.2625, // Camera linger end

      0.26667, // Case linger start / Transition (hold)
      0.34861, // Case linger midpoint 1
      0.43055, // Case linger midpoint 2
      0.5125, // Case linger end

      0.51667, // Network linger start / Transition (hold)
      0.59861, // Network linger midpoint 1
      0.68055, // Network linger midpoint 2
      0.7625, // Network linger end

      0.76667, // Meter linger start / Transition (hold)
      0.84444, // Meter linger midpoint 1
      0.92222, // Meter linger midpoint 2
      1, // Meter linger end
    ],
    [
      0, // Start
      0.7, // Camera linger start
      2.2, // Animate 1 (example)
      0, // Animate 2 (example)
      1.1, // Camera linger end

      0, // Case linger start / Transition (hold)
      0, // Animate 1 (example)
      0, // Animate 2 (example)
      0.4, // Case linger end

      0.4, // Network linger start / Transition (hold)
      0, // Animate 1 (example)
      0, // Animate 2 (example)
      0, // Network linger end

      0, // Meter linger start / Transition (hold)
      0, // Animate 1 (example)
      0, // Animate 2 (example)
      0, // Meter linger end
    ]
  );

  const cameraZLookat = useTransform(
    scrollY,
    [
      0, // Start
      0.01667, // Camera linger start
      0.09861, // Camera linger midpoint 1
      0.18055, // Camera linger midpoint 2
      0.2625, // Camera linger end

      0.26667, // Case linger start / Transition (hold)
      0.34861, // Case linger midpoint 1
      0.43055, // Case linger midpoint 2
      0.5125, // Case linger end

      0.51667, // Network linger start / Transition (hold)
      0.59861, // Network linger midpoint 1
      0.68055, // Network linger midpoint 2
      0.7625, // Network linger end

      0.76667, // Meter linger start / Transition (hold)
      0.84444, // Meter linger midpoint 1
      0.92222, // Meter linger midpoint 2
      1, // Meter linger end
    ],
    [
      0, // Start
      0, // Camera linger start
      0, // Animate 1 (example)
      0, // Animate 2 (example)
      0, // Camera linger end

      0, // Case linger start / Transition (hold)
      0.7, // Animate 1 (example)
      0, // Animate 2 (example)
      0.3, // Case linger end

      0, // Network linger start / Transition (hold)
      -0.3, // Animate 1 (example)
      -0.1, // Animate 2 (example)
      0, // Network linger end

      -0.3, // Meter linger start / Transition (hold)
      -0.3, // Animate 1 (example)
      0.1, // Animate 2 (example)
      0.1, // Meter linger end
    ]
  );

  const x = useSpring(cameraX, { stiffness: 100, damping: 20, mass: 0.8 });
  const z = useSpring(cameraZ, { stiffness: 100, damping: 20, mass: 0.8 });
  const lx = useSpring(cameraXLookat, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });
  const lz = useSpring(cameraZLookat, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });

  useFrame((state, delta) => {
    // camera.lookAt(cameraTarget);
    // camera.position.set(posX, posY, posZ);
    // camera.lookAt(lookX, lookY, lookZ);

    camera.position.set(x.get(), 0, z.get());
    camera.lookAt(lx.get(), 0, lz.get());
  });

  // useGSAP(
  //   () => {
  //     gsap.to(camera.position, {
  //       x: 3.3,
  //       y: -0.2,
  //       z: 3.4,
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         trigger: ".section1",
  //         start: "240vh",
  //         end: "264vh",
  //         scrub: 0.5,
  //         markers: true,
  //       },
  //     });
  //     gsap.to(
  //       cameraTarget,
  //       {
  //         x: 0.7,
  //         y: 0,
  //         z: -0.4,
  //         ease: "power1.inOut",
  //         scrollTrigger: {
  //           trigger: ".section1",
  //           start: "240vh",
  //           end: "264vh",
  //           scrub: 0.5,
  //         },
  //       },
  //       "<"
  //     );
  //   },
  //   { dependencies: [] }
  // );

  return null;
}
