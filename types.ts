export const View = {
  HOME: 'HOME',
  FAULTS: 'FAULTS',
  MAINTENANCE: 'MAINTENANCE',
  CODES: 'CODES',
  AI_ASSISTANT: 'AI',
  PRESENTATIONS: 'PRESENTATION',
  SERVICES: 'SERVICE'
} as const;

export type View = typeof View[keyof typeof View];
export type ViewState = View;

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  highlight?: string;
}

export interface Fault {
  id: string;
  title: string;
  severity: 'high' | 'medium' | 'low';
  symptoms: string[];
  cause: string;
  solution: string;
}

export interface MaintenanceItem {
  km: number;
  tasks: string[];
  note?: string;
  isMajor?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}