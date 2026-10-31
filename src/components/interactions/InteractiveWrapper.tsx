"use client";

import { useRef, useState } from "react";
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
  highlightColor?: string;
  className?: string;
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
  const hoveredObject = useWorkspaceStore((s) => s.hoveredObject);
  const selectedObject = useWorkspaceStore((s) => s.selectedObject);
  const setHoveredObject = useWorkspaceStore((s) => s.setHoveredObject);
  const setSelectedObject = useWorkspaceStore((s) => s.setSelectedObject);

  const isHovered = hoveredObject === id;
  const isSelected = selectedObject === id;

  // Smoothly elevate object when hovered
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = (isHovered || isSelected) ? position[1] + hoverElevation : position[1];
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
    setHoveredObject(id);
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    setHoveredObject(null);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    setSelectedObject(id);
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
