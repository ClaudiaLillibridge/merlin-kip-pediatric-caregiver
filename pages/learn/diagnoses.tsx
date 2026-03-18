"use client";

import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardGrid } from "../../components/ui/Card";
import { useSpecialty } from "../../context/SpecialtyContext";
import { diagnosisRegistry } from "../../content/diagnosisRegistry";

export default function DiagnosesIndexPage() {
  const { specialty, setSpecialty } = useSpecialty();

  const diagnoses = diagnosisRegistry
    .filter((d) => d.specialty === specialty)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageLayout title="Learn">
      <Card>
        <Link href="/learn" style={{ fontWeight: 600 }}>
          ← Back to Learn
        </Link>
      </Card>

      <CardGrid cols={2}>
        <Card
          title="Oncology"
          subtitle="Browse pediatric cancer diagnoses"
          tone={specialty === "oncology" ? "info" : undefined}
        >
          <button
            onClick={() => setSpecialty("oncology")}
            style={{ marginTop: 8, opacity: specialty === "oncology" ? 1 : 0.7 }}
          >
            {specialty === "oncology" ? "Active" : "Switch to Oncology"}
          </button>
        </Card>

        <Card
          title="Neurology"
          subtitle="Browse pediatric neurologic diagnoses"
          tone={specialty === "neurology" ? "info" : undefined}
        >
          <button
            onClick={() => setSpecialty("neurology")}
            style={{ marginTop: 8, opacity: specialty === "neurology" ? 1 : 0.7 }}
          >
            {specialty === "neurology" ? "Active" : "Switch to Neurology"}
          </button>
        </Card>
      </CardGrid>

      <Card
        title={specialty === "neurology" ? "Neurology diagnoses" : "Oncology diagnoses"}
        subtitle="Select a diagnosis to read a plain‑language overview."
      >
        <CardGrid cols={2}>
          {diagnoses.map((d) => (
            <Card key={d.href} title={d.title}>
              {d.status === "ready" ? (
                <Link href={d.href} style={{ fontWeight: 700 }}>
                  Open
                </Link>
              ) : (
                <span style={{ opacity: 0.75, fontWeight: 700 }}>
                  Coming soon
                </span>
              )}
            </Card>
          ))}
        </CardGrid>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          Diagnoses marked “Coming soon” are on your build list. They will automatically switch
          to “Open” when you mark them as ready in the registry.
        </p>
      </Card>
    </PageLayout>
  );
}