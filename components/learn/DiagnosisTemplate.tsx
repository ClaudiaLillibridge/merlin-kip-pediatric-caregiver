
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
      <div style={{ marginBottom: 14 }}>
        <Link href="/learn" style={{ textDecoration: "underline", fontWeight: 600 }}>
          ← Back to Learn
        </Link>
      </div>

      <Card title={diagnosisName} subtitle={subtitle} variant="elevated">
        <p>
          This page is meant to help you understand the basics in plain language.
          Your care team will explain what applies to your child.
        </p>
      </Card>

      <CardGrid cols={2}>
        <Card title="What this diagnosis means" tone="info">
          <CardBullets items={plainEnglish} />
        </Card>

        <Card title="Words you may hear">
          <CardBullets items={whatYouMayHear} />
        </Card>

        <Card title="What families may notice">
          <CardBullets items={whatFamiliesNotice} />
        </Card>

        <Card title="Questions to ask your team" variant="elevated">
          <CardBullets items={questionsToAsk} />
        </Card>
      </CardGrid>

      <Card title="Where you can go next">
        <ul>
          {next.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </Card>
    </PageLayout>
  );
}
