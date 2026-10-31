"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";

export function RoboticsFigurine() {
  const visorRef = useRef<THREE.MeshBasicMaterial>(null);

  // Subtle breathing pulse on the optic visor
  useFrame(({ clock }) => {
    if (visorRef.current) {
      const t = clock.getElapsedTime();
      visorRef.current.color.setHSL(0.52, 1, 0.5 + Math.sin(t * 2) * 0.15);
    }
  });

  return (
    <InteractiveWrapper
      id="robot"
      position={[0.82, 0.762, -0.22]}
      rotation={[0, -0.35, 0]}
      hoverElevation={0.02}
    >
      <group name="robotics-figurine">
        {/* Sleek Machined Display Pedestal */}
        <mesh position={[0, 0.012, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.075, 0.082, 0.024, 32]} />
          <meshStandardMaterial
            color="#181c24"
            metalness={0.88}
            roughness={0.25}
          />
        </mesh>

        {/* Engraved Plaque */}
        <mesh position={[0, 0.012, 0.08]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.06, 0.012, 0.002]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Robot Pelvis / Hip Core */}
        <mesh position={[0, 0.062, 0]} castShadow>
          <boxGeometry args={[0.045, 0.025, 0.03]} />
          <meshStandardMaterial color="#2d3748" metalness={0.85} roughness={0.3} />
        </mesh>

        {/* Legs with Knee Hydraulics */}
        {/* Left Leg */}
        <group position={[-0.022, 0.035, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.006, 0.006, 0.045, 12]} />
            <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.25} />
          </mesh>
          <mesh position={[0, -0.016, 0.005]} castShadow>
            <boxGeometry args={[0.012, 0.01, 0.022]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
          </mesh>
        </group>
        {/* Right Leg */}
        <group position={[0.022, 0.035, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.006, 0.006, 0.045, 12]} />
            <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.25} />
          </mesh>
          <mesh position={[0, -0.016, 0.005]} castShadow>
            <boxGeometry args={[0.012, 0.01, 0.022]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
          </mesh>
        </group>

        {/* Robot Torso / Chassis */}
        <group position={[0, 0.105, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.062, 0.06, 0.04]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.8}
              roughness={0.35}
            />
          </mesh>

          {/* Angled Chest Armor Plates */}
          <mesh position={[0, 0.005, 0.022]} rotation={[0.12, 0, 0]} castShadow>
            <boxGeometry args={[0.056, 0.045, 0.008]} />
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.85}
              roughness={0.3}
            />
          </mesh>

          {/* Chest Reactor Core */}
          <mesh position={[0, 0.008, 0.026]}>
            <circleGeometry args={[0.007, 16]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
          <pointLight
            position={[0, 0.008, 0.035]}
            color="#00f0ff"
            intensity={0.4}
            distance={0.2}
          />
        </group>

        {/* Articulated Arms */}
        {/* Left Arm */}
        <group position={[-0.042, 0.12, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.008, 12, 12]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Forearm angled forward */}
          <mesh position={[-0.004, -0.03, 0.012]} rotation={[0.4, 0, 0]} castShadow>
            <boxGeometry args={[0.01, 0.045, 0.012]} />
            <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.3} />
          </mesh>
        </group>
        {/* Right Arm */}
        <group position={[0.042, 0.12, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.008, 12, 12]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Forearm */}
          <mesh position={[0.004, -0.03, 0.012]} rotation={[0.4, 0, 0]} castShadow>
            <boxGeometry args={[0.01, 0.045, 0.012]} />
            <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.3} />
          </mesh>
        </group>

        {/* Head / Sensor Visor Assembly */}
        <group position={[0, 0.155, 0]}>
          {/* Neck Column */}
          <mesh position={[0, -0.01, 0]}>
            <cylinderGeometry args={[0.006, 0.006, 0.012, 12]} />
            <meshStandardMaterial color="#475569" metalness={0.9} />
          </mesh>

          {/* Angular Helmet */}
          <mesh castShadow>
            <boxGeometry args={[0.038, 0.032, 0.034]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.85}
              roughness={0.3}
            />
          </mesh>

          {/* Optic Sensor Visor Strip */}
          <mesh position={[0, 0.002, 0.018]}>
            <planeGeometry args={[0.03, 0.008]} />
            <meshBasicMaterial ref={visorRef} color="#00f0ff" />
          </mesh>

          {/* Communications Antenna */}
          <mesh position={[0.014, 0.024, -0.008]}>
            <cylinderGeometry args={[0.0015, 0.0015, 0.03, 8]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} />
          </mesh>
        </group>
      </group>
    </InteractiveWrapper>
  );
}

