import { CameraPositionConfig, CameraViewKey } from "@/types";

export const CAMERA_POSITIONS: Record<CameraViewKey, CameraPositionConfig> = {
  overview: {
    position: [0.0, 2.05, 2.35],
    target: [0.0, 0.88, 0.0],
    fov: 42,
    label: "Workspace Overview",
    description: "Cinematic complete view of Antriksh Galhotra's AI development studio.",
  },
  laptop: {
    position: [-0.3, 1.18, 0.62],
    target: [-0.3, 0.82, 0.08],
    fov: 34,
    label: "MacBook Pro",
    description: "Developer profile, about me, and primary systems workstation.",
  },
  idCard: {
    position: [-0.72, 1.12, 0.46],
    target: [-0.72, 0.78, 0.22],
    fov: 28,
    label: "Student ID Card",
    description: "Newton School of Technology & Rishihood University (B.Tech CS & AI).",
  },
  resume: {
    position: [-0.68, 1.24, 0.18],
    target: [-0.68, 0.78, -0.06],
    fov: 33,
    label: "Printed Resume",
    description: "Curated technical projects, skills, and engineering milestones.",
  },
  monitor: {
    position: [0.0, 1.16, 0.78],
    target: [0.0, 1.10, -0.22],
    fov: 38,
    label: "Studio Monitor & Terminal",
    description: "Interactive system command line, neural metrics, and future Jarvis AI.",
  },
  robot: {
    position: [0.85, 1.12, 0.18],
    target: [0.85, 0.95, -0.22],
    fov: 30,
    label: "Robotics Companion",
    description: "Robotics explorations, autonomous hardware, and spatial computing.",
  },
  trophyShelf: {
    position: [0.15, 1.88, 0.38],
    target: [0.15, 1.72, -0.5],
    fov: 36,
    label: "Achievement Trophies",
    description: "Awards & hackathons: Fetch-A-Thon, HackO'Ween, CoNSTruct, IIT Roorkee.",
  },
  phone: {
    position: [0.68, 1.12, 0.52],
    target: [0.68, 0.78, 0.26],
    fov: 28,
    label: "Smartphone",
    description: "Direct contact channels, GitHub, LinkedIn, and social presence.",
  },
};
