"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";

export function Smartphone() {
  // Lock screen UI canvas texture
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 1200;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // AMOLED Deep Black background with subtle atmospheric gradient
    const grad = ctx.createRadialGradient(300, 400, 50, 300, 600, 500);
    grad.addColorStop(0, "#111827");
    grad.addColorStop(1, "#030712");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dynamic Island / Camera Pill at top
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.roundRect(220, 25, 160, 42, 21);
    ctx.fill();

    // Time
    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 88px -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("09:41", 300, 240);

    // Date
    ctx.fillStyle = "#94a3b8";
    ctx.font = "500 24px -apple-system, sans-serif";
    ctx.fillText("Saturday, October 31", 300, 285);

    // Notification 1: GitHub
    ctx.fillStyle = "rgba(30, 41, 59, 0.85)";
    ctx.strokeStyle = "rgba(100, 116, 139, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(30, 420, 540, 110, 24);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 20px -apple-system, sans-serif";
    ctx.fillText("GitHub // Antrikshcodes", 60, 460);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "18px -apple-system, sans-serif";
    ctx.fillText("Repo antriksh-3d: 5 commits pushed", 60, 495);

    // Notification 2: AI Lab Telemetry
    ctx.fillStyle = "rgba(30, 41, 59, 0.85)";
    ctx.beginPath();
    ctx.roundRect(30, 550, 540, 110, 24);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 20px -apple-system, sans-serif";
    ctx.fillText("Jarvis AI Orchestrator", 60, 590);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "18px -apple-system, sans-serif";
    ctx.fillText("Workspace sensory nodes active & synced", 60, 625);

    // Quick Connect Buttons at bottom
    ctx.fillStyle = "#0284c7";
    ctx.beginPath();
    ctx.arc(160, 1080, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#0284c7";
    ctx.beginPath();
    ctx.arc(440, 1080, 40, 0, Math.PI * 2);
    ctx.fill();

    // Home bar indicator
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.roundRect(210, 1170, 180, 6, 3);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }, []);

  return (
    <InteractiveWrapper
      id="phone"
      position={[0.55, 0.763, 0.24]}
      rotation={[0, -0.15, 0]}
      hoverElevation={0.02}
    >
      <group name="flagship-smartphone">
        {/* Titanium Chassis Frame */}
        <mesh position={[0, 0.005, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.076, 0.01, 0.152]} />
          <meshStandardMaterial
            color="#2d333b"
            metalness={0.94}
            roughness={0.2}
          />
        </mesh>

        {/* Glossy Front Glass OLED Display */}
        <mesh position={[0, 0.0102, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.072, 0.148]} />
          {screenTexture ? (
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          ) : (
            <meshBasicMaterial color="#0a0a0c" />
          )}
        </mesh>

        {/* Rear Camera Bump & Lenses */}
        <group position={[-0.018, 0.002, -0.048]}>
          <mesh castShadow>
            <boxGeometry args={[0.028, 0.003, 0.03]} />
            <meshStandardMaterial color="#1f242d" metalness={0.9} roughness={0.25} />
          </mesh>
          {/* Lenses */}
          <mesh position={[-0.006, -0.002, -0.007]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 0.003, 16]} />
            <meshStandardMaterial color="#0b0e14" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[-0.006, -0.002, 0.007]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 0.003, 16]} />
            <meshStandardMaterial color="#0b0e14" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[0.007, -0.002, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 0.003, 16]} />
            <meshStandardMaterial color="#0b0e14" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      </group>
    </InteractiveWrapper>
  );
}
