"use client";
import { useEffect, useState } from "react";
import type { Player } from "@/lib/types";
import { positionColor } from "@/lib/ratings";
import { commonsUrl } from "@/lib/photo";

interface Props { player: Player; size?: number; }

// Uses a real Wikimedia Commons photo when we have one on file (freely
// licensed, attributed in the footer). Falls back to a tinted silhouette
// placeholder if there's no photo, or if the image fails to load.
//
// The src is only assigned client-side after mount (not during the initial
// render) so the onError handler is guaranteed to be attached before the
// browser starts the request — otherwise a fast failure can fire the native
// error event before React hydrates and wires up the handler, leaving a
// permanently broken image with no fallback.
export default function PlayerAvatar({ player, size = 96 }: Props) {
  const color = positionColor(player.position);
  const [src, setSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    setSrc(player.photo ? commonsUrl(player.photo, size * 2) : null);
  }, [player.photo, size]);

  const showPhoto = Boolean(src) && !failed;

  return (
    <div
      className="flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size, borderRadius: size * 0.2, background: `linear-gradient(160deg, ${color}30, ${color}10)`, border: `1.5px solid ${color}40` }}
    >
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src!}
          alt={player.name}
          width={size}
          height={size}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill={color} opacity={0.85}>
          <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
        </svg>
      )}
    </div>
  );
}
