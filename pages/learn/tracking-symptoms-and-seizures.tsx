"use client";

import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function TrackingSymptomsAndSeizures() {
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
        title="Tracking Symptoms and Seizures"
        subtitle="Helping your care team understand what happens at home"
      >
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          Many neurologic symptoms happen outside of clinic visits. Tracking what
          you notice can help your care team better understand patterns over time.
        </p>

        <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>
          Educational support only. This does not replace guidance from your child’s
          neurology care team.
        </p>
      </Card>

      {/* Content */}
      <CardGrid cols={2}>
        <Card
          title="Why tracking helps"
          subtitle="How observations support care decisions"
          tone="info"
        >
          <CardBullets
            items={[
              "Symptoms don’t always happen during appointments",
              "Patterns over time can be more helpful than a single event",
              "Details from home help guide treatment and monitoring",
              "Your observations provide important context tests may not show",
            ]}
          />
        </Card>

        <Card
          title="What families often track"
          subtitle="When it feels relevant"
          tone="info"
        >
          <CardBullets
            items={[
              "Date and time symptoms occur",
              "What happened before, during, and after",
              "How long symptoms lasted",
              "How your child felt afterward",
            ]}
          />
        </Card>

        <Card
          title="Helpful tips"
          subtitle="Keeping it manageable"
          tone="info"
        >
          <CardBullets
            items={[
              "Simple notes are enough — perfection isn’t required",
              "Write things down soon after you notice them if possible",
              "Videos can be helpful if it’s safe to record",
              "Bring questions or observations to appointments",
            ]}
          />
        </Card>

        <Card
          title="Important reassurance"
          subtitle="What many caregivers worry about"
          tone="info"
        >
          <CardBullets
            items={[
              "You are not expected to diagnose anything",
              "You don’t need to track every detail",
              "If something feels important to you, it’s worth sharing",
              "You know your child best",
            ]}
          />
        </Card>
      </CardGrid>

      {/* Where you can go next */}
      <Card title="Where you can go next" subtitle="You don’t need to read everything at once.">
        <CardGrid cols={2}>
          <Card title="When to call neurology">
            <Link href="/learn">Open</Link>
          </Card>

          <Card title="Back to Learn">
            <Link href="/learn">Open</Link>
          </Card>
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          If tracking starts to feel stressful, it’s okay to pause. Your care team
          can help you decide what information is most helpful.
        </p>
      </Card>
    </PageLayout>
  );
}