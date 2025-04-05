import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { BackSide, Color } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const GradientMaterial = shaderMaterial(
  {
    colorTop: new Color("#1e3858"),
    colorMiddle: new Color("#0f1f24"),
    colorBottom: new Color("#0cb4d1"),
    blendMiddle: 0.22,
    blendIntensity: 0.46,
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  /* glsl */ `
  uniform vec3 colorTop;
  uniform vec3 colorBottom;
  uniform vec3 colorMiddle;
  uniform float blendMiddle;
  uniform float blendIntensity;
  varying vec2 vUv;
  void main() {
    vec3 mixedTop = mix(colorMiddle, colorTop, smoothstep(0.498, 0.502, vUv.y));
    vec3 mixedBottom = mix(colorMiddle, colorBottom, smoothstep(0.502, 0.498, vUv.y));
  
    vec3 mixedColor = mix(colorBottom, colorTop, smoothstep(0.45, 0.55, vUv.y));
    float blendMiddle = smoothstep(0.5-blendMiddle, 0.5, vUv.y)  * smoothstep(0.5 + blendMiddle, 0.5, vUv.y) * blendIntensity;
    vec3 finalColor = mix(mixedColor, colorMiddle, blendMiddle);
    gl_FragColor = vec4(finalColor, 1.0);
    
  }
  `
);

extend({ GradientMaterial });

export const GradientSky = () => {
  return (
    <mesh rotation-x={degToRad(-5)} depthWrite={false} depthTest={false}>
      <sphereGeometry args={[40]} />
      <gradientMaterial
        key={GradientMaterial.key}
        side={BackSide}
        toneMapped={false}
        depthWrite={false}
      />
    </mesh>
  );
};
