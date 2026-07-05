"use client";
import type { Player } from "@/lib/types";
import { formatMoney, formatWage } from "@/lib/format";
import { getAttributes, overallColor, positionColor } from "@/lib/ratings";
import PlayerAvatar from "@/components/PlayerAvatar";

interface Props {
  player: Player;
  signed: boolean;
  canAfford: boolean;
  compareChecked: boolean;
  compareDisabled: boolean;
  onSign: () => void;
  onRelease: () => void;
  onToggleCompare: () => void;
}

export default function PlayerCard({ player, signed, canAfford, compareChecked, compareDisabled, onSign, onRelease, onToggleCompare }: Props) {
  const { labels, values } = getAttributes(player);

  return (
    <div className="rounded-2xl p-5 flex gap-5 transition-all hover:shadow-md" style={{ background: "#ffffff", border: "1.5px solid var(--border)" }}>
      {/* Left: identity, price, meta, actions */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
            style={{ background: overallColor(player.overall) }}
            title="Overall rating"
          >
            {player.overall}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate" style={{ color: "var(--text)" }}>{player.name}</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>POT {player.potential}</p>
          </div>
        </div>

        <p className="text-xl font-bold" style={{ color: "var(--text)" }}>{formatMoney(player.value)}</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${positionColor(player.position)}18`, color: positionColor(player.position) }}>
            {player.position}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{player.club}</span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>· {player.nationality}</span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>· Age {player.age}</span>
        </div>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{formatWage(player.wage)}</p>

        <div className="flex items-center gap-3 mt-auto pt-1">
          <label className="flex items-center gap-1.5 cursor-pointer text-xs" style={{ color: "var(--text-muted)" }}>
            <input
              type="checkbox"
              checked={compareChecked}
              disabled={!compareChecked && compareDisabled}
              onChange={onToggleCompare}
              className="w-4 h-4 accent-emerald-500 rounded"
            />
            Compare
          </label>
          {signed ? (
            <button onClick={onRelease} className="px-3.5 py-1.5 rounded-xl text-xs font-semibold" style={{ background: "#fff5f5", color: "var(--red)" }}>
              Release
            </button>
          ) : (
            <button
              onClick={onSign}
              disabled={!canAfford}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, var(--green-mid), var(--green-strong))" }}
              title={canAfford ? "Sign this player" : "Not enough budget"}
            >
              Sign
            </button>
          )}
        </div>
      </div>

      {/* Right: photo + attributes */}
      <div className="flex flex-col items-center gap-3 flex-shrink-0" style={{ width: 116 }}>
        <PlayerAvatar player={player} size={96} />
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 w-full">
          {labels.map((label, i) => (
            <div key={label} className="flex items-center justify-between gap-1">
              <span className="text-[10px] font-semibold tracking-wide" style={{ color: "var(--text-muted)" }}>{label}</span>
              <span className="text-xs font-bold" style={{ color: overallColor(values[i]) }}>{values[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
