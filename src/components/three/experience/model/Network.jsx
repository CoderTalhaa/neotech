import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Network(props) {
  const { nodes, materials } = useGLTF("/models/network.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.027, 0.33, 0.037]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042"].geometry}
          material={materials["Paint Matte White #1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_1"].geometry}
          material={materials["Tire #2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_2"].geometry}
          material={materials["Tire #3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_3"].geometry}
          material={materials["Paint Textured Grey #1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_4"].geometry}
          material={materials["Paint Metallic Orange peel Candy Blue #1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_5"].geometry}
          material={materials["Anodized Aluminum Brushed 90° Black #1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_6"].geometry}
          material={materials["Chrome Polished #2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Part1-mesh042_7"].geometry}
          material={materials["Paint Gloss Blue #1"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/network.glb");
