"use client";

interface Props {
  count: number;
  max: number;
  onOpen: () => void;
  onClear: () => void;
}

export default function CompareBar({ count, max, onOpen, onClear }: Props) {
  if (count === 0) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl" style={{ background: "var(--bg-elevated)", color: "#ffffff", border: "1px solid var(--green-soft)", boxShadow: "0 0 24px rgba(0,230,118,0.25)" }}>
      <span className="text-sm font-semibold">{count} of {max} selected</span>
      <button onClick={onOpen} disabled={count < 2} className="px-4 py-1.5 rounded-xl text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed" style={{ background: "linear-gradient(135deg, var(--neon), var(--green-strong))", color: "#04150c" }}>
        Compare
      </button>
      <button onClick={onClear} className="px-3 py-1.5 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff" }}>
        Clear
      </button>
    </div>
  );
}
