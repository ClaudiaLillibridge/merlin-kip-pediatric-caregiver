
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function AcuteMyeloidLeukemiaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Acute Myeloid Leukemia (AML)"
      diagnosisName="Acute Myeloid Leukemia (AML)"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "AML is a cancer of the blood and bone marrow.",
        "It starts when the body makes too many abnormal myeloid cells (immature blood cells).",
        "These abnormal cells can crowd out healthy blood cells that fight infection, carry oxygen, and stop bleeding.",
        "Treatment is usually started quickly and guided closely by your oncology team.",
      ]}
      whatYouMayHear={[
        "Bone marrow: where blood cells are made",
        "CBC: blood test that checks counts (white cells, red cells, platelets)",
        "ANC: number that helps estimate infection risk",
        "Platelets: help stop bleeding",
        "Chemotherapy: main treatment (often in cycles)",
        "Central line/port: helps give meds and draw blood",
      ]}
      whatFamiliesNotice={[
        "Tiredness or low energy (anemia)",
        "Fevers or infections",
        "Easy bruising or bleeding",
        "Paleness, decreased appetite",
        "Bone or body aches",
      ]}
      questionsToAsk={[
        "What is the plan for the next few days and the next few weeks?",
        "What side effects should we watch for right now?",
        "What is our fever threshold and what should we do first?",
        "What symptoms mean ‘call urgently’?",
        "Who do we call after hours?",
      ]}
    />
  );
}
