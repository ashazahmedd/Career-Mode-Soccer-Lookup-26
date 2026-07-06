"use client";
import type { Player, Position } from "@/lib/types";
import PlayerAvatar from "@/components/PlayerAvatar";

interface Slot {
  key: string;
  label: string;
  x: number;
  y: number;
  positions: Position[];
}

// 4-3-3, laid out with the goalkeeper near the bottom and attackers near the
// top. x/y are percentages within the pitch.
const SLOTS: Slot[] = [
  { key: "gk", label: "GK", x: 50, y: 90, positions: ["GK"] },
  { key: "lb", label: "LB", x: 14, y: 72, positions: ["LB", "CB"] },
  { key: "cb1", label: "CB", x: 37, y: 77, positions: ["CB"] },
  { key: "cb2", label: "CB", x: 63, y: 77, positions: ["CB"] },
  { key: "rb", label: "RB", x: 86, y: 72, positions: ["RB", "CB"] },
  { key: "cm1", label: "CM", x: 24, y: 50, positions: ["CDM", "CM"] },
  { key: "cm2", label: "CM", x: 50, y: 43, positions: ["CM", "CDM", "CAM"] },
  { key: "cm3", label: "CM", x: 76, y: 50, positions: ["CM", "CAM"] },
  { key: "lw", label: "LW", x: 14, y: 16, positions: ["LW", "LM"] },
  { key: "st", label: "ST", x: 50, y: 8, positions: ["ST"] },
  { key: "rw", label: "RW", x: 86, y: 16, positions: ["RW", "RM"] },
];

// Passing-lane links between formation slots, used to draw chemistry lines.
const LINKS: [string, string][] = [
  ["gk", "cb1"], ["gk", "cb2"], ["cb1", "cb2"], ["cb1", "lb"], ["cb2", "rb"],
  ["lb", "cm1"], ["rb", "cm3"], ["cm1", "cm2"], ["cm2", "cm3"],
  ["cm1", "lw"], ["cm3", "rw"], ["cm2", "st"], ["lw", "st"], ["rw", "st"],
];

const GREEN = "#22c55e";
const YELLOW = "#eab308";
const RED = "#ef4444";

function assignFormation(squad: Player[]) {
  const used = new Set<string>();
  const assigned: Record<string, Player | null> = {};
  for (const slot of SLOTS) {
    let pick: Player | null = null;
    for (const pos of slot.positions) {
      const candidates = squad
        .filter((p) => p.position === pos && !used.has(p.id))
        .sort((a, b) => b.overall - a.overall);
      if (candidates.length > 0) { pick = candidates[0]; break; }
    }
    if (pick) used.add(pick.id);
    assigned[slot.key] = pick;
  }
  const benchCount = squad.length - used.size;
  return { assigned, benchCount };
}

function linkColor(a: Player, b: Player): string {
  const sameClub = a.club === b.club;
  const sameNation = a.nationality === b.nationality;
  if (sameClub && sameNation) return GREEN;
  if (sameClub || sameNation) return YELLOW;
  return RED;
}

interface Props { squad: Player[]; }

export default function FormationPitch({ squad }: Props) {
  const { assigned, benchCount } = assignFormation(squad);
  const slotByKey = Object.fromEntries(SLOTS.map((s) => [s.key, s]));
  const validLinks = LINKS.filter(([a, b]) => assigned[a] && assigned[b]);
  const score = validLinks.reduce((sum, [a, b]) => sum + (linkColor(assigned[a]!, assigned[b]!) === GREEN ? 2 : linkColor(assigned[a]!, assigned[b]!) === YELLOW ? 1 : 0), 0);
  const maxScore = validLinks.length * 2;

  return (
    <div className="rounded-3xl p-6 mb-6" style={{ background: "linear-gradient(180deg, #0d2b1e, #0a1a14)", border: "1.5px solid var(--green-soft)" }}>
      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "#ffffff" }}>⚡ Team Chemistry</h2>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>4-3-3 · auto-filled from your best-fit signed players</p>
        </div>
        {maxScore > 0 && (
          <div className="text-right">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Chemistry Score</p>
            <p className="text-lg font-bold" style={{ color: score / maxScore > 0.66 ? GREEN : score / maxScore > 0.33 ? YELLOW : RED }}>{score}/{maxScore}</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mb-4 flex-wrap text-xs">
        <LegendDot color={GREEN} label="Same club & country" />
        <LegendDot color={YELLOW} label="Same club or country" />
        <LegendDot color={RED} label="Neither" />
      </div>

      <div
        className="relative w-full mx-auto"
        style={{ maxWidth: 480, aspectRatio: "5 / 7", background: "linear-gradient(180deg, #1a5c3a, #16512f)", borderRadius: 16, border: "2px solid rgba(255,255,255,0.25)", overflow: "hidden" }}
      >
        <div className="absolute left-0 right-0" style={{ top: "50%", height: 1, background: "rgba(255,255,255,0.25)" }} />
        <div className="absolute rounded-full" style={{ left: "50%", top: "50%", width: "26%", aspectRatio: "1 / 1", transform: "translate(-50%,-50%)", border: "1px solid rgba(255,255,255,0.25)" }} />
        <div className="absolute" style={{ left: "20%", right: "20%", top: 0, height: "12%", border: "1px solid rgba(255,255,255,0.25)", borderTop: "none" }} />
        <div className="absolute" style={{ left: "20%", right: "20%", bottom: 0, height: "12%", border: "1px solid rgba(255,255,255,0.25)", borderBottom: "none" }} />

        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
          {validLinks.map(([a, b]) => {
            const sa = slotByKey[a];
            const sb = slotByKey[b];
            return (
              <line
                key={`${a}-${b}`}
                x1={`${sa.x}%`} y1={`${sa.y}%`}
                x2={`${sb.x}%`} y2={`${sb.y}%`}
                stroke={linkColor(assigned[a]!, assigned[b]!)}
                strokeWidth={2.5}
                strokeOpacity={0.85}
              />
            );
          })}
        </svg>

        {SLOTS.map((slot) => {
          const player = assigned[slot.key];
          return (
            <div key={slot.key} className="absolute flex flex-col items-center" style={{ left: `${slot.x}%`, top: `${slot.y}%`, transform: "translate(-50%, -50%)" }}>
              {player ? (
                <>
                  <PlayerAvatar player={player} size={40} />
                  <span
                    className="text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(0,0,0,0.6)", color: "#ffffff", maxWidth: 72, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                    title={player.name}
                  >
                    {player.name.split(" ").slice(-1)[0]}
                  </span>
                </>
              ) : (
                <div
                  className="rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ width: 40, height: 40, background: "rgba(255,255,255,0.08)", border: "1.5px dashed rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.55)" }}
                >
                  {slot.label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {benchCount > 0 && (
        <p className="text-xs mt-4 text-center" style={{ color: "var(--text-muted)" }}>
          {benchCount} more player{benchCount !== 1 ? "s" : ""} on the bench — see the full squad list below.
        </p>
      )}
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0" style={{ background: color }} />
      <span style={{ color: "var(--text-muted)" }}>{label}</span>
    </div>
  );
}
