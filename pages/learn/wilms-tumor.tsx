
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function WilmsTumorPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Wilms Tumor (Nephroblastoma)"
      diagnosisName="Wilms Tumor (Nephroblastoma)"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Wilms tumor is a type of kidney tumor that occurs in children.",
        "It often shows up as a belly mass or belly swelling.",
        "Treatment plans are based on imaging, surgery decisions, and tumor testing.",
        "Your team will explain the plan and what the next steps are.",
      ]}
      whatYouMayHear={[
        "Ultrasound/CT/MRI: imaging used to look at the kidney and abdomen",
        "Surgery: may remove the tumor/kidney depending on the plan",
        "Pathology: testing that provides important details after surgery/biopsy",
        "Staging: helps guide treatment intensity",
        "Chemotherapy: commonly used as part of treatment",
        "Blood pressure monitoring: kidneys affect blood pressure",
      ]}
      whatFamiliesNotice={[
        "Belly swelling or a firm belly",
        "Abdominal pain (sometimes)",
        "Blood in the urine (sometimes)",
        "Decreased appetite",
        "High blood pressure (sometimes, found on exam)",
      ]}
      questionsToAsk={[
        "What is the plan for imaging and surgery (if needed)?",
        "What does staging mean for our child’s treatment?",
        "What side effects should we watch for this week?",
        "When should we call urgently?",
        "How will we monitor kidney function and blood pressure over time?",
      ]}
    />
  );
}
