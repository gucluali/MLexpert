export interface FluidSpec {
  id: string;
  system: string;
  code: string;
  capacity: string;
  specification: string;
  notes: string;
  partNumber?: string;
}

export interface FaultCode {
  code: string;
  description: string;
  possibleCauses: string[];
  solution: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageView {
  HOME = 'HOME',
  MODELS = 'MODELS',
  ENGINE = 'ENGINE',
  FLUIDS = 'FLUIDS',
  FAULTS = 'FAULTS',
  ASSISTANT = 'ASSISTANT'
}

export type Language = 'en' | 'tr';
