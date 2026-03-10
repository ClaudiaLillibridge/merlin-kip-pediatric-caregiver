
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function NeuroblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Neuroblastoma"
      diagnosisName="Neuroblastoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Neuroblastoma is a cancer that starts in certain nerve-related cells.",
        "It most often begins in the abdomen (near the adrenal glands), but it can start in other areas.",
        "Symptoms depend on where the tumor is and how it affects the body.",
        "Treatment plans vary and are tailored carefully by your oncology team.",
      ]}
      whatYouMayHear={[
        "Imaging (CT/MRI): helps see where the tumor is",
        "Biopsy/pathology: confirms diagnosis and tumor details",
        "Staging/risk group: helps guide the treatment plan",
        "Chemotherapy: medicine used to treat cancer cells",
        "Surgery: may remove tumor when safe",
        "MIBG scan (sometimes): a specialized scan your team may discuss",
      ]}
      whatFamiliesNotice={[
        "Belly swelling or a firm belly",
        "Pain or discomfort",
        "Changes in appetite or energy",
        "Symptoms related to location (varies)",
      ]}
      questionsToAsk={[
        "Where is the tumor located and what does that mean for symptoms?",
        "What tests do we need next to guide treatment?",
        "What is the plan for the next few weeks?",
        "What side effects should we watch for this week?",
        "When should we call urgently and who do we call after hours?",
      ]}
    />
  );
}
