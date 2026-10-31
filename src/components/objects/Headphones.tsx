"use client";

import * as THREE from "three";

export function Headphones() {
  return (
    <group
      name="studio-headphones"
      position={[0.78, 0.762, 0.08]}
      rotation={[0, -0.25, 0]}
    >
      {/* Precision Aluminum Headphone Stand */}
      <group name="stand">
        {/* Weighted Round Base */}
        <mesh position={[0, 0.005, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.055, 0.058, 0.01, 24]} />
          <meshStandardMaterial
            color="#222733"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>
        {/* Vertical Aluminum Stem */}
        <mesh position={[0, 0.13, 0]} castShadow>
          <cylinderGeometry args={[0.008, 0.008, 0.25, 16]} />
          <meshStandardMaterial
            color="#2d3545"
            metalness={0.92}
            roughness={0.2}
          />
        </mesh>
        {/* Curved Top Saddle */}
        <mesh position={[0, 0.255, 0]} castShadow>
          <boxGeometry args={[0.07, 0.012, 0.035]} />
          <meshStandardMaterial color="#1b202c" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Studio Reference Over-Ear Headphones */}
      <group name="headphone-body" position={[0, 0.16, 0]}>
        {/* Arched Padded Headband */}
        <mesh position={[0, 0.095, 0]} castShadow>
          <torusGeometry args={[0.062, 0.009, 12, 32, Math.PI]} />
          <meshStandardMaterial
            color="#141822"
            roughness={0.85}
          />
        </mesh>

        {/* Brushed Metal Slider Arms */}
        <mesh position={[-0.062, 0.045, 0]} castShadow>
          <boxGeometry args={[0.006, 0.08, 0.012]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.95} roughness={0.2} />
        </mesh>
        <mesh position={[0.062, 0.045, 0]} castShadow>
          <boxGeometry args={[0.006, 0.08, 0.012]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.95} roughness={0.2} />
        </mesh>

        {/* Left Earcup Assembly */}
        <group position={[-0.072, 0.01, 0]}>
          {/* Earcup Outer Shell */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.024, 24]} />
            <meshStandardMaterial
              color="#1a202c"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          {/* Outer Acoustic Grille / Metal Ring Accent */}
          <mesh position={[-0.013, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.031, 0.031, 0.002, 24]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Plush Memory Foam Ear Cushion */}
          <mesh position={[0.014, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.026, 0.009, 12, 24]} />
            <meshStandardMaterial color="#0b0e14" roughness={0.9} />
          </mesh>
        </group>

        {/* Right Earcup Assembly */}
        <group position={[0.072, 0.01, 0]}>
          {/* Earcup Outer Shell */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.024, 24]} />
            <meshStandardMaterial
              color="#1a202c"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          {/* Outer Acoustic Grille / Metal Ring Accent */}
          <mesh position={[0.013, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.031, 0.031, 0.002, 24]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Plush Memory Foam Ear Cushion */}
          <mesh position={[-0.014, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.026, 0.009, 12, 24]} />
            <meshStandardMaterial color="#0b0e14" roughness={0.9} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
