
import CareStageSelector from "../components/ui/CareStageSelector";
import pediatricOncologyDiseases from "../content/pediatricOncologyDiseases";
import Link from "next/link";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardGrid, CardBullets } from "../components/ui/Card";
import { useCareContext } from "../context/CareContext";

/**
 * Map the display name (what you show in the list) to the real route you created under:
 * apps/web/pages/learn/<route>.tsx
 *
 * Only items listed here will become clickable.
 * If a diagnosis is not in this map, it will render as plain text (no broken links).
 */
const ROUTES: Record<string, string> = {
  "Acute Lymphoblastic Leukemia (ALL)": "/learn/acute-lymphoblastic-leukemia",
  "Acute Myeloid Leukemia (AML)": "/learn/acute-myeloid-leukemia",
  "Brain and Central Nervous System Tumors": "/learn/brain-and-cns-tumors",
  Neuroblastoma: "/learn/neuroblastoma",

  // Add these once you create their pages:
  Ependymoma: "/learn/ependymoma",
  "Ewing Sarcoma": "/learn/ewing-sarcoma",
  "Germ Cell Tumors": "/learn/germ-cell-tumors",
  Hepatoblastoma: "/learn/hepatoblastoma",
  "Hodgkin Lymphoma": "/learn/hodgkin-lymphoma",
  Medulloblastoma: "/learn/medulloblastoma",
  "Non-Hodgkin Lymphoma": "/learn/non-hodgkin-lymphoma",
  Osteosarcoma: "/learn/osteosarcoma",
  Retinoblastoma: "/learn/retinoblastoma",
  Rhabdomyosarcoma: "/learn/rhabdomyosarcoma",
  "Wilms Tumor (Nephroblastoma)": "/learn/wilms-tumor",
};

export default function LearnPage() {
  const { stage } = useCareContext();

  const sorted = [...pediatricOncologyDiseases].sort((a, b) =>
    a.localeCompare(b)
  );

  const weeklyBullets =
    stage === "side-effects"
      ? [
          "Side effects to watch for right now",
          "When to call vs. when to wait",
          "What to write down for your next visit",
        ]
      : stage === "newly-diagnosed"
      ? [
          "What the diagnosis means in plain language",
          "Common terms you’ll hear (CBC, ANC, neutropenia)",
          "Questions to bring to your next appointment",
        ]
      : stage === "discharge"
      ? [
          "What to monitor at home this week",
          "Medication and follow-up reminders",
          "When to call your care team urgently",
        ]
      : [
          "What the care team may focus on this week",
          "Common side effects you may notice",
          "When to call versus when to wait",
        ];

  return (
    <PageLayout title="Learn">
      <CareStageSelector />

      <CardGrid cols={3}>
        <Card
          title="Browse by Diagnosis (A–Z)"
          subtitle="Easy-to-understand overviews of pediatric cancer diagnoses."
          right={
            <Link href="/learn/neuroblastoma" className="mk-pill">
              Open library
            </Link>
          }
        >
          <p style={{ marginTop: 0 }}>
            Start with your child’s diagnosis. You can explore one topic at a time.
          </p>

          <div style={{ fontWeight: 600, marginBottom: 6 }}>Featured</div>
          <ul style={{ paddingLeft: 18 }}>
            <li>
              <Link href="/learn/neuroblastoma" style={{ textDecoration: "underline" }}>
                Neuroblastoma
              </Link>
            </li>
          </ul>

          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
            Educational only. Always ask your care team what applies to your child.
          </p>
        </Card>

        <Card
          title="What to expect this week"
          subtitle="Plain-language overview (adapts to your selection above)."
          tone="info"
        >
          <CardBullets items={weeklyBullets} />

          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Learn more:</div>

            {/* New diagnosis */}
            <div style={{ fontWeight: 600, marginTop: 8, marginBottom: 4 }}>
              New diagnosis:
            </div>
            <ul style={{ paddingLeft: 18 }}>
              <li>
                <Link href="/learn/what-diagnosis-means" style={{ textDecoration: "underline" }}>
                  What the diagnosis means (plain English)
                </Link>
              </li>
              <li>
                <Link href="/learn/tests-this-week" style={{ textDecoration: "underline" }}>
                  Tests you may see this week
                </Link>
              </li>
              <li>
                <Link href="/learn/your-care-team" style={{ textDecoration: "underline" }}>
                  Who’s who on your care team
                </Link>
              </li>
              <li>
                <Link href="/learn/emotions-this-week" style={{ textDecoration: "underline" }}>
                  Emotional reactions are normal
                </Link>
              </li>
              <li>
                <Link href="/learn/decisions-this-week" style={{ textDecoration: "underline" }}>
                  Decisions you may hear about
                </Link>
              </li>
            </ul>

            {/* In Active Treatment */}
            <div style={{ fontWeight: 600, marginTop: 12, marginBottom: 4 }}>
              In active treatment:
            </div>
            <ul style={{ paddingLeft: 18 }}>
              <li>
                <Link href="/learn/in-active-treatment" style={{ textDecoration: "underline" }}>
                  In Active Treatment (overview)
                </Link>
              </li>
              <li>
                <Link href="/learn/what-care-team-focuses-on" style={{ textDecoration: "underline" }}>
                  What the care team may focus on this week
                </Link>
              </li>
              <li>
                <Link href="/learn/common-side-effects" style={{ textDecoration: "underline" }}>
                  Common side effects you may notice
                </Link>
              </li>
              <li>
                <Link href="/learn/when-to-call-versus-wait" style={{ textDecoration: "underline" }}>
                  When to call versus when to wait
                </Link>
              </li>
            </ul>

            {/* Managing Side Effects */}
            <div style={{ fontWeight: 600, marginTop: 12, marginBottom: 4 }}>
              Managing side effects:
            </div>
            <ul style={{ paddingLeft: 18 }}>
              <li>
                <Link href="/learn/managing-side-effects" style={{ textDecoration: "underline" }}>
                  Managing side effects (practical guide)
                </Link>
              </li>
              <li>
                <Link href="/learn/common-side-effects" style={{ textDecoration: "underline" }}>
                  Common side effects you may notice
                </Link>
              </li>
              <li>
                <Link href="/learn/when-to-call-versus-wait" style={{ textDecoration: "underline" }}>
                  When to call versus when to wait
                </Link>
              </li>
            </ul>

            {/* ✅ Preparing for Discharge (FINAL, cleaned up) */}
            <div style={{ fontWeight: 600, marginTop: 12, marginBottom: 4 }}>
              Preparing for discharge:
            </div>
            <ul style={{ paddingLeft: 18 }}>
              <li>
                <Link href="/learn/preparing-for-discharge" style={{ textDecoration: "underline" }}>
                  What to monitor at home this week
                </Link>
              </li>
              <li>
                <Link href="/learn/managing-side-effects" style={{ textDecoration: "underline" }}>
                  Managing side effects at home
                </Link>
              </li>
              <li>
                <Link href="/learn/when-to-call-versus-wait" style={{ textDecoration: "underline" }}>
                  When to call your care team urgently
                </Link>
              </li>
            </ul>
          </div>
        </Card>

        <Card
          title="Common terms"
          subtitle="Quick definitions without the overwhelm."
          right={
            <Link href="/glossary" className="mk-pill">
              Open glossary
            </Link>
          }
        >
          <CardBullets items={["Port", "CBC", "ANC", "Neutropenia"]} />
        </Card>
      </CardGrid>

      <Card
        title="Pediatric oncology diagnoses (A–Z)"
        subtitle="Quick reference list. Detailed pages will expand over time."
      >
        <div style={{ maxHeight: 280, overflow: "auto", paddingRight: 8 }}>
          <ul
            style={{
              columns: 2,
              columnGap: 32,
              margin: 0,
              paddingLeft: 18,
            }}
          >
            {sorted.map((name) => {
              const href = ROUTES[name];
              return (
                <li key={name} style={{ breakInside: "avoid", marginBottom: 6 }}>
                  {href ? (
                    <Link href={href} style={{ textDecoration: "underline" }}>
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Card>

      <Card variant="elevated">
        <p style={{ marginTop: 0 }}>
          You do not need to learn everything at once. Start with what matters today.
        </p>
      </Card>
    </PageLayout>
  );
}
