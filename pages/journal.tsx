
import PageLayout from "../components/layout/PageLayout";
import { Card } from "../components/ui/Card";

type JournalEntry = {
  id: string;
  title: string;
  content: string;
};

type JournalPageProps = {
  entries?: JournalEntry[];
};

export default function JournalPage({ entries = [] }: JournalPageProps) {
  return (
    <PageLayout title="Journal">
      <Card
        title="Your Journal"
        subtitle="A private place to write things down as they come."
        variant="elevated"
      >
        {entries.length === 0 ? (
          <p style={{ opacity: 0.7 }}>
            You don’t have any journal entries yet.
          </p>
        ) : (
          <ul style={{ paddingLeft: 18 }}>
            {entries.map((entry) => (
              <li key={entry.id} style={{ marginBottom: 8 }}>
                <strong>{entry.title}</strong>
                <p style={{ marginTop: 4 }}>{entry.content}</p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </PageLayout>
  );
}
