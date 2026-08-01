"use client";
import { useState } from "react";
import SoccerBallLogo from "@/components/SoccerBallLogo";

interface Props { onSubmit: (name: string) => void; }

export default function WelcomeScreen({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const trimmed = name.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!trimmed) return;
    onSubmit(trimmed);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "radial-gradient(circle at 50% 15%, #0d2b1e 0%, #0a0e14 65%)" }}>
      <div className="w-full max-w-md rounded-3xl p-8 relative overflow-hidden text-center" style={{ background: "var(--surface)", border: "1.5px solid var(--green-soft)" }}>
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 blur-2xl" style={{ background: "var(--neon)" }} />
        <div className="absolute -bottom-14 -left-14 w-40 h-40 rounded-full opacity-15 blur-2xl" style={{ background: "var(--blue)" }} />

        <div className="relative">
          <div className="flex justify-center mb-3" style={{ animation: "fade-in-up 0.6s ease both" }}>
            <SoccerBallLogo size={72} />
          </div>
          <h1 className="text-2xl font-extrabold mb-2 leading-tight" style={{ color: "#ffffff" }}>
            Career Mode <span style={{ color: "var(--green-dark)" }}>Soccer Lookup 26</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Build your dream squad. Sign real players, manage your transfer budget, and build team chemistry.
          </p>

          <form onSubmit={handleSubmit} className="text-left">
            <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)" }}>
              Manager Name
            </label>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-2xl text-sm outline-none mb-5"
              style={{ background: "var(--surface-2)", border: "1.5px solid var(--border)", color: "var(--text)" }}
            />
            <button
              type="submit"
              disabled={!trimmed}
              className="w-full py-3 rounded-2xl text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, var(--neon), var(--green-strong))",
                color: "#04150c",
                boxShadow: trimmed ? "0 0 18px rgba(0,230,118,0.35)" : "none",
              }}
            >
              Enter Career Mode
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
