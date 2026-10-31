"use client";

import { useRef } from "react";
import * as THREE from "three";

export function StudioLighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const deskSpotRef = useRef<THREE.SpotLight>(null);

  return (
    <group name="studio-lighting">
      {/* Subtle ambient foundation - keeps dark areas readable without flattening */}
      <ambientLight color="#182030" intensity={0.7} />

      {/* Main Studio Key Light with soft realistic shadows */}
      <directionalLight
        ref={dirLightRef}
        position={[-2.8, 4.6, 2.6]}
        intensity={2.0}
        color="#f8fafc"
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

      {/* Desk Task Lamp Light - warm cone illuminating center-left desk */}
      <spotLight
        ref={deskSpotRef}
        position={[-0.75, 1.35, -0.1]}
        target-position={[-0.3, 0.77, 0.1]}
        angle={0.65}
        penumbra={0.8}
        intensity={2.8}
        color="#ffe8c8"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Futuristic AI Lab Monitor Backlight Glow (Subtle Cyan Bias) */}
      <pointLight
        position={[0.0, 1.15, -0.32]}
        intensity={1.4}
        distance={2.2}
        decay={2}
        color="#00e5ff"
      />

      {/* Subtle Warm Fill Light from opposite side for dimensional rim separation */}
      <directionalLight
        position={[3.2, 2.5, 1.5]}
        intensity={0.6}
        color="#93c5fd"
      />

      {/* Under-shelf LED linear glow strip */}
      <pointLight
        position={[0.0, 1.62, -0.48]}
        intensity={0.9}
        distance={1.8}
        decay={2}
        color="#f1f5f9"
      />
    </group>
  );
}
