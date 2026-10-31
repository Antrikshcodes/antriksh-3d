"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function RoomStudio() {
  // Acoustic wood slats data
  const slats = useMemo(() => {
    const list = [];
    const count = 38;
    const spacing = 0.045;
    const startX = -((count * spacing) / 2);
    for (let i = 0; i < count; i++) {
      list.push(startX + i * spacing);
    }
    return list;
  }, []);

  return (
    <group name="room-studio">
      {/* Floor - Polished dark architectural concrete */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial
          color="#0c0e14"
          roughness={0.28}
          metalness={0.15}
        />
      </mesh>

      {/* Main Back Wall */}
      <mesh position={[0, 3, -1.25]} receiveShadow>
        <planeGeometry args={[16, 6]} />
        <meshStandardMaterial
          color="#0e1219"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Acoustic Wood Slat Accent Feature Wall behind the Desk */}
      <group position={[0, 1.8, -1.22]}>
        {/* Dark acoustic backing felt */}
        <mesh position={[0, 0, -0.01]} receiveShadow>
          <planeGeometry args={[2.2, 3.4]} />
          <meshStandardMaterial color="#080a0f" roughness={0.95} />
        </mesh>

        {/* Individual vertical oak slats */}
        {slats.map((x, idx) => (
          <mesh
            key={idx}
            position={[x, 0, 0.008]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.024, 3.4, 0.016]} />
            <meshStandardMaterial
              color="#2a1f18"
              roughness={0.65}
              metalness={0.05}
            />
          </mesh>
        ))}
      </group>

      {/* Floating Wall Shelf above Desk */}
      <group position={[0, 1.68, -0.52]}>
        {/* Shelf Board */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 0.032, 0.26]} />
          <meshStandardMaterial
            color="#221914"
            roughness={0.55}
            metalness={0.08}
          />
        </mesh>

        {/* Matte black wall brackets */}
        <mesh position={[-0.85, -0.07, -0.05]} castShadow>
          <boxGeometry args={[0.03, 0.12, 0.16]} />
          <meshStandardMaterial color="#111317" roughness={0.4} metalness={0.8} />
        </mesh>
        <mesh position={[0.85, -0.07, -0.05]} castShadow>
          <boxGeometry args={[0.03, 0.12, 0.16]} />
          <meshStandardMaterial color="#111317" roughness={0.4} metalness={0.8} />
        </mesh>

        {/* LED Diffuser strip under the shelf */}
        <mesh position={[0, -0.018, 0]}>
          <boxGeometry args={[2.1, 0.006, 0.03]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Modern Studio Ergonomic Office Chair behind Desk */}
      <group position={[0, 0, -0.45]}>
        {/* 5-star Caster Base */}
        <mesh position={[0, 0.08, 0]} castShadow>
          <cylinderGeometry args={[0.34, 0.36, 0.04, 8]} />
          <meshStandardMaterial color="#12151c" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Center Pneumatic Column */}
        <mesh position={[0, 0.28, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.36, 16]} />
          <meshStandardMaterial color="#silver" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Seat Cushion */}
        <mesh position={[0, 0.48, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.54, 0.08, 0.52]} />
          <meshStandardMaterial color="#1a1e28" roughness={0.8} />
        </mesh>
        {/* Ergonomic Mesh Backrest */}
        <mesh position={[0, 0.88, -0.22]} rotation={[0.08, 0, 0]} castShadow>
          <boxGeometry args={[0.48, 0.68, 0.05]} />
          <meshStandardMaterial color="#131620" roughness={0.85} />
        </mesh>
        {/* Lumbar Support Element */}
        <mesh position={[0, 0.72, -0.24]} castShadow>
          <boxGeometry args={[0.38, 0.1, 0.04]} />
          <meshStandardMaterial color="#0b0e14" roughness={0.4} metalness={0.5} />
        </mesh>
        {/* Armrests */}
        <mesh position={[-0.29, 0.65, 0.02]} castShadow>
          <boxGeometry args={[0.06, 0.03, 0.26]} />
          <meshStandardMaterial color="#11141b" roughness={0.5} />
        </mesh>
        <mesh position={[0.29, 0.65, 0.02]} castShadow>
          <boxGeometry args={[0.06, 0.03, 0.26]} />
          <meshStandardMaterial color="#11141b" roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
}
