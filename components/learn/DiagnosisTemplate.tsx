
import Link from "next/link";
import PageLayout from "../layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../ui/Card";

export type DiagnosisTemplateProps = {
  pageTitle: string;
  diagnosisName: string;
  subtitle: string;

  plainEnglish: string[];
  whatYouMayHear: string[];
  whatFamiliesNotice: string[];
  questionsToAsk: string[];

  whereNextLinks?: { href: string; label: string }[];
};

export default function DiagnosisTemplate({
  pageTitle,
  diagnosisName,
  subtitle,
  plainEnglish,
  whatYouMayHear,
  whatFamiliesNotice,
  questionsToAsk,
  whereNextLinks,
}: DiagnosisTemplateProps) {
  const next =
    whereNextLinks ?? [
      { href: "/learn/what-diagnosis-means", label: "What the diagnosis means (plain English)" },
      { href: "/learn/tests-this-week", label: "Tests you may see this week" },
      { href: "/learn/your-care-team", label: "Who’s who on your care team" },
      { href: "/learn/managing-side-effects", label: "Managing side effects (practical guide)" },
      { href: "/learn/when-to-call-versus-wait", label: "When to call versus when to wait" },
      { href: "/learn", label: "Back to Learn home" },
    ];

  return (
    <PageLayout title={pageTitle}>
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
      <Card title={diagnosisName} subtitle={subtitle} variant="elevated">
        <p style={{ marginTop: 0 }}>
          This page is meant to help you understand the basics in plain language — without the overwhelm.
          Your care team will explain what applies to your child.
        </p>

        <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
          Educational only. Always ask your care team what applies to your child.
        </p>
      </Card>

      <CardGrid cols={2}>
        <Card
          title="What this diagnosis means (plain English)"
          subtitle="A simple explanation you can re-read anytime."
          tone="info"
        >
          <CardBullets items={plainEnglish} />
        </Card>

        <Card title="Words you may hear" subtitle="Common terms — your team will define them for you.">
          <CardBullets items={whatYouMayHear} />
        </Card>

        <Card title="What families may notice" subtitle="A general guide — every child is different.">
          <CardBullets items={whatFamiliesNotice} />
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 10 }}>
            If something feels urgent or unusual for your child, call your care team.
          </p>
        </Card>

        <Card title="Questions you can ask your team" subtitle="A short list is enough." variant="elevated">
          <CardBullets items={questionsToAsk} />
        </Card>
      </CardGrid>

      {/* Where next */}
      <Card title="Where you can go next" subtitle="Pick one — small steps count.">
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {next.map((item) => (
            <li key={`${item.href}-${item.label}`} style={{ marginBottom: 6 }}>
              <Link href={item.href} style={{ textDecoration: "underline" }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Card>

      <Card variant="elevated">
        <p style={{ marginTop: 0 }}>
          You do not need to learn everything at once. Start with what matters today.
        </p>
      </Card>
    </PageLayout>
  );
}
