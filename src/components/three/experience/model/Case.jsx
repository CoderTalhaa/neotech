import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";

export function Case({ scrollY, ...props }) {
  const { nodes, materials } = useGLTF("/models/case.glb");

  const glassRef = useRef();

  const caseRY = useTransform(
    scrollY,
    [0.065, 0.08, 0.1, 0.2],
    [0, Math.PI / 2, Math.PI / 2, 0]
  );

  useFrame(() => {
    glassRef.current.rotation.y = caseRY.get();
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0.012, 0.297, 0.032]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_3.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_4.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_5.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_6.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_7.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_8.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_9.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_10.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials["Material.003"]}
        position={[-0.061, 0.295, 0.17]}
      />
      <motion.mesh
        ref={glassRef}
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={materials.glass}
        position={[0.08, 0.312, 0.161]}
      />
    </group>
  );
}

useGLTF.preload("/models/case.glb");
