"use client";

import * as THREE from "three";

export function WirelessMouse() {
  return (
    <group
      name="wireless-mouse"
      position={[0.26, 0.762, 0.2]}
      rotation={[0, -0.08, 0]}
    >
      {/* Ergonomic Main Body Shell */}
      <mesh position={[0, 0.016, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.068, 0.03, 0.115]} />
        <meshStandardMaterial
          color="#1a1e27"
          roughness={0.4}
          metalness={0.25}
        />
      </mesh>

      {/* Ergonomic Thumb Rest Wing */}
      <mesh position={[-0.038, 0.008, 0.01]} castShadow>
        <boxGeometry args={[0.02, 0.012, 0.065]} />
        <meshStandardMaterial color="#141720" roughness={0.6} />
      </mesh>

      {/* Primary Click Buttons Split */}
      <mesh position={[-0.016, 0.028, -0.03]} castShadow>
        <boxGeometry args={[0.028, 0.006, 0.045]} />
        <meshStandardMaterial color="#222834" roughness={0.35} metalness={0.3} />
      </mesh>
      <mesh position={[0.016, 0.028, -0.03]} castShadow>
        <boxGeometry args={[0.028, 0.006, 0.045]} />
        <meshStandardMaterial color="#222834" roughness={0.35} metalness={0.3} />
      </mesh>

      {/* Machined Metal Scroll Wheel */}
      <mesh
        position={[0, 0.03, -0.028]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[0.007, 0.007, 0.008, 20]} />
        <meshStandardMaterial
          color="#e2e8f0"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* Metal Thumb Wheel */}
      <mesh
        position={[-0.036, 0.022, -0.005]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.005, 0.005, 0.008, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Power / DPI LED Indicator */}
      <mesh position={[0, 0.029, 0.008]}>
        <circleGeometry args={[0.0015, 8]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
    </group>
  );
}

