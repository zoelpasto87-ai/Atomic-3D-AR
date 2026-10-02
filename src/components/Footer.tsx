import React from 'react';
import { Atom, ShieldCheck, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 border-t border-slate-800/80 bg-slate-950/90 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left: Branding */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Atom className="w-4 h-4 text-cyan-400" />
            <span className="font-extrabold text-sm text-white tracking-wide">
              ATOM 3D — Interactive Periodic Table
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Jelajahi unsur. Pahami atom. Temukan dunia kimia.
          </p>
        </div>

        {/* Center: Phase info badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Fase 1–9: 118 Unsur, Atom 3D, AR, Lab, Journey, Challenge & Analytics</span>
        </div>

        {/* Right: Copyright & Design Attribution */}
        <div className="space-y-0.5 md:text-right text-xs text-slate-400">
          <p className="font-semibold text-slate-300">
            © 2026 — Design by ZP
          </p>
          <p className="text-[11px] text-slate-400">
            Arsitektur offline terpadu dengan analitik belajar lokal
          </p>
        </div>
      </div>
    </footer>
  );
};
