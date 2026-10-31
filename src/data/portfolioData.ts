import { EducationInfo, ProjectInfo, AchievementInfo, InteractiveObjectInfo } from "@/types";

export const PERSONAL_INFO = {
  name: "Antriksh Galhotra",
  title: "AI, Robotics & Software Developer",
  tagline: "Building intelligent systems at the intersection of AI, Robotics, and modern software architecture.",
  welcomeMessage: "Welcome to my workspace.",
  scrollPrompt: "Scroll or click physical items to explore.",
  location: "Delhi NCR, India",
  email: "antrikshcodes@gmail.com",
  github: "https://github.com/Antrikshcodes",
  linkedin: "https://linkedin.com/in/antrikshgalhotra",
  interests: [
    "AI",
    "Robotics",
    "Software Development",
    "Product Building",
    "UI/UX Design",
  ],
};

export const EDUCATION_DATA: EducationInfo = {
  degree: "B.Tech",
  major: "Computer Science and Artificial Intelligence",
  institutions: ["Newton School of Technology", "Rishihood University"],
  period: "2026 – 2030",
  description:
    "Pursuing specialized curriculum focused on artificial intelligence, algorithmic design, robotics, and scalable software systems.",
  highlights: [
    "Newton School of Technology & Rishihood University",
    "Focus: Artificial Intelligence & Software Engineering",
    "Hands-on Systems Development & Hackathons",
  ],
};

export const PROJECTS_DATA: ProjectInfo[] = [
  {
    id: "blindspot-ai",
    title: "Blindspot AI",
    tagline: "Computer vision and real-time situational awareness engine",
    category: "AI & ML",
    tags: ["Computer Vision", "Real-Time AI", "Python", "Deep Learning"],
    description:
      "Engineered an intelligent situational perception system utilizing spatial AI and computer vision models to identify blindspots and improve proactive decision-making.",
  },
  {
    id: "converge",
    title: "Converge — Smart Cities",
    tagline: "Connected urban infrastructure and smart telemetry platform",
    category: "Smart Cities",
    tags: ["IoT", "Urban Telemetry", "AI Analytics", "Full-Stack"],
    description:
      "A smart infrastructure telemetry and automated optimization platform designed for modern metropolitan monitoring, energy balancing, and municipal resource allocation.",
  },
  {
    id: "jarvis-ai",
    title: "Jarvis AI",
    tagline: "Autonomous multi-modal voice & workspace assistant",
    category: "AI & ML",
    tags: ["Voice AI", "LLM Orchestration", "Automation", "Python"],
    description:
      "A custom-built intelligent personal voice assistant capable of developer workflow automation, contextual memory, and hardware control.",
  },
  {
    id: "ordershield-ai",
    title: "OrderShield AI",
    tagline: "Intelligent fraud prevention and ecommerce transaction validation",
    category: "AI & ML",
    tags: ["Risk Analysis", "Anomaly Detection", "Machine Learning", "FastAPI"],
    description:
      "High-throughput transactional risk evaluation pipeline leveraging anomaly detection algorithms to prevent fraudulent transactions in real time.",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    tagline: "High-performance decentralized trade and commerce ecosystem",
    category: "Full-Stack",
    tags: ["Next.js", "TypeScript", "Distributed Systems", "Tailwind CSS"],
    description:
      "Modern full-stack marketplace platform built with resilient architectural patterns, reactive interfaces, and friction-free user flows.",
  },
];

export const ACHIEVEMENTS_DATA: AchievementInfo[] = [
  {
    id: "fetch-a-thon",
    event: "Fetch-A-Thon 3.0",
    category: "Hackathon",
    description: "Participated and built innovative autonomous agent and AI solutions.",
  },
  {
    id: "hackoween",
    event: "HackO’Ween",
    category: "Hackathon",
    description: "Developed rapid AI-driven prototypes under intensive overnight sprint conditions.",
  },
  {
    id: "construct",
    event: "CoNSTruct 2.0",
    category: "Tech Symposium & Buildathon",
    description: "Engaged in collaborative engineering and technical problem solving.",
  },
  {
    id: "iit-roorkee",
    event: "IIT Roorkee eSummit",
    category: "Entrepreneurship & Innovation",
    description: "Presented tech venture and product concepts at IIT Roorkee's flagship summit.",
  },
];

export const INTERACTIVE_OBJECTS: Record<string, InteractiveObjectInfo> = {
  overview: {
    id: "overview",
    name: "Complete Workspace",
    category: "Studio",
    tooltip: "Cinematic Workspace Overview",
    summary: "Photorealistic AI lab and developer workspace.",
    details: {
      title: "Antriksh Galhotra's Interactive Workspace",
      subtitle: "Full Studio View",
      description:
        "Step inside my creative engineering environment. Every physical item on this desk reflects a facet of my background, technical ventures, and interests.",
      points: [
        "Click any object to focus the camera and discover more.",
        "Use mouse/drag to orbit, pinch to zoom.",
        "Smooth cinematic transitions powered by Three.js & GSAP.",
      ],
    },
  },
  laptop: {
    id: "laptop",
    name: "MacBook Pro",
    category: "Introduction",
    tooltip: "Click to view Developer Introduction",
    summary: "Primary workstation — Code, Systems Architecture & AI Research.",
    details: {
      title: "About Antriksh Galhotra",
      subtitle: "Developer & AI Engineer",
      description:
        "I am an enthusiastic technologist and computer science student passionate about building intelligent AI systems, autonomous agents, and robust full-stack applications.",
      tags: ["AI & ML", "Robotics", "Full-Stack", "System Design"],
      points: [
        "Currently pursuing B.Tech in CS & AI at Newton School of Technology / Rishihood University.",
        "Focused on real-world implementations of computer vision, agentic workflows, and spatial computing.",
        "Active builder in hackathons and tech innovation summits.",
      ],
    },
  },
  idCard: {
    id: "idCard",
    name: "Student ID Card",
    category: "Education",
    tooltip: "Click to view Academic Background",
    summary: "Newton School of Technology & Rishihood University (2026–2030).",
    details: {
      title: "Academic Background",
      subtitle: "B.Tech in Computer Science & Artificial Intelligence",
      description:
        "Enrolled in the next-generation program blending rigorous computer science foundations with modern artificial intelligence, machine learning, and entrepreneurship.",
      tags: ["CS & AI", "2026 – 2030", "Newton School of Technology", "Rishihood University"],
      points: [
        "Specializing in Machine Learning, Algorithms, and Software Systems.",
        "Collaborating on high-impact projects with modern engineering cohorts.",
        "Academic timeline: 2026 – 2030.",
      ],
    },
  },
  resume: {
    id: "resume",
    name: "Printed Resume",
    category: "Projects & Skills",
    tooltip: "Click to review Technical Projects & Resume",
    summary: "Curated engineering portfolio and core competencies.",
    details: {
      title: "Projects & Technical Capabilities",
      subtitle: "Verified Technical Endeavors",
      description:
        "Comprehensive breakdown of key projects built across AI, Smart Cities, Anomaly Detection, and Full-Stack platforms.",
      tags: ["Blindspot AI", "Converge", "Jarvis AI", "OrderShield AI", "Marketplace"],
      points: [
        "Blindspot AI: Real-time computer vision perception system.",
        "Converge: Connected smart city urban telemetry and analytics platform.",
        "Jarvis AI: Multi-modal autonomous personal assistant.",
        "OrderShield AI: High-throughput transaction fraud & anomaly detection.",
        "Marketplace: Modern scalable commerce web platform.",
      ],
    },
  },
  monitor: {
    id: "monitor",
    name: "Ultrawide Monitor",
    category: "Terminal & Neural Hub",
    tooltip: "Click to inspect Developer Terminal & Neural Hub",
    summary: "High-resolution workspace display showing real-time telemetry and developer console.",
    details: {
      title: "Interactive Studio Monitor",
      subtitle: "Command Center & Future Jarvis Integration",
      description:
        "The central control hub for project diagnostics, system builds, and interactive developer terminals. Ready for Phase 5 Jarvis AI orchestration.",
      tags: ["Developer Terminal", "Jarvis AI Ready", "System Telemetry", "Next.js"],
      points: [
        "Modular architecture ready for embedded live terminal emulation.",
        "Designed for seamless Phase 5 voice & command integration.",
        "Real-time visual telemetry and neural graph display.",
      ],
    },
  },
  robot: {
    id: "robot",
    name: "Robotics Figurine",
    category: "Robotics & Hardware",
    tooltip: "Click to explore Robotics Endeavors",
    summary: "Symbolic mech companion representing passion for robotics and autonomous hardware.",
    details: {
      title: "Robotics & Embodied AI",
      subtitle: "Physical Computing & Autonomous Systems",
      description:
        "My passion spans beyond pure software into embodied intelligence: combining computer vision, kinematics, sensor fusion, and micro-controllers into robotic systems.",
      tags: ["Robotics", "Embodied AI", "ROS", "Microcontrollers", "Kinematics"],
      points: [
        "Exploring edge AI inference on embedded compute units.",
        "Bridging software intelligence with physical actuators and sensors.",
        "Passionate about drone autonomy and robotic perception.",
      ],
    },
  },
  trophyShelf: {
    id: "trophyShelf",
    name: "Achievement Trophies",
    category: "Achievements & Events",
    tooltip: "Click to inspect Hackathons & Awards",
    summary: "Honors and participation from premier hackathons and technology summits.",
    details: {
      title: "Honors & Hackathons",
      subtitle: "Competitive Engineering & Hackathons",
      description:
        "Selected events and competitions where I built, pitched, and tested AI solutions under real-time constraints.",
      tags: ["Fetch-A-Thon 3.0", "HackO'Ween", "CoNSTruct 2.0", "IIT Roorkee eSummit"],
      points: [
        "Fetch-A-Thon 3.0: Autonomous AI build sprint.",
        "HackO'Ween: Fast-paced overnight prototype development.",
        "CoNSTruct 2.0: Engineering buildathon and technical hackathon.",
        "IIT Roorkee eSummit: Technology and innovation showcase.",
      ],
    },
  },
  phone: {
    id: "phone",
    name: "Smartphone",
    category: "Connect & Socials",
    tooltip: "Click to connect with Antriksh",
    summary: "Direct channels: GitHub, LinkedIn, and email communication.",
    details: {
      title: "Connect with Antriksh",
      subtitle: "Professional Channels & Collaboration",
      description:
        "Open to collaborations, ambitious engineering projects, research endeavors, and developer opportunities.",
      tags: ["GitHub", "LinkedIn", "Email", "Collaboration"],
      points: [
        "GitHub: github.com/Antrikshcodes",
        "LinkedIn: linkedin.com/in/antrikshgalhotra",
        "Email: antrikshcodes@gmail.com",
      ],
    },
  },
};
