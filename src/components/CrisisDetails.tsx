import { useState } from 'react';
import { Sector, Crisis, StrategicOption } from '../types';
import { playClickSound } from '../lib/audio';
import * as Icons from 'lucide-react';

interface CrisisDetailsProps {
  sector: Sector;
  crisis: Crisis;
  onReset: () => void;
  onChangeSector: () => void;
}

export default function CrisisDetails({ sector, crisis, onReset, onChangeSector }: CrisisDetailsProps) {
  const [selectedOption, setSelectedOption] = useState<StrategicOption | null>(null);

  // Dynamic style mappings depending on Sector theme for Clean Minimalism (light mode)
  let borderHighlight = "border-cyan-300";
  let textHighlight = "text-cyan-600";
  let bgGradient = "from-cyan-50/70 via-white to-white";
  let badgeStyle = "bg-cyan-50 text-cyan-800 border-cyan-100";
  let textGlow = "shadow-[0_4px_20px_rgba(6,182,212,0.06)]";

  if (sector.themeColor === 'fuchsia') {
    borderHighlight = "border-fuchsia-300";
    textHighlight = "text-fuchsia-600";
    bgGradient = "from-fuchsia-50/70 via-white to-white";
    badgeStyle = "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-100";
    textGlow = "shadow-[0_4px_20px_rgba(217,70,239,0.06)]";
  } else if (sector.themeColor === 'emerald') {
    borderHighlight = "border-emerald-300";
    textHighlight = "text-emerald-600";
    bgGradient = "from-emerald-50/70 via-white to-white";
    badgeStyle = "bg-emerald-50 text-emerald-800 border-emerald-100";
    textGlow = "shadow-[0_4px_20px_rgba(16,185,129,0.06)]";
  } else if (sector.themeColor === 'amber') {
    borderHighlight = "border-amber-300";
    textHighlight = "text-amber-600";
    bgGradient = "from-amber-50/70 via-white to-white";
    badgeStyle = "bg-amber-50 text-amber-800 border-amber-100";
    textGlow = "shadow-[0_4px_20px_rgba(245,158,11,0.06)]";
  }

  const handleSelectOption = (option: StrategicOption) => {
    playClickSound();
    setSelectedOption(option);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'Medium':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-green-700 bg-green-50 border-green-200';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 animate-fade-in" id="crisis-resolution-board">
      {/* Top Breadcrumb Rail */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-1 rounded bg-white border border-slate-200 text-[10px] font-mono tracking-wider text-slate-600 font-bold uppercase shadow-sm">
            SECTOR OUTCOME {crisis.letter}
          </div>
          <span className="text-slate-300 font-mono">/</span>
          <span className="text-slate-500 font-mono text-xs font-semibold uppercase">{sector.name}</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              playClickSound();
              onReset();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 text-xs font-mono transition-colors cursor-pointer shadow-sm font-semibold"
          >
            <Icons.RotateCw className="w-3.5 h-3.5" /> RE-SPIN WHEEL
          </button>
        </div>
      </div>

      {/* Primary Crisis Description Deck */}
      <div className={`p-6 sm:p-8 rounded-2xl border border-slate-200 bg-gradient-to-br ${bgGradient} relative overflow-hidden mb-8 shadow-sm`}>
        {/* Absolute Background Accent Watermark */}
        <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-900">
          <Icons.ShieldAlert className="w-48 h-48" />
        </div>

        {/* Hazard Left bar Indicator */}
        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: sector.colors.primary }} />

        <div className="flex items-start gap-4">
          <div className="hidden sm:flex w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-red-600 items-center justify-center font-display font-black text-2xl shrink-0 shadow-sm">
            {crisis.letter}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-600 font-mono text-xs font-bold tracking-widest uppercase animate-pulse">
                CRITICAL THREAT IN PROGRESS
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {crisis.title}
            </h2>

            {/* Context Section */}
            <div className="mt-5">
              <h3 className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Icons.FileText className="w-3.5 h-3.5" /> THE CONTEXT
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                {crisis.context}
              </p>
            </div>

            {/* Challenge Callout */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl border border-slate-200 bg-white shadow-inner flex gap-3.5">
              <Icons.HelpCircle className={`w-5.5 h-5.5 shrink-0 ${textHighlight} mt-0.5`} />
              <div>
                <h4 className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest mb-1">THE BOARDROOM CHALLENGE</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-sans italic">
                  "{crisis.challenge}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Tree Section */}
      <div className="mb-10">
        <h3 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest mb-4 text-center">
          {selectedOption ? 'STRATEGIC COMMITMENT RESULT' : 'SELECT A STRATEGIC BOARDROOM ACTION'}
        </h3>

        {!selectedOption ? (
          // Two interactive strategic choices side-by-side
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="strategic-options">
            {crisis.options.map((option, idx) => (
              <button
                key={idx}
                id={`option-button-${idx}`}
                onClick={() => handleSelectOption(option)}
                className="group text-left p-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between hover:scale-[1.01] hover:border-slate-300 cursor-pointer relative overflow-hidden"
              >
                {/* Visual Accent Hover Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-indigo-500 transition-colors"
                     style={{ backgroundColor: `rgba(255,255,255,0.05)` }} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider font-semibold border border-slate-200 bg-slate-50 text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-800 transition-colors">
                      STRATEGY {idx + 1}
                    </span>
                    <Icons.Scale className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                  </div>

                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                    {option.label}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                    {option.action}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 w-full text-xs font-mono text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span className="font-semibold">DEPLOY OPTION</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">COMMIT</span>
                    <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          // Outcome card shown after user selects an option
          <div className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-white relative overflow-hidden shadow-md animate-scale-up" id="outcome-card">
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: sector.colors.primary }} />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-600">
                <Icons.ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">TACTICAL DECISION LOGGED</div>
                <h4 className="font-display text-xl font-bold text-slate-900">{selectedOption.label}</h4>
              </div>
            </div>

            {/* Outcome Narrative */}
            <div className="mb-8">
              <h5 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Icons.Layers className="w-3.5 h-3.5" /> CONSEQUENCE SUMMARY
              </h5>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedOption.consequence}
              </p>
            </div>

            {/* Impact Metric Cards (Drawn as a bento layout grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Risk Level */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest mb-1 block">Decision Risk</span>
                <span className={`text-sm font-semibold font-mono inline-flex items-center gap-1.5 px-2.5 py-1 rounded border max-w-fit ${getRiskColor(selectedOption.riskLevel)}`}>
                  <Icons.AlertTriangle className="w-3.5 h-3.5" /> {selectedOption.riskLevel} Risk
                </span>
              </div>

              {/* Financial Loss */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest mb-1 block">Projected Capital Drift</span>
                <span className="text-base font-bold font-mono text-red-600 flex items-center gap-1">
                  <Icons.TrendingDown className="w-4 h-4 shrink-0 text-red-500" /> {selectedOption.financialImpact}
                </span>
              </div>

              {/* Reputation Damage */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest mb-1 block">Corporate Reposturing</span>
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 leading-tight">
                  <Icons.Award className={`w-4 h-4 shrink-0 ${textHighlight}`} /> {selectedOption.reputationImpact}
                </span>
              </div>
            </div>

            {/* Strategic choices / navigation */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-6">
              <button
                onClick={() => {
                  playClickSound();
                  setSelectedOption(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all text-sm font-mono cursor-pointer shadow-sm font-semibold"
              >
                <Icons.RotateCcw className="w-4 h-4" /> TEST OTHER PATH
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onReset();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-mono text-sm cursor-pointer shadow-lg hover:brightness-110 transition-all"
                style={{
                  backgroundColor: sector.colors.secondary,
                  boxShadow: `0 4px 14px ${sector.colors.primary}40`
                }}
              >
                <Icons.Compass className="w-4 h-4 animate-spin-slow" /> RE-SPIN SECTOR WHEEL
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Global Board Operations Center Navigation bar */}
      <div className="text-center">
        <button
          onClick={() => {
            playClickSound();
            onChangeSector();
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-600 hover:text-slate-900 transition-all text-xs font-mono tracking-widest uppercase cursor-pointer shadow-sm font-semibold"
        >
          <Icons.Globe className="w-3.5 h-3.5" /> RE-ENTER WORLD SECTOR MAP
        </button>
      </div>
    </div>
  );
}
