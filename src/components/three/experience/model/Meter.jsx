import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Meter(props) {
  const { nodes, materials } = useGLTF("/models/meter.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.247, 0.494, 0.014]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_1.geometry}
          material={materials.screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_2.geometry}
          material={materials["dark grey low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_3.geometry}
          material={materials["color-1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_4.geometry}
          material={materials["color-2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_5.geometry}
          material={materials["color-4"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_6.geometry}
          material={materials["color-5"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_7.geometry}
          material={materials["color-6"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2_8.geometry}
          material={materials["color-7"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials.screen}
        position={[0.324, 0.469, 0.179]}
      />
    </group>
  );
}

useGLTF.preload("/models/meter.glb");
