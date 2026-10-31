"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";

export function StudioLighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const deskSpotRef = useRef<THREE.SpotLight>(null);
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const fillLightRef = useRef<THREE.DirectionalLight>(null);

  const introPhase = useWorkspaceStore((s) => s.introPhase);

  // Animate lighting awakening during the cinematic introduction
  useFrame((_, delta) => {
    let targetAmbient = 0.65;
    let targetKey = 2.2;
    let targetSpot = 3.0;
    let targetFill = 0.55;

    if (introPhase === "dark") {
      targetAmbient = 0.08;
      targetKey = 0.0;
      targetSpot = 0.0;
      targetFill = 0.0;
    } else if (introPhase === "lighting") {
      targetAmbient = 0.25;
      targetKey = 0.3;
      targetSpot = 2.8;
      targetFill = 0.1;
    } else if (introPhase === "screen" || introPhase === "title") {
      targetAmbient = 0.45;
      targetKey = 1.0;
      targetSpot = 3.0;
      targetFill = 0.3;
    }

    if (ambientRef.current) {
      ambientRef.current.intensity = THREE.MathUtils.damp(ambientRef.current.intensity, targetAmbient, 4, delta);
    }
    if (dirLightRef.current) {
      dirLightRef.current.intensity = THREE.MathUtils.damp(dirLightRef.current.intensity, targetKey, 3, delta);
    }
    if (deskSpotRef.current) {
      deskSpotRef.current.intensity = THREE.MathUtils.damp(deskSpotRef.current.intensity, targetSpot, 4, delta);
    }
    if (fillLightRef.current) {
      fillLightRef.current.intensity = THREE.MathUtils.damp(fillLightRef.current.intensity, targetFill, 3, delta);
    }
  });

  return (
    <group name="studio-lighting">
      {/* Balanced ambient foundation */}
      <ambientLight ref={ambientRef} color="#1a1e2b" intensity={0.1} />

      {/* Main Studio Key Light - warm sunlight/studio key bringing out golden oak grain */}
      <directionalLight
        ref={dirLightRef}
        position={[-2.8, 4.6, 2.6]}
        intensity={0.0}
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
        intensity={0.0}
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
        ref={fillLightRef}
        position={[3.2, 2.5, 1.5]}
        intensity={0.0}
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
