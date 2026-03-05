import pediatricOncologyDiseases from "../content/pediatricOncologyDiseases";
import Link from "next/link";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../components/ui/Card";

export default function LearnPage() {
  return (
    <PageLayout title="Learn">
      {/* Top-level Learn cards */}
      <CardGrid cols={3}>
        <Card
          title="Browse by Diagnosis (A–Z)"
          subtitle="Easy-to-understand overviews of pediatric cancer diagnoses."
          right={
            <Link href="/learn/neuroblastoma" className="mk-pill">
              Open library
            </Link>
          }
        >
          <p style={{ marginTop: 0 }}>
            Start with your child’s diagnosis. You can explore one topic at a time.
          </p>

          <div style={{ fontWeight: 600, marginBottom: 6 }}>Featured</div>
          <ul style={{ paddingLeft: 18 }}>
            <li>
              <Link href="/learn/neuroblastoma">Neuroblastoma</Link>
            </li>
          </ul>

          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
            Educational only. Always ask your care team what applies to your child.
          </p>
        </Card>

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

      {/* Clean A–Z diagnoses list */}
      <Card
        title="Pediatric oncology diagnoses (A–Z)"
        subtitle="Quick reference list. Detailed pages will expand over time."
      >
        <div style={{ maxHeight: 280, overflow: "auto", paddingRight: 8 }}>
          <ul
            style={{
              columns: 2,
              columnGap: 32,
              margin: 0,
              paddingLeft: 18,
            }}
          >
            {[...pediatricOncologyDiseases]
              .sort()
              .map((disease) => (
                <li
                  key={disease}
                  style={{ breakInside: "avoid", marginBottom: 6 }}
                >
                  {disease}
                </li>
              ))}
          </ul>
        </div>
      </Card>

      {/* Gentle reassurance card */}
      <Card variant="elevated">
        <p style={{ marginTop: 0 }}>
          You do not need to learn everything at once. Start with what matters today.
        </p>
      </Card>
    </PageLayout>
  );
}