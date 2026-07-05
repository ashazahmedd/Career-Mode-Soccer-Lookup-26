# Career Mode Soccer Lookup 26

A FIFA career mode-style transfer market. Look up real players in the
transfer market, sign them to your squad within a transfer budget, and
compare players head-to-head by price, overall rating, potential, age,
and wages.

Built with Next.js, TypeScript, and Tailwind CSS. All progress (budget, squad,
comparisons) is stored locally in your browser.

## Player data

Player identities (name, club, age, nationality) are real and sourced from
public reporting. Overall, potential, transfer value, and wage are our own
estimates informed by public market-value references (e.g. Transfermarkt) —
not official EA Sports FC ratings. The roster lives in `src/lib/players.ts`
and is refreshed periodically to reflect transfers and current form.
