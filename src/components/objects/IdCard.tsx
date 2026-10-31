"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";

export function IdCard() {
  const cardGroupRef = useRef<THREE.Group>(null);
  const isSelected = useWorkspaceStore((s) => s.selectedObject === "idCard" || s.currentView === "idCard");

  // Animate card lifting and rotating toward the camera when inspected
  useFrame((_, delta) => {
    if (!cardGroupRef.current) return;
    const targetY = isSelected ? 0.045 : 0;
    const targetRotX = isSelected ? -0.28 : 0;
    const targetRotY = isSelected ? 0.22 : 0;
    const targetRotZ = isSelected ? 0.06 : 0;

    cardGroupRef.current.position.y = THREE.MathUtils.damp(cardGroupRef.current.position.y, targetY, 6, delta);
    cardGroupRef.current.rotation.x = THREE.MathUtils.damp(cardGroupRef.current.rotation.x, targetRotX, 6, delta);
    cardGroupRef.current.rotation.y = THREE.MathUtils.damp(cardGroupRef.current.rotation.y, targetRotY, 6, delta);
    cardGroupRef.current.rotation.z = THREE.MathUtils.damp(cardGroupRef.current.rotation.z, targetRotZ, 6, delta);
  });

  // Generate high-resolution procedural canvas texture for the Student ID card
  const cardTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 620;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Card Background Gradient
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#0f172a");
    grad.addColorStop(0.6, "#1e293b");
    grad.addColorStop(1, "#090d16");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle holographic geometric accent lines
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(canvas.width, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 420);
    ctx.lineTo(800, canvas.height);
    ctx.stroke();

    // Top Header Ribbon
    ctx.fillStyle = "#0284c7";
    ctx.fillRect(0, 0, canvas.width, 88);

    // University Title
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 26px -apple-system, sans-serif";
    ctx.fillText("NEWTON SCHOOL OF TECHNOLOGY", 36, 42);

    ctx.fillStyle = "#e0f2fe";
    ctx.font = "500 18px -apple-system, sans-serif";
    ctx.fillText("RISHIHOOD UNIVERSITY // OFFICIAL STUDENT IDENTITY", 36, 72);

    // Student Photo Placeholder Box
    ctx.fillStyle = "#1e293b";
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(36, 120, 200, 250, 12);
    ctx.fill();
    ctx.stroke();

    // Avatar Icon Silhouette
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(136, 205, 42, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(136, 310, 65, 50, 0, Math.PI, 0);
    ctx.fill();

    // Golden Smart Chip
    ctx.fillStyle = "#f59e0b";
    ctx.strokeStyle = "#d97706";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(36, 400, 84, 62, 8);
    ctx.fill();
    ctx.stroke();

    // Chip contact grid
    ctx.fillStyle = "#b45309";
    ctx.fillRect(52, 400, 2, 62);
    ctx.fillRect(72, 400, 2, 62);
    ctx.fillRect(36, 430, 84, 2);

    // Student Details Text
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 15px monospace";
    ctx.fillText("NAME", 270, 145);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 32px -apple-system, sans-serif";
    ctx.fillText("ANTRIKSH GALHOTRA", 270, 182);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 15px monospace";
    ctx.fillText("PROGRAM", 270, 225);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "600 24px -apple-system, sans-serif";
    ctx.fillText("B.Tech Computer Science & AI", 270, 256);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 15px monospace";
    ctx.fillText("BATCH TIMELINE", 270, 300);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 22px monospace";
    ctx.fillText("2026 – 2030", 270, 328);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 15px monospace";
    ctx.fillText("SPECIALIZATION", 270, 372);

    ctx.fillStyle = "#10b981";
    ctx.font = "600 20px monospace";
    ctx.fillText("Artificial Intelligence & Autonomous Systems", 270, 400);

    // Barcode at bottom
    ctx.fillStyle = "#ffffff";
    const barStartX = 270;
    const barY = 480;
    const barHeight = 44;
    const widths = [3, 1, 4, 2, 5, 2, 3, 1, 4, 2, 2, 4, 3, 1, 5, 2, 3, 2, 4, 1, 3, 2, 5, 1];
    let currX = barStartX;
    widths.forEach((w) => {
      ctx.fillRect(currX, barY, w, barHeight);
      currX += w + 3;
    });

    ctx.fillStyle = "#64748b";
    ctx.font = "14px monospace";
    ctx.fillText("NST-RU-CSAI-2026-AG01", barStartX, barY + barHeight + 20);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }, []);

  return (
    <InteractiveWrapper
      id="idCard"
      position={[-0.72, 0.763, 0.22]}
      rotation={[0, 0.18, 0]}
      hoverElevation={0.025}
    >
      <group ref={cardGroupRef} name="student-id-card">
        {/* Transparent Frosted Acrylic Badge Holder */}
        <mesh position={[0, 0.002, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.13, 0.004, 0.082]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.88}
            opacity={1}
            transparent
            roughness={0.12}
            ior={1.49}
          />
        </mesh>

        {/* Printed PVC ID Card Inside */}
        <mesh position={[0, 0.0022, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.122, 0.076]} />
          {cardTexture ? (
            <meshStandardMaterial map={cardTexture} roughness={0.3} metalness={0.1} />
          ) : (
            <meshStandardMaterial color="#0284c7" />
          )}
        </mesh>

        {/* Lanyard Top Slot / Metal Clip */}
        <group position={[-0.072, 0.004, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.012, 0.006, 0.024]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.95} roughness={0.18} />
          </mesh>
          {/* Lanyard Fabric Ribbon Fragment */}
          <mesh position={[-0.03, 0.003, 0]} rotation={[0, 0, 0.05]}>
            <boxGeometry args={[0.05, 0.002, 0.016]} />
            <meshStandardMaterial color="#0284c7" roughness={0.8} />
          </mesh>
        </group>
      </group>
    </InteractiveWrapper>
  );
}
