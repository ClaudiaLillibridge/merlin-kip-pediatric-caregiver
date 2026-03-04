
import Link from "next/link";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../components/ui/Card";

export default function LearnPage() {
  return (
    <PageLayout title="Learn">
      <CardGrid cols={2}>
        <Card
          title="What to expect this week"
          subtitle="Plain-language overview for active treatment."
          tone="info"
        >
          <CardBullets
            items={[
              "What the care team may focus on this week",
              "Common side effects you may notice",
              "When to call versus when to wait",
            ]}
          />
        </Card>

        <Card
          title="Common terms"
          subtitle="Quick definitions without the overwhelm."
          right={
            <Link href="/glossary" className="mk-pill">
              Open glossary
            </Link>
          }
        >
          <CardBullets items={["Port", "CBC", "ANC", "Neutropenia"]} />
        </Card>
      </CardGrid>

      <Card variant="elevated">
        <p style={{ marginTop: 0 }}>
          You do not need to learn everything at once. Start with what matters today.
        </p>
      </Card>
    </PageLayout>
  );
}
