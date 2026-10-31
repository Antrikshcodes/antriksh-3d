"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";

export function Laptop() {
  const isApproached = useWorkspaceStore((s) => s.currentView === "laptop" || s.hoveredObject === "laptop");
  const screenLightRef = useRef<THREE.PointLight>(null);

  // Wake up screen illumination when approached or hovered
  useFrame((_, delta) => {
    if (screenLightRef.current) {
      const targetIntensity = isApproached ? 0.65 : 0.22;
      screenLightRef.current.intensity = THREE.MathUtils.damp(
        screenLightRef.current.intensity,
        targetIntensity,
        6,
        delta
      );
    }
  });
  // Minimalist futuristic developer screen interface
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 780;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Deep Obsidian Dark Background
    const bgGrad = ctx.createRadialGradient(600, 390, 50, 600, 390, 600);
    bgGrad.addColorStop(0, "#0c111a");
    bgGrad.addColorStop(1, "#05070a");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle isometric coordinate grid
    ctx.strokeStyle = "rgba(14, 165, 233, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Top Minimal Status Bar
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 13px 'SF Mono', monospace";
    ctx.fillText("ANTRIKSH LABS // WORKSPACE v3.0", 40, 36);

    ctx.fillStyle = "#00f0ff";
    ctx.font = "12px 'SF Mono', monospace";
    ctx.fillText("SYSTEM: OPTIMAL  |  TELEMETRY: SYNCED", 880, 36);

    // Center Stage: Core Vision Title
    ctx.textAlign = "center";

    // Ambient halo behind title
    const glow = ctx.createRadialGradient(600, 320, 10, 600, 320, 240);
    glow.addColorStop(0, "rgba(0, 240, 255, 0.12)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(300, 160, 600, 320);

    // Main typography
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px -apple-system, 'SF Pro Display', sans-serif";
    ctx.letterSpacing = "6px";
    ctx.fillText("ANTRIKSH", 600, 310);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "600 22px 'SF Mono', monospace";
    ctx.letterSpacing = "8px";
    ctx.fillText("BUILDING THE FUTURE.", 600, 360);

    // Subtitle domain tags
    ctx.fillStyle = "#64748b";
    ctx.font = "14px 'SF Mono', monospace";
    ctx.letterSpacing = "2px";
    ctx.fillText("AI • ROBOTICS • AUTONOMOUS SYSTEMS", 600, 410);

    // Minimal floating telemetry card at bottom
    ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(320, 500, 560, 180, 12);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillStyle = "#10b981";
    ctx.beginPath();
    ctx.arc(350, 535, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 14px 'SF Mono', monospace";
    ctx.fillText("ACTIVE NEURAL PIPELINES", 366, 540);

    const pipelines = [
      "» Blindspot AI: Real-time spatial perception engine",
      "» Converge: Smart city infrastructure flow models",
      "» Jarvis AI: Contextual voice assistant agent",
    ];

    pipelines.forEach((p, idx) => {
      ctx.fillStyle = idx === 0 ? "#38bdf8" : "#94a3b8";
      ctx.font = "13px 'SF Mono', monospace";
      ctx.fillText(p, 350, 580 + idx * 30);
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
      position={[-0.32, 0.763, 0.1]}
      rotation={[0, 0.12, 0]}
      hoverElevation={0.02}
    >
      <group name="space-black-macbook-pro">
        {/* Base Unibody Space Black Anodized Aluminum Enclosure */}
        <mesh castShadow receiveShadow position={[0, 0.007, 0]}>
          <boxGeometry args={[0.31, 0.014, 0.22]} />
          <meshStandardMaterial
            color="#1c1f26"
            metalness={0.9}
            roughness={0.28}
          />
        </mesh>

        {/* Front thumb scoop notch */}
        <mesh position={[0, 0.012, 0.11]} castShadow>
          <boxGeometry args={[0.045, 0.004, 0.003]} />
          <meshStandardMaterial color="#16181d" metalness={0.88} roughness={0.35} />
        </mesh>

        {/* Recessed Keyboard Deck Well */}
        <mesh position={[0, 0.0142, -0.02]} receiveShadow>
          <boxGeometry args={[0.264, 0.001, 0.088]} />
          <meshStandardMaterial color="#111317" roughness={0.55} />
        </mesh>

        {/* Space Black Chiclet Keycaps */}
        {keyboardKeys.map((k, idx) => (
          <mesh key={idx} position={[k.x, 0.0152, k.z]} castShadow>
            <boxGeometry args={[0.015, 0.002, 0.013]} />
            <meshStandardMaterial
              color="#0d0f13"
              roughness={0.42}
              metalness={0.2}
            />
          </mesh>
        ))}

        {/* Spacebar */}
        <mesh position={[0, 0.0152, 0.018]} castShadow>
          <boxGeometry args={[0.09, 0.002, 0.013]} />
          <meshStandardMaterial color="#0d0f13" roughness={0.42} />
        </mesh>

        {/* Generous Precision Force Touch Glass Trackpad */}
        <mesh position={[0, 0.0142, 0.065]} receiveShadow>
          <boxGeometry args={[0.118, 0.001, 0.074]} />
          <meshStandardMaterial
            color="#181a20"
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
        {/* Trackpad Hairline Border */}
        <mesh position={[0, 0.0144, 0.065]}>
          <boxGeometry args={[0.119, 0.0005, 0.075]} />
          <meshStandardMaterial color="#262a33" roughness={0.5} />
        </mesh>

        {/* Cylindrical Display Hinge */}
        <mesh
          position={[0, 0.012, -0.108]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.005, 0.005, 0.28, 16]} />
          <meshStandardMaterial color="#16181e" metalness={0.92} roughness={0.25} />
        </mesh>

        {/* Display Lid assembly angled open ~108 degrees */}
        <group position={[0, 0.012, -0.108]} rotation={[-1.25, 0, 0]}>
          {/* Space Black Display Back Lid */}
          <mesh position={[0, 0.105, 0.003]} castShadow>
            <boxGeometry args={[0.31, 0.21, 0.006]} />
            <meshStandardMaterial
              color="#1c1f26"
              metalness={0.9}
              roughness={0.28}
            />
          </mesh>

          {/* Deep Dark Display Bezel */}
          <mesh position={[0, 0.105, -0.001]}>
            <planeGeometry args={[0.306, 0.206]} />
            <meshStandardMaterial color="#090b0e" roughness={0.15} metalness={0.7} />
          </mesh>

          {/* Active Retina Screen */}
          <mesh position={[0, 0.105, -0.002]}>
            <planeGeometry args={[0.294, 0.194]} />
            {screenTexture ? (
              <meshBasicMaterial map={screenTexture} toneMapped={false} />
            ) : (
              <meshBasicMaterial color="#0c111a" />
            )}
          </mesh>

          {/* Top Notch / Camera Dot */}
          <mesh position={[0, 0.197, -0.003]}>
            <circleGeometry args={[0.002, 12]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>

          {/* Soft Screen Glow onto Space Black keyboard deck */}
          <pointLight
            ref={screenLightRef}
            position={[0, 0.1, -0.05]}
            color="#38bdf8"
            intensity={0.25}
            distance={0.35}
            decay={2}
          />
        </group>
      </group>
    </InteractiveWrapper>
  );
}
