"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function StudioParticles({ count = 50 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spawn around the desk area: x in [-1.2, 1.2], y in [0.8, 2.2], z in [-0.6, 0.6]
      pos[i * 3] = (Math.random() - 0.5) * 2.4;
      pos[i * 3 + 1] = 0.8 + Math.random() * 1.3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2;

      spd[i * 3] = (Math.random() - 0.5) * 0.04;
      spd[i * 3 + 1] = 0.02 + Math.random() * 0.03; // Gentle upward drift
      spd[i * 3 + 2] = (Math.random() - 0.5) * 0.04;
    }

    return [pos, spd];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += speeds[i * 3 + 1] * delta;
      posArray[i * 3] += Math.sin(posArray[i * 3 + 1] * 2) * 0.001;

      // Wrap around
      if (posArray[i * 3 + 1] > 2.2) {
        posArray[i * 3 + 1] = 0.8;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.016}
        color="#ffe8ba"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

