"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type Specialty = "oncology" | "neurology";

export type SpecialtyContextValue = {
  specialty: Specialty;
  setSpecialty: React.Dispatch<React.SetStateAction<Specialty>>;
};

const SpecialtyContext = createContext<SpecialtyContextValue | undefined>(
  undefined
);

export function SpecialtyProvider({ children }: { children: React.ReactNode }) {
  const [specialty, setSpecialty] = useState<Specialty>("oncology");

  const value = useMemo(
    () => ({ specialty, setSpecialty }),
    [specialty]
  );

  return (
    <SpecialtyContext.Provider value={value}>
      {children}
    </SpecialtyContext.Provider>
  );
}

export function useSpecialty(): SpecialtyContextValue {
  const ctx = useContext(SpecialtyContext);
  if (!ctx) {
    throw new Error("useSpecialty must be used within SpecialtyProvider");
  }
  return ctx;
}