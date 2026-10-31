"use client";

import * as THREE from "three";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";

export function Trophies() {
  return (
    <InteractiveWrapper
      id="trophyShelf"
      position={[0.2, 1.7, -0.5]}
      hoverElevation={0.02}
    >
      <group name="achievement-trophies">
        {/* Trophy 1: Fetch-A-Thon 3.0 Crystal Obelisk */}
        <group position={[-0.45, 0, 0]}>
          {/* Heavy Black Marble Base */}
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.07, 0.03, 0.07]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Gold Engraved Plaque */}
          <mesh position={[0, 0.015, 0.036]}>
            <planeGeometry args={[0.05, 0.016]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.2} />
          </mesh>
          {/* Crystal Obelisk Tower */}
          <mesh position={[0, 0.095, 0]} castShadow>
            <cylinderGeometry args={[0.012, 0.024, 0.13, 4]} />
            <meshPhysicalMaterial
              color="#e0f2fe"
              transmission={0.85}
              opacity={1}
              transparent
              roughness={0.05}
              ior={1.52}
            />
          </mesh>
        </group>

        {/* Trophy 2: HackO’Ween Angular Modern Sculpture */}
        <group position={[-0.15, 0, 0]}>
          {/* Base */}
          <mesh position={[0, 0.012, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.04, 0.045, 0.024, 6]} />
            <meshStandardMaterial color="#18181b" roughness={0.3} metalness={0.7} />
          </mesh>
          {/* Angular Geometric Star / Wing */}
          <mesh position={[0, 0.08, 0]} rotation={[0, 0.4, 0.15]} castShadow>
            <boxGeometry args={[0.02, 0.12, 0.055]} />
            <meshStandardMaterial color="#ea580c" metalness={0.85} roughness={0.25} />
          </mesh>
          {/* Secondary Interlocking Wing */}
          <mesh position={[0, 0.07, 0]} rotation={[0, -0.4, -0.15]} castShadow>
            <boxGeometry args={[0.018, 0.1, 0.045]} />
            <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Trophy 3: CoNSTruct 2.0 Architectural Cup */}
        <group position={[0.15, 0, 0]}>
          {/* Tiered Walnut Base */}
          <mesh position={[0, 0.014, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.038, 0.042, 0.028, 24]} />
            <meshStandardMaterial color="#221914" roughness={0.5} />
          </mesh>
          {/* Silver Stem */}
          <mesh position={[0, 0.045, 0]} castShadow>
            <cylinderGeometry args={[0.008, 0.014, 0.035, 16]} />
            <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
          </mesh>
          {/* Polished Chrome Chalice Cup */}
          <mesh position={[0, 0.085, 0]} castShadow>
            <cylinderGeometry args={[0.036, 0.016, 0.05, 24]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.98} roughness={0.1} />
          </mesh>
        </group>

        {/* Trophy 4: IIT Roorkee eSummit Commemorative Plaque */}
        <group position={[0.45, 0, 0]}>
          {/* Dark Brushed Aluminum Stand */}
          <mesh position={[0, 0.008, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.09, 0.016, 0.04]} />
            <meshStandardMaterial color="#1e293b" metalness={0.85} roughness={0.3} />
          </mesh>
          {/* Slanted Glass Plaque with Golden Emblems */}
          <mesh position={[0, 0.065, 0]} rotation={[-0.1, 0, 0]} castShadow>
            <boxGeometry args={[0.075, 0.1, 0.008]} />
            <meshPhysicalMaterial
              color="#f8fafc"
              transmission={0.82}
              opacity={1}
              transparent
              roughness={0.1}
              ior={1.48}
            />
          </mesh>
          {/* Gold Center Seal */}
          <mesh position={[0, 0.07, 0.005]} rotation={[-0.1, 0, 0]}>
            <circleGeometry args={[0.014, 20]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.2} />
          </mesh>
        </group>
      </group>
    </InteractiveWrapper>
  );
}

