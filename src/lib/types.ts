export type Position = "GK" | "CB" | "LB" | "RB" | "CDM" | "CM" | "CAM" | "LM" | "RM" | "LW" | "RW" | "ST";

export interface Player {
  id: string;
  name: string;
  age: number;
  nationality: string;
  club: string;
  position: Position;
  overall: number;
  potential: number;
  value: number; // transfer value in euros
  wage: number; // weekly wage in euros
  photo?: string; // Wikimedia Commons file title, e.g. "Lamine Yamal in 2025 (cropped).jpg"
}

export type SortKey = "overall" | "potential" | "value" | "age" | "name";
export type SortDir = "asc" | "desc";
