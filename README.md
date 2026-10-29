# 🎡 Wheel of Crisis

### Spin. Strategize. Survive the Crisis.

**Wheel of Crisis** is an interactive corporate crisis-management simulation where players navigate high-stakes boardroom challenges across four industries. Spin the wheel to uncover a crisis, evaluate strategic options, and explore the consequences of decisions on financial performance, corporate reputation, and organizational risk.

<p align="center">
  <a href="https://wheelofcrisis.gt.tc/?i=1">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Launch_Wheel_of_Crisis-14B8A6?style=for-the-badge" alt="Launch Wheel of Crisis Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Powered-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
</p>

---

## 📌 Table of Contents

- [Live Demo](#-live-demo)
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Industry Sectors](#-industry-sectors)
- [How It Works](#-how-it-works)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Application Architecture](#-application-architecture)
- [License](#-license)

---

## 🌐 Live Demo

Experience the simulation directly in your browser.

**Website:** https://wheelofcrisis.gt.tc/?i=1

[**▶ Launch Wheel of Crisis**](https://wheelofcrisis.gt.tc/?i=1)

---

## 🚀 Overview

In business, a single decision can have significant financial and reputational consequences. **Wheel of Crisis** turns that challenge into an interactive strategic simulation.

Players encounter corporate crises, assess the situation, choose a response, and review the projected consequences of their decisions.

### At a glance

| Component | Description |
|---|---|
| Industry sectors | 4 |
| Corporate crisis scenarios | 16 |
| Interactive wheel | Canvas-based spinning simulation |
| Decision system | Strategic choices with measurable consequences |
| Consequence metrics | Financial impact, reputation effects, and risk levels |
| Audio experience | Procedurally generated sound effects |
| Application type | Interactive web application |

---

## ✨ Key Features

### 🎯 Interactive Crisis Wheel
Explore an animated, canvas-rendered wheel designed to make crisis selection engaging. Its spinning behavior, segment transitions, and sound feedback create a tactile experience.

### 🏢 Four Industry Sectors
Choose from four industries, each presenting its own corporate context and crisis scenarios.

### 🧩 Strategic Decision-Making
Evaluate response options for each crisis. Every decision presents strategic trade-offs that challenge players to think about business priorities and potential consequences.

### 📊 Consequence Analysis
Review the projected effects of strategic decisions through three core dimensions:

- **Financial impact** — projected capital consequences.
- **Corporate reputation** — effects on the organization's public standing.
- **Risk level** — the level of risk associated with the chosen response.

### 🔊 Procedural Audio Feedback
Experience wheel ticks and outcome-confirmation sounds generated using the Web Audio API, without requiring external audio assets.

### ⚡ Modern Frontend Architecture
Built with React, TypeScript, Vite, and Tailwind CSS for a component-based interface and a modern development workflow.

---

## 🏭 Industry Sectors

| Industry | Focus |
|---|---|
| 🤖 Technology & AI | Artificial intelligence, technology operations, and corporate responsibility |
| 🎮 Gaming & Entertainment | Gaming businesses, entertainment platforms, and industry challenges |
| ❤️ Health Tech & Wearables | Digital health, wearable technology, and healthcare-related challenges |
| 🚗 EV & Smart Mobility | Electric vehicles, mobility technology, and connected transportation |

The application features **16 corporate crisis scenarios** distributed across these sectors.

---

## 🕹️ How It Works

**01 — Select an Industry**

Choose one of the four available industry sectors.

**02 — Spin the Wheel**

Launch the interactive wheel to select a crisis scenario.

**03 — Assess the Crisis**

Review the scenario's context, business challenge, and available strategic options.

**04 — Make a Decision**

Choose a response based on the information presented.

**05 — Analyze the Consequences**

Review the projected financial impact, reputation effects, risk level, and strategic outcome.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and maintainable application code |
| [Vite](https://vite.dev/) | Development server and production build tooling |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| HTML5 Canvas | Interactive wheel rendering and animation |
| Web Audio API | Procedural sound generation |
| [Lucide React](https://lucide.dev/) | Interface icons |

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** — v18 or later recommended
- **npm** — included with Node.js

Check your installed versions:

```bash
node --version
npm --version
```

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <project-directory>
```

Replace the placeholders with your actual repository URL and directory name.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal. The development server is configured for port `3000`.

If Vite selects a different port because the configured port is unavailable, use the URL shown in the terminal.

### 4. Create a Production Build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

### 5. Preview the Production Build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run clean` | Removes build artifacts |
| `npm run lint` | Runs the TypeScript check using `tsc --noEmit` |

---

## 📁 Project Structure

```text
src/
├── App.tsx                  # Application shell and state management
├── types.ts                 # TypeScript interfaces and types
├── data.ts                  # Industry sectors and crisis scenarios
│
├── lib/
│   └── audio.ts             # Procedural audio synthesis
│
└── components/
    ├── SectorSelector.tsx   # Industry selection interface
    ├── SpinWheel.tsx        # Canvas-based interactive wheel
    └── CrisisDetails.tsx    # Crisis information and decisions
```

### Core Components

**`App.tsx`** — Coordinates application flow and state.

**`SectorSelector.tsx`** — Provides the industry selection interface.

**`SpinWheel.tsx`** — Renders and manages the interactive canvas-based wheel.

**`CrisisDetails.tsx`** — Presents crisis information and strategic options.

**`data.ts`** — Organizes sector definitions and crisis content.

**`types.ts`** — Defines shared TypeScript interfaces, including `Sector`, `Crisis`, and `StrategicOption`.

**`lib/audio.ts`** — Generates procedural audio feedback through the Web Audio API.

---

## 🧱 Application Architecture

Wheel of Crisis follows a component-based React architecture.

- **Presentation layer:** Renders industry selection, the crisis wheel, and decision screens.
- **Scenario data layer:** Stores sector definitions and crisis content.
- **Interaction layer:** Coordinates simulation progression and user decisions.
- **Graphics layer:** Uses HTML5 Canvas for wheel rendering.
- **Audio layer:** Uses the Web Audio API to generate sound effects.

This separation keeps the interface, scenario content, interactive graphics, and audio functionality organized and maintainable.

---

## 🔒 License

**Private project — not licensed for public distribution.**

All rights are reserved unless otherwise specified by the project owner.

---

<p align="center">
  <strong>Wheel of Crisis</strong><br />
  <em>Every crisis demands a decision. Every decision has consequences.</em><br /><br />
  <a href="https://wheelofcrisis.gt.tc/?i=1">Visit the Live Website ↗</a>
</p>
