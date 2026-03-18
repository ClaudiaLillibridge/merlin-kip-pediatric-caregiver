"use client";

import React from "react";
import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../../components/ui/Card";

export type DiagnosisReference = {
  label: string;
  url: string;
};

export type DiagnosisVisual = {
  emoji: string;
  label: string;
};

export type DiagnosisTemplateProps = {
  pageTitle: string;
  diagnosisName?: string;
  subtitle?: string;

  plainEnglish?: string[];
  whatYouMayHear?: string[];
  whatFamiliesNotice?: string[];
  questionsToAsk?: string[];

  // Optional polish
  visual?: DiagnosisVisual;
  references?: DiagnosisReference[];
};

export default function DiagnosisTemplate({
  pageTitle,
  diagnosisName,
  subtitle,
  plainEnglish = [],
  whatYouMayHear = [],
  whatFamiliesNotice = [],
  questionsToAsk = [],
  visual,
  references = [],
}: DiagnosisTemplateProps) {
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
        title={pageTitle}
        subtitle={subtitle || "Plain‑language overview for caregivers (2–3 minute read)."}
      >
        {diagnosisName ? (
          <p style={{ marginTop: 0, opacity: 0.85 }}>
            <strong>Diagnosis:</strong> {diagnosisName}
          </p>
        ) : null}

        {visual ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.20)",
              marginTop: 10,
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>{visual.emoji}</span>
            <span style={{ fontWeight: 700, opacity: 0.9 }}>{visual.label}</span>
          </div>
        ) : null}

        <p style={{ marginTop: 12, opacity: 0.85, fontSize: "0.9rem" }}>
          Educational support only. This does not replace clinical guidance from your care team.
        </p>
      </Card>

      {/* Content blocks */}
      <CardGrid cols={2}>
        {plainEnglish.length > 0 ? (
          <Card
            title="What it means (plain English)"
            subtitle="A short explanation in everyday language."
            tone="info"
          >
            <CardBullets items={plainEnglish} />
          </Card>
        ) : null}

        {whatYouMayHear.length > 0 ? (
          <Card
            title="What you may hear"
            subtitle="Common words and phrases you may hear from your care team."
            tone="info"
          >
            <CardBullets items={whatYouMayHear} />
          </Card>
        ) : null}

        {whatFamiliesNotice.length > 0 ? (
          <Card
            title="What families may notice"
            subtitle="Common signs and symptoms caregivers sometimes observe."
            tone="warn"
          >
            <CardBullets items={whatFamiliesNotice} />
          </Card>
        ) : null}

        {questionsToAsk.length > 0 ? (
          <Card
            title="Questions to ask"
            subtitle="Helpful questions you can bring to your next visit."
            tone="info"
          >
            <CardBullets items={questionsToAsk} />
          </Card>
        ) : null}
      </CardGrid>

      {/* References */}
      {references.length > 0 ? (
        <Card title="References" subtitle="Reputable sources you can read more from">
          <ul style={{ marginTop: 0, paddingLeft: "1.2rem" }}>
            {references.map((r) => (
              <li key={r.url} style={{ marginBottom: 8 }}>
                <a href={r.url} target="_blank" rel="noreferrer">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      {/* Where you can go next */}
      <Card title="Where you can go next" subtitle="You don’t have to read everything at once.">
        <CardGrid cols={2}>
          <Card title="Browse diagnoses">
            <Link href="/learn/diagnoses">Open</Link>
          </Card>
          <Card title="Back to Learn">
            <Link href="/learn">Open</Link>
          </Card>
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          If anything feels confusing or overwhelming, that’s normal. It’s okay to pause and come back later.
        </p>
      </Card>
    </PageLayout>
  );
}