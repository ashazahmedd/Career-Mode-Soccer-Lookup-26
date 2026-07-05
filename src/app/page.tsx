"use client";
import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { formatMoney } from "@/lib/format";
import BudgetHero from "@/components/BudgetHero";
import Filters from "@/components/Filters";
import PlayerCard from "@/components/PlayerCard";
import CompareBar from "@/components/CompareBar";
import CompareModal from "@/components/CompareModal";
import type { Player, Position, SortDir, SortKey } from "@/lib/types";

type Tab = "market" | "squad";

export default function Home() {
  const store = useStore();
  const [tab, setTab] = useState<Tab>("market");
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState<Position | "ALL">("ALL");
  const [sortKey, setSortKey] = useState<SortKey>("overall");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [showCompare, setShowCompare] = useState(false);

  const source = tab === "market" ? store.available : store.squad;

  const filtered = useMemo(() => {
    let list = source.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (position !== "ALL") list = list.filter((p) => p.position === position);
    const dir = sortDir === "asc" ? 1 : -1;
    return [...list].sort((a, b) => {
      const av = sortKey === "name" ? a.name : a[sortKey as keyof Player];
      const bv = sortKey === "name" ? b.name : b[sortKey as keyof Player];
      if (typeof av === "string" && typeof bv === "string") return av.localeCompare(bv) * dir;
      return ((av as number) - (bv as number)) * dir;
    });
  }, [source, search, position, sortKey, sortDir]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(242,248,245,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">⚽</span>
          <span className="text-base font-bold tracking-tight" style={{ color: "var(--text)" }}>Career Mode Soccer Lookup 26</span>
        </div>
        <div className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: "var(--surface-2)", color: "var(--green-dark)" }}>
          Budget: {formatMoney(store.budget)}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">
        <BudgetHero
          budget={store.budget}
          squadSize={store.squad.length}
          squadValue={store.squadValue}
          wageBill={store.wageBill}
          onReset={() => { if (confirm("Reset your career? This clears your squad and restores your starting budget.")) store.resetCareer(); }}
        />

        <div className="flex gap-2 mb-6">
          <TabButton label={`Transfer Market (${store.available.length})`} active={tab === "market"} onClick={() => setTab("market")} />
          <TabButton label={`My Squad (${store.squad.length})`} active={tab === "squad"} onClick={() => setTab("squad")} />
        </div>

        <Filters
          search={search}
          onSearch={setSearch}
          position={position}
          onPosition={setPosition}
          sortKey={sortKey}
          onSortKey={setSortKey}
          sortDir={sortDir}
          onToggleDir={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
        />

        <div className="flex flex-col gap-3">
          {filtered.length === 0 && (
            <div className="rounded-2xl p-8 text-center text-sm" style={{ background: "var(--surface-2)", color: "var(--text-muted)", border: "1.5px dashed var(--green-soft)" }}>
              {tab === "squad" ? "No players signed yet — sign players from the Transfer Market." : "No players match your filters."}
            </div>
          )}
          {filtered.map((p) => (
            <PlayerCard
              key={p.id}
              player={p}
              signed={tab === "squad"}
              canAfford={store.budget >= p.value}
              compareChecked={store.compareIds.includes(p.id)}
              compareDisabled={store.compareIds.length >= store.maxCompare}
              onSign={() => store.signPlayer(p.id)}
              onRelease={() => store.releasePlayer(p.id)}
              onToggleCompare={() => store.toggleCompare(p.id)}
            />
          ))}
        </div>

        <p className="text-center text-xs pb-8 pt-8" style={{ color: "var(--text-muted)" }}>
          All progress is stored locally in your browser. Player names and ratings are fictional, for demo purposes only. ⚽
        </p>
      </main>

      <CompareBar
        count={store.compareIds.length}
        max={store.maxCompare}
        onOpen={() => setShowCompare(true)}
        onClear={store.clearCompare}
      />
      {showCompare && store.compareList.length > 0 && (
        <CompareModal players={store.compareList} onClose={() => setShowCompare(false)} onRemove={store.toggleCompare} />
      )}
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-2xl text-sm font-semibold transition-all"
      style={active
        ? { background: "linear-gradient(135deg, var(--green-mid), var(--green-strong))", color: "#ffffff" }
        : { background: "#ffffff", color: "var(--text-muted)", border: "1.5px solid var(--border)" }}
    >
      {label}
    </button>
  );
}
