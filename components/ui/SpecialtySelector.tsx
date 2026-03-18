
"use client";

import React from "react";
import { useSpecialty, type SpecialtyId } from "../../context/SpecialtyContext";

export default function SpecialtySelector() {
  const { specialty, setSpecialty } = useSpecialty();

  const pill = (id: SpecialtyId, label: string) => {
    const active = specialty === id;
    return (
      <button
        type="button"
        onClick={() => setSpecialty(id)}
        style={{
          border: "1px solid rgba(255,255,255,0.18)",
          background: active ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.08)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "999px",
          cursor: "pointer",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}
        aria-pressed={active}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 12px",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.08)",
        height: "fit-content",
      }}
    >
      <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem" }}>
        Specialty:
      </div>
      {pill("oncology", "Oncology")}
      {pill("neurology", "Neurology")}
    </div>
  );
}
