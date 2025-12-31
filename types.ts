export enum ViewState {
  HOME = 'HOME',
  HISTORY = 'HISTORY',
  SPECS = 'SPECS',
  FAULTS = 'FAULTS',
  STATS = 'STATS',
  AI_USTA = 'AI_USTA'
}

export interface SpecItem {
  component: string;
  fluid: string;
  spec: string;
  capacity: string;
  interval: string;
}

export interface FaultItem {
  code: string;
  system: string;
  symptom: string;
  solution: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  cost: 'Low' | 'Medium' | 'High' | 'Very High';
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}