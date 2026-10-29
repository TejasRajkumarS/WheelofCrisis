# Wheel of Crisis

An interactive strategic simulation where users navigate high-stakes corporate crises across four industry sectors. Select a sector, spin the wheel, and make boardroom decisions with measurable consequences — financial impact, reputation effects, and risk levels.

## Overview

This application delivers an engaging crisis-resolution experience through:

- **4 Industries:** Technology & AI, Gaming & Entertainment, Health Tech & Wearables, EV & Smart Mobility
- **16 Corporate Crises:** Each with unique context, boardroom challenges, and strategic choices
- **Interactive Wheel:** Physics-based canvas simulation with tactile feedback
- **Decision Outcomes:** Real-time consequence analysis including risk level, projected capital impact, and reputation effects
- **Audio Feedback:** Procedural sound synthesis for spin ticks and win confirmation

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 with custom animations
- **Graphics:** HTML5 Canvas for the interactive spin wheel
- **Audio:** Web Audio API (no external assets required)
- **Icons:** Lucide React

## Prerequisites

- Node.js (v18 or later recommended)
- npm

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove build artifacts |
| `npm run lint` | TypeScript type check (`tsc --noEmit`) |

## Project Structure

```
src/
├── App.tsx              # Main application shell and state machine
├── types.ts             # TypeScript interfaces (Sector, Crisis, StrategicOption)
├── data.ts              # Crisis content and sector definitions
├── lib/audio.ts         # Web Audio API sound synthesizer
├── components/
│   ├── SectorSelector.tsx   # Industry selection landing page
│   ├── SpinWheel.tsx        # Canvas-based physics spin wheel
│   └── CrisisDetails.tsx    # Crisis detail and strategic decision view
```

## License

Private project — not licensed for distribution.
