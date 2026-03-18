
"use client";

import { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../components/ui/Card";
import { useSpecialty } from "../context/SpecialtyContext";

export default function TodayPage() {
  const { specialty, setSpecialty } = useSpecialty();
  const [hasJournal, setHasJournal] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("merlin_kip_caregiver_journal");
    if (saved && saved.trim().length > 0) {
      setHasJournal(true);
    }
  }, []);

  // Specialty-specific content
  const todaysFocus =
    specialty === "neurology"
      ? [
          "Observe and note any new or unusual symptoms",
          "Track seizures, headaches, or neurologic episodes",
          "Write down questions for the neurology team",
        ]
      : [
          "Clinic visit at 10:30 AM",
          "Medication due at 7:00 PM",
          "Write down questions before the visit",
        ];

  const beAwareToday =
    specialty === "neurology"
      ? [
          "Seizures lasting longer than usual",
          "Sudden changes in behavior or alertness",
          "Severe or worsening headaches",
        ]
      : [
          "Fever over 100.4°F",
          "Vomiting more than once",
          "New or worsening pain",
        ];

  return (
    <PageLayout title="Today">
      {/* ✅ CLEAR SPECIALTY SELECTION BLOCKS */}
      <CardGrid cols={2}>
        <Card
          title="Oncology"
          subtitle="Cancer care and treatment support"
          tone={specialty === "oncology" ? "info" : undefined}
        >
          <button
            onClick={() => setSpecialty("oncology")}
            style={{
              marginTop: 8,
              opacity: specialty === "oncology" ? 1 : 0.7,
            }}
          >
            {specialty === "oncology" ? "Active" : "Switch to Oncology"}
          </button>
        </Card>

        <Card
          title="Neurology"
          subtitle="Neurologic conditions and monitoring"
          tone={specialty === "neurology" ? "info" : undefined}
        >
          <button
            onClick={() => setSpecialty("neurology")}
            style={{
              marginTop: 8,
              opacity: specialty === "neurology" ? 1 : 0.7,
            }}
          >
            {specialty === "neurology" ? "Active" : "Switch to Neurology"}
          </button>
        </Card>
      </CardGrid>

      {/* JOURNAL STATUS */}
      <Card tone="info">
        {hasJournal ? (
          <p style={{ marginTop: 0 }}>
            You’ve written notes recently. Bringing even one question to a visit can help.
          </p>
        ) : (
          <p style={{ marginTop: 0 }}>
            You haven’t written anything yet. That’s okay.
            Many caregivers start by jotting down just one question.
          </p>
        )}
      </Card>

      {/* TODAY CONTENT */}
      <CardGrid cols={2}>
        <Card
          title="Today’s focus"
          subtitle="Small steps. You don’t have to hold everything in your head."
          tone="info"
        >
          <CardBullets items={todaysFocus} />
        </Card>

        <Card
          title="Be aware today"
          subtitle="If you’re unsure, it’s okay to call your care team."
          tone="warn"
        >
          <CardBullets items={beAwareToday} />
        </Card>
      </CardGrid>

      <Card>
        <p style={{ marginTop: 0 }}>
          <strong>What matters today?</strong>
        </p>
        <p>
          If there’s one thing you want to remember or ask about,
          you can jot it down in your journal.
        </p>
      </Card>

      <Card>
        <p style={{ marginTop: 0 }}>
          This page will change day to day. Focus only on what matters right now.
        </p>
      </Card>
    </PageLayout>
  );
}
