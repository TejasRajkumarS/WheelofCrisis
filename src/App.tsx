import { useState } from 'react';
import { Sector, Crisis, AppState } from './types';
import { SECTORS } from './data';
import SectorSelector from './components/SectorSelector';
import SpinWheel from './components/SpinWheel';
import CrisisDetails from './components/CrisisDetails';
import * as Icons from 'lucide-react';
import { playClickSound } from './lib/audio';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [selectedCrisis, setSelectedCrisis] = useState<Crisis | null>(null);

  const handleSelectSector = (sector: Sector) => {
    setSelectedSector(sector);
    setAppState('wheel');
  };

  const handleCrisisSelected = (crisis: Crisis) => {
    setSelectedCrisis(crisis);
    setAppState('result');
  };

  const handleBackToLanding = () => {
    setSelectedSector(null);
    setSelectedCrisis(null);
    setAppState('landing');
  };

  const handleResetWheel = () => {
    setSelectedCrisis(null);
    setAppState('wheel');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-slate-900">
      {/* Dynamic Background Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* Decorative ambient blurred backing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header operations bar */}
      <header className="relative z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
        <button
          onClick={() => {
            playClickSound();
            handleBackToLanding();
          }}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-[0_2px_8px_rgba(79,70,229,0.2)] group-hover:scale-105 transition-transform">
            <Icons.Compass className="w-4.5 h-4.5 text-white animate-spin-slow" />
          </div>
          <div>
            <h1 className="font-display font-black text-sm tracking-widest text-slate-900 uppercase leading-none">
              WHEEL OF CRISIS
            </h1>
            <p className="text-[9px] font-mono text-slate-400 tracking-wider mt-0.5 font-semibold">
              CRISIS RESOLUTION PORTAL v1.4
            </p>
          </div>
        </button>

        {selectedSector && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>SECTOR: <span className="text-slate-900 font-bold">{selectedSector.name.toUpperCase()}</span></span>
          </div>
        )}
      </header>

      {/* Main Container Stage */}
      <main className="flex-1 flex flex-col justify-center relative z-40">
        {appState === 'landing' && (
          <SectorSelector
            sectors={SECTORS}
            onSelectSector={handleSelectSector}
          />
        )}

        {appState === 'wheel' && selectedSector && (
          <SpinWheel
            sector={selectedSector}
            onCrisisSelected={handleCrisisSelected}
            onBack={handleBackToLanding}
          />
        )}

        {appState === 'result' && selectedSector && selectedCrisis && (
          <CrisisDetails
            sector={selectedSector}
            crisis={selectedCrisis}
            onReset={handleResetWheel}
            onChangeSector={handleBackToLanding}
          />
        )}
      </main>

      {/* Corporate Dashboard Footer */}
      <footer className="relative z-40 border-t border-slate-800 bg-slate-900 py-5 px-6 text-center text-[10px] font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
        <div className="font-semibold text-slate-300">
          © {new Date().getFullYear()} WHEEL OF CRISIS LABS INC. • ALL CRISES REGISTERED
        </div>
        <div className="flex gap-4 font-semibold text-slate-400">
          <span className="hover:text-white transition-colors cursor-pointer">THREAT AUDITING</span>
          <span>•</span>
          <span className="hover:text-white transition-colors cursor-pointer">SECURE CORE</span>
          <span>•</span>
          <span className="hover:text-white transition-colors cursor-pointer">COMPLIANCE CERTIFIED</span>
        </div>
      </footer>
    </div>
  );
}
