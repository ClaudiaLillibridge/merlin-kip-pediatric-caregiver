import React, { createContext, useContext, useEffect, useState } from "react";

export type CareStage =
  | "newly-diagnosed"
  | "active-treatment"
  | "side-effects"
  | "discharge"
  | null;

type CareContextValue = {
  stage: CareStage;
  setStage: (s: CareStage) => void;
};

const CareContext = createContext<CareContextValue>({
  stage: null,
  setStage: () => {},
});

export function CareProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStageState] = useState<CareStage>(null);

  // Persist so it survives refresh (optional but nice)
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("merlin_care_stage") as CareStage)
        : null;
    if (saved) setStageState(saved);
  }, []);

  const setStage = (s: CareStage) => {
    setStageState(s);
    if (typeof window !== "undefined") {
      if (s) window.localStorage.setItem("merlin_care_stage", s);
      else window.localStorage.removeItem("merlin_care_stage");
    }
  };

  return (
    <CareContext.Provider value={{ stage, setStage }}>
      {children}
    </CareContext.Provider>
  );
}

export function useCareContext() {
  return useContext(CareContext);
}