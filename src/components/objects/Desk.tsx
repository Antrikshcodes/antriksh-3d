"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { generateOakWoodPBRTextures } from "@/utils/woodTextureGenerator";

export function Desk() {
  const woodTextures = useMemo(() => generateOakWoodPBRTextures(), []);

  return (
    <group name="workspace-desk" position={[0, 0, 0]}>
      {/* Premium Natural Golden Honey Oak Desktop */}
      <group position={[0, 0.74, 0]}>
        {/* Main Solid Oak Tabletop Slab */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 0.042, 0.96]} />
          {woodTextures.albedo ? (
            <meshStandardMaterial
              map={woodTextures.albedo}
              roughnessMap={woodTextures.roughness || undefined}
              bumpMap={woodTextures.bump || undefined}
              bumpScale={0.002}
              roughness={0.46}
              metalness={0.02}
            />
          ) : (
            <meshStandardMaterial
              color="#d2a65d"
              roughness={0.45}
              metalness={0.04}
            />
          )}
        </mesh>

        {/* Detailed Chamfered Front Edge with end-grain warmth */}
        <mesh position={[0, -0.014, 0.479]} castShadow>
          <boxGeometry args={[2.196, 0.014, 0.004]} />
          <meshStandardMaterial
            color="#b88d46"
            roughness={0.52}
            metalness={0.02}
          />
        </mesh>
        {/* Back Edge */}
        <mesh position={[0, -0.014, -0.479]} castShadow>
          <boxGeometry args={[2.196, 0.014, 0.004]} />
          <meshStandardMaterial
            color="#b88d46"
            roughness={0.52}
            metalness={0.02}
          />
        </mesh>
        {/* Left Side Edge */}
        <mesh position={[-1.098, -0.014, 0]} castShadow>
          <boxGeometry args={[0.004, 0.014, 0.956]} />
          <meshStandardMaterial
            color="#b88d46"
            roughness={0.52}
            metalness={0.02}
          />
        </mesh>
        {/* Right Side Edge */}
        <mesh position={[1.098, -0.014, 0]} castShadow>
          <boxGeometry args={[0.004, 0.014, 0.956]} />
          <meshStandardMaterial
            color="#b88d46"
            roughness={0.52}
            metalness={0.02}
          />
        </mesh>

        {/* Minimalist Matte Dark Felt / Vegan Leather Desk Mat */}
        <mesh
          position={[0, 0.022, 0.06]}
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

        {/* Desk Mat Precision Edge Stitching */}
        <mesh position={[0, 0.023, 0.301]} receiveShadow>
          <boxGeometry args={[1.35, 0.002, 0.004]} />
          <meshStandardMaterial color="#2a303f" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.023, -0.181]} receiveShadow>
          <boxGeometry args={[1.35, 0.002, 0.004]} />
          <meshStandardMaterial color="#2a303f" roughness={0.9} />
        </mesh>
      </group>

      {/* Industrial Matte Steel Legs & Under-desk Structure */}
      <group name="desk-legs">
        {/* Left Leg Assembly */}
        <group position={[-0.92, 0, 0]}>
          <mesh position={[0, 0.36, 0]} castShadow>
            <boxGeometry args={[0.07, 0.72, 0.1]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          <mesh position={[0, 0.718, 0]} castShadow>
            <boxGeometry args={[0.09, 0.01, 0.68]} />
            <meshStandardMaterial color="#0f1117" roughness={0.4} metalness={0.8} />
          </mesh>
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.08, 0.03, 0.78]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          <mesh position={[0, 0.004, 0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.004, -0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Right Leg Assembly */}
        <group position={[0.92, 0, 0]}>
          <mesh position={[0, 0.36, 0]} castShadow>
            <boxGeometry args={[0.07, 0.72, 0.1]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          <mesh position={[0, 0.718, 0]} castShadow>
            <boxGeometry args={[0.09, 0.01, 0.68]} />
            <meshStandardMaterial color="#0f1117" roughness={0.4} metalness={0.8} />
          </mesh>
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.08, 0.03, 0.78]} />
            <meshStandardMaterial
              color="#13161c"
              roughness={0.35}
              metalness={0.85}
            />
          </mesh>
          <mesh position={[0, 0.004, 0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.004, -0.34]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Structural Heavy-Duty Crossbar & Cable Management Spine */}
        <mesh position={[0, 0.66, -0.15]} castShadow>
          <boxGeometry args={[1.76, 0.04, 0.08]} />
          <meshStandardMaterial
            color="#111319"
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
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
