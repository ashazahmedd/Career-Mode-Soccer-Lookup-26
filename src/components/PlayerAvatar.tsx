"use client";
import type { Player } from "@/lib/types";
import { getInitials, positionColor } from "@/lib/ratings";

interface Props { player: Player; size?: number; }

// A small generated "logo" for each player — initials on a gradient badge
// tinted by position, with a star accent for elite (90+ overall) players.
// Avoids depending on any external photo source entirely.
export default function PlayerAvatar({ player, size = 96 }: Props) {
  const color = positionColor(player.position);
  const initials = getInitials(player.name);
  const elite = player.overall >= 90;

  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: `linear-gradient(155deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.25) 100%), ${color}`,
        border: `1.5px solid ${color}80`,
        boxShadow: `0 0 ${size * 0.15}px ${color}40`,
      }}
      title={player.name}
    >
      <span
        style={{
          fontSize: size * 0.32,
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          textShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }}
      >
        {initials}
      </span>
      {elite && (
        <span className="absolute" style={{ top: size * 0.06, right: size * 0.08, fontSize: size * 0.16 }}>
          ⭐
        </span>
      )}
    </div>
  );
}
