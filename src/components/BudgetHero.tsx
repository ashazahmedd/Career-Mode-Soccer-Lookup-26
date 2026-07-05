"use client";
import { formatMoney } from "@/lib/format";

interface Props {
  budget: number;
  squadSize: number;
  squadValue: number;
  wageBill: number;
  onReset: () => void;
}

export default function BudgetHero({ budget, squadSize, squadValue, wageBill, onReset }: Props) {
  return (
    <div className="rounded-3xl p-8 mb-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #bbf0d1 0%, #eafcf1 40%, #ffffff 100%)", border: "1.5px solid var(--border)" }}>
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20" style={{ background: "var(--green-strong)" }} />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10" style={{ background: "var(--green-mid)" }} />
      <div className="relative">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--green-dark)" }}>Career Mode</span>
          </div>
          <button onClick={onReset} className="text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80" style={{ background: "#ffffff", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
            Reset Career
          </button>
        </div>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>Transfer Budget Remaining</p>
        <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ color: budget >= 0 ? "var(--text)" : "var(--red)" }}>{formatMoney(budget)}</h1>
        <div className="grid grid-cols-3 gap-4">
          <StatPill label="Squad Size" value={String(squadSize)} />
          <StatPill label="Squad Value" value={formatMoney(squadValue)} />
          <StatPill label="Weekly Wages" value={formatMoney(wageBill)} />
        </div>
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border)" }}>
      <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{label}</p>
      <p className="text-lg font-bold" style={{ color: "var(--text)" }}>{value}</p>
    </div>
  );
}
