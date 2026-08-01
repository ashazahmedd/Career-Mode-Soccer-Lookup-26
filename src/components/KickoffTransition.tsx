"use client";
import { useEffect, useState } from "react";
import SoccerBallLogo from "@/components/SoccerBallLogo";

interface Props { name: string; onDone: () => void; }

const SPIN_MS = 1000;
const HOLD_MS = 700;
const EXIT_MS = 500;

export default function KickoffTransition({ name, onDone }: Props) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), SPIN_MS + HOLD_MS);
    const t2 = setTimeout(onDone, SPIN_MS + HOLD_MS + EXIT_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4"
      style={{
        background: "radial-gradient(circle at 50% 40%, #0d2b1e 0%, #0a0e14 70%)",
        animation: exiting ? `kickoff-exit ${EXIT_MS}ms ease forwards` : undefined,
      }}
    >
      <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
        <span
          className="absolute rounded-full"
          style={{ width: 140, height: 140, border: "2px solid var(--neon)", animation: "pulse-ring 1.3s ease-out infinite" }}
        />
        <span
          className="absolute rounded-full"
          style={{ width: 140, height: 140, border: "2px solid var(--blue)", animation: "pulse-ring 1.3s ease-out 0.45s infinite" }}
        />
        <div style={{ animation: `kickoff-spin ${SPIN_MS}ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`, filter: "drop-shadow(0 0 18px rgba(0,230,118,0.45))" }}>
          <SoccerBallLogo size={92} />
        </div>
      </div>

      <p
        className="mt-7 text-xl font-extrabold text-center"
        style={{ color: "#ffffff", animation: `fade-in-up 0.6s ease ${SPIN_MS - 300}ms both` }}
      >
        Welcome, <span style={{ color: "var(--neon)" }}>{name}</span>!
      </p>
      <p
        className="mt-1.5 text-sm text-center"
        style={{ color: "var(--text-muted)", animation: `fade-in-up 0.6s ease ${SPIN_MS - 100}ms both` }}
      >
        Setting up your career...
      </p>
    </div>
  );
}
