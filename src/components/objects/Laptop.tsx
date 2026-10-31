"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";

export function Laptop() {
  // Generate high-resolution procedural code canvas for the laptop screen
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 660;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Dark sleek IDE background
    ctx.fillStyle = "#0c1017";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // IDE Header / Window Bar
    ctx.fillStyle = "#161b22";
    ctx.fillRect(0, 0, canvas.width, 42);

    // Window control dots
    ctx.fillStyle = "#ff5f56";
    ctx.beginPath();
    ctx.arc(24, 21, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffbd2e";
    ctx.beginPath();
    ctx.arc(44, 21, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#27c93f";
    ctx.beginPath();
    ctx.arc(64, 21, 6, 0, Math.PI * 2);
    ctx.fill();

    // Tab title
    ctx.fillStyle = "#8b949e";
    ctx.font = "bold 15px -apple-system, monospace";
    ctx.fillText("antriksh.config.ts", 100, 26);

    // Sidebar line
    ctx.fillStyle = "#21262d";
    ctx.fillRect(200, 42, 1, canvas.height - 42);

    // Mini explorer text
    ctx.fillStyle = "#6e7681";
    ctx.font = "13px -apple-system, sans-serif";
    ctx.fillText("EXPLORER", 24, 70);
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("▾ antriksh-3d", 24, 98);
    ctx.fillText("  ▾ src/ai-lab", 34, 122);
    ctx.fillText("    • blindspot.py", 44, 146);
    ctx.fillText("    • converge.ts", 44, 170);
    ctx.fillText("    • jarvis_agent.py", 44, 194);
    ctx.fillText("    • ordershield.go", 44, 218);

    // Main Code Editor Text
    const lines = [
      { text: "// ANTRIKSH GALHOTRA — AI & ROBOTICS ENGINEER", color: "#6b7280" },
      { text: "import { SpatialAI, AutonomousAgent } from '@antriksh/core';", color: "#ec4899" },
      { text: "import { NeuralTelemetry } from '@/systems/converge';", color: "#ec4899" },
      { text: "", color: "" },
      { text: "export const developerProfile = {", color: "#60a5fa" },
      { text: '  name: "Antriksh Galhotra",', color: "#34d399" },
      { text: '  role: "AI, Robotics & Software Developer",', color: "#34d399" },
      { text: '  education: "Newton School of Tech & Rishihood University",', color: "#34d399" },
      { text: '  status: "Deploying next-generation autonomous models...",', color: "#fbbf24" },
      { text: "  activeProjects: [", color: "#60a5fa" },
      { text: '    "Blindspot AI", "Converge Smart Cities", "Jarvis AI"', color: "#38bdf8" },
      { text: "  ],", color: "#60a5fa" },
      { text: "  systemTelemetry: { status: 'OPTIMAL', computeUtilization: '94.2%' }", color: "#a78bfa" },
      { text: "};", color: "#60a5fa" },
      { text: "", color: "" },
      { text: "async function initializeWorkspace() {", color: "#f472b6" },
      { text: "  console.log('⚡ All neural sensory nodes operational.');", color: "#34d399" },
      { text: "}", color: "#f472b6" },
    ];

    ctx.font = "14px 'SF Mono', Menlo, Consolas, monospace";
    lines.forEach((l, index) => {
      const y = 80 + index * 26;
      // Line numbers
      ctx.fillStyle = "#475569";
      ctx.fillText(String(index + 1).padStart(2, " "), 220, y);
      // Code
      if (l.text) {
        ctx.fillStyle = l.color;
        ctx.fillText(l.text, 255, y);
      }
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }, []);

  // Keyboard chiclet keys layout
  const keyboardKeys = useMemo(() => {
    const keys = [];
    const rows = 5;
    const cols = 14;
    const keyWidth = 0.016;
    const keyDepth = 0.014;
    const gap = 0.0022;

    const startX = -((cols * (keyWidth + gap)) / 2) + keyWidth / 2;
    const startZ = -((rows * (keyDepth + gap)) / 2) + keyDepth / 2 - 0.02;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        keys.push({
          x: startX + c * (keyWidth + gap),
          z: startZ + r * (keyDepth + gap),
        });
      }
    }
    return keys;
  }, []);

  return (
    <InteractiveWrapper
      id="laptop"
      position={[-0.32, 0.762, 0.1]}
      rotation={[0, 0.12, 0]}
      hoverElevation={0.02}
    >
      <group name="macbook-pro">
        {/* Base Unibody Aluminum Enclosure */}
        <mesh castShadow receiveShadow position={[0, 0.007, 0]}>
          <boxGeometry args={[0.31, 0.014, 0.22]} />
          <meshStandardMaterial
            color="#d1d5db"
            metalness={0.92}
            roughness={0.22}
          />
        </mesh>

        {/* Front thumb scoop notch for lid opening */}
        <mesh position={[0, 0.012, 0.11]} castShadow>
          <boxGeometry args={[0.045, 0.004, 0.003]} />
          <meshStandardMaterial color="#9ca3af" metalness={0.9} roughness={0.3} />
        </mesh>

        {/* Recessed Keyboard Deck Well */}
        <mesh position={[0, 0.0142, -0.02]} receiveShadow>
          <boxGeometry args={[0.264, 0.001, 0.088]} />
          <meshStandardMaterial color="#1f242d" roughness={0.6} />
        </mesh>

        {/* Chiclet Keycaps */}
        {keyboardKeys.map((k, idx) => (
          <mesh key={idx} position={[k.x, 0.0152, k.z]} castShadow>
            <boxGeometry args={[0.015, 0.002, 0.013]} />
            <meshStandardMaterial
              color="#11141a"
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>
        ))}

        {/* Spacebar Key */}
        <mesh position={[0, 0.0152, 0.018]} castShadow>
          <boxGeometry args={[0.09, 0.002, 0.013]} />
          <meshStandardMaterial color="#11141a" roughness={0.4} />
        </mesh>

        {/* Force Touch Trackpad with precision etched hairline border */}
        <mesh position={[0, 0.0142, 0.065]} receiveShadow>
          <boxGeometry args={[0.115, 0.001, 0.072]} />
          <meshStandardMaterial
            color="#c5cbd3"
            metalness={0.88}
            roughness={0.26}
          />
        </mesh>

        {/* Cylindrical Display Hinge */}
        <mesh
          position={[0, 0.012, -0.108]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.005, 0.005, 0.28, 16]} />
          <meshStandardMaterial color="#2d333b" metalness={0.85} roughness={0.3} />
        </mesh>

        {/* Display Lid assembly angled open ~108 degrees */}
        <group position={[0, 0.012, -0.108]} rotation={[-1.25, 0, 0]}>
          {/* Aluminum Display Back Lid */}
          <mesh position={[0, 0.105, 0.003]} castShadow>
            <boxGeometry args={[0.31, 0.21, 0.006]} />
            <meshStandardMaterial
              color="#d1d5db"
              metalness={0.92}
              roughness={0.22}
            />
          </mesh>

          {/* Thin Glass Bezel Border */}
          <mesh position={[0, 0.105, -0.001]}>
            <planeGeometry args={[0.306, 0.206]} />
            <meshStandardMaterial color="#090b10" roughness={0.1} metalness={0.9} />
          </mesh>

          {/* Glowing Active Screen */}
          <mesh position={[0, 0.105, -0.002]}>
            <planeGeometry args={[0.292, 0.192]} />
            {screenTexture ? (
              <meshBasicMaterial map={screenTexture} toneMapped={false} />
            ) : (
              <meshBasicMaterial color="#0d1117" />
            )}
          </mesh>

          {/* Top Notch / Camera Dot */}
          <mesh position={[0, 0.197, -0.003]}>
            <circleGeometry args={[0.002, 12]} />
            <meshBasicMaterial color="#00e5ff" />
          </mesh>

          {/* Soft Screen Glow onto the keyboard deck */}
          <pointLight
            position={[0, 0.1, -0.05]}
            color="#38bdf8"
            intensity={0.4}
            distance={0.35}
            decay={2}
          />
        </group>
      </group>
    </InteractiveWrapper>
  );
}
