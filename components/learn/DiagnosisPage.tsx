import PageLayout from "../layout/PageLayout";

interface DiagnosisPageProps {
  title: string;
  summary?: string;
}

export default function DiagnosisPage({
  title,
  summary,
}: DiagnosisPageProps) {
  return (
    <PageLayout title={title}>
      <p style={{ fontSize: 16, maxWidth: 700 }}>
        {summary ??
          "This page provides a plain‑language overview intended for caregivers. Content will continue to expand over time."}
      </p>

      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 24 }}>
        Educational only. Always ask your care team what applies to your child.
      </p>
    </PageLayout>
  );
}