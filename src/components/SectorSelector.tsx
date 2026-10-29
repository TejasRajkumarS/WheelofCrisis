import { Sector } from '../types';
import * as Icons from 'lucide-react';

interface SectorSelectorProps {
  sectors: Sector[];
  onSelectSector: (sector: Sector) => void;
}

export default function SectorSelector({ sectors, onSelectSector }: SectorSelectorProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Title block with display typography and high-contrast spacing */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50/70 mb-4 text-xs font-mono text-indigo-700 tracking-wider uppercase font-semibold shadow-sm">
          <Icons.Sparkles className="w-3 h-3 text-indigo-600 animate-pulse" /> Boardroom Crisis Simulator
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Spin the Wheel of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800">Corporate Crisis</span>
        </h1>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-base sm:text-lg font-sans leading-relaxed">
          Every billion-dollar enterprise operates on the edge of disruption. Select an industry below, spin the wheel, and test your strategic decision-making in high-stakes boardroom crises.
        </p>
      </div>

      {/* Grid containing the 4 primary sectors as custom visual cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="sector-grid">
        {sectors.map((sector) => {
          // Dynamically lookup lucide icon
          const IconComponent = (Icons as any)[sector.iconName] || Icons.HelpCircle;

          // Resolve custom style parameters based on theme color for Clean Minimalism (light mode)
          let glowClass = "hover:border-cyan-500 hover:shadow-[0_4px_20px_rgba(6,182,212,0.12)]";
          let textGradient = "from-cyan-600 to-blue-600";
          let bgGradient = "hover:bg-cyan-50/30";
          let iconColor = "text-cyan-600 bg-cyan-50 border-cyan-100";
          let badgeColor = "bg-cyan-50 text-cyan-700 border-cyan-100";
          let accentColorText = "group-hover:text-cyan-600";

          if (sector.themeColor === 'fuchsia') {
            glowClass = "hover:border-fuchsia-500 hover:shadow-[0_4px_20px_rgba(217,70,239,0.12)]";
            textGradient = "from-fuchsia-600 to-purple-600";
            bgGradient = "hover:bg-fuchsia-50/30";
            iconColor = "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100";
            badgeColor = "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100";
            accentColorText = "group-hover:text-fuchsia-600";
          } else if (sector.themeColor === 'emerald') {
            glowClass = "hover:border-emerald-500 hover:shadow-[0_4px_20px_rgba(16,185,129,0.12)]";
            textGradient = "from-emerald-600 to-teal-600";
            bgGradient = "hover:bg-emerald-50/30";
            iconColor = "text-emerald-600 bg-emerald-50 border-emerald-100";
            badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-100";
            accentColorText = "group-hover:text-emerald-600";
          } else if (sector.themeColor === 'amber') {
            glowClass = "hover:border-amber-500 hover:shadow-[0_4px_20px_rgba(245,158,11,0.12)]";
            textGradient = "from-amber-600 to-orange-600";
            bgGradient = "hover:bg-amber-50/30";
            iconColor = "text-amber-600 bg-amber-50 border-amber-100";
            badgeColor = "bg-amber-50 text-amber-700 border-amber-100";
            accentColorText = "group-hover:text-amber-600";
          }

          return (
            <button
              key={sector.id}
              id={`select-sector-${sector.id}`}
              onClick={() => onSelectSector(sector)}
              className={`group relative text-left p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out cursor-pointer ${glowClass} ${bgGradient}`}
            >
              {/* Card visual elements */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className={`p-3.5 rounded-xl border ${iconColor} transition-all duration-300 group-hover:scale-105`}>
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className={`px-2.5 py-0.5 rounded-md border text-xs font-mono tracking-wide font-semibold ${badgeColor}`}>
                      4 High-Risk Crises
                    </span>
                  </div>
                  <h2 className={`font-display text-lg sm:text-xl font-bold text-slate-800 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${textGradient}`}>
                    {sector.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                    {sector.description}
                  </p>
                </div>
              </div>

              {/* Action drawer bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-700 font-mono transition-colors">
                <span className="font-semibold tracking-wider">RECONSTRUCT THREAT MATRIX</span>
                <div className={`flex items-center gap-1 ${accentColorText} group-hover:translate-x-1.5 transition-transform duration-300 font-bold`}>
                  <span>DEPLOY THE WHEEL</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-40 transition-opacity">
                <Icons.Sparkles className="w-4 h-4 text-indigo-500" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer information section */}
      <div className="mt-16 text-center border-t border-slate-200 pt-8 text-slate-400 text-xs font-mono font-medium tracking-widest">
        <p>CHOOSE AN INDUSTRY TO INITIALIZE THE SYSTEM DEVIATION SPECTRUM.</p>
        <p className="mt-1 text-slate-500">SECURE PROTOCOL • CLIENT PERSISTENCE ACTIVE</p>
      </div>
    </div>
  );
}
