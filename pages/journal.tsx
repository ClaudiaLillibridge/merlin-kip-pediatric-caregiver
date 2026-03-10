
import PageLayout from "../components/layout/PageLayout";
import { Card } from "../components/ui/Card";

type JournalEntry = {
  id?: string;
  title?: string;
  content?: string;
};

export default function JournalPage() {
  // During Vercel build/prerender there is no runtime data, so default to [].
  const entries: JournalEntry[] = [];

  return (
    <PageLayout title="Journal">
      <Card title="Your Journal" subtitle="A private place to write things down." variant="elevated">
        {entries.length === 0 ? (
          <p style={{ marginTop: 0, opacity: 0.8 }}>
            You don’t have any journal entries yet.
          </p>
        ) : (
          <ul style={{ paddingLeft: 18 }}>
            {entries.map((e, idx) => (
              <li key={e.id ?? String(idx)} style={{ marginBottom: 10 }}>
                <strong>{e.title ?? "Untitled"}</strong>
                <p style={{ marginTop: 4 }}>{e.content ?? ""}</p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </PageLayout>
  );
}
