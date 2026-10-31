"use client";

import { useRef } from "react";
import * as THREE from "three";

export function StudioLighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const deskSpotRef = useRef<THREE.SpotLight>(null);

  return (
    <group name="studio-lighting">
      {/* Balanced ambient foundation - preserves shadow depth without crushing blacks */}
      <ambientLight color="#1a1e2b" intensity={0.65} />

      {/* Main Studio Key Light - warm sunlight/studio key bringing out golden oak grain */}
      <directionalLight
        ref={dirLightRef}
        position={[-2.8, 4.6, 2.6]}
        intensity={2.2}
        color="#fff8ed"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-camera-left={-2.5}
        shadow-camera-right={2.5}
        shadow-camera-top={2.5}
        shadow-camera-bottom={-1.5}
        shadow-bias={-0.0002}
        shadow-radius={2.5}
      />

      {/* Desk Task Lamp Light - warm cone illuminating center-left desk & Space Black laptop */}
      <spotLight
        ref={deskSpotRef}
        position={[-0.75, 1.35, -0.1]}
        target-position={[-0.3, 0.77, 0.1]}
        angle={0.65}
        penumbra={0.8}
        intensity={3.0}
        color="#ffebcc"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Futuristic AI Lab Monitor Backlight Glow (Subtle Cyan Bias) */}
      <pointLight
        position={[0.0, 1.15, -0.32]}
        intensity={1.3}
        distance={2.2}
        decay={2}
        color="#00e5ff"
      />

      {/* Subtle Warm Dimensional Fill from right side */}
      <directionalLight
        position={[3.2, 2.5, 1.5]}
        intensity={0.55}
        color="#fed7aa"
      />

      {/* Under-shelf LED linear glow strip */}
      <pointLight
        position={[0.0, 1.62, -0.48]}
        intensity={0.85}
        distance={1.8}
        decay={2}
        color="#f8fafc"
      />
    </group>
  );
}
