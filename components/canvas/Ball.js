"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
// import { TextureLoader } from "three/src/loaders/TextureLoader";

import { TextureLoader } from "three";

// import CanvasLoader from "./Loader";

// export const Ball = (props) => {
//   console.log(props);
//   const [decal] = useTexture([props.imgUrl]);

//   return <div>Ball</div>;
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

const BallCanvas = ({ icon }) => {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 3, 1]} />
        <Suspense fallback={null}>
          <Ball imgUrl={icon} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BallCanvas;

const Ball = (props) => {
  console.log("props", props);
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.z += delta * 0.25;
  });

  // const texture_1 = useLoader(TextureLoader, "./css.png");
  return (
    <mesh ref={mesh} receiveShadow castShadow>
      <icosahedronGeometry args={[2, 2, 2]} />
      {/* <meshStandardMaterial map={texture_1} /> */}
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
};
