export enum View {
  HOME = 'HOME',
  FAULTS = 'FAULTS',
  MAINTENANCE = 'MAINTENANCE',
  CODES = 'CODES',
  AI_ASSISTANT = 'AI_ASSISTANT',
  PRESENTATIONS = 'PRESENTATIONS',
  SERVICES = 'SERVICES',
}

export interface Fault {
  id: string;
  title: string;
  symptoms: string[];
  cause: string;
  solution: string;
  severity: 'low' | 'medium' | 'high';
}

export interface MaintenanceItem {
  intervalKm: number;
  items: string[];
  notes?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isLoading?: boolean;
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  highlight?: string; // For specific codes or part numbers
}

export const OM642_SPECS = {
  engine: "V6 Diesel Turbo",
  displacement: "2987 cc",
  power: "165 kW (224 PS) @ 3800 rpm",
  torque: "510 Nm @ 1600–2800 rpm",
  oilCapacity: "8.0 - 8.5 Liters (depending on cooler)",
  oilSpec: "MB 229.51 / 229.52 (Low SAPS)"
};