
import { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardGrid } from "../components/ui/Card";

const STORAGE_KEY = "merlin_kip_caregiver_journal";

export default function JournalPage() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  // Load saved journal on first render
  useEffect(() => {
    const savedText = window.localStorage.getItem(STORAGE_KEY);
    if (savedText) setText(savedText);
  }, []);

  // Auto-save when text changes
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, text);

    if (!text.trim()) return;

    setSaved(true);
    const timer = setTimeout(() => setSaved(false), 1500);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <PageLayout title="Journal" maxWidth={900}>
      <CardGrid cols={1}>
        <Card title="Your private journal" subtitle="Saved only on this device.">
          <p style={{ marginTop: 0 }}>
            Use this space to write questions, thoughts, or reminders for your child’s care team.
          </p>
        </Card>

        <Card
          title="Today’s entry"
          subtitle="Short is enough. Write what you want to remember."
          variant="elevated"
        >
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Example: Ask about ANC results from last visit…"
            rows={10}
            style={{
              width: "100%",
              padding: 12,
              fontSize: 16,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(0,0,0,0.2)",
              color: "white",
              resize: "vertical",
            }}
            aria-label="Caregiver journal"
          />

          {saved && (
            <div style={{ marginTop: 10, color: "#9be8b3" }}>
              ✓ Saved
            </div>
          )}
        </Card>

        <Card tone="info">
          <strong>Tip:</strong> Bring this page to appointments as your question list.
        </Card>
      </CardGrid>
    </PageLayout>
  );
}
