
import Link from "next/link";
import PageLayout from "../components/layout/PageLayout";
import { Card } from "../components/ui/Card";

export default function OnboardingPage() {
  return (
    <PageLayout title="Welcome">
      <Card
        title="Merlin K.I.P."
        subtitle="A calm place to keep track of what matters most during active treatment."
        tone="info"
      >
        <p style={{ marginTop: 0 }}>
          Merlin is here to help caregivers take one step at a time.
        </p>

        <ul style={{ marginTop: 0 }}>
          <li>Understand what’s happening right now</li>
          <li>Keep questions for your care team</li>
          <li>Write notes and reminders</li>
        </ul>

        <div style={{ marginTop: 16 }}>
          <Link
            href="/today"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.25)",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Get Started
          </Link>
        </div>

        <p style={{ marginTop: 16, opacity: 0.8, fontSize: "0.95rem" }}>
          You can always return here using the Welcome button in the navigation.
        </p>
      </Card>
    </PageLayout>
  );
}
