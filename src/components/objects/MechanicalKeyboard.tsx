"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function MechanicalKeyboard() {
  const underglowRef = useRef<THREE.PointLight>(null);

  // Keycaps layout for 75% mechanical keyboard
  const keys = useMemo(() => {
    const list = [];
    const rows = 5;
    const cols = 15;
    const keyWidth = 0.018;
    const keyDepth = 0.018;
    const gap = 0.002;

    const startX = -((cols * (keyWidth + gap)) / 2) + keyWidth / 2;
    const startZ = -((rows * (keyDepth + gap)) / 2) + keyDepth / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (r === 4 && c >= 4 && c <= 9) continue;

        let color = "#334155";
        if (r >= 1 && r <= 3 && c >= 1 && c <= 12) {
          color = "#64748b";
        }
        if (r === 0 && c === 0) color = "#06b6d4";
        if (r === 2 && c === 13) color = "#06b6d4";

        list.push({
          x: startX + c * (keyWidth + gap),
          z: startZ + r * (keyDepth + gap),
          color,
          width: keyWidth,
          depth: keyDepth,
        });
      }
    }

    return list;
  }, []);

  // Subtle breathing keyboard underglow illumination
  useFrame((state) => {
    if (underglowRef.current) {
      const t = state.clock.getElapsedTime();
      underglowRef.current.intensity = 0.18 + Math.sin(t * 1.8) * 0.08;
    }
  });

  return (
    <group
      name="mechanical-keyboard"
      position={[0.0, 0.762, 0.2]}
      rotation={[-0.06, 0, 0]}
    >
      {/* Matte Anodized Aluminum Chassis Case */}
      <mesh castShadow receiveShadow position={[0, 0.01, 0]}>
        <boxGeometry args={[0.32, 0.018, 0.125]} />
        <meshStandardMaterial
          color="#1e2430"
          metalness={0.88}
          roughness={0.28}
        />
      </mesh>

      {/* Brass Weight / Accent Bar on Front Bevel */}
      <mesh position={[0, 0.005, 0.062]} castShadow>
        <boxGeometry args={[0.22, 0.006, 0.004]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      {/* Switch Plate Recess */}
      <mesh position={[0, 0.018, 0]} receiveShadow>
        <boxGeometry args={[0.306, 0.002, 0.112]} />
        <meshStandardMaterial color="#0b0e14" roughness={0.7} />
      </mesh>

      {/* Individual Double-shot PBT Keycaps */}
      {keys.map((k, idx) => (
        <mesh key={idx} position={[k.x, 0.023, k.z]} castShadow>
          <boxGeometry args={[k.width, 0.008, k.depth]} />
          <meshStandardMaterial
            color={k.color}
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
      ))}

      {/* Spacebar */}
      <mesh position={[0.005, 0.023, 0.04]} castShadow>
        <boxGeometry args={[0.118, 0.008, 0.018]} />
        <meshStandardMaterial
          color="#475569"
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>

      {/* Breathing underglow illumination between keycaps */}
      <pointLight
        ref={underglowRef}
        position={[0, 0.024, 0]}
        color="#38bdf8"
        intensity={0.22}
        distance={0.35}
        decay={2}
      />
    </group>
  );
}
