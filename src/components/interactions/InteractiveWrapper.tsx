"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { CameraViewKey } from "@/types";

interface InteractiveWrapperProps {
  id: CameraViewKey;
  children: React.ReactNode;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  hoverElevation?: number;
}

export function InteractiveWrapper({
  id,
  children,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  hoverElevation = 0.02,
}: InteractiveWrapperProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Specific boolean selectors prevent mass re-renders across all 3D objects
  const isHovered = useWorkspaceStore((s) => s.hoveredObject === id);
  const isSelected = useWorkspaceStore((s) => s.selectedObject === id);

  // Smoothly elevate object when hovered or selected
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = isHovered || isSelected ? position[1] + hoverElevation : position[1];
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      8,
      delta
    );
  });

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    useWorkspaceStore.getState().setHoveredObject(id);
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    const current = useWorkspaceStore.getState().hoveredObject;
    if (current === id) {
      useWorkspaceStore.getState().setHoveredObject(null);
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    useWorkspaceStore.getState().setSelectedObject(id);
  };

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {children}
    </group>
  );
}
