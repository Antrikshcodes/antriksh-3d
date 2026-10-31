"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";

export function Monitor() {
  // Curved geometry parameters (1800R curvature)
  const curveRadius = 1.8;
  const screenHeight = 0.36;
  const thetaLength = 0.48; // ~27.5 degrees arc
  const thetaStart = Math.PI * 1.5 - thetaLength / 2;
  const segments = 48;

  // 21:9 Curved Ultrawide Display Texture
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 860;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Background - Dark Obsidian AI Lab Theme
    ctx.fillStyle = "#070a10";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle background telemetry grid
    ctx.strokeStyle = "rgba(30, 41, 59, 0.35)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 44) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 44) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Top Navigation & Global Header
    ctx.fillStyle = "#0b111c";
    ctx.fillRect(0, 0, canvas.width, 58);
    ctx.strokeStyle = "#1e293b";
    ctx.strokeRect(0, 57, canvas.width, 1);

    // Status Indicator Dot
    ctx.fillStyle = "#10b981";
    ctx.beginPath();
    ctx.arc(36, 29, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 17px -apple-system, monospace";
    ctx.fillText("ANTRIKSH WORKSPACE // 34\" ULTRAWIDE AI ORCHESTRATOR", 56, 35);

    ctx.fillStyle = "#00f0ff";
    ctx.font = "14px 'SF Mono', monospace";
    ctx.fillText("TELEMETRY: ACTIVE  |  NEURAL ENGINE: ONLINE  |  LATENCY: 1.1ms", 1320, 35);

    // Panel 1: Left - Developer Terminal & Build Console
    ctx.fillStyle = "rgba(11, 17, 28, 0.88)";
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(36, 80, 680, 740, 10);
    ctx.fill();
    ctx.stroke();

    // Terminal titlebar
    ctx.fillStyle = "#162032";
    ctx.beginPath();
    ctx.roundRect(36, 80, 680, 44, [10, 10, 0, 0]);
    ctx.fill();
    ctx.fillStyle = "#94a3b8";
    ctx.font = "14px 'SF Mono', monospace";
    ctx.fillText("terminal@antriksh-ai: ~ (zsh)", 60, 108);

    const termLogs = [
      { p: "$", c: "whoami", o: "antriksh_galhotra // B.Tech Computer Science & AI", col: "#38bdf8" },
      { p: "$", c: "antriksh projects --list", o: "» Blindspot AI • Converge Smart Cities • Jarvis AI • OrderShield", col: "#34d399" },
      { p: "$", c: "npu-telemetry --status", o: "✓ Edge Neural Compute Engine: 94.8% throughput", col: "#a78bfa" },
      { p: "$", c: "jarvis --init-pipeline", o: "JARVIS Core listening... Voice & Terminal ready for Phase 5.", col: "#00f0ff" },
      { p: "$", c: "spatial-vision --feed active", o: "» LiDAR & Camera Perception node online (0 dropouts)", col: "#f59e0b" },
      { p: "$", c: "echo $VISION", o: '"Building photorealistic systems at the forefront of AI & Robotics."', col: "#f472b6" },
      { p: "$", c: "cursor --ready", o: "Ready for interactive commands...", col: "#64748b" },
    ];

    let tY = 160;
    ctx.font = "14px 'SF Mono', monospace";
    termLogs.forEach((item) => {
      ctx.fillStyle = "#00f0ff";
      ctx.fillText(item.p, 60, tY);
      ctx.fillStyle = "#f8fafc";
      ctx.fillText(item.c, 78, tY);
      tY += 26;
      ctx.fillStyle = item.col;
      ctx.fillText(item.o, 78, tY);
      tY += 36;
    });

    // Panel 2: Center - Neural Topology & Spatial Vision Stream
    ctx.fillStyle = "rgba(11, 17, 28, 0.88)";
    ctx.strokeStyle = "#334155";
    ctx.beginPath();
    ctx.roundRect(740, 80, 680, 740, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#162032";
    ctx.beginPath();
    ctx.roundRect(740, 80, 680, 44, [10, 10, 0, 0]);
    ctx.fill();
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 14px 'SF Mono', monospace";
    ctx.fillText("NEURAL TOPOLOGY // BLINDSPOT & CONVERGE", 764, 108);

    // Neural Network Visual Nodes
    const layers = [4, 6, 6, 4];
    const layerX = [820, 940, 1060, 1180];
    const nodeCoords: { x: number; y: number }[][] = [];

    layers.forEach((cnt, lIdx) => {
      const colNodes = [];
      const startY = 180 + (6 - cnt) * 24;
      for (let n = 0; n < cnt; n++) {
        colNodes.push({ x: layerX[lIdx], y: startY + n * 48 });
      }
      nodeCoords.push(colNodes);
    });

    // Draw lines
    ctx.lineWidth = 1.2;
    for (let l = 0; l < nodeCoords.length - 1; l++) {
      for (const src of nodeCoords[l]) {
        for (const dst of nodeCoords[l + 1]) {
          ctx.strokeStyle = "rgba(0, 240, 255, 0.16)";
          ctx.beginPath();
          ctx.moveTo(src.x, src.y);
          ctx.lineTo(dst.x, dst.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodeCoords.forEach((layer) => {
      layer.forEach((pt) => {
        ctx.fillStyle = "#00f0ff";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    // Performance progress metrics at bottom of center panel
    const metrics = [
      { name: "Vision Model Inference Latency", val: 86, col: "#00f0ff" },
      { name: "Municipal Infrastructure Bandwidth", val: 92, col: "#10b981" },
      { name: "Spatial Depth Estimation Accuracy", val: 78, col: "#a855f7" },
    ];

    metrics.forEach((m, idx) => {
      const my = 540 + idx * 75;
      ctx.fillStyle = "#94a3b8";
      ctx.font = "13px 'SF Mono', monospace";
      ctx.fillText(m.name, 764, my);

      ctx.fillStyle = "#1e293b";
      ctx.beginPath();
      ctx.roundRect(764, my + 10, 630, 14, 7);
      ctx.fill();

      ctx.fillStyle = m.col;
      ctx.beginPath();
      ctx.roundRect(764, my + 10, (630 * m.val) / 100, 14, 7);
      ctx.fill();
    });

    // Panel 3: Right - JARVIS AI Assistant Interface (Future Phase 5 Ready)
    ctx.fillStyle = "rgba(11, 17, 28, 0.88)";
    ctx.strokeStyle = "#334155";
    ctx.beginPath();
    ctx.roundRect(1444, 80, 568, 740, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#162032";
    ctx.beginPath();
    ctx.roundRect(1444, 80, 568, 44, [10, 10, 0, 0]);
    ctx.fill();
    ctx.fillStyle = "#00f0ff";
    ctx.font = "bold 14px 'SF Mono', monospace";
    ctx.fillText("JARVIS AI // AUTONOMOUS WORKSPACE AGENT", 1468, 108);

    // AI Voice Waveform Ring
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(1728, 250, 75, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.beginPath();
    ctx.arc(1728, 250, 95, 0, Math.PI * 2);
    ctx.stroke();

    // Voice spectrum bars inside ring
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 16) {
      const barLen = 12 + Math.sin(a * 4) * 8;
      const x1 = 1728 + Math.cos(a) * 55;
      const y1 = 250 + Math.sin(a) * 55;
      const x2 = 1728 + Math.cos(a) * (55 + barLen);
      const y2 = 250 + Math.sin(a) * (55 + barLen);
      ctx.strokeStyle = "#38bdf8";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 18px 'SF Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("JARVIS ONLINE", 1728, 256);

    ctx.textAlign = "left";
    ctx.fillStyle = "#94a3b8";
    ctx.font = "14px 'SF Mono', monospace";
    ctx.fillText("STATUS: LISTENING FOR VOICE WAKE-WORD", 1480, 400);
    ctx.fillText("INTEGRATION: PREPARED FOR PHASE 5", 1480, 435);
    ctx.fillText("SPEECH SYNTHESIS: WEBAUDIO READY", 1480, 470);
    ctx.fillText("SECURITY TOKEN: VALIDATED", 1480, 505);

    // Mini terminal action log
    ctx.fillStyle = "#030712";
    ctx.beginPath();
    ctx.roundRect(1470, 550, 516, 230, 8);
    ctx.fill();
    ctx.strokeStyle = "#1e293b";
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "13px 'SF Mono', monospace";
    ctx.fillText("[JARVIS] Standby for Phase 5 orchestration...", 1490, 590);
    ctx.fillStyle = "#64748b";
    ctx.fillText("[JARVIS] Telemetry streams linked to 3D scene", 1490, 625);
    ctx.fillText("[JARVIS] Contextual memory initialized", 1490, 660);
    ctx.fillText("[JARVIS] Audio input pipeline ready on click", 1490, 695);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }, []);

  return (
    <InteractiveWrapper
      id="monitor"
      position={[0.0, 0.762, -0.25]}
      hoverElevation={0.015}
    >
      <group name="curved-ultrawide-monitor">
        {/* Minimalist Solid Aluminum Base */}
        <mesh position={[0, 0.006, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.34, 0.012, 0.18]} />
          <meshStandardMaterial
            color="#1c2027"
            metalness={0.92}
            roughness={0.24}
          />
        </mesh>

        {/* Vertical Ergonomic Upright Column */}
        <group position={[0, 0.22, -0.06]}>
          <mesh castShadow>
            <boxGeometry args={[0.075, 0.44, 0.045]} />
            <meshStandardMaterial
              color="#161920"
              metalness={0.92}
              roughness={0.24}
            />
          </mesh>
          {/* Cable Pass-Through Hole */}
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 0.05, 16]} />
            <meshStandardMaterial color="#0c0e12" roughness={0.8} />
          </mesh>
        </group>

        {/* Articulated VESA Mount Bracket */}
        <mesh position={[0, 0.36, -0.03]} castShadow>
          <boxGeometry args={[0.09, 0.09, 0.035]} />
          <meshStandardMaterial color="#13161c" metalness={0.85} roughness={0.3} />
        </mesh>

        {/* Curved Display Panel Assembly positioned at curvature center */}
        {/* The screen is at z = curveRadius offset, curved toward user */}
        <group position={[0, 0.36, -curveRadius + 0.04]}>
          {/* Outer Curved Back Enclosure */}
          <mesh castShadow>
            <cylinderGeometry
              args={[
                curveRadius + 0.012,
                curveRadius + 0.012,
                screenHeight + 0.014,
                segments,
                1,
                true,
                thetaStart,
                thetaLength,
              ]}
            />
            <meshStandardMaterial
              color="#13161d"
              metalness={0.85}
              roughness={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Deep Black Curved Front Bezel */}
          <mesh>
            <cylinderGeometry
              args={[
                curveRadius + 0.002,
                curveRadius + 0.002,
                screenHeight + 0.006,
                segments,
                1,
                true,
                thetaStart,
                thetaLength,
              ]}
            />
            <meshStandardMaterial
              color="#080a0e"
              roughness={0.4}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Active 21:9 Curved Screen Surface */}
          <mesh>
            <cylinderGeometry
              args={[
                curveRadius,
                curveRadius,
                screenHeight,
                segments,
                1,
                true,
                thetaStart,
                thetaLength,
              ]}
            />
            {screenTexture ? (
              <meshBasicMaterial
                map={screenTexture}
                side={THREE.BackSide}
                toneMapped={false}
              />
            ) : (
              <meshBasicMaterial color="#070a10" side={THREE.BackSide} />
            )}
          </mesh>

          {/* Curved Top & Bottom Bezel Caps */}
          <mesh position={[0, screenHeight / 2 + 0.003, 0]}>
            <cylinderGeometry
              args={[
                curveRadius + 0.012,
                curveRadius,
                0.006,
                segments,
                1,
                true,
                thetaStart,
                thetaLength,
              ]}
            />
            <meshStandardMaterial color="#0c0e14" roughness={0.5} />
          </mesh>
          <mesh position={[0, -screenHeight / 2 - 0.003, 0]}>
            <cylinderGeometry
              args={[
                curveRadius + 0.012,
                curveRadius,
                0.006,
                segments,
                1,
                true,
                thetaStart,
                thetaLength,
              ]}
            />
            <meshStandardMaterial color="#0c0e14" roughness={0.5} />
          </mesh>

          {/* Ambient Bias Glow behind Curved Monitor onto Acoustic Slats Wall */}
          <pointLight
            position={[0, 0, curveRadius - 0.12]}
            color="#00f0ff"
            intensity={1.1}
            distance={1.6}
            decay={2}
          />
        </group>
      </group>
    </InteractiveWrapper>
  );
}
