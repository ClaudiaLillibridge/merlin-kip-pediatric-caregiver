
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function HepatoblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Hepatoblastoma"
      diagnosisName="Hepatoblastoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Hepatoblastoma is a type of liver tumor most often seen in young children.",
        "It begins in liver cells and can form a mass in the abdomen.",
        "Treatment plans often combine medicine and surgery, guided by imaging and lab tests.",
        "Your team will explain what is planned and why.",
      ]}
      whatYouMayHear={[
        "AFP: a blood test that can help track some liver tumors",
        "Ultrasound/CT/MRI: imaging of the liver",
        "Biopsy: confirms diagnosis (sometimes done before treatment)",
        "Chemotherapy: may shrink the tumor before surgery",
        "Surgery: removes the tumor when safe",
        "Follow-up labs/scans: track response over time",
      ]}
      whatFamiliesNotice={[
        "A firm belly or belly swelling",
        "Abdominal pain or discomfort",
        "Decreased appetite",
        "Tiredness or low energy",
        "Sometimes jaundice (yellowing of skin/eyes)",
      ]}
      questionsToAsk={[
        "What tests are guiding our plan (imaging, AFP, pathology)?",
        "What is the treatment sequence (chemo first, surgery later)?",
        "What side effects should we watch for this week?",
        "When should we call urgently?",
        "How will we track progress over time?",
      ]}
    />
  );
}
