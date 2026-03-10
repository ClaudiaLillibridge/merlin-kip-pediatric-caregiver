
import { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Card } from "../components/ui/Card";

type JournalEntry = {
  id: string;
  text: string;
  createdAt: string;
};

export default function JournalPage() {
  const [entryText, setEntryText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Load saved entries from localStorage on first render
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("merlin_journal_entries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("merlin_journal_entries", JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (!entryText.trim()) return;

    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      text: entryText.trim(),
      createdAt: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setEntryText("");
  };

  return (
    <PageLayout title="Journal">
      <Card
        title="Your Journal"
        subtitle="A private place to write down questions, thoughts, or reminders."
        variant="elevated"
      >
        <textarea
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Write a question you want to ask the care team, a note from today, or anything you don’t want to forget…"
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
      </Card>

      <Card
        title="Saved entries"
        subtitle="Only visible on this device."
      >
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
                <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 6 }}>
                  {entry.createdAt}
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
