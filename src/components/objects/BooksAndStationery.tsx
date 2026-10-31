"use client";

import * as THREE from "three";

export function BooksAndStationery() {
  return (
    <group name="books-and-stationery">
      {/* Books on the Wall Shelf (Left side of shelf) */}
      <group position={[-0.7, 1.7, -0.5]}>
        {/* Book 1: Deep Learning (Thick Hardcover) */}
        <mesh position={[-0.08, 0.09, 0]} castShadow>
          <boxGeometry args={[0.045, 0.18, 0.14]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.6} />
        </mesh>
        {/* Gold lettering on spine */}
        <mesh position={[-0.08, 0.09, 0.071]}>
          <planeGeometry args={[0.038, 0.12]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.3} />
        </mesh>

        {/* Book 2: Designing Data-Intensive Applications */}
        <mesh position={[-0.03, 0.095, 0]} castShadow>
          <boxGeometry args={[0.05, 0.19, 0.145]} />
          <meshStandardMaterial color="#b91c1c" roughness={0.65} />
        </mesh>

        {/* Book 3: Reinforcement Learning (Slanted slightly) */}
        <group position={[0.03, 0.09, 0]} rotation={[0, 0, -0.15]}>
          <mesh castShadow>
            <boxGeometry args={[0.038, 0.175, 0.135]} />
            <meshStandardMaterial color="#065f46" roughness={0.6} />
          </mesh>
        </group>

        {/* Minimalist Tech Geode / Sculptural Bookend */}
        <mesh position={[0.09, 0.045, 0]} castShadow>
          <dodecahedronGeometry args={[0.04, 0]} />
          <meshStandardMaterial
            color="#334155"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* Desk Notebook & Machined Aluminum Pen Dock (Left side of desk) */}
      <group position={[-0.68, 0.762, -0.26]}>
        {/* Modern Black Grid Notebook */}
        <mesh position={[0, 0.008, 0]} rotation={[0, 0.1, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.14, 0.016, 0.2]} />
          <meshStandardMaterial color="#18181b" roughness={0.75} />
        </mesh>
        {/* Ribbon Bookmark trailing out */}
        <mesh position={[0.04, 0.009, 0.108]} rotation={[0, 0.2, 0]}>
          <boxGeometry args={[0.01, 0.001, 0.04]} />
          <meshStandardMaterial color="#0284c7" roughness={0.8} />
        </mesh>

        {/* Solid Machined Aluminum Pen Dock */}
        <group position={[0.11, 0, 0.04]}>
          {/* Base */}
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.018, 0.02, 0.03, 24]} />
            <meshStandardMaterial color="#334155" metalness={0.92} roughness={0.2} />
          </mesh>
          {/* Standing Precision Metal Pen tilted ~15 deg */}
          <group position={[0, 0.045, 0]} rotation={[0.2, 0, -0.1]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.004, 0.004, 0.12, 16]} />
              <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.15} />
            </mesh>
            {/* Pen Clip */}
            <mesh position={[0.005, 0.03, 0]}>
              <boxGeometry args={[0.002, 0.04, 0.003]} />
              <meshStandardMaterial color="#d4af37" metalness={0.95} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
