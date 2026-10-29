import { useEffect, useRef, useState } from 'react';
import { Sector, Crisis } from '../types';
import { playTickSound, playWinSound, playClickSound } from '../lib/audio';
import * as Icons from 'lucide-react';

interface SpinWheelProps {
  sector: Sector;
  onCrisisSelected: (crisis: Crisis) => void;
  onBack: () => void;
}

export default function SpinWheel({ sector, onCrisisSelected, onBack }: SpinWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [muted, setMuted] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  // Keep references of current physics state to avoid React re-render lags
  const stateRef = useRef({
    angle: 0,
    angularVelocity: 0,
    isSpinning: false,
    lastTickIndex: -1,
    pointerDeflection: 0,
    pointerVelocity: 0,
  });

  // Handle Canvas Drawing & Physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const drawWheel = () => {
      const { angle } = stateRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(cx, cy) - 20;

      ctx.clearRect(0, 0, width, height);

      // Save context
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      const numSegments = 4;
      const segmentAngle = (2 * Math.PI) / numSegments;

      // Draw the segments
      for (let i = 0; i < numSegments; i++) {
        const startAngle = i * segmentAngle;
        const endAngle = startAngle + segmentAngle;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.closePath();

        // Alternating segment colors using the sector brand style
        let baseColor = '#1e293b';
        if (i === 0) {
          baseColor = sector.colors.primary;
        } else if (i === 1) {
          baseColor = sector.colors.secondary;
        } else if (i === 2) {
          baseColor = sector.colors.accent;
        }

        // Create beautiful 3D spherical volumetric shading
        const grad = ctx.createRadialGradient(0, 0, radius * 0.1, 0, 0, radius);
        grad.addColorStop(0, '#ffffff'); // brilliant light core highlights
        grad.addColorStop(0.18, baseColor);
        grad.addColorStop(0.82, baseColor);
        grad.addColorStop(1, 'rgba(15, 23, 42, 0.45)'); // rich visual drop shadow for 3D depth
        ctx.fillStyle = grad;
        ctx.fill();

        // Draw inner segment borders
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw Crisis Letters and Text labels inside segments
        ctx.save();
        ctx.rotate(startAngle + segmentAngle / 2);

        // Text styling
        const isDarkSegment = i === 3; // segment 3 is elegant slate
        ctx.fillStyle = isDarkSegment ? '#ffffff' : '#0f172a';
        ctx.textAlign = 'right';

        // Draw letter (larger size for larger wheel)
        ctx.font = 'bold 40px "Comic Sans MS", "Comic Sans", cursive';
        const letter = sector.crises[i]?.letter || 'A';
        ctx.fillText(letter, radius - 50, 15);

        // Draw short clinical label for context (with larger offset)
        ctx.font = '700 11px "Comic Sans MS", "Comic Sans", cursive';
        ctx.fillStyle = isDarkSegment ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)';
        const fullTitle = sector.crises[i]?.title || '';
        const shortLabel = fullTitle.length > 24 ? fullTitle.substring(0, 22) + '...' : fullTitle;
        ctx.fillText(shortLabel.toUpperCase(), radius - 95, 9);

        ctx.restore();
      }

      // Machined metal concentric rings on top of segments
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      for (let d = 1; d <= 4; d++) {
        ctx.beginPath();
        ctx.arc(0, 0, radius * (d / 5), 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Draw Outer ring casing
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#334155'; // Slate-700 metallic ring
      ctx.lineWidth = 10;
      ctx.stroke();

      // Outer glowing rim highlight
      ctx.beginPath();
      ctx.arc(0, 0, radius + 5, 0, 2 * Math.PI);
      ctx.strokeStyle = sector.colors.primary + '33'; // transparent primary
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw shiny mechanical rivets/screws on the outer rim (high-density 24 rivets)
      const numRivets = 24;
      for (let r = 0; r < numRivets; r++) {
        const rAngle = (r * 2 * Math.PI) / numRivets;
        const rx = Math.cos(rAngle) * (radius - 2);
        const ry = Math.sin(rAngle) * (radius - 2);

        ctx.beginPath();
        ctx.arc(rx, ry, 3, 0, 2 * Math.PI);
        ctx.fillStyle = '#f8fafc'; // Shiny white rivet
        ctx.fill();

        ctx.beginPath();
        ctx.arc(rx, ry, 4, 0, 2 * Math.PI);
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw core central hub backing with luxurious metallic layers
      ctx.beginPath();
      ctx.arc(0, 0, 52, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff'; 
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, 2 * Math.PI);
      ctx.fillStyle = '#0f172a'; // rich deep slate center core
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    };

    const updatePhysics = () => {
      const state = stateRef.current;

      if (state.isSpinning) {
        // Apply friction to slow down the spin
        state.angularVelocity *= 0.985;
        state.angle += state.angularVelocity;

        // Sound Engine Sync: Calculate ticks when crossing a segment
        // Slice is Math.PI/2 width. Normalize angle to [0, 2*Math.PI)
        const normalizedAngle = (state.angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        const currentSegmentIndex = Math.floor(normalizedAngle / (Math.PI / 2));

        if (currentSegmentIndex !== state.lastTickIndex) {
          if (!muted && state.angularVelocity > 0.005) {
            // Speed up sound frequency multiplier depending on angular velocity
            playTickSound(Math.min(1.8, state.angularVelocity * 4));
          }
          state.lastTickIndex = currentSegmentIndex;
        }

        // Check if the wheel has completed its spin
        if (state.angularVelocity < 0.002) {
          state.angularVelocity = 0;
          state.isSpinning = false;
          setIsSpinning(false);

          if (!muted) {
            playWinSound();
          }

          // Delay the callback slightly to allow the victory audio to play in focus
          setTimeout(() => {
            // Determine final landed segment at 12 o'clock (pointing up)
            // Pointing up is at 3*Math.PI / 2 radians (270 degrees)
            const finalAngle = (state.angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            // Index of segment located at 12 o'clock:
            const topOffset = (1.5 * Math.PI - finalAngle + 2 * Math.PI) % (2 * Math.PI);
            const landedIdx = Math.floor(topOffset / (Math.PI / 2)) % 4;

            const selectedCrisis = sector.crises[landedIdx];
            onCrisisSelected(selectedCrisis);
          }, 600);
        }
      }

      // Physical peg/indicator deflection & vibration spring simulation
      const segmentAngle = Math.PI / 2;
      let diff = (state.angle % segmentAngle + segmentAngle) % segmentAngle;
      if (diff > segmentAngle / 2) {
        diff -= segmentAngle;
      }

      const springConstant = 0.35;
      const damping = 0.82;

      if (state.isSpinning && state.angularVelocity > 0.005) {
        // As the wheel spins, segment boundaries approach the 12 o'clock pointer
        const threshold = 0.16; // radians
        if (diff > 0 && diff < threshold) {
          // Push pointer in the clockwise direction of rotation
          const pushAmount = ((threshold - diff) / threshold) * 26;
          state.pointerDeflection = pushAmount;
          state.pointerVelocity = 0; // Lock velocity during direct push contact
        } else {
          // Standard spring damping motion
          const force = -springConstant * state.pointerDeflection;
          state.pointerVelocity += force;
          state.pointerVelocity *= damping;
          state.pointerDeflection += state.pointerVelocity;
        }
      } else {
        // Slow spring dampening back to perfect resting center position
        const force = -springConstant * state.pointerDeflection;
        state.pointerVelocity += force;
        state.pointerVelocity *= damping;
        state.pointerDeflection += state.pointerVelocity;
      }

      if (pointerRef.current) {
        pointerRef.current.style.transform = `rotate(${state.pointerDeflection}deg) scale(${1 + Math.abs(state.pointerDeflection) * 0.004})`;
      }

      drawWheel();
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    drawWheel();
    updatePhysics();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [sector, muted, onCrisisSelected]);

  // Handle Spin Action Button click
  const handleSpin = () => {
    if (isSpinning) return;

    if (!muted) {
      playClickSound();
    }

    const state = stateRef.current;
    state.isSpinning = true;
    setIsSpinning(true);
    setSpinCount((prev) => prev + 1);

    // Dynamic initial impulse: faster, more majestic rotation velocities
    const initialVelocity = 0.38 + Math.random() * 0.14; 
    state.angularVelocity = initialVelocity;
    state.lastTickIndex = -1;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      {/* Back navigation and header rails */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => {
            if (!muted) playClickSound();
            onBack();
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-all text-sm font-mono cursor-pointer shadow-sm"
        >
          <Icons.ArrowLeft className="w-4 h-4" /> BACK TO SECTORS
        </button>

        <div className="flex items-center gap-3">
          {/* Audio toggle button for user comfort */}
          <button
            onClick={() => {
              setMuted((prev) => !prev);
              if (muted) playClickSound();
            }}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-500 hover:text-slate-700 transition-all cursor-pointer shadow-sm"
            title={muted ? 'Unmute Sound FX' : 'Mute Sound FX'}
          >
            {muted ? <Icons.VolumeX className="w-4 h-4" /> : <Icons.Volume2 className="w-4 h-4" />}
          </button>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-600 font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> SYSTEM READY
          </div>
        </div>
      </div>

      {/* Grid container with spin action on left/center and details description on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Spin Canvas Wheel */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-[400px] sm:max-w-[470px] aspect-square flex items-center justify-center">
            {/* Elegant Outer Ring Shadow & Glow */}
            <div className="absolute inset-0 rounded-full bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)] border border-slate-200/80" />

            {/* Pulsing Backlit Radial Ambient Glow */}
            <div
              className={`absolute inset-6 rounded-full blur-3xl opacity-20 transition-all duration-500 ${isSpinning ? 'scale-110 opacity-35 animate-pulse' : 'scale-100'}`}
              style={{ backgroundColor: sector.colors.primary }}
            />

            {/* Canvas Wheel Element - Enlarged to 500x500 */}
            <canvas
              ref={canvasRef}
              width={500}
              height={500}
              className="relative z-10 w-[360px] sm:w-[430px] h-[360px] sm:h-[430px] select-none pointer-events-none"
            />

            {/* Dynamic Pointer Arrow pointing at 12 o'clock, hinges from top center */}
            <div 
              ref={pointerRef} 
              className="absolute top-0 z-20 -mt-2.5 flex flex-col items-center origin-top transition-transform duration-75 ease-out"
            >
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[26px] border-t-indigo-600 drop-shadow-[0_4px_6px_rgba(15,23,42,0.12)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow-sm -mt-3 z-30" />
            </div>

            {/* Custom Central Mechanical SPIN Button */}
            <button
              onClick={handleSpin}
              disabled={isSpinning}
              className={`absolute z-30 w-24 h-24 rounded-full flex flex-col items-center justify-center font-display font-extrabold text-sm tracking-widest cursor-pointer select-none transition-all duration-300 shadow-[0_6px_16px_rgba(15,23,42,0.1)] border-4 border-slate-100 group ${
                isSpinning
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed shadow-none scale-95'
                  : 'bg-white text-slate-900 hover:scale-105 active:scale-95'
              }`}
              style={
                !isSpinning
                  ? {
                      borderColor: '#f1f5f9',
                      boxShadow: `0 0 20px ${sector.colors.primary}22, inset 0 2px 4px rgba(255,255,255,0.8)`,
                    }
                  : {}
              }
            >
              <Icons.Compass
                className={`w-5 h-5 mb-1 text-slate-500 group-hover:text-slate-900 transition-all duration-300 ${
                  isSpinning ? 'animate-spin' : 'group-hover:rotate-45'
                }`}
              />
              {isSpinning ? 'SPINNING' : 'SPIN'}
            </button>
          </div>

          <p className="mt-6 text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
            {isSpinning ? 'CALCULATING ANGULAR ACCELERATION...' : 'PRESS SPIN BUTTON OR CLOCKWISE IMPULSE'}
          </p>
        </div>

        {/* Right Column: Information Display Board */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-300">
              <Icons.Compass className="w-24 h-24" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-indigo-100 bg-indigo-50 text-xs font-mono text-indigo-700 font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> SIMULATOR PRE-FLIGHT
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {sector.name}
            </h3>

            <p className="mt-3 text-sm text-slate-500 leading-relaxed font-sans">
              The deviation spectrum is loaded with 4 sector-specific corporate crises. Each represents a major boardroom emergency demanding immediate resource allocation and legal action.
            </p>

            <div className="mt-6 space-y-3.5">
              <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">LOADED emergency spectrum</h4>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs text-slate-700">
                <div className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[10px] font-bold text-cyan-600">A</span>
                  <span>Privacy Fail</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center text-[10px] font-bold text-fuchsia-600">B</span>
                  <span>System Glitch</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-600">C</span>
                  <span>Outage Blackout</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-amber-50 border border-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-600">D</span>
                  <span>External Threat</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 text-amber-800 flex gap-3 text-xs leading-relaxed font-medium">
              <Icons.AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
              <div>
                <span className="font-bold">CAUTION:</span> Once spun, you cannot abort the simulation. You must commit to a tactical boardroom decision to resolve the emergency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
