import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { Card } from "../../components/ui/Card";

export default function NeuroblastomaPage() {
  return (
    <PageLayout title="Neuroblastoma">
      <p style={{ marginBottom: 12 }}>
        <Link href="/learn">← Back to Learn</Link>
      </p>

      <Card variant="elevated">
        <strong>Important:</strong>
        <p>
          This information is for general education only. It does not replace
          your child’s care team. Every child’s situation is unique. Always ask
          your oncology team what applies to your child.
        </p>
      </Card>

      <Card>
        <h2>Neuroblastoma in Plain Language</h2>
        <p>
          Neuroblastoma is a type of cancer that starts in immature nerve cells.
          It most often affects babies and young children.
        </p>
        <p>
          It often begins in the abdomen near the adrenal glands, but it can
          start in other parts of the body.
        </p>
      </Card>

      <Card>
        <h2>Common Signs and Symptoms</h2>
        <ul>
          <li>A lump or swelling (often in the belly)</li>
          <li>Belly pain or discomfort</li>
          <li>Fatigue or low energy</li>
          <li>Changes in appetite</li>
        </ul>
      </Card>

      <Card>
        <h2>Questions to Ask the Care Team</h2>
        <ul>
          <li>What type of neuroblastoma does my child have?</li>
          <li>What tests are being used to understand it better?</li>
          <li>What are the goals of treatment right now?</li>
          <li>Who should we contact if we have questions?</li>
        </ul>
      </Card>

      <p style={{ opacity: 0.7 }}>
        <strong>Last reviewed:</strong> March 2026
      </p>
    </PageLayout>
  );
}