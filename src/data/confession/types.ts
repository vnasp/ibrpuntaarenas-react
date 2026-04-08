export type ContentBlock =
  | { type: "paragraph"; content: string; footnotes?: string[] }
  | { type: "article"; number: number; content: string; footnotes?: string[] }
  | { type: "bible-table" }
  | { type: "quote"; content: string; reference?: string }
  | { type: "list"; items: string[] }
  | { type: "heading"; content: string };

export interface ConfessionChapter {
  number: number;
  title: string;
  blocks: ContentBlock[];
}
