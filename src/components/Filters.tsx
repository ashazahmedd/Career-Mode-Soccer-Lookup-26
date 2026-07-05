"use client";
import { POSITIONS } from "@/lib/ratings";
import type { Position, SortDir, SortKey } from "@/lib/types";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  position: Position | "ALL";
  onPosition: (v: Position | "ALL") => void;
  sortKey: SortKey;
  onSortKey: (v: SortKey) => void;
  sortDir: SortDir;
  onToggleDir: () => void;
}

const sortLabels: Record<SortKey, string> = {
  overall: "Overall",
  potential: "Potential",
  value: "Price",
  age: "Age",
  name: "Name",
};

export default function Filters({ search, onSearch, position, onPosition, sortKey, onSortKey, sortDir, onToggleDir }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search player name..."
        className="flex-1 px-4 py-2.5 rounded-2xl text-sm outline-none"
        style={{ background: "#ffffff", border: "1.5px solid var(--border)", color: "var(--text)" }}
      />
      <select
        value={position}
        onChange={(e) => onPosition(e.target.value as Position | "ALL")}
        className="px-4 py-2.5 rounded-2xl text-sm outline-none cursor-pointer"
        style={{ background: "#ffffff", border: "1.5px solid var(--border)", color: "var(--text)" }}
      >
        <option value="ALL">All Positions</option>
        {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>
      <div className="flex gap-2">
        <select
          value={sortKey}
          onChange={(e) => onSortKey(e.target.value as SortKey)}
          className="px-4 py-2.5 rounded-2xl text-sm outline-none cursor-pointer"
          style={{ background: "#ffffff", border: "1.5px solid var(--border)", color: "var(--text)" }}
        >
          {Object.entries(sortLabels).map(([k, label]) => <option key={k} value={k}>Sort: {label}</option>)}
        </select>
        <button
          onClick={onToggleDir}
          className="px-3.5 py-2.5 rounded-2xl text-sm font-semibold"
          style={{ background: "var(--surface-2)", color: "var(--green-dark)", border: "1.5px solid var(--border)" }}
          title={sortDir === "asc" ? "Ascending" : "Descending"}
        >
          {sortDir === "asc" ? "↑" : "↓"}
        </button>
      </div>
    </div>
  );
}
