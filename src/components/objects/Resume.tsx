"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { InteractiveWrapper } from "@/components/interactions/InteractiveWrapper";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";

export function Resume() {
  const resumeGroupRef = useRef<THREE.Group>(null);
  const topSheetRef = useRef<THREE.Mesh>(null);
  const isSelected = useWorkspaceStore((s) => s.selectedObject === "resume" || s.currentView === "resume");

  // Animate resume lifting and opening like a realistic physical document
  useFrame((_, delta) => {
    if (!resumeGroupRef.current) return;
    const targetY = isSelected ? 0.05 : 0;
    const targetRotX = isSelected ? -0.22 : 0;
    const targetRotZ = isSelected ? -0.04 : 0;

    resumeGroupRef.current.position.y = THREE.MathUtils.damp(resumeGroupRef.current.position.y, targetY, 6, delta);
    resumeGroupRef.current.rotation.x = THREE.MathUtils.damp(resumeGroupRef.current.rotation.x, targetRotX, 6, delta);
    resumeGroupRef.current.rotation.z = THREE.MathUtils.damp(resumeGroupRef.current.rotation.z, targetRotZ, 6, delta);

    if (topSheetRef.current) {
      const targetCurl = isSelected ? 0.008 : 0.0022;
      topSheetRef.current.position.y = THREE.MathUtils.damp(topSheetRef.current.position.y, targetCurl, 6, delta);
    }
  });

  // Generate high-resolution procedural canvas for the printed resume
  const resumeTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 1600;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Premium Crisp White/Ivory Paper Texture
    ctx.fillStyle = "#fafafa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Margins
    const mx = 80;
    let y = 100;

    // Header Name
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 44px -apple-system, 'SF Pro Display', sans-serif";
    ctx.fillText("ANTRIKSH GALHOTRA", mx, y);

    // Subtitle
    y += 40;
    ctx.fillStyle = "#0284c7";
    ctx.font = "bold 22px -apple-system, sans-serif";
    ctx.fillText("AI, Robotics & Software Developer", mx, y);

    // Contact line
    y += 32;
    ctx.fillStyle = "#64748b";
    ctx.font = "18px 'SF Mono', monospace";
    ctx.fillText("antrikshcodes@gmail.com | github.com/Antrikshcodes | Delhi NCR", mx, y);

    // Divider Line
    y += 24;
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mx, y);
    ctx.lineTo(canvas.width - mx, y);
    ctx.stroke();

    // Section: Education
    y += 50;
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 24px -apple-system, sans-serif";
    ctx.fillText("EDUCATION", mx, y);

    y += 34;
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 20px -apple-system, sans-serif";
    ctx.fillText("Newton School of Technology & Rishihood University", mx, y);
    ctx.fillStyle = "#64748b";
    ctx.font = "18px monospace";
    ctx.fillText("2026 – 2030", canvas.width - mx - 120, y);

    y += 28;
    ctx.fillStyle = "#334155";
    ctx.font = "18px -apple-system, sans-serif";
    ctx.fillText("B.Tech in Computer Science & Artificial Intelligence", mx, y);

    // Section: Core Technical Projects
    y += 60;
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 24px -apple-system, sans-serif";
    ctx.fillText("TECHNICAL PROJECTS & INITIATIVES", mx, y);

    const projects = [
      {
        title: "Blindspot AI",
        tag: "Computer Vision & Spatial Awareness Engine",
        bullet: "Engineered real-time object detection and situational perception models for critical blindspot analysis.",
      },
      {
        title: "Converge — Smart Cities",
        tag: "Urban Telemetry & Infrastructure Analytics",
        bullet: "Architected centralized IoT telemetry system for municipal energy balancing and real-time infrastructure flow.",
      },
      {
        title: "Jarvis AI",
        tag: "Autonomous Voice & Developer Workflow Orchestrator",
        bullet: "Created custom multi-modal assistant integrating LLM tool-calling, local device automation, and vocal synthesis.",
      },
      {
        title: "OrderShield AI",
        tag: "Transaction Anomaly & Fraud Prevention System",
        bullet: "Constructed low-latency anomaly detection engine mitigating e-commerce transaction security threats.",
      },
      {
        title: "Marketplace",
        tag: "High-Performance Modern Trade Ecosystem",
        bullet: "Built resilient distributed commerce platform with Next.js, TypeScript, and high-concurrency checkout.",
      },
    ];

    projects.forEach((p) => {
      y += 38;
      ctx.fillStyle = "#0284c7";
      ctx.font = "bold 20px -apple-system, sans-serif";
      ctx.fillText(p.title, mx, y);

      ctx.fillStyle = "#64748b";
      ctx.font = "italic 17px -apple-system, sans-serif";
      ctx.fillText(`— ${p.tag}`, mx + ctx.measureText(p.title).width + 12, y);

      y += 24;
      ctx.fillStyle = "#334155";
      ctx.font = "17px -apple-system, sans-serif";
      ctx.fillText(`• ${p.bullet}`, mx + 16, y);
    });

    // Section: Competencies & Focus
    y += 60;
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 24px -apple-system, sans-serif";
    ctx.fillText("AREAS OF EXPERTISE & FOCUS", mx, y);

    y += 34;
    ctx.fillStyle = "#1e293b";
    ctx.font = "18px -apple-system, sans-serif";
    ctx.fillText("AI, Robotics, Software Development, Product Building, UI/UX Design", mx, y);

    // Section: Hackathons & Summits
    y += 50;
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 24px -apple-system, sans-serif";
    ctx.fillText("KEY HACKATHONS & SUMMITS", mx, y);

    y += 34;
    ctx.fillStyle = "#334155";
    ctx.font = "18px -apple-system, sans-serif";
    ctx.fillText("• Fetch-A-Thon 3.0 | HackO’Ween | CoNSTruct 2.0 | IIT Roorkee eSummit", mx + 16, y);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }, []);

  return (
    <InteractiveWrapper
      id="resume"
      position={[-0.68, 0.763, -0.06]}
      rotation={[0, -0.1, 0]}
      hoverElevation={0.02}
    >
      <group ref={resumeGroupRef} name="printed-resume">
        {/* Underneath Paper Sheet with subtle organic offset */}
        <mesh
          position={[0.005, -0.0005, 0.005]}
          rotation={[0, 0.05, 0]}
          receiveShadow
        >
          <boxGeometry args={[0.22, 0.0015, 0.29]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.9} />
        </mesh>

        {/* Top Paper Sheet Document */}
        <mesh position={[0, 0.001, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.002, 0.29]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.9} />
        </mesh>

        {/* Crisp Printed Face */}
        <mesh ref={topSheetRef} position={[0, 0.0022, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.218, 0.288]} />
          {resumeTexture ? (
            <meshStandardMaterial map={resumeTexture} roughness={0.88} />
          ) : (
            <meshStandardMaterial color="#ffffff" />
          )}
        </mesh>
      </group>
    </InteractiveWrapper>
  );
}
