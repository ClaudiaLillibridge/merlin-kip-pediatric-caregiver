"use client";

import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function PediatricNeurologyBasics() {
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
        title="Pediatric Neurology Basics"
        subtitle="A gentle introduction to how the brain and nervous system work in children"
      >
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          This page provides a simple overview of pediatric neurology. It is meant
          to help you understand the basics — not to overwhelm you.
        </p>

        <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>
          Educational support only. This does not replace guidance from your child’s
          neurology care team.
        </p>
      </Card>

      {/* Content */}
      <CardGrid cols={2}>
        <Card
          title="What this means (plain English)"
          subtitle="An overview in everyday language"
          tone="info"
        >
          <CardBullets
            items={[
              "Pediatric neurology focuses on the brain, spinal cord, nerves, and muscles in children.",
              "These systems control movement, learning, behavior, speech, sensation, and development.",
              "Neurologic conditions can be present at birth, develop over time, or appear after illness or injury.",
            ]}
          />
        </Card>

        <Card
          title="What families may notice"
          subtitle="Common changes caregivers sometimes observe"
          tone="warn"
        >
          <CardBullets
            items={[
              "Changes in movement, balance, or coordination",
              "Differences in learning, attention, or development",
              "Headaches, seizures, or episodes of staring or unresponsiveness",
              "Changes in behavior, sleep, or energy level",
            ]}
          />
        </Card>

        <Card
          title="What the neurology team does"
          subtitle="How care teams evaluate and support children"
          tone="info"
        >
          <CardBullets
            items={[
              "Listens carefully to what families observe at home",
              "Performs exams to assess strength, reflexes, balance, and development",
              "Uses tests or imaging only when helpful or necessary",
              "Works with families to explain findings and next steps",
            ]}
          />
        </Card>

        <Card
          title="Important reassurance"
          subtitle="What many families find helpful to hear"
          tone="info"
        >
          <CardBullets
            items={[
              "Many neurologic symptoms are manageable, and some improve with time",
              "Not every symptom means something serious is happening",
              "You are not expected to recognize everything — noticing changes is enough",
              "Questions are always welcome",
            ]}
          />
        </Card>
      </CardGrid>

      {/* Where you can go next */}
      <Card title="Where you can go next" subtitle="You don’t need to read everything at once.">
        <CardGrid cols={2}>
          <Card title="Understanding neurologic conditions">
            <Link href="/learn/understanding-neurologic-conditions">Open</Link>
          </Card>

          <Card title="Tests and monitoring">
            <Link href="/learn/tests-and-monitoring">Open</Link>
          </Card>
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          If this information feels like a lot, that’s normal. It’s okay to pause
          and come back later.
        </p>
      </Card>
    </PageLayout>
  );
}