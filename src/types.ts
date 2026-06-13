export interface Chapter {
  id: number;
  title: string;
  shortDesc: string;
  sections: Section[];
}

export interface Section {
  title: string;
  content: string[];
  tables?: Table[];
  keyTakeaways?: string[];
  clinicalClues?: string[];
}

export interface Table {
  title: string;
  headers: string[];
  rows: string[][];
  notes?: string;
}

export interface FluidComposition {
  name: string;
  dextroseGmL: number | string;
  caloriesKcal: number | string;
  na: number | string;
  k: number | string;
  cl: number | string;
  acetate: number | string;
  lactate: number | string;
  nh4: number | string;
  ca: number | string;
  mg: number | string;
  hpo4: number | string;
  gluconate: number | string;
  citrate: number | string;
  osm: number;
  sid: number | string;
  indications: string[];
  contraindications: string[];
  notes: string;
}

export interface SpecialSolution {
  name: string;
  contentMeqMl: string;
  volumeAmp: number;
  contentMeqAmp: string;
  weightGm10ml: number | string;
  notes?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  rationale: string;
  chapterContext: string;
}
