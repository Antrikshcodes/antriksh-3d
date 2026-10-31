"use client";

import * as THREE from "three";

export function CoffeeMug() {
  return (
    <group
      name="coffee-mug"
      position={[0.52, 0.762, -0.04]}
      rotation={[0, 0.8, 0]}
    >
      {/* Matte Black Stoneware Mug Body */}
      <mesh position={[0, 0.048, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.042, 0.038, 0.096, 32, 1, true]} />
        <meshStandardMaterial
          color="#181a20"
          roughness={0.55}
          metalness={0.1}
        />
      </mesh>

      {/* Mug Bottom Base */}
      <mesh position={[0, 0.005, 0]} castShadow>
        <cylinderGeometry args={[0.038, 0.038, 0.01, 32]} />
        <meshStandardMaterial color="#181a20" roughness={0.55} />
      </mesh>

      {/* Mug Inner Wall */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.039, 0.035, 0.092, 32, 1, true]} />
        <meshStandardMaterial
          color="#121418"
          roughness={0.2}
          metalness={0.15}
        />
      </mesh>

      {/* Glossy Black Coffee Liquid */}
      <mesh position={[0, 0.076, 0]}>
        <cylinderGeometry args={[0.038, 0.038, 0.004, 32]} />
        <meshStandardMaterial
          color="#1a0f07"
          roughness={0.08}
          metalness={0.3}
        />
      </mesh>

      {/* Ergonomic Extruded Ceramic Handle */}
      <mesh position={[0.046, 0.048, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.024, 0.006, 16, 24, Math.PI * 1.1]} />
        <meshStandardMaterial
          color="#181a20"
          roughness={0.55}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
