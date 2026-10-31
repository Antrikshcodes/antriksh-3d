# ANTRIKSH.OS — The Interactive 3D Workspace

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

<br />

**A photorealistic, cinematic 3D developer workspace and interactive portfolio for Antriksh Galhotra.**  
*AI, Robotics & Software Developer*

[Explore Live Demo](http://localhost:3000) • [GitHub Repository](https://github.com/Antrikshcodes/antriksh-3d) • [Report Issue](https://github.com/Antrikshcodes/antriksh-3d/issues)

</div>

---

## 🌟 Concept & Visual Direction

> **Photorealistic Minimalism + Futuristic AI Lab**

`ANTRIKSH.OS` reimagines the traditional developer portfolio as a physical, cinematic space. Rather than browsing flat cards and generic web grids, visitors enter an architectural studio, discovering Antriksh's background, research initiatives, and technical projects through physical 3D objects, scroll-driven storytelling, and atmospheric lighting.

### Core Visual Palette
$$\textbf{Golden Honey Oak Wood} + \textbf{Space Black Metallic Hardware} + \textbf{Subtle Cyan Futuristic Interfaces} + \textbf{Warm Studio Lighting}$$

---

## ✨ Key Features & Architectural Highlights

### 1. 🎬 Cinematic Introduction & Awakening
- **Dark Atmospheric Reveal**: The experience opens in a moody, darkened studio.
- **Progressive Lighting Sequence**:
  - $t = 0.4\text{s}$: Warm cantilever task spotlight illuminates the golden honey oak desk.
  - $t = 1.3\text{s}$: Space Black MacBook screen awakens, casting cyan ambient reflection across the unibody chassis.
  - $t = 2.2\text{s}$: Sophisticated typography title sequence reveals `ANTRIKSH GALHOTRA // BUILDING THE FUTURE OF AI & ROBOTICS`.
  - $t = 5.2\text{s}$: Directional studio sunlight and fill lighting smoothly ramp to full warmth.
- **Instant Skip Option**: Visitors can bypass the introduction anytime via the **Skip Intro** button.

### 2. 📜 Scroll-Driven Storytelling (GSAP ScrollTrigger)
Scrolling actively controls the continuous cinematic journey through 8 choreographed narrative chapters:
- **Chapter 01 // Studio Awakening**: `ANTRIKSH.OS` welcome and environment reveal.
- **Chapter 02 // Primary Workstation**: Space Black MacBook Pro, developer philosophy, and systems vision.
- **Chapter 03 // Academic Foundations**: Student ID card at **Newton School of Technology & Rishihood University** (*2026–2030*).
- **Chapter 04 // Technical Portfolio**: Printed physical resume covering *Blindspot AI*, *Converge*, *Jarvis AI*, *OrderShield AI*, and *Marketplace*.
- **Chapter 05 // Neural Command Center**: 34" curved ultrawide display streaming real-time terminal telemetry and prepared for Phase 5 Jarvis AI.
- **Chapter 06 // Embodied Intelligence**: Articulating robotics companion, micro-controllers, and physical computing.
- **Chapter 07 // Competitive Honors**: Achievement shelf trophies (*Fetch-A-Thon 3.0*, *HackO’Ween*, *CoNSTruct 2.0*, *IIT Roorkee eSummit*).
- **Chapter 08 // Global Telemetry**: Direct collaboration channels (GitHub, LinkedIn, Email).

### 3. 🪵 Natural Golden Honey Oak Wood Desk (Custom PBR Engine)
- **Procedural PBR Textures** (`src/utils/woodTextureGenerator.ts`):
  - **Base Color / Albedo**: Multi-layer natural golden yellow tone (`#cca25c`, `#d9ad66`, `#ba8c46`) with 6 distinct solid staves running along the desk length ($X$ axis), organic grain waves, medullary rays, and subtle wood knots.
  - **Roughness Map**: Open grain pores reflect light with satin matte contrast (`0.44 \to 0.65`).
  - **Bump / Height Map**: Micro-grooves and chamfered plank joints provide physical surface depth without flat plastic sheen.
- **Crafted Geometry**: Chamfered edge profiles on all borders with warm end-grain detailing and heavy-duty matte steel industrial T-legs.

### 4. 💻 Space Black MacBook Pro
- **Deep Metallic Anodized Finish**: Modeled in Space Black metallic PBR (`color="#1c1f26"`, `metalness=0.9`, `roughness=0.28`).
- **Precision Details**: Recessed keyboard well with individually modeled chiclet keycaps in `#0d0f13`, force touch glass trackpad with hairline border, and cylindrical hinge.
- **Retina Interface Canvas**: Displays minimalist developer branding, coordinate grids, and active neural pipeline telemetry.
- **Reactive Awakening**: Screen backlight intensity dynamically climbs from $0.22 \to 0.65$ as the camera approaches.

### 5. 🖥️ 34" Curved Ultrawide Display (1800R Curvature)
- **Physically Curved 3D Geometry**: Modeled with an authentic **1800R radius cylindrical curvature** ($R = 1.8\text{m}$, $27.5^\circ$ arc span). The curve is genuinely visible from all viewing angles.
- **Three-Panel 21:9 Dashboard (2048 × 860)**:
  - **Left**: Interactive developer terminal with real-time logs and build commands.
  - **Center**: Neural topology graph and spatial perception stream for *Blindspot AI* and *Converge*.
  - **Right**: **Jarvis AI Assistant interface** with animated voice waveform, prepared for Phase 5 voice orchestration.
- **Dynamic Bias Glow**: Backlight illuminates the acoustic oak slats wall with cyan halo when reached.

### 6. 🌿 Living Environmental Animations
- **Delicate Coffee Steam**: 16 volumetric steam particles gently rising and swaying with natural convection currents above the dark coffee surface.
- **Keyboard Illumination**: Breathing per-key underglow pulsing beneath the mechanical keyboard keycaps.
- **Physical ID Card Lift & Tilt**: Elevates upwards ($+45\text{mm}$) and rotates along $X/Y/Z$ toward the viewer when inspected.
- **Physical Resume Paper Animation**: Document lifts and corner curls realistically upon inspection.
- **Atmospheric Studio Dust Motes**: 45 floating golden particles drifting through the directional sunbeams.

### 7. 🔊 Zero-Asset Web Audio Sound Engine (`src/utils/audioEngine.ts`)
- Synthesized purely via the native browser **Web Audio API** (zero MP3/WAV dependencies, 0 network latency):
  - **Muted by default** (strictly compliant with browser autoplay policies).
  - **Resonant Studio Room Tone**: Dual-oscillator drone ($55\text{Hz}$ / $82.4\text{Hz}$) with a $320\text{Hz}$ low-pass filter creating an atmospheric computing lab ambience.
  - **Micro-Interactions**: Soft audio ticks on hover ($1400\text{Hz} \to 1800\text{Hz}$), spatial selection chimes, and system wakeup sweeps.
  - **One-Click Audio Toggle**: Accessible in the top header.

---

## 🛠️ Technology Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | High-performance React application architecture |
| **Language** | TypeScript 5 | Strict end-to-end type safety |
| **3D Rendering** | Three.js & React Three Fiber | WebGL scene graph & declarative 3D components |
| **3D Utilities** | `@react-three/drei` | PBR shaders, ContactShadows, Environment maps |
| **Cinematics** | GSAP 3 & ScrollTrigger | Synchronized camera choreography & smooth easing |
| **State** | Zustand | Thread-safe, reactive state without React Fiber tearing |
| **Audio** | Native Web Audio API | Procedural sound design & ambient audio synthesis |
| **Styling** | Tailwind CSS v4 | Minimalist dark studio UI & HUD overlays |
| **Icons** | Lucide React | Clean, scalable vector interface icons |

---

## 📂 Project Architecture

```
antriksh-3d/
├── src/
│   ├── app/
│   │   ├── globals.css                   # Global styles & Tailwind CSS v4 imports
│   │   ├── layout.tsx                    # Root layout with dark studio theme
│   │   └── page.tsx                      # Main entrypoint: Canvas + Scroll + HUD overlays
│   ├── components/
│   │   ├── camera/
│   │   │   └── CameraController.tsx      # GSAP camera interpolation & OrbitControls
│   │   ├── environment/
│   │   │   ├── RoomStudio.tsx            # Acoustic wood slat wall, concrete floor, chair
│   │   │   ├── StudioLighting.tsx        # Dynamic sun key, task spot, and bias lighting
│   │   │   └── StudioParticles.tsx       # Floating ambient studio dust motes
│   │   ├── interactions/
│   │   │   └── InteractiveWrapper.tsx    # Optimized pointer hover & click handlers
│   │   ├── interface/
│   │   │   ├── CinematicIntro.tsx        # Awakening sequence, typography reveal & skip button
│   │   │   ├── HoverTooltipBadge.tsx     # Floating HUD category indicator
│   │   │   ├── InitialCinematicHero.tsx  # Brand header, sound toggle & viewport toolbar
│   │   │   ├── LoadingScreen.tsx         # Cyber-styled loading overlay
│   │   │   ├── ObjectInfoPanel.tsx       # Slide-out details drawer with verified data
│   │   │   ├── ScrollStoryOverlay.tsx    # GSAP ScrollTrigger narrative timeline & track
│   │   │   └── WebGLFallback.tsx         # Graceful fallback for non-WebGL devices
│   │   ├── objects/
│   │   │   ├── BooksAndStationery.tsx    # Hardcover tech books & aluminum pen dock
│   │   │   ├── CoffeeMug.tsx             # Ceramic stoneware mug with rising steam
│   │   │   ├── Desk.tsx                  # Golden honey oak desk with PBR shader
│   │   │   ├── DeskLamp.tsx              # Articulated cantilever task lamp
│   │   │   ├── Headphones.tsx            # Reference headphones on aluminum stand
│   │   │   ├── IdCard.tsx                # Newton School of Tech student ID (lifts in 3D)
│   │   │   ├── Laptop.tsx                # Space Black MacBook Pro with reactive screen
│   │   │   ├── MechanicalKeyboard.tsx    # 75% custom keyboard with breathing underglow
│   │   │   ├── Monitor.tsx               # 34" 1800R curved ultrawide display
│   │   │   ├── Resume.tsx                # Physical printed resume with paper lift animation
│   │   │   ├── RoboticsFigurine.tsx      # Articulating mech companion with pulsing visor
│   │   │   ├── Smartphone.tsx            # Flagship phone with OLED lockscreen
│   │   │   ├── Trophies.tsx              # Hackathon & summit crystal awards
│   │   │   └── WirelessMouse.tsx         # Sculpted ergonomic mouse with metal wheels
│   │   └── scene/
│   │       └── WorkspaceScene.tsx        # R3F Canvas assembly & contact shadows
│   ├── data/
│   │   ├── cameraPositions.ts            # Viewport coordinates, targets & FOV
│   │   └── portfolioData.ts              # Verified education, projects & achievements
│   ├── hooks/
│   │   └── useWorkspaceStore.ts          # Zustand store for views, audio & chapters
│   ├── types/
│   │   └── index.ts                      # Strict TypeScript interfaces
│   └── utils/
│       ├── audioEngine.ts                # Web Audio API ambient tone & SFX generator
│       └── woodTextureGenerator.ts       # Procedural golden honey oak PBR texture engine
└── public/
    ├── models/
    ├── textures/
    ├── images/
    └── fonts/
```

---

## 🎮 Navigation & Controls Guide

| Input | Action |
| :--- | :--- |
| **Scroll Down / Up** | Advances / reverses the continuous 8-chapter cinematic story |
| **Left Click + Drag** | Freely orbits the 3D camera around the studio |
| **Right Click + Drag** | Pans the camera view |
| **Mouse Wheel / Pinch** | Zooms in and out with clamped ergonomic limits |
| **Click Any 3D Object** | Focuses camera on the item and opens the technical details panel |
| **Bottom Toolbar Pills** | Instantly transitions between preset camera viewpoints |
| **Audio Toggle (Header)** | Toggles procedural ambient lab hum and interaction sound effects |
| **Reduced Motion (Header)**| Toggles instant transitions for accessibility |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm** or **pnpm** / **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/Antrikshcodes/antriksh-3d.git
cd antriksh-3d
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🗺️ Development Roadmap

- [x] **Phase 1: Build the complete 3D workspace** *(Completed)*
- [x] **Phase 2: Implement cinematic camera and scroll storytelling** *(Completed)*
- [x] **Visual Redesign: Golden Oak Wood Desk + Space Black MacBook + Curved Ultrawide Monitor** *(Completed)*
- [x] **Cinematic Awakening & Web Audio Engine** *(Completed)*
- [ ] **Phase 3: Interactive object deep-dive animations & expand project showcases**
- [ ] **Phase 4: Case study modal overlays & interactive code sandbox**
- [ ] **Phase 5: Live terminal emulator & Jarvis AI voice orchestration**
- [ ] **Phase 6: Final asset compression & global edge deployment**

---

## 👤 Author & Contact

**Antriksh Galhotra**  
*B.Tech in Computer Science & Artificial Intelligence (2026–2030)*  
*Newton School of Technology & Rishihood University*

- **GitHub**: [@Antrikshcodes](https://github.com/Antrikshcodes)
- **LinkedIn**: [antrikshgalhotra](https://linkedin.com/in/antrikshgalhotra)
- **Email**: [antrikshcodes@gmail.com](mailto:antrikshcodes@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
