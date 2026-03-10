import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export default function PreparingForDischargePage() {
  return (
    <PageLayout title="Preparing for Discharge">
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
        title="Preparing for Discharge"
        subtitle="A simple checklist so you go home with clarity and confidence."
        variant="elevated"
      >
        <p style={{ marginTop: 0 }}>
          Going home can feel like relief — and also anxiety. Discharge is not “you’re on
          your own.” It’s a handoff. This page helps you leave with a clear plan and a
          reliable way to get help when you need it.
        </p>

        <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
          Educational only. Always follow your child’s discharge instructions and care team
          guidance.
        </p>
      </Card>

      <CardGrid cols={2}>
        <Card
          title="Your discharge checklist (plain English)"
          subtitle="If it isn’t clear, it’s okay to ask again."
          tone="info"
        >
          <CardBullets
            items={[
              "Medication list: name, dose, schedule, and what each is for",
              "What to do if: fever, vomiting, pain, line issues, missed dose",
              "Who to call: daytime number + after-hours number",
              "Follow-up plan: next appointment date/time and where to go",
              "Supplies: what you need at home and how to reorder",
              "School/activity guidance: what’s okay now vs later",
            ]}
          />
        </Card>

        <Card
          title="Questions worth asking before you leave"
          subtitle="These help reduce stress once you’re home."
        >
          <CardBullets
            items={[
              "What symptoms are urgent for my child specifically?",
              "What’s our fever threshold — and what do we do first?",
              "Can you write our plan down in one place?",
              "What should we do if a medication dose is missed or vomited?",
              "Who do we call after hours? When should we go to the ER?",
            ]}
          />
        </Card>

        <Card
          title="At home: the first 48 hours"
          subtitle="A gentle plan for the transition."
        >
          <CardBullets
            items={[
              "Keep the plan visible (med list + phone numbers).",
              "Set medication reminders (phone alarms are okay).",
              "Track symptoms briefly (what changed today).",
              "Choose one small goal: hydration, rest, comfort, or a short walk.",
              "If you’re worried, call — you don’t need to ‘wait it out.’",
            ]}
          />
        </Card>

        <Card
          title="A calming reminder"
          subtitle="You don’t need to memorize everything."
          variant="elevated"
        >
          <p style={{ marginTop: 0 }}>
            It’s normal to feel nervous the first nights at home. The goal is not perfection —
            it’s support. You just need a plan and a phone number.
          </p>
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
            If anything is unclear at discharge, it’s okay to ask: “Can you say that one more
            time in plain language?”
          </p>
        </Card>
      </CardGrid>

      {/* Where next */}
      <Card title="Where you can go next" subtitle="Pick one — small steps count.">
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li>
            <Link href="/learn/when-to-call-versus-wait" style={{ textDecoration: "underline" }}>
              When to call versus when to wait
            </Link>
          </li>
          <li>
            <Link href="/learn/managing-side-effects" style={{ textDecoration: "underline" }}>
              Managing side effects (practical guide)
            </Link>
          </li>
          <li>
            <Link href="/learn/in-active-treatment" style={{ textDecoration: "underline" }}>
              In Active Treatment (overview)
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
          You deserve to go home with a plan that feels manageable. Ask for clarity — it’s part
          of good care.
        </p>
      </Card>
    </PageLayout>
  );
}
