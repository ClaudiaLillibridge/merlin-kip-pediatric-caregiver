"use client";

import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function TestsAndMonitoring() {
  return (
    <PageLayout title="Learn">
      {/* Back to Learn */}
      <Card>
        <Link href="/learn" style={{ fontWeight: 600 }}>
          ← Back to Learn
        </Link>
      </Card>

      {/* Header */}
      <Card
        tone="info"
        title="Tests and Monitoring"
        subtitle="Understanding why tests are used and what they help show"
      >
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          Not every child needs testing. When tests are recommended, they are used
          to better understand symptoms and guide care.
        </p>

        <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>
          Educational support only. This does not replace guidance from your child’s
          neurology care team.
        </p>
      </Card>

      {/* Content */}
      <CardGrid cols={2}>
        <Card
          title="Why tests may be recommended"
          subtitle="Common reasons your care team may suggest testing"
          tone="info"
        >
          <CardBullets
            items={[
              "To better understand symptoms your child is experiencing",
              "To confirm or rule out certain conditions",
              "To guide treatment or monitoring decisions",
              "To establish a baseline for future comparison",
            ]}
          />
        </Card>

        <Card
          title="Tests you may hear about"
          subtitle="Some common neurologic tests"
          tone="info"
        >
          <CardBullets
            items={[
              "MRI or CT scans to create pictures of the brain or spine",
              "EEG to measure brain electrical activity",
              "Blood tests to look for metabolic or genetic information",
              "Developmental assessments to track skills over time",
            ]}
          />
        </Card>

        <Card
          title="What families should know"
          subtitle="Helpful context about testing"
          tone="info"
        >
          <CardBullets
            items={[
              "Many tests are done only once or occasionally",
              "Not all symptoms require testing",
              "Your care team should explain what each test is for",
              "You can ask what information a test will (or won’t) provide",
            ]}
          />
        </Card>

        <Card
          title="Monitoring over time"
          subtitle="Why observation is often just as important"
          tone="info"
        >
          <CardBullets
            items={[
              "Some neurologic conditions are monitored rather than immediately treated",
              "Patterns over time can be more informative than a single result",
              "Your observations at home are an important part of monitoring",
            ]}
          />
        </Card>
      </CardGrid>

      {/* Where you can go next */}
      <Card title="Where you can go next" subtitle="You don’t need to read everything at once.">
        <CardGrid cols={2}>
          <Card title="Tracking symptoms and seizures">
            <Link href="/learn">Open</Link>
          </Card>

          <Card title="When to call neurology">
            <Link href="/learn">Open</Link>
          </Card>
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          If a test is recommended and you’re unsure why, it’s okay to ask for more
          explanation or time to think.
        </p>
      </Card>
    </PageLayout>
  );
}