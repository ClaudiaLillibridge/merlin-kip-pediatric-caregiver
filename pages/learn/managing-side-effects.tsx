import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function ManagingSideEffectsPage() {
  return (
    <PageLayout title="Managing Side Effects">
      {/* Top nav */}
      <div style={{ marginBottom: 14 }}>
        <Link
          href="/learn"
          style={{
            textDecoration: "underline",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          ← Back to Learn
        </Link>
      </div>

      {/* Intro card */}
      <Card
        title="Managing Side Effects"
        subtitle="A calm, practical guide for what’s common — and what to do next."
        variant="elevated"
      >
        <p style={{ marginTop: 0 }}>
          Treatment can cause side effects. That can feel scary — but many side effects are
          expected, treatable, and temporary. This page helps you focus on what matters
          today: what you’re noticing, what can help, and when to call your team.
        </p>

        <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
          Educational only. Always follow guidance from your care team for what applies to
          your child.
        </p>
      </Card>

      <CardGrid cols={2}>
        <Card
          title="Common side effects (plain English)"
          subtitle="You do not need to memorize this — use it as a reference."
        >
          <CardBullets
            items={[
              "Nausea or vomiting",
              "Low appetite or taste changes",
              "Fatigue (very common)",
              "Mouth sores or throat pain",
              "Constipation or diarrhea",
              "Pain (headaches, body aches, or soreness)",
              "Fever or signs of infection",
            ]}
          />
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
            Your child may have only a few of these — and they may change week to week.
          </p>
        </Card>

        <Card
          title="What helps right now"
          subtitle="Small steps that make a big difference."
          tone="info"
        >
          <CardBullets
            items={[
              "Track the symptom: what, when, and how severe (0–10).",
              "Write down what helped (meds, foods, rest, heat/ice, etc.).",
              "Ask for a simple ‘home plan’ for nausea, constipation, and pain.",
              "Keep a quick list of meds + last dose time (especially fever meds).",
              "If something feels worse fast, call sooner rather than later.",
            ]}
          />
        </Card>

        <Card
          title="When to call your care team"
          subtitle="If you’re unsure, calling is always okay."
        >
          <p style={{ marginTop: 0 }}>
            Your team will give you specific rules for your child. In general, call urgently
            if there is:
          </p>
          <ul style={{ paddingLeft: 18, marginTop: 8, marginBottom: 0 }}>
            <li>Fever (use the fever threshold your team gave you)</li>
            <li>Hard-to-control vomiting or signs of dehydration</li>
            <li>New or worsening pain</li>
            <li>Trouble breathing, unusual sleepiness, confusion</li>
            <li>You feel “something isn’t right”</li>
          </ul>
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
            Trust your instincts — you know your child best.
          </p>
        </Card>

        <Card
          title="Questions to ask at your next visit"
          subtitle="Bring these as a short list (no pressure to remember)."
        >
          <CardBullets
            items={[
              "Which side effects are most likely with my child’s treatment right now?",
              "What’s our fever threshold — and what should we do first?",
              "What should we do if a dose is missed or vomited?",
              "What symptoms are urgent versus okay to watch at home?",
              "Who do we call after hours?",
            ]}
          />
        </Card>
      </CardGrid>

      {/* Where next */}
      <Card title="Where you can go next" subtitle="Pick one — small steps count.">
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li>
            <Link href="/learn/common-side-effects" style={{ textDecoration: "underline" }}>
              Common side effects you may notice
            </Link>
          </li>
          <li>
            <Link href="/learn/when-to-call-versus-wait" style={{ textDecoration: "underline" }}>
              When to call versus when to wait
            </Link>
          </li>
          <li>
            <Link href="/learn/preparing-for-discharge" style={{ textDecoration: "underline" }}>
              Preparing for discharge (checklist)
            </Link>
          </li>
          <li>
            <Link href="/learn" style={{ textDecoration: "underline" }}>
              Back to Learn home
            </Link>
          </li>
        </ul>
      </Card>

      <Card variant="elevated">
        <p style={{ marginTop: 0 }}>
          You are not expected to handle this alone. If something feels off, call your team.
        </p>
      </Card>
    </PageLayout>
  );
}