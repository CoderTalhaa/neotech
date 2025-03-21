import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export function Camera({ scrollY }) {
  const { nodes, materials } = useGLTF("/models/camera.glb");
  const ref = useRef();

  // const x = useTransform(scrollY, [0, 0.1], [5, 1]);

  useFrame(() => {
    if (ref.current) {
      // ref.current.position.x = x.get();
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002"].geometry}
        material={materials["Hard Rough Plastic White #2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002_1"].geometry}
        material={materials["Clear Rough Plastic Black #1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002_2"].geometry}
        material={materials["Clear Rough Plastic White #1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002_3"].geometry}
        material={materials["Hard Shiny Plastic Blue #1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002_4"].geometry}
        material={materials["Hard Shiny Plastic Blue #2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002_5"].geometry}
        material={materials["Hard Rough Plastic Blue #1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1-mesh002_6"].geometry}
        material={materials["Hard Shiny Plastic Black #1"]}
      />
    </group>
  );
}

useGLTF.preload("/models/camera.glb");
