"use client";
import { useEffect, useRef } from "react";
import type { Player } from "@/lib/types";
import { formatMoney, formatWage } from "@/lib/format";
import { overallColor, positionColor } from "@/lib/ratings";

interface Props {
  players: Player[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

interface Row {
  label: string;
  mode: "max" | "min";
  get: (p: Player) => number;
  format: (p: Player) => string;
}

const rows: Row[] = [
  { label: "Overall", mode: "max", get: (p) => p.overall, format: (p) => String(p.overall) },
  { label: "Potential", mode: "max", get: (p) => p.potential, format: (p) => String(p.potential) },
  { label: "Age", mode: "min", get: (p) => p.age, format: (p) => String(p.age) },
  { label: "Price", mode: "min", get: (p) => p.value, format: (p) => formatMoney(p.value) },
  { label: "Wage", mode: "min", get: (p) => p.wage, format: (p) => formatWage(p.wage) },
];

function bestIndices(values: number[], mode: "max" | "min"): Set<number> {
  const target = mode === "max" ? Math.max(...values) : Math.min(...values);
  const set = new Set<number>();
  values.forEach((v, i) => { if (v === target) set.add(i); });
  return set;
}

export default function CompareModal({ players, onClose, onRemove }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(15,23,42,0.4)", backdropFilter: "blur(4px)" }} onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}>
      <div className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl" style={{ background: "#ffffff", border: "1.5px solid var(--border)" }}>
        <div className="flex items-center justify-between px-6 py-5 sticky top-0" style={{ borderBottom: "1px solid var(--border)", background: "#ffffff" }}>
          <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>Compare Players</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--surface-2)", color: "var(--green-dark)" }}>✕</button>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse min-w-[480px]">
            <thead>
              <tr>
                <th className="text-left text-xs font-semibold pb-3" style={{ color: "var(--text-muted)" }}></th>
                {players.map((p) => (
                  <th key={p.id} className="text-center pb-3 px-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold text-white" style={{ background: overallColor(p.overall) }}>{p.overall}</div>
                      <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{p.name}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${positionColor(p.position)}18`, color: positionColor(p.position) }}>{p.position}</span>
                      <button onClick={() => onRemove(p.id)} className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>remove</button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-xs font-semibold py-2" style={{ color: "var(--text-muted)" }}>Club</td>
                {players.map((p) => <td key={p.id} className="text-center text-sm py-2" style={{ color: "var(--text)" }}>{p.club}</td>)}
              </tr>
              <tr>
                <td className="text-xs font-semibold py-2" style={{ color: "var(--text-muted)" }}>Nationality</td>
                {players.map((p) => <td key={p.id} className="text-center text-sm py-2" style={{ color: "var(--text)" }}>{p.nationality}</td>)}
              </tr>
              {rows.map((row) => {
                const values = players.map(row.get);
                const best = bestIndices(values, row.mode);
                return (
                  <tr key={row.label} style={{ borderTop: "1px solid var(--border)" }}>
                    <td className="text-xs font-semibold py-3" style={{ color: "var(--text-muted)" }}>{row.label}</td>
                    {players.map((p, i) => (
                      <td key={p.id} className="text-center py-3">
                        <span
                          className="inline-block px-3 py-1 rounded-xl text-sm font-bold"
                          style={best.has(i) && players.length > 1 ? { background: "var(--surface-2)", color: "var(--green-dark)" } : { color: "var(--text)" }}
                        >
                          {row.format(p)}
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>Highlighted cells mark the best value in each row (highest for Overall/Potential, lowest for Age/Price/Wage).</p>
        </div>
      </div>
    </div>
  );
}
