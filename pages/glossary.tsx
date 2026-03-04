import { useMemo, useState } from "react";
import glossary from "../content/glossary.json";

const CATEGORIES = [
  "All",
  "Labs/Counts",
  "Lines/Procedures",
  "Symptoms/Side Effects",
  "Treatment",
  "General",
];

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const items = (glossary as any).items ?? [];

  const filtered = useMemo(() => {
    const q = query.trim();

    // Whole-word search so "ANC" does NOT match "cancer"
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const wordRegex = q ? new RegExp(`\\b${escaped}\\b`, "i") : null;

    const results = items.filter((item: any) => {
      const itemCategory = item.category || "General";
      const matchesCategory = category === "All" || itemCategory === category;

      if (!wordRegex) return matchesCategory;

      // Search ONLY these fields (NOT source; source contains "cancer")
      const searchable = [item.term, item.plain, item.why_it_matters, itemCategory]
        .filter(Boolean)
        .join(" ");

      return matchesCategory && wordRegex.test(searchable);
    });

    // A–Z sort
    results.sort((a: any, b: any) => String(a.term).localeCompare(String(b.term)));

    return results;
  }, [items, query, category]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div className="pageEnter">
      <div className="container">
        <h1 style={{ marginTop: 10 }}>{(glossary as any).title}</h1>

        <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: 900 }}>
          Plain-language definitions for caregivers. Definitions are adapted from reputable sources
          (e.g., NCI) and contextualized for caregiver use.
        </p>

        {/* Controls */}
        <div
          className="card"
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: 14,
            padding: 14,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms (e.g., ANC, neutropenia, transfusion)…"
            style={{ width: 420, maxWidth: "100%" }}
            aria-label="Search glossary"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button onClick={clearFilters} className="primaryBtn">
            Clear
          </button>

          <div style={{ color: "rgba(255,255,255,0.75)" }}>
            Showing <strong>{filtered.length}</strong> of <strong>{items.length}</strong> terms
          </div>
        </div>

        {/* Results */}
        {filtered.map((item: any) => (
          <section
            key={item.term}
            style={{
              marginTop: 18,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 18,
              padding: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
            }}
          >
            {/* Title row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <h2 style={{ margin: 0, color: "#ffffff", fontWeight: 900 }}>
                {item.term}
              </h2>

              {/* Category pill — NOT white */}
              <span
                style={{
                  fontSize: 12,
                  padding: "6px 12px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, rgba(109,94,249,0.40), rgba(53,208,186,0.40))",
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  fontWeight: 800,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                {item.category || "General"}
              </span>
            </div>

            {/* Body */}
            <p style={{ color: "rgba(255,255,255,0.94)", marginTop: 12 }}>
              <strong>What it means:</strong> {item.plain}
            </p>

            <p style={{ color: "rgba(255,255,255,0.94)" }}>
              <strong>Why it matters:</strong> {item.why_it_matters}
            </p>

            {/* Source — brighter */}
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 13, marginTop: 10 }}>
              <strong>Source:</strong> {item.source}
            </p>
          </section>
        ))}

        {/* No results */}
        {filtered.length === 0 && (
          <div
            className="card"
            style={{
              marginTop: 18,
              padding: 16,
              borderStyle: "dashed",
              color: "rgba(255,255,255,0.86)",
            }}
          >
            No matches. Try another keyword (example: “platelets”, “central line”, “mucositis”).
          </div>
        )}
      </div>
    </div>
  );
}