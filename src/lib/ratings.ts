import type { Player, Position } from "./types";

export function overallColor(overall: number): string {
  if (overall >= 87) return "#eab308";
  if (overall >= 80) return "#16a34a";
  if (overall >= 74) return "#0ea5e9";
  return "#94a3b8";
}

const positionGroups: Record<Position, string> = {
  GK: "#8b5cf6",
  CB: "#3b82f6", LB: "#3b82f6", RB: "#3b82f6",
  CDM: "#10b981", CM: "#10b981", CAM: "#10b981", LM: "#10b981", RM: "#10b981",
  LW: "#f97316", RW: "#f97316", ST: "#f97316",
};

export function positionColor(position: Position): string {
  return positionGroups[position];
}

export const POSITIONS: Position[] = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LM", "RM", "LW", "RW", "ST"];

export interface AttributeSet {
  labels: string[];
  values: number[];
}

// Deterministic per-player attribute breakdown (PAC/SHO/PAS/DRI/DEF/PHY, or
// goalkeeper equivalents), derived from overall + position so every player
// gets a stable, role-appropriate profile without hand-authored data.
function hashSeed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function jitter(seed: number, index: number): number {
  const v = Math.abs((seed * (index + 7) * 2654435761) % 2147483647);
  return (v % 7) - 3; // -3..3
}

function clamp(n: number, min = 35, max = 99): number {
  return Math.max(min, Math.min(max, Math.round(n)));
}

const outfieldLabels = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];
const gkLabels = ["DIV", "HAN", "KIC", "REF", "SPD", "POS"];

// Offsets from overall for [PAC, SHO, PAS, DRI, DEF, PHY]
const outfieldOffsets: Record<Exclude<Position, "GK">, number[]> = {
  ST: [4, 7, -5, 2, -28, 2],
  LW: [9, 3, 0, 6, -24, -6],
  RW: [9, 3, 0, 6, -24, -6],
  CAM: [-1, 1, 6, 6, -20, -8],
  CM: [-4, -6, 6, 2, -3, 2],
  LM: [7, -2, 4, 4, -16, -4],
  RM: [7, -2, 4, 4, -16, -4],
  CDM: [-6, -10, 4, -4, 9, 6],
  LB: [6, -15, 1, -1, 7, -1],
  RB: [6, -15, 1, -1, 7, -1],
  CB: [-8, -22, -8, -15, 11, 8],
};

const gkOffsets = [2, 1, -6, 3, -18, 4];

export function getAttributes(player: Player): AttributeSet {
  const seed = hashSeed(player.id);
  const offsets = player.position === "GK" ? gkOffsets : outfieldOffsets[player.position];
  const labels = player.position === "GK" ? gkLabels : outfieldLabels;
  const values = offsets.map((o, i) => clamp(player.overall + o + jitter(seed, i)));
  return { labels, values };
}
