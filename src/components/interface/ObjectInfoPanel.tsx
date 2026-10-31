"use client";

import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";
import { INTERACTIVE_OBJECTS, EDUCATION_DATA, PROJECTS_DATA, ACHIEVEMENTS_DATA, PERSONAL_INFO } from "@/data/portfolioData";
import { X, ArrowRight, ExternalLink, Sparkles, GraduationCap, Code2, Award, Cpu, Globe, Mail } from "lucide-react";

export function ObjectInfoPanel() {
  const currentView = useWorkspaceStore((s) => s.currentView);
  const isPanelOpen = useWorkspaceStore((s) => s.isPanelOpen);
  const resetToOverview = useWorkspaceStore((s) => s.resetToOverview);

  if (!isPanelOpen || currentView === "overview") return null;

  const info = INTERACTIVE_OBJECTS[currentView];
  if (!info) return null;

  return (
    <aside
      aria-label="Object Details Panel"
      className="fixed inset-y-0 right-0 z-40 flex w-full max-w-lg flex-col border-l border-slate-800/80 bg-slate-950/92 p-6 shadow-[-12px_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 md:p-8"
    >
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
              {info.category}
            </span>
            <h2 className="text-xl font-bold tracking-tight text-white">{info.name}</h2>
          </div>
        </div>

        <button
          onClick={resetToOverview}
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
          title="Return to Studio Overview"
        >
          <X className="h-4 w-4 transition group-hover:rotate-90" />
        </button>
      </div>

      {/* Panel Scrollable Body */}
      <div className="flex-1 overflow-y-auto py-6 space-y-6 text-sm text-slate-300">
        {/* Main Details Description */}
        {info.details && (
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-100">{info.details.title}</h3>
            {info.details.subtitle && (
              <p className="text-xs font-medium text-cyan-300/80">{info.details.subtitle}</p>
            )}
            <p className="leading-relaxed text-slate-300 text-xs md:text-sm">
              {info.details.description}
            </p>
          </div>
        )}

        {/* Dynamic Contextual Content based on Object Type */}
        {currentView === "idCard" && (
          <div className="space-y-4 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              <GraduationCap className="h-4 w-4 text-cyan-400" />
              <span>Academic Enrollment</span>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold text-white">{EDUCATION_DATA.major}</div>
              <div className="text-xs text-cyan-300">{EDUCATION_DATA.institutions.join(" & ")}</div>
              <div className="text-xs text-slate-400">Batch: {EDUCATION_DATA.period}</div>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {EDUCATION_DATA.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {currentView === "resume" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                <Code2 className="h-4 w-4 text-cyan-400" />
                <span>Featured Technical Projects</span>
              </div>
              <span className="text-[11px] text-slate-400">5 Active Initiatives</span>
            </div>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-3 hover:border-slate-700 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-100 text-xs md:text-sm">
                      {proj.title}
                    </span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-cyan-300">
                      {proj.category}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{proj.tagline}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {proj.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-slate-950/80 px-1.5 py-0.5 text-[10px] text-slate-400 border border-slate-800/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === "trophyShelf" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              <Award className="h-4 w-4 text-cyan-400" />
              <span>Competitions & Summits</span>
            </div>
            <div className="space-y-2.5">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div
                  key={ach.id}
                  className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100 text-xs md:text-sm">{ach.event}</span>
                    <span className="text-[10px] text-amber-400">{ach.category}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === "monitor" && (
          <div className="space-y-4 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <Cpu className="h-4 w-4 text-cyan-400" />
              <span>Developer Command Center</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Phase 1 establishes the 3D studio monitor hardware and telemetry display. In Phase 5, this will house an interactive terminal emulator connected directly to Antriksh&apos;s command line tools and Jarvis AI voice workflow.
            </p>
            <div className="rounded border border-slate-800 bg-black/60 p-3 font-mono text-[11px] text-slate-400 space-y-1">
              <div className="text-cyan-400">&gt; systems.status = &quot;ONLINE&quot;</div>
              <div className="text-emerald-400">&gt; gpu_load = 42% (Optimal)</div>
              <div className="text-slate-400">&gt; jarvis_pipeline = &quot;Standby for Phase 5&quot;</div>
            </div>
          </div>
        )}

        {currentView === "phone" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              <Globe className="h-4 w-4 text-cyan-400" />
              <span>Connect Channels</span>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-xs text-slate-200 hover:border-cyan-500/40 hover:bg-slate-900 transition"
            >
              <span>GitHub // Antrikshcodes</span>
              <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-xs text-slate-200 hover:border-cyan-500/40 hover:bg-slate-900 transition"
            >
              <span>LinkedIn // antrikshgalhotra</span>
              <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-xs text-slate-200 hover:border-cyan-500/40 hover:bg-slate-900 transition"
            >
              <span>Email // {PERSONAL_INFO.email}</span>
              <Mail className="h-3.5 w-3.5 text-cyan-400" />
            </a>
          </div>
        )}

        {/* Tags */}
        {info.details?.tags && (
          <div className="space-y-2">
            <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Keywords & Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {info.details.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-0.5 text-[11px] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Back Button */}
      <div className="border-t border-slate-800/60 pt-4">
        <button
          onClick={resetToOverview}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-[0.99]"
        >
          <span>Back to Studio Overview</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
