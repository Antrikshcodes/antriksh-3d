import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antriksh Galhotra | The Interactive 3D Workspace",
  description:
    "An immersive, photorealistic 3D personal workspace and portfolio for Antriksh Galhotra — AI, Robotics, and Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#0a0c10] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <body className="h-full w-full overflow-hidden bg-[#07090e] font-sans text-slate-100">
        {children}
      </body>
    </html>
  );
}
