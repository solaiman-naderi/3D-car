import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Ring,
} from "@react-three/drei";
import Ground from "./Ground";
import CarModel from "./CarModel";
import Rings from "./Ring";
import Boxes from "./Boxs";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const Car = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault for={50} position={[3, 2, 5]} />
      <color attach={"background"} args={[0, 0, 0]} />

      <Rings />
      <Boxes />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={100}
        angle={1}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={100}
        angle={1}
        penumbra={0.8}
        position={[-2, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />

      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={200}
        />
        <Bloom
          luminanceThreshold={0}
          kernelSize={1}
          luminanceSmoothing={0.9}
          height={300}
        />
        <Noise opacity={0.002} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <CarModel />
          </>
        )}
      </CubeCamera>
    </>
  );
};

export default Car;
