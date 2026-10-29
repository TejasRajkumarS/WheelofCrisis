export interface StrategicOption {
  label: string;
  action: string;
  consequence: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  financialImpact: string;
  reputationImpact: string;
}

export interface Crisis {
  id: string;
  letter: 'A' | 'B' | 'C' | 'D';
  title: string;
  context: string;
  challenge: string;
  options: [StrategicOption, StrategicOption];
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  iconName: string;
  themeColor: string; // Tailwind color class bases, e.g. 'indigo', 'rose'
  colors: {
    primary: string;      // Tailwind hex/rgb or class
    secondary: string;
    accent: string;
    border: string;
    bgGlow: string;
  };
  crises: Crisis[];
}

export type AppState = 'landing' | 'wheel' | 'result';
