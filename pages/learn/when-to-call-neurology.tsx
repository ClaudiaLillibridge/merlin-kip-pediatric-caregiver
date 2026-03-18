"use client";

import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function WhenToCallNeurology() {
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
        title="When to Call Neurology"
        subtitle="Knowing when to reach out — and when to seek urgent help"
      >
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          Many families worry about bothering the care team or calling at the wrong
          time. This page is meant to help you feel more confident about when to
          reach out.
        </p>

        <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>
          Educational support only. This does not replace guidance from your child’s
          neurology care team.
        </p>
      </Card>

      {/* Content */}
      <CardGrid cols={2}>
        <Card
          title="Call neurology if you notice"
          subtitle="Situations where reaching out is appropriate"
          tone="info"
        >
          <CardBullets
            items={[
              "New or worsening neurologic symptoms",
              "Changes in seizure patterns or frequency",
              "Side effects or concerns related to medications",
              "Developmental changes or loss of previously learned skills",
              "Symptoms that concern you, even if you’re unsure",
            ]}
          />
        </Card>

        <Card
          title="Seek urgent or emergency care for"
          subtitle="Situations that may need immediate attention"
          tone="warn"
        >
          <CardBullets
            items={[
              "Seizures that last longer than expected",
              "Trouble breathing or changes in responsiveness",
              "Sudden weakness, severe confusion, or loss of consciousness",
              "Head injury with concerning symptoms",
            ]}
          />
        </Card>

        <Card
          title="If you’re unsure"
          subtitle="What many families worry about"
          tone="info"
        >
          <CardBullets
            items={[
              "It’s okay to call and ask questions",
              "You don’t need to be certain something is wrong",
              "Your care team can help decide next steps",
              "Reaching out early can prevent bigger issues later",
            ]}
          />
        </Card>

        <Card
          title="A final reassurance"
          subtitle="Something many caregivers need to hear"
          tone="info"
        >
          <CardBullets
            items={[
              "You are not overreacting by asking for guidance",
              "Trust your instincts — you know your child best",
              "The care team expects and welcomes questions",
            ]}
          />
        </Card>
      </CardGrid>

      {/* Where you can go next */}
      <Card title="Where you can go next" subtitle="You don’t need to read everything at once.">
        <CardGrid cols={2}>
          <Card title="Back to Learn">
            <Link href="/learn">Open</Link>
          </Card>

          <Card title="Tracking symptoms and seizures">
            <Link href="/learn">Open</Link>
          </Card>
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          If something doesn’t feel right, it’s okay to reach out. You don’t have to
          navigate this alone.
        </p>
      </Card>
    </PageLayout>
  );
}