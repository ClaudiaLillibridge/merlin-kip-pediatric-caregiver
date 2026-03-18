
"use client";

import React from "react";

export type SpecialtyId = "oncology" | "neurology";

type SpecialtyContextValue = {
  specialty: SpecialtyId;
  setSpecialty: (s: SpecialtyId) => void;
};

const SpecialtyContext = React.createContext<SpecialtyContextValue | null>(null);

const STORAGE_KEY = "merlin.specialty.v1";

export function SpecialtyProvider({ children }: { children: React.ReactNode }) {
  const [specialty, setSpecialtyState] = React.useState<SpecialtyId>("oncology");

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as SpecialtyId | null;
      if (saved === "oncology" || saved === "neurology") setSpecialtyState(saved);
    } catch {}
  }, []);

  const setSpecialty = (s: SpecialtyId) => {
    setSpecialtyState(s);
    try {
      window.localStorage.setItem(STORAGE_KEY, s);
    } catch {}
  };

  return (
    <SpecialtyContext.Provider value={{ specialty, setSpecialty }}>
      {children}
    </SpecialtyContext.Provider>
  );
}

export function useSpecialty() {
  const ctx = React.useContext(SpecialtyContext);
  if (!ctx) throw new Error("useSpecialty must be used within SpecialtyProvider");
  return ctx;
}
``
