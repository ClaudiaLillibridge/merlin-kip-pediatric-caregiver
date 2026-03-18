"use client";

import React from "react";
import { useSpecialty, type Specialty } from "../../context/SpecialtyContext";

type Props = {
  showDescription?: boolean;
};

export default function SpecialtySelector({ showDescription = true }: Props) {
  const { specialty, setSpecialty } = useSpecialty();

  const buttonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: "10px 14px",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.30)",
    background: isActive ? "#1e40af" : "transparent",
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
  });

  const set = (s: Specialty) => setSpecialty(s);

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button
          type="button"
          onClick={() => set("oncology")}
          style={buttonStyle(specialty === "oncology")}
        >
          Oncology
        </button>

        <button
          type="button"
          onClick={() => set("neurology")}
          style={buttonStyle(specialty === "neurology")}
        >
          Neurology
        </button>
      </div>

      {showDescription && (
        <div style={{ marginTop: 10, opacity: 0.85 }}>
          Current focus:{" "}
          <strong>
            {specialty === "oncology" ? "Pediatric Oncology" : "Pediatric Neurology"}
          </strong>
        </div>
      )}
    </div>
  );
}