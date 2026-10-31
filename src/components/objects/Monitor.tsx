"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";

export function Monitor() {
  // Generate procedural canvas for the studio monitor terminal screen
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1536;
    canvas.height = 768;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Background - Dark Obsidian Studio Theme
    ctx.fillStyle = "#080b11";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle grid pattern in the background
    ctx.strokeStyle = "rgba(30, 41, 59, 0.4)";
    ctx.lineWidth = 1;
    const gridStep = 32;
    for (let x = 0; x < canvas.width; x += gridStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Top Header Bar
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, 54);
    ctx.strokeStyle = "#1e293b";
    ctx.strokeRect(0, 53, canvas.width, 1);

    // Status Dots
    ctx.fillStyle = "#10b981";
    ctx.beginPath();
    ctx.arc(32, 27, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 16px -apple-system, monospace";
    ctx.fillText("ANTRIKSH AI LAB — SYSTEM ORCHESTRATOR v2.4", 52, 33);

    ctx.fillStyle = "#00f0ff";
    ctx.font = "14px 'SF Mono', monospace";
    ctx.fillText("TELEMETRY: ACTIVE | NEURAL ENGINE: READY | LATENCY: 1.2ms", 1000, 33);

    // Left Column: Interactive Terminal Box
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(30, 75, 780, 650, 8);
    ctx.fill();
    ctx.stroke();

    // Terminal Bar
    ctx.fillStyle = "#1e293b";
    ctx.beginPath();
    ctx.roundRect(30, 75, 780, 42, [8, 8, 0, 0]);
    ctx.fill();
    ctx.fillStyle = "#94a3b8";
    ctx.font = "14px monospace";
    ctx.fillText("terminal@antriksh-3d: ~ (zsh)", 52, 102);

    // Terminal Commands & Output
    const terminalLines = [
      { prefix: "$", cmd: "whoami", out: "antriksh_galhotra // B.Tech CS & AI", color: "#38bdf8" },
      { prefix: "$", cmd: "antriksh systems --status", out: "» 5 Core Projects Active: Blindspot AI, Converge, Jarvis, OrderShield, Marketplace", color: "#34d399" },
      { prefix: "$", cmd: "robotics-daemon --check-link", out: "✓ Kinematics Controller linked (0 dropouts)", color: "#a78bfa" },
      { prefix: "$", cmd: "model-server --stream-telemetry", out: "» Vision Transformer model loaded on Edge NPU", color: "#f59e0b" },
      { prefix: "$", cmd: "jarvis --state", out: "JARVIS Core listening... Phase 5 ready for voice pipeline.", color: "#00f0ff" },
      { prefix: "$", cmd: "echo $MOTD", out: '"Building photorealistic systems at the forefront of AI & Robotics."', color: "#f472b6" },
      { prefix: "$", cmd: "cursor_pos", out: "Ready for interactive developer commands...", color: "#94a3b8" },
    ];

    let termY = 145;
    ctx.font = "15px 'SF Mono', Menlo, Consolas, monospace";
    terminalLines.forEach((t) => {
      ctx.fillStyle = "#00f0ff";
      ctx.fillText(t.prefix, 52, termY);
      ctx.fillStyle = "#f8fafc";
      ctx.fillText(t.cmd, 70, termY);
      termY += 26;
      ctx.fillStyle = t.color;
      ctx.fillText(t.out, 70, termY);
      termY += 34;
    });

    // Right Column 1: System Telemetry Cards
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "#334155";
    ctx.beginPath();
    ctx.roundRect(835, 75, 670, 310, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 15px monospace";
    ctx.fillText("HARDWARE TELEMETRY & COMPUTE NODES", 860, 110);

    // Telemetry Progress bars
    const metrics = [
      { label: "NPU Neural Compute Core", val: 88, color: "#00f0ff" },
      { label: "Spatial Vision Latency (ms)", val: 94, color: "#10b981" },
      { label: "Robotic Telemetry Stream", val: 78, color: "#a855f7" },
      { label: "Memory Bandwidth Allocation", val: 62, color: "#f59e0b" },
    ];

    metrics.forEach((m, idx) => {
      const my = 150 + idx * 52;
      ctx.fillStyle = "#94a3b8";
      ctx.font = "14px monospace";
      ctx.fillText(m.label, 860, my);

      // Bar background
      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.roundRect(860, my + 8, 620, 12, 6);
      ctx.fill();

      // Bar fill
      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.roundRect(860, my + 8, (620 * m.val) / 100, 12, 6);
      ctx.fill();
    });

    // Right Column 2: Neural Architecture Visualizer
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "#334155";
    ctx.beginPath();
    ctx.roundRect(835, 410, 670, 315, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#a855f7";
    ctx.font = "bold 15px monospace";
    ctx.fillText("NEURAL TOPOLOGY // CONVERGE & BLINDSPOT AI", 860, 445);

    // Draw neural network nodes & connections
    const layers = [4, 6, 6, 4];
    const layerX = [920, 1050, 1200, 1360];
    const nodeCoords: { x: number; y: number }[][] = [];

    layers.forEach((cnt, lIdx) => {
      const colNodes = [];
      const startY = 480 + (6 - cnt) * 18;
      for (let n = 0; n < cnt; n++) {
        colNodes.push({ x: layerX[lIdx], y: startY + n * 36 });
      }
      nodeCoords.push(colNodes);
    });

    // Connections
    ctx.lineWidth = 1;
    for (let l = 0; l < nodeCoords.length - 1; l++) {
      for (const src of nodeCoords[l]) {
        for (const dst of nodeCoords[l + 1]) {
          ctx.strokeStyle = "rgba(0, 240, 255, 0.18)";
          ctx.beginPath();
          ctx.moveTo(src.x, src.y);
          ctx.lineTo(dst.x, dst.y);
          ctx.stroke();
        }
      }
    }

    // Nodes
    nodeCoords.forEach((layer) => {
      layer.forEach((pt) => {
        ctx.fillStyle = "#00f0ff";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }, []);

  return (
    <InteractiveWrapper
      id="monitor"
      position={[0.0, 0.76, -0.22]}
      hoverElevation={0.015}
    >
      <group name="studio-monitor">
        {/* Heavy Brushed Aluminum Base */}
        <mesh position={[0, 0.006, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.34, 0.012, 0.22]} />
          <meshStandardMaterial
            color="#2d333b"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>

        {/* Vertical Ergonomic Monitor Arm Column with Cable Pass-through Hole */}
        <group position={[0, 0.24, -0.06]}>
          <mesh castShadow>
            <boxGeometry args={[0.08, 0.46, 0.05]} />
            <meshStandardMaterial
              color="#1f242d"
              metalness={0.9}
              roughness={0.25}
            />
          </mesh>
          {/* Cable cutout */}
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.06, 16]} />
            <meshStandardMaterial color="#0e1117" roughness={0.9} />
          </mesh>
        </group>

        {/* VESA Articulated Tilt Mount */}
        <mesh position={[0, 0.38, -0.03]} castShadow>
          <boxGeometry args={[0.1, 0.1, 0.04]} />
          <meshStandardMaterial color="#181c24" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Monitor Screen Frame Assembly (34" Ultrawide Aspect) */}
        <group position={[0, 0.38, 0]}>
          {/* Monitor Rear Enclosure */}
          <mesh castShadow position={[0, 0, -0.012]}>
            <boxGeometry args={[0.82, 0.37, 0.024]} />
            <meshStandardMaterial
              color="#161a22"
              metalness={0.8}
              roughness={0.3}
            />
          </mesh>

          {/* Ultra-thin Front Bezel */}
          <mesh position={[0, 0, 0.001]}>
            <boxGeometry args={[0.822, 0.372, 0.004]} />
            <meshStandardMaterial color="#0d1017" roughness={0.4} />
          </mesh>

          {/* Glowing Active IPS Display Panel */}
          <mesh position={[0, 0, 0.004]}>
            <planeGeometry args={[0.806, 0.354]} />
            {screenTexture ? (
              <meshBasicMaterial map={screenTexture} toneMapped={false} />
            ) : (
              <meshBasicMaterial color="#0a0e17" />
            )}
          </mesh>

          {/* Subtle Ambient Backlight Glow behind Monitor onto back wall */}
          <pointLight
            position={[0, 0, -0.08]}
            color="#00f0ff"
            intensity={1.2}
            distance={1.6}
            decay={2}
          />
        </group>
      </group>
    </InteractiveWrapper>
  );
}
