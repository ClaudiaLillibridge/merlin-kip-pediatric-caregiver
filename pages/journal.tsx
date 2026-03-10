
import { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Card } from "../components/ui/Card";

type JournalEntry = {
  id: string;
  text: string;
  tag: "question" | "note";
  createdAt: string;
};

export default function JournalPage() {
  const [entryText, setEntryText] = useState("");
  const [entryTag, setEntryTag] = useState<"question" | "note">("question");
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Load saved entries
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("merlin_journal_entries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Persist entries
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("merlin_journal_entries", JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (!entryText.trim()) return;

    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      text: entryText.trim(),
      tag: entryTag,
      createdAt: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setEntryText("");
    setEntryTag("question");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageLayout title="Journal">
      <Card
        title="Your Journal"
        subtitle="Write down questions for your care team or personal notes."
        variant="elevated"
      >
        {/* Tag selector */}
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontWeight: 600, marginRight: 12 }}>
            Entry type:
          </label>
          <select
            value={entryTag}
            onChange={(e) => setEntryTag(e.target.value as "question" | "note")}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              background: "rgba(0,0,0,0.2)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <option value="question">Question for care team</option>
            <option value="note">Personal note</option>
          </select>
        </div>

        {/* Text area */}
        <textarea
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Write here…"
          rows={5}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(0,0,0,0.15)",
            color: "white",
            marginBottom: "12px",
            resize: "vertical",
          }}
        />

        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={handleSave}
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: "none",
              background: "#6c7cff",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Save entry
          </button>

          {entries.length > 0 && (
            <button
              onClick={handlePrint}
              style={{
                padding: "10px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Print / Export
            </button>
          )}
        </div>
      </Card>

      <Card title="Saved entries" subtitle="Only visible on this device.">
        {entries.length === 0 ? (
          <p style={{ opacity: 0.7, marginTop: 0 }}>
            You don’t have any journal entries yet.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {entries.map((entry) => (
              <li
                key={entry.id}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.6,
                    marginBottom: 6,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    {entry.tag === "question"
                      ? "Question for care team"
                      : "Personal note"}
                  </span>
                  <span>{entry.createdAt}</span>
                </div>
                <div>{entry.text}</div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </PageLayout>
  );
}
