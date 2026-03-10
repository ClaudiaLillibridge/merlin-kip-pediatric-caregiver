
import PageLayout from "../components/layout/PageLayout";
import { Card } from "../components/ui/Card";

export default function JournalPage() {
  const entries: any[] = [];

  return (
    <PageLayout title="Journal">
      <Card title="Journal">
        {entries.length === 0 ? (
          <p>No journal entries yet.</p>
        ) : (
          <ul>
            {entries.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        )}
      </Card>
    </PageLayout>
  );
}
