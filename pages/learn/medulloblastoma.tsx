
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function MedulloblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Medulloblastoma"
      diagnosisName="Medulloblastoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Medulloblastoma is a type of brain tumor, often found in the back part of the brain (cerebellum).",
        "It can affect balance and coordination and may cause symptoms from pressure in the brain.",
        "Treatment plans often involve multiple steps guided by imaging and tumor testing.",
        "Your team will explain what comes first and what to expect.",
      ]}
      whatYouMayHear={[
        "MRI: imaging used to see the tumor and plan next steps",
        "Neurosurgery: surgery to remove tumor and relieve pressure",
        "Biopsy/pathology: confirms tumor type and important details",
        "Radiation therapy: may be part of treatment for some patients",
        "Chemotherapy: medicines to treat tumor cells",
        "Rehab/support services: help with balance, strength, and school planning",
      ]}
      whatFamiliesNotice={[
        "Headaches, nausea/vomiting (often from pressure)",
        "Balance or coordination changes",
        "Walking changes",
        "Fatigue or irritability",
        "Vision changes (sometimes)",
      ]}
      questionsToAsk={[
        "What is the plan for surgery and recovery?",
        "What tests guide the next step (imaging, pathology results)?",
        "What symptoms should we call about urgently?",
        "What support will help with walking/balance/school?",
        "Who do we contact after hours?",
      ]}
    />
  );
}
