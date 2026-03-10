
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function GermCellTumorsPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Germ Cell Tumors"
      diagnosisName="Germ Cell Tumors"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Germ cell tumors start from cells that normally develop into eggs or sperm.",
        "They can occur in different parts of the body, depending on where the cells are located.",
        "There are different types — treatment depends on the exact type and location.",
        "Your team will explain what they found and what it means for treatment.",
      ]}
      whatYouMayHear={[
        "Tumor markers: blood tests that can help track certain tumors",
        "Ultrasound/CT/MRI: imaging to define the tumor",
        "Biopsy/surgery: confirms the tumor type",
        "Chemotherapy: may be part of treatment for some tumors",
        "Staging: helps guide the treatment plan",
        "Follow-up scans/labs: used to monitor progress",
      ]}
      whatFamiliesNotice={[
        "A lump or swelling (location depends on tumor site)",
        "Pain or pressure symptoms",
        "Changes in appetite or energy",
        "Symptoms related to the tumor’s location (varies)",
      ]}
      questionsToAsk={[
        "What type of germ cell tumor is this and where is it located?",
        "What tests help guide our plan (markers, imaging, pathology)?",
        "Is surgery needed, chemotherapy, or both?",
        "What symptoms should we call about urgently?",
        "How will we monitor progress over time?",
      ]}
    />
  );
}
