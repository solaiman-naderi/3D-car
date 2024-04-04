import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

const CustomBox = (color) => {
  const box = useRef();
  const [xBoxSpeed] = useState(Math.random());
  const [yBoxSpeed] = useState(Math.random());
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.6 + 0.05);
  const [position, setPosition] = useState([0, 0, 0]);

  function resetPosition() {
    let v = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 4.5 - 0.1,
      (Math.random() * 2 - 1) * 15
    );
    if (v.x < 0) v.x -= 1.95;
    if (v.x > 0) v.x += 1.95;
    console.log(v);
    setPosition(v);
  }
  useEffect(() => {
    resetPosition();
  }, []);

  useFrame(
    (state, delta) => {
      box.current.position.set(position.x, position.y, position.z);
      box.current.rotation.x += delta * xBoxSpeed;
      box.current.rotation.y += delta * yBoxSpeed;
    },
    [xBoxSpeed, yBoxSpeed, position]
  );
  console.log(color);
  return (
    <mesh ref={box} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color.color} envMapIntensity={0.15} />
    </mesh>
  );
};

const Boxes = () => {
  return (
    <>
      {[
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ].map((e, i) => (
        <CustomBox
          key={i}
          color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
        />
      ))}
    </>
  );
};
export default Boxes;
