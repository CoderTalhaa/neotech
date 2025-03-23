import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Camera(props) {
  const { nodes, materials } = useGLTF("/models/camera.glb");
  const ref = useRef();

  return (
    <group ref={ref} dispose={null} {...props}>
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
