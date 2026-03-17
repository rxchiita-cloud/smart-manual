
export interface Step {
  number: number;
  title: string;
  description: string;
  image?: string; // 画像のURLまたはパス
  video?: string; // 動画のURLまたはパス
  subSteps?: string[];
}

export interface ManualSection {
  id: string;
  title: string;
  icon: string;
  pages: ManualPage[];
}

export interface ManualPage {
  id: string;
  title: string;
  content: string;
  steps: Step[];
  notes?: string[];
}

export enum SectionType {
  STARTUP = 'startup',
  PREP = 'prep',
  MOLDING = 'molding',
  CHECK = 'check',
  ADMIN = 'admin'
}
