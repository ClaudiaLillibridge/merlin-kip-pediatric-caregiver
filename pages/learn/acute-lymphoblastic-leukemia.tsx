
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function AcuteLymphoblasticLeukemiaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Acute Lymphoblastic Leukemia (ALL)"
      diagnosisName="Acute Lymphoblastic Leukemia (ALL)"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "ALL is a cancer of the blood and bone marrow.",
        "It starts when the body makes too many abnormal lymphoblasts (immature white blood cells).",
        "These abnormal cells can crowd out healthy blood cells that help fight infection, carry oxygen, and stop bleeding.",
        "ALL is the most common type of leukemia in children.",
      ]}
      whatYouMayHear={[
        "Bone marrow: where blood cells are made",
        "CBC: a common blood test that checks blood cell counts",
        "ANC: a number that helps estimate infection risk",
        "Lumbar puncture (spinal tap): may be used to check or treat the nervous system",
        "Chemotherapy: the main treatment (often in phases)",
        "Central line/port: a way to give medicine and draw blood more easily",
      ]}
      whatFamiliesNotice={[
        "Tiredness or low energy (from low red blood cells/anemia)",
        "Bruising or bleeding more easily (from low platelets)",
        "Frequent fevers or infections (from low healthy white cells)",
        "Bone or joint pain",
        "Paleness, decreased appetite, or not feeling like themselves",
      ]}
      questionsToAsk={[
        "What is our treatment plan and what phase are we in right now?",
        "What side effects should we watch for this week?",
        "What is our fever threshold and what do we do first if it happens?",
        "What symptoms mean ‘call right away’ versus ‘watch and mention later’?",
        "Who do we call after hours and where should we go in an emergency?",
      ]}
    />
  );
}
``
