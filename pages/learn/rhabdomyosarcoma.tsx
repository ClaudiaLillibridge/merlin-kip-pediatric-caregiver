
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function RhabdomyosarcomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Rhabdomyosarcoma"
      diagnosisName="Rhabdomyosarcoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Rhabdomyosarcoma is a cancer that starts in soft tissue (often related to muscle-type cells).",
        "It can occur in different parts of the body, so symptoms depend on location.",
        "Treatment often combines therapies (medicine, surgery, and/or radiation).",
        "Your team will tailor the plan based on tumor location and test results.",
      ]}
      whatYouMayHear={[
        "Biopsy: confirms diagnosis",
        "Imaging (MRI/CT/PET): helps define location and spread",
        "Chemotherapy: common part of treatment",
        "Surgery: may remove the tumor when safe",
        "Radiation therapy: may be used depending on location",
        "Rehab/support services: helps function and recovery",
      ]}
      whatFamiliesNotice={[
        "A lump or swelling",
        "Pain or pressure symptoms",
        "Trouble using a body part normally",
        "Symptoms related to tumor location (varies widely)",
      ]}
      questionsToAsk={[
        "Where is the tumor and how does location affect treatment?",
        "What is the treatment sequence and timeline?",
        "What side effects should we watch for this week?",
        "What symptoms should prompt an urgent call?",
        "Who do we contact after hours?",
      ]}
    />
  );
}
