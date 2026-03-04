
import PageLayout from "../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../components/ui/Card";
import { useEffect, useState } from "react";
export default function TodayPage() {
  const [hasJournal, setHasJournal] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("merlin_kip_caregiver_journal");
    if (saved && saved.trim().length > 0) {
      setHasJournal(true);
    }
  }, []);
    return (
    <PageLayout title="Today">
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
      <CardGrid cols={2}>
        <Card
          title="Today’s focus"
          subtitle="Small steps. You don’t have to hold everything in your head."
          tone="info"
        >
          <CardBullets
            items={[
              "Clinic visit at 10:30 AM",
              "Medication due at 7:00 PM",
              "Write down questions before the visit",
            ]}
          />
        </Card>

        <Card
          title="Be aware today"
          subtitle="If you’re unsure, it’s okay to call your care team."
          tone="warn"
        >
          <CardBullets
            items={[
              "Fever over 100.4°F",
              "Vomiting more than once",
              "New or worsening pain",
            ]}
          />
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
