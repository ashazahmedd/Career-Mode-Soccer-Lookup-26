interface Props { size?: number; className?: string; }

// A generic soccer-ball glyph (circle + pentagon + seam lines) — not tracing
// any specific brand mark, just the familiar geometric ball shape.
export default function SoccerBallLogo({ size = 40, className }: Props) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#141b24" strokeWidth="3" />
      <polygon points="50,33 62,42 57,57 43,57 38,42" fill="#141b24" />
      <path d="M50 33 L50 11" stroke="#141b24" strokeWidth="4" strokeLinecap="round" />
      <path d="M62 42 L83 29" stroke="#141b24" strokeWidth="4" strokeLinecap="round" />
      <path d="M57 57 L70 80" stroke="#141b24" strokeWidth="4" strokeLinecap="round" />
      <path d="M43 57 L30 80" stroke="#141b24" strokeWidth="4" strokeLinecap="round" />
      <path d="M38 42 L17 29" stroke="#141b24" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 11 A39 39 0 0 1 83 29" fill="none" stroke="#141b24" strokeWidth="2.5" opacity="0.55" />
      <path d="M83 29 A39 39 0 0 1 70 80" fill="none" stroke="#141b24" strokeWidth="2.5" opacity="0.55" />
      <path d="M70 80 A39 39 0 0 1 30 80" fill="none" stroke="#141b24" strokeWidth="2.5" opacity="0.55" />
      <path d="M30 80 A39 39 0 0 1 17 29" fill="none" stroke="#141b24" strokeWidth="2.5" opacity="0.55" />
      <path d="M17 29 A39 39 0 0 1 50 11" fill="none" stroke="#141b24" strokeWidth="2.5" opacity="0.55" />
    </svg>
  );
}
