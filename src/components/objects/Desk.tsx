"use client";

import { useRef } from "react";
import * as THREE from "three";

export function Desk() {
  const deskTopRef = useRef<THREE.Mesh>(null);

  return (
    <group name="workspace-desk" position={[0, 0, 0]}>
      {/* Premium Solid Walnut Desktop */}
      <group position={[0, 0.74, 0]}>
        {/* Main Tabletop Slab */}
        <mesh ref={deskTopRef} castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 0.04, 0.96]} />
          <meshStandardMaterial
            color="#271d17"
            roughness={0.48}
            metalness={0.06}
          />
        </mesh>

        {/* Chamfered front and back bevel trims for photorealistic edge refinement */}
        <mesh position={[0, -0.012, 0.478]} castShadow>
          <boxGeometry args={[2.19, 0.016, 0.006]} />
          <meshStandardMaterial color="#1f1611" roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.012, -0.478]} castShadow>
          <boxGeometry args={[2.19, 0.016, 0.006]} />
          <meshStandardMaterial color="#1f1611" roughness={0.5} />
        </mesh>

        {/* Minimalist Matte Dark Felt / Vegan Leather Desk Mat */}
        <mesh
          position={[0, 0.021, 0.06]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[1.35, 0.48]} />
          <meshStandardMaterial
            color="#14171f"
            roughness={0.88}
            metalness={0.05}
          />
        </mesh>

        {/* Desk Mat Edge Stitching Accent */}
        <mesh position={[0, 0.022, 0.301]} receiveShadow>
          <boxGeometry args={[1.35, 0.002, 0.004]} />
          <meshStandardMaterial color="#222836" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.022, -0.181]} receiveShadow>
          <boxGeometry args={[1.35, 0.002, 0.004]} />
          <meshStandardMaterial color="#222836" roughness={0.9} />
        </mesh>
      </group>

      {/* Industrial Matte Steel Legs & Under-desk Cable Management */}
      <group name="desk-legs">
        {/* Left Leg Assembly */}
        <group position={[-0.92, 0, 0]}>
          {/* Vertical Columns */}
          <mesh position={[0, 0.36, 0]} castShadow>
            <boxGeometry args={[0.07, 0.72, 0.1]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          {/* Top Mounting Plate */}
          <mesh position={[0, 0.718, 0]} castShadow>
            <boxGeometry args={[0.09, 0.01, 0.68]} />
            <meshStandardMaterial color="#0f1117" roughness={0.4} metalness={0.8} />
          </mesh>
          {/* Floor Footing Base */}
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.08, 0.03, 0.78]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          {/* Leveling Feet Glides */}
          <mesh position={[0, 0.004, 0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#silver" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.004, -0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#silver" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Right Leg Assembly */}
        <group position={[0.92, 0, 0]}>
          {/* Vertical Column */}
          <mesh position={[0, 0.36, 0]} castShadow>
            <boxGeometry args={[0.07, 0.72, 0.1]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          {/* Top Mounting Plate */}
          <mesh position={[0, 0.718, 0]} castShadow>
            <boxGeometry args={[0.09, 0.01, 0.68]} />
            <meshStandardMaterial color="#0f1117" roughness={0.4} metalness={0.8} />
          </mesh>
          {/* Floor Footing Base */}
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.08, 0.03, 0.78]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          {/* Leveling Feet Glides */}
          <mesh position={[0, 0.004, 0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#silver" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.004, -0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#silver" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Structural Heavy-Duty Crossbar & Cable Spine */}
        <mesh position={[0, 0.66, -0.15]} castShadow>
          <boxGeometry args={[1.76, 0.04, 0.08]} />
          <meshStandardMaterial
            color="#111319"
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
        {/* Metal Cable Trough */}
        <mesh position={[0, 0.68, -0.28]} receiveShadow>
          <boxGeometry args={[1.2, 0.06, 0.14]} />
          <meshStandardMaterial
            color="#0d0f14"
            roughness={0.6}
            metalness={0.7}
          />
        </mesh>
      </group>
    </group>
  );
}
