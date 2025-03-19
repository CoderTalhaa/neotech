import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function CameraLogger({ event = "mousedown" }) {
  const { camera } = useThree();

  useEffect(() => {
    const logCamera = () => {
      const { x, y, z } = camera.position;
      const roundedX = Math.round(x * 100) / 100;
      const roundedY = Math.round(y * 100) / 100;
      const roundedZ = Math.round(z * 100) / 100;
      console.log(`Camera Position: ${roundedX}, ${roundedY}, ${roundedZ}`);
    };

    window.addEventListener(event, logCamera);

    return () => {
      window.removeEventListener(event, logCamera);
    };
  }, [camera, event]);

  return null;
}

export default CameraLogger;
