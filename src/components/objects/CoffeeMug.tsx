"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function CoffeeMug() {
  const steamGroupRef = useRef<THREE.Group>(null);

  // Generate steam particle data
  const particles = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => ({
      baseY: (i / 16) * 0.14,
      speed: 0.02 + (i % 3) * 0.01,
      swayFreq: 1.5 + (i % 4) * 0.5,
      swayAmp: 0.006 + (i % 3) * 0.003,
      phase: i * 0.4,
      scale: 0.008 + (i / 16) * 0.018,
    }));
  }, []);

  // Soft billowing animation of coffee steam
  useFrame((state, delta) => {
    if (!steamGroupRef.current) return;
    const time = state.clock.getElapsedTime();

    steamGroupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      if (!p) return;

      // Upward progress
      let newY = child.position.y + p.speed * delta;
      if (newY > 0.16) {
        newY = 0.01;
      }
      child.position.y = newY;

      // Horizontal subtle convection sway
      child.position.x = Math.sin(time * p.swayFreq + p.phase) * p.swayAmp;
      child.position.z = Math.cos(time * p.swayFreq * 0.8 + p.phase) * (p.swayAmp * 0.6);

      // Fade out as it ascends
      const normalizedHeight = Math.min(Math.max((newY - 0.01) / 0.15, 0), 1);
      const opacity = Math.sin(normalizedHeight * Math.PI) * 0.22;
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = opacity;
      }
    });
  });

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

      {/* Delicate Coffee Steam Particles */}
      <group ref={steamGroupRef} position={[0, 0.08, 0]}>
        {particles.map((p, idx) => (
          <mesh key={idx} position={[0, p.baseY, 0]}>
            <sphereGeometry args={[p.scale, 8, 8]} />
            <meshBasicMaterial
              color="#e2e8f0"
              transparent
              opacity={0.12}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
