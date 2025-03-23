import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Logo2(props) {
  const { nodes, materials } = useGLTF("/models/technoLogo.glb");

  const ref = useRef();

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface70008.geometry}
        material={materials["Material_0.003"]}
        position={[0.064, 0.614, -0.062]}
      />
    </group>
  );
}

useGLTF.preload("/models/technoLogo.glb");
