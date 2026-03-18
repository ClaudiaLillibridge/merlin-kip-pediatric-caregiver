"use client";

import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function UnderstandingNeurologicConditions() {
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
        title="Understanding Neurologic Conditions"
        subtitle="Making sense of diagnoses, symptoms, and what they may mean"
      >
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          Neurologic conditions can feel confusing at first. This page is designed
          to help you understand the basics without using medical jargon.
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
              "A neurologic condition affects how the brain, nerves, or muscles function.",
              "Some conditions are present at birth, while others develop over time or after illness or injury.",
              "A diagnosis helps guide care and monitoring — it does not define your child.",
            ]}
          />
        </Card>

        <Card
          title="Types of neurologic conditions you may hear about"
          subtitle="Broad categories your care team may mention"
          tone="info"
        >
          <CardBullets
            items={[
              "Developmental conditions that affect learning or milestones",
              "Seizure or epilepsy‑related conditions",
              "Movement or muscle‑related conditions",
              "Headache or pain disorders",
              "Conditions related to injury, infection, or inflammation",
            ]}
          />
        </Card>

        <Card
          title="What’s important to know"
          subtitle="Things families often find reassuring"
          tone="info"
        >
          <CardBullets
            items={[
              "Symptoms can change over time",
              "Not every child follows the same path",
              "Treatment plans are often adjusted as children grow",
              "Monitoring is just as important as treatment",
            ]}
          />
        </Card>

        <Card
          title="Questions families often ask"
          subtitle="It’s okay not to have all the answers"
          tone="info"
        >
          <CardBullets
            items={[
              "What does this diagnosis mean for daily life?",
              "What symptoms should we watch for?",
              "What changes would mean we should call neurology?",
              "How might this affect school, activities, or development?",
            ]}
          />
        </Card>
      </CardGrid>

      {/* Where you can go next */}
      <Card title="Where you can go next" subtitle="You don’t need to read everything at once.">
        <CardGrid cols={2}>
          <Card title="Tests and monitoring">
            <Link href="/learn">Open</Link>
          </Card>

          <Card title="Tracking symptoms and seizures">
            <Link href="/learn">Open</Link>
          </Card>
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          If this information brings up new questions, that’s normal. Writing them
          down can be helpful for your next visit.
        </p>
      </Card>
    </PageLayout>
  );
}