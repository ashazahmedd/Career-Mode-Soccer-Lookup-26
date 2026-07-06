"use client";
import { formatMoney } from "@/lib/format";

interface Props {
  budget: number;
  squadSize: number;
  squadValue: number;
  wageBill: number;
  teamOverall: number;
  onReset: () => void;
}

export default function BudgetHero({ budget, squadSize, squadValue, wageBill, teamOverall, onReset }: Props) {
  return (
    <div className="rounded-3xl p-8 mb-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2b1e 0%, #0a1a14 45%, #0a0e14 100%)", border: "1.5px solid var(--green-soft)" }}>
      <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-25 blur-2xl" style={{ background: "var(--neon)" }} />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-15 blur-2xl" style={{ background: "var(--blue)" }} />
      <div className="relative">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "var(--neon)" }}>Career Mode</span>
          </div>
          <button onClick={onReset} className="text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80" style={{ background: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
            Reset Career
          </button>
        </div>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>Transfer Budget Remaining</p>
        <h1 className="text-5xl font-extrabold tracking-tight mb-6" style={{ color: budget >= 0 ? "#ffffff" : "var(--red)", textShadow: budget >= 0 ? "0 0 24px rgba(0,230,118,0.35)" : "none" }}>{formatMoney(budget)}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatPill label="Squad Size" value={String(squadSize)} />
          <StatPill label="Team Overall" value={teamOverall > 0 ? String(teamOverall) : "—"} />
          <StatPill label="Squad Value" value={formatMoney(squadValue)} />
          <StatPill label="Weekly Wages" value={formatMoney(wageBill)} />
        </div>
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)" }}>
      <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{label}</p>
      <p className="text-lg font-bold" style={{ color: "#ffffff" }}>{value}</p>
    </div>
  );
}
