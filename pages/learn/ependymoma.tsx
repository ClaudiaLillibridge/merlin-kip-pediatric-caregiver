
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function EpendymomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Ependymoma"
      diagnosisName="Ependymoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Ependymoma is a type of tumor that can start in the brain or spinal cord.",
        "It often forms near fluid spaces in the brain (ventricles) or in the spine.",
        "Treatment plans depend on where it is and how much can be safely removed.",
        "Your team will explain the exact tumor details and next steps.",
      ]}
      whatYouMayHear={[
        "MRI: imaging used to see the tumor clearly",
        "Neurosurgery: surgery to remove tumor or obtain tissue",
        "Biopsy/pathology: confirms the diagnosis and subtype",
        "Radiation therapy: common part of treatment for some cases",
        "Hydrocephalus: fluid buildup that can cause symptoms",
        "Shunt/ETV: procedures that may help fluid flow (if needed)",
      ]}
      whatFamiliesNotice={[
        "Headaches or nausea/vomiting",
        "Balance or coordination changes",
        "Changes in walking or strength",
        "Fatigue or irritability",
        "Symptoms related to pressure or fluid buildup",
      ]}
      questionsToAsk={[
        "Where is the tumor located and what does that mean for symptoms?",
        "What is the treatment plan and what comes first?",
        "Do we expect surgery, radiation, or both?",
        "What symptoms should we call about urgently?",
        "What support services are available for our family?",
      ]}
    />
  );
}
