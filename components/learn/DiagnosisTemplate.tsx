
"use client";

import React from "react";
import Link from "next/link";
import PageLayout from "../layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../ui/Card";
import { useSpecialty } from "../../context/SpecialtyContext";

type NextStep = { label: string; href: string };

type DiagnosisTemplateProps = {
  // ✅ matches your existing pages
  pageTitle: string;
  diagnosisName?: string;
  subtitle?: string;

  plainEnglish?: string[];
  whatYouMayHear?: string[];
  whatFamiliesNotice?: string[];
  questionsToAsk?: string[];

  // ✅ new, optional enhancement (won’t break existing pages)
  nextSteps?: NextStep[];
};

export default function DiagnosisTemplate(props: DiagnosisTemplateProps) {
  const { specialty } = useSpecialty();

  const {
    pageTitle,
    diagnosisName,
    subtitle,
    plainEnglish = [],
    whatYouMayHear = [],
    whatFamiliesNotice = [],
    questionsToAsk = [],
    nextSteps,
  } = props;

  // Specialty-aware default "next steps" (used if nextSteps is not provided)
  const defaultNextSteps: NextStep[] =
    specialty === "neurology"
      ? [
          { label: "Tracking symptoms and seizures", href: "/learn/symptom-tracking" },
          { label: "Tests and monitoring", href: "/learn/neuro-tests" },
          { label: "When to call neurology", href: "/learn/when-to-call-neuro" },
          { label: "Back to Learn", href: "/learn" },
        ]
      : [
          { label: "Tests you may see this week", href: "/learn/tests-this-week" },
          { label: "Common side effects", href: "/learn/common-side-effects" },
          { label: "When to call the care team", href: "/learn/when-to-call-versus-wait" },
          { label: "Back to Learn", href: "/learn" },
        ];

  const next = nextSteps && nextSteps.length > 0 ? nextSteps : defaultNextSteps;

  return (
    <PageLayout title="Learn">
      {/* Back to Learn */}
      <Card>
        <Link href="/learn" style={{ fontWeight: 700 }}>
          ← Back to Learn
        </Link>
      </Card>

      {/* Main page header */}
      <Card tone="info" title={pageTitle} subtitle={subtitle || "Plain-language overview for caregivers (2–3 minute read)."}>
        {diagnosisName && (
          <p style={{ marginTop: 0, opacity: 0.85 }}>
            <strong>Diagnosis:</strong> {diagnosisName}
          </p>
        )}

        <p style={{ marginTop: 10, opacity: 0.85, fontSize: "0.9rem" }}>
          Educational support only. This does not replace clinical guidance from your care team.
        </p>
      </Card>

      {/* Content sections */}
      <CardGrid cols={2}>
        {plainEnglish.length > 0 && (
          <Card
            title="What it means (plain English)"
            subtitle="A short explanation in everyday language."
            tone="info"
          >
            <CardBullets items={plainEnglish} />
          </Card>
        )}

        {whatYouMayHear.length > 0 && (
          <Card
            title="What you may hear"
            subtitle="Common words and phrases you may hear from your care team."
            tone="info"
          >
            <CardBullets items={whatYouMayHear} />
          </Card>
        )}

        {whatFamiliesNotice.length > 0 && (
          <Card
            title="What families may notice"
            subtitle="Common signs and symptoms caregivers sometimes observe."
            tone="warn"
          >
            <CardBullets items={whatFamiliesNotice} />
          </Card>
        )}

        {questionsToAsk.length > 0 && (
          <Card
            title="Questions to ask"
            subtitle="Helpful questions you can bring to your next visit."
            tone="info"
          >
            <CardBullets items={questionsToAsk} />
          </Card>
        )}
      </CardGrid>

      {/* Where to go next */}
      <Card title="Where you can go next" subtitle="You don’t have to read everything at once.">
        <CardGrid cols={2}>
          {next.map((n) => (
            <Card key={n.href} title={n.label}>
              <Link href={n.href} style={{ fontWeight: 700 }}>
                Open
              </Link>
            </Card>
          ))}
        </CardGrid>
      </Card>

      {/* Gentle close */}
      <Card>
        <p style={{ marginTop: 0 }}>
          If anything feels confusing or overwhelming, that’s normal. It’s okay to pause and come back later.
        </p>
      </Card>
    </PageLayout>
  );
}
