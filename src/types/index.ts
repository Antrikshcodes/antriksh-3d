import { Vector3 } from "three";

export type CameraViewKey =
  | "overview"
  | "laptop"
  | "idCard"
  | "resume"
  | "monitor"
  | "robot"
  | "trophyShelf"
  | "phone";

export interface CameraPositionConfig {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
  label: string;
  description: string;
}

export interface InteractiveObjectInfo {
  id: CameraViewKey;
  name: string;
  category: string;
  tooltip: string;
  summary: string;
  details?: {
    title: string;
    subtitle?: string;
    tags?: string[];
    description: string;
    points?: string[];
    link?: string;
  };
}

export interface EducationInfo {
  degree: string;
  major: string;
  institutions: string[];
  period: string;
  description: string;
  highlights: string[];
}

export interface ProjectInfo {
  id: string;
  title: string;
  tagline: string;
  category: "AI & ML" | "Smart Cities" | "Automation" | "Full-Stack";
  tags: string[];
  description: string;
}

export interface AchievementInfo {
  id: string;
  event: string;
  organizer?: string;
  category: string;
  description: string;
}

