"use client";
import type { Player } from "@/lib/types";
import { positionColor } from "@/lib/ratings";

interface Props { player: Player; size?: number; }

// No real photos are available for these fictional players, so we render a
// stylized placeholder silhouette tinted by position instead.
export default function PlayerAvatar({ player, size = 96 }: Props) {
  const color = positionColor(player.position);
  return (
    <div
      className="flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size, borderRadius: size * 0.2, background: `linear-gradient(160deg, ${color}30, ${color}10)`, border: `1.5px solid ${color}40` }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill={color} opacity={0.85}>
        <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
      </svg>
    </div>
  );
}
