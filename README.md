# Wheel of Crisis

**An interactive corporate crisis-management simulation.**

Navigate high-stakes business crises, evaluate strategic options, and explore the consequences of boardroom decisions across four industries. Spin the wheel, make your decision, and analyze the projected impact on capital, corporate reputation, and risk.

<p align="center">
  <a href="https://wheelofcrisis.gt.tc/?i=1">
    <img src="https://img.shields.io/badge/Live%20Demo-Launch%20Application-0D9488?style=for-the-badge" alt="Launch Wheel of Crisis" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-Enabled-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Powered-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
</p>

---

## Live Application

**Website:** https://wheelofcrisis.gt.tc/?i=1

Open the live application to experience the crisis simulation directly in your browser.

## Overview

Wheel of Crisis transforms corporate crisis management into an interactive, decision-driven experience. Players encounter realistic business challenges, assess their options, and evaluate the projected consequences of their strategic choices.

The application combines an interactive canvas-based wheel, scenario-driven gameplay, consequence analysis, and procedurally generated audio.

### At a Glance

| Component | Details |
|---|---|
| Industry sectors | 4 |
| Corporate crisis scenarios | 16 |
| Scenario selection | Interactive spinning wheel |
| Decision-making | Strategic choices and outcome analysis |
| Impact metrics | Financial impact, reputation effects, and risk levels |
| Audio | Procedurally generated sound effects |

## Features

### Interactive Crisis Wheel
A canvas-rendered spinning wheel provides an engaging way to select corporate crisis scenarios, supported by animation and audio feedback.

### Industry-Based Scenarios
Explore crisis scenarios across four business sectors, each representing a different industry context.

### Strategic Decision-Making
Review a crisis, evaluate the available strategic responses, and make decisions based on the information presented.

### Consequence Analysis
Understand the projected implications of each decision through three key dimensions:

- **Financial impact:** Projected capital consequences.
- **Corporate reputation:** Changes in reputational standing.
- **Risk level:** The associated level of strategic risk.

### Procedural Audio
The Web Audio API generates wheel ticks and outcome-confirmation sounds without requiring external audio files.

### Modern Frontend Architecture
Built with React, TypeScript, Vite, and Tailwind CSS for a modular and maintainable frontend.

## Industry Sectors

| Sector | Focus |
|---|---|
| Technology & AI | Artificial intelligence, technology operations, and corporate responsibility |
| Gaming & Entertainment | Gaming businesses and entertainment platforms |
| Health Tech & Wearables | Digital health and wearable technology |
| EV & Smart Mobility | Electric vehicles and intelligent mobility solutions |

The application includes 16 corporate crisis scenarios distributed across these sectors.

## How It Works

1. **Select an industry** — Choose one of the four available sectors.
2. **Spin the wheel** — Select a corporate crisis scenario.
3. **Assess the situation** — Review the crisis context and boardroom challenge.
4. **Make a decision** — Choose from the available strategic options.
5. **Analyze the outcome** — Review the projected financial, reputational, and risk consequences.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| TypeScript | Static typing and maintainable code |
| Vite | Development server and production build tooling |
| Tailwind CSS v4 | Utility-first styling |
| HTML5 Canvas | Interactive wheel rendering |
| Web Audio API | Procedural sound generation |
| Lucide React | Interface icons |

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js v18 or later recommended
- npm

Verify your installation:

```bash
node --version
npm --version
```

### Installation

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the project directory**

```bash
cd <project-directory>
```

Replace the placeholders with your repository URL and project directory.

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal. The application is configured to use port `3000`.

**5. Build for production**

```bash
npm run build
```

The production files are generated in the `dist/` directory.

**6. Preview the production build**

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run clean` | Removes build artifacts |
| `npm run lint` | Runs the TypeScript check using `tsc --noEmit` |

## Project Structure

```text
src/
├── App.tsx
├── types.ts
├── data.ts
├── lib/
│   └── audio.ts
└── components/
    ├── SectorSelector.tsx
    ├── SpinWheel.tsx
    └── CrisisDetails.tsx
```

### Core Files

| File | Responsibility |
|---|---|
| `App.tsx` | Main application shell and state management |
| `types.ts` | Shared TypeScript interfaces and types |
| `data.ts` | Industry definitions and crisis scenario data |
| `lib/audio.ts` | Procedural audio synthesis |
| `components/SectorSelector.tsx` | Industry selection interface |
| `components/SpinWheel.tsx` | Canvas-based spinning wheel |
| `components/CrisisDetails.tsx` | Crisis information and strategic decisions |

## Application Architecture

The application is organized into several functional layers:

- **User interface:** React components present the industry selector, wheel, and crisis details.
- **Scenario data:** Centralized definitions hold sector and crisis information.
- **Application state:** Coordinates the simulation flow and user interactions.
- **Graphics:** HTML5 Canvas renders the interactive wheel.
- **Audio:** The Web Audio API generates sound effects at runtime.

This structure separates presentation, scenario content, interaction logic, graphics, and audio functionality.

## License

This is a private project and is not licensed for public distribution. All rights are reserved unless otherwise specified by the project owner.

---

<p align="center">
  <strong>Wheel of Crisis</strong><br />
  Every crisis demands a decision. Every decision has consequences.
  <br /><br />
  <a href="https://wheelofcrisis.gt.tc/?i=1">Visit the Live Application</a>
</p>
