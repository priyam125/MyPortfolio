"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  Html,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import css from "@/assets/Skills/css.png";
import { TextureLoader } from "three";

import CanvasLoader from "./Loader";

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

const BallCanvas = ({ icon, name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <Canvas>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 3, 1]} />
        <Suspense fallback={<CanvasLoader />}>
          <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <Ball
              imgUrl={icon}
              displayName={name}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Float>
        </Suspense>
      </Canvas>
      {hovered && <div className="text-lightest-slate font-raleway absolute bottom-[85%] left-[40%] w-28 text-xs">{name}</div>}
    </div>
  );
};

export default BallCanvas;

const Ball = (props) => {
  // console.log("props", props);
  const mesh = useRef(null);
  const decalRef = useRef(null);

  const { hovered, setHovered, displayName } = props;

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.0;
    mesh.current.rotation.y += delta * 0.0;
    mesh.current.rotation.z += delta * 0.0;
  });

  // const texture_1 = useLoader(TextureLoader, "./css.png");
  const texture_1 = useLoader(TextureLoader, props.imgUrl.src);

  // const colorMap = useTexture("css.png")
  return (
    <mesh
      ref={mesh}
      receiveShadow
      castShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[2, 2]} />
      {/* <meshStandardMaterial map={texture_1} /> */}
      <meshStandardMaterial
        color={"#fff8eb"}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        // map={texture_1}
      />
      <Decal
        ref={decalRef}
        position={[0, 0, 2]} // Adjust position to place the decal on the front-facing face
        rotation={[0, 0, 0]} // Adjust rotation if needed
        scale={[1.5, 1.5, 1.5]}
        map={texture_1}
      />
      {/* {hovered && (
        <Html position={[50, 0, -100]}>
          <div
            style={{
              color: "white",
              background: "red",
              padding: "2px 5px",
              borderRadius: "5px",
              zIndex: "100"
            }}
          >
            {displayName}
          </div>
        </Html>
      )} */}
    </mesh>
  );
};
