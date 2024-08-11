import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/work-station.glb");

export default function Model() {
  const group = useRef(null);
  const { nodes, materials, scene, animations } = useGLTF(
    "/work-station.glb"
  );
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
