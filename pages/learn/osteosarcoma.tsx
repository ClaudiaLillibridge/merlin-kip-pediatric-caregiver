
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function OsteosarcomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Osteosarcoma"
      diagnosisName="Osteosarcoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Osteosarcoma is a cancer that starts in bone.",
        "It often affects long bones (like around the knee), especially in growing children/teens.",
        "Treatment usually includes medicine and surgery, tailored to the tumor location.",
        "Your team will explain the plan and the timeline step by step.",
      ]}
      whatYouMayHear={[
        "Biopsy: confirms diagnosis",
        "MRI/CT: imaging to define the tumor",
        "Chemotherapy: often given before and after surgery",
        "Surgery: removes the tumor when safe",
        "Limb-sparing surgery: surgery that aims to preserve the limb (when possible)",
        "Physical therapy/rehab: helps strength and mobility after treatment",
      ]}
      whatFamiliesNotice={[
        "Bone pain that doesn’t improve",
        "Swelling or a lump",
        "Trouble using an arm/leg normally",
        "Pain that gets worse with activity or at night",
        "Fatigue (sometimes)",
      ]}
      questionsToAsk={[
        "What is the treatment sequence and timeline?",
        "What kind of surgery is expected and what is recovery like?",
        "What side effects should we watch for this week?",
        "What symptoms mean ‘call urgently’?",
        "What support is available for mobility/school?",
      ]}
    />
  );
}
