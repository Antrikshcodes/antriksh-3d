"use client";

import * as THREE from "three";

export function DeskLamp() {
  return (
    <group
      name="modern-desk-lamp"
      position={[-0.88, 0.762, -0.28]}
      rotation={[0, 0.45, 0]}
    >
      {/* Weighted Matte Black Base */}
      <mesh position={[0, 0.008, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.08, 0.085, 0.016, 32]} />
        <meshStandardMaterial
          color="#15181f"
          roughness={0.35}
          metalness={0.7}
        />
      </mesh>

      {/* Touch Power Button with Subtle Status LED */}
      <mesh position={[0.04, 0.017, 0.02]}>
        <circleGeometry args={[0.005, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Base Swivel Joint with Brass Pin */}
      <mesh position={[0, 0.024, 0]} castShadow>
        <cylinderGeometry args={[0.018, 0.018, 0.02, 16]} />
        <meshStandardMaterial color="#1a1e28" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.024, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.004, 0.004, 0.024, 16]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.2} />
      </mesh>

      {/* Lower Cantilever Arm Angled Forward */}
      <group position={[0, 0.03, 0]} rotation={[0, 0, -0.25]}>
        <mesh position={[0, 0.16, 0]} castShadow>
          <cylinderGeometry args={[0.006, 0.006, 0.32, 16]} />
          <meshStandardMaterial color="#15181f" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Mid-Arm Articulating Brass Knuckle */}
        <group position={[0, 0.32, 0]} rotation={[0, 0, 0.65]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.012, 0.012, 0.018, 16]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.2} />
          </mesh>

          {/* Upper Reach Arm */}
          <mesh position={[0, 0.14, 0]} castShadow>
            <cylinderGeometry args={[0.006, 0.006, 0.28, 16]} />
            <meshStandardMaterial color="#15181f" metalness={0.8} roughness={0.3} />
          </mesh>

          {/* Lamp Head Angle Mount */}
          <group position={[0, 0.28, 0]} rotation={[0, 0, -0.4]}>
            {/* Horizontal Slim LED Light Bar */}
            <mesh position={[0.12, 0, 0]} castShadow>
              <boxGeometry args={[0.3, 0.015, 0.03]} />
              <meshStandardMaterial
                color="#15181f"
                metalness={0.8}
                roughness={0.3}
              />
            </mesh>

            {/* LED Diffuser Lens Surface emitting warm task light */}
            <mesh position={[0.12, -0.008, 0]}>
              <boxGeometry args={[0.28, 0.002, 0.024]} />
              <meshBasicMaterial color="#fff3db" />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

