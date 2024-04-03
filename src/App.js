import { Suspense } from "react";
import Car from "./components/Car";
import { Canvas } from "@react-three/fiber";
function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas className="canvas" shadows>
          <Car />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
