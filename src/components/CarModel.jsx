import React, { useEffect } from "react";

import { Mesh } from "three";
import { Environment, useGLTF } from "@react-three/drei";

export default function CarModel() {
  const gltf = useGLTF("/model/car1/cyberpunk_car.glb");
  useEffect(() => {
    gltf.scene.traverse((object) => {
      console.log(object);
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 0.3; // Adjust the intensity as needed

        // object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return (
    <group
      scale={[0.009, 0.009, 0.009]}
      position={[0, 0, 0]}
      receiveShadow
      castShadow
    >
      <primitive object={gltf.scene} />
    </group>
  );
}
