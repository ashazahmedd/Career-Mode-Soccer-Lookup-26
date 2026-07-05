"use client";
import { useState, useCallback, useMemo } from "react";
import { PLAYERS } from "./players";
import type { Player } from "./types";

const BUDGET_KEY = "fifacareer_budget";
const SQUAD_KEY = "fifacareer_squad_ids";
const COMPARE_KEY = "fifacareer_compare_ids";

const STARTING_BUDGET = 200_000_000;
const MAX_COMPARE = 4;
const SELL_ON_RATE = 0.7; // selling a player recoups 70% of their value

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, value: T) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function useStore() {
  const [budget, setBudget] = useState<number>(() => loadFromStorage(BUDGET_KEY, STARTING_BUDGET));
  const [squadIds, setSquadIds] = useState<string[]>(() => loadFromStorage<string[]>(SQUAD_KEY, []));
  const [compareIds, setCompareIds] = useState<string[]>(() => loadFromStorage<string[]>(COMPARE_KEY, []));

  const playersById = useMemo(() => {
    const map = new Map<string, Player>();
    for (const p of PLAYERS) map.set(p.id, p);
    return map;
  }, []);

  const signPlayer = useCallback((id: string) => {
    const player = playersById.get(id);
    if (!player) return;
    setBudget((prevBudget) => {
      if (prevBudget < player.value) return prevBudget;
      saveToStorage(BUDGET_KEY, prevBudget - player.value);
      return prevBudget - player.value;
    });
    setSquadIds((prev) => {
      if (prev.includes(id)) return prev;
      const player2 = playersById.get(id);
      if (!player2) return prev;
      const next = [...prev, id];
      saveToStorage(SQUAD_KEY, next);
      return next;
    });
  }, [playersById]);

  const releasePlayer = useCallback((id: string) => {
    const player = playersById.get(id);
    if (!player) return;
    setSquadIds((prev) => {
      const next = prev.filter((pid) => pid !== id);
      saveToStorage(SQUAD_KEY, next);
      return next;
    });
    setBudget((prevBudget) => {
      const refund = Math.round(player.value * SELL_ON_RATE);
      const next = prevBudget + refund;
      saveToStorage(BUDGET_KEY, next);
      return next;
    });
    setCompareIds((prev) => {
      const next = prev.filter((pid) => pid !== id);
      saveToStorage(COMPARE_KEY, next);
      return next;
    });
  }, [playersById]);

  const toggleCompare = useCallback((id: string) => {
    setCompareIds((prev) => {
      let next: string[];
      if (prev.includes(id)) next = prev.filter((pid) => pid !== id);
      else if (prev.length >= MAX_COMPARE) next = prev;
      else next = [...prev, id];
      saveToStorage(COMPARE_KEY, next);
      return next;
    });
  }, []);

  const clearCompare = useCallback(() => {
    setCompareIds([]);
    saveToStorage(COMPARE_KEY, []);
  }, []);

  const resetCareer = useCallback(() => {
    setBudget(STARTING_BUDGET);
    setSquadIds([]);
    setCompareIds([]);
    saveToStorage(BUDGET_KEY, STARTING_BUDGET);
    saveToStorage(SQUAD_KEY, []);
    saveToStorage(COMPARE_KEY, []);
  }, []);

  const squad = useMemo(() => squadIds.map((id) => playersById.get(id)).filter((p): p is Player => Boolean(p)), [squadIds, playersById]);
  const available = useMemo(() => PLAYERS.filter((p) => !squadIds.includes(p.id)), [squadIds]);
  const compareList = useMemo(() => compareIds.map((id) => playersById.get(id)).filter((p): p is Player => Boolean(p)), [compareIds, playersById]);

  const squadValue = squad.reduce((sum, p) => sum + p.value, 0);
  const wageBill = squad.reduce((sum, p) => sum + p.wage, 0);

  return {
    budget,
    squad,
    available,
    squadIds,
    compareIds,
    compareList,
    squadValue,
    wageBill,
    maxCompare: MAX_COMPARE,
    signPlayer,
    releasePlayer,
    toggleCompare,
    clearCompare,
    resetCareer,
  };
}
