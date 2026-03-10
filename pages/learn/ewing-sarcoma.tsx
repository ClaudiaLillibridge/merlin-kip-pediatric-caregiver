
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function EwingSarcomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Ewing Sarcoma"
      diagnosisName="Ewing Sarcoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Ewing sarcoma is a cancer that usually starts in bone or nearby soft tissue.",
        "It can cause pain or swelling in one area of the body.",
        "Treatment often uses a combination of therapies (a ‘team approach’).",
        "Your care team will tailor the plan to your child’s situation.",
      ]}
      whatYouMayHear={[
        "Biopsy: confirms diagnosis",
        "MRI/CT/PET: imaging to understand the tumor",
        "Chemotherapy: common first step in treatment",
        "Surgery: may remove the tumor when safe to do so",
        "Radiation therapy: may be used depending on location",
        "Port/central line: helps give treatment more safely",
      ]}
      whatFamiliesNotice={[
        "Pain that doesn’t go away",
        "Swelling or a noticeable lump",
        "Trouble using an arm/leg normally",
        "Fatigue or low energy",
        "Fevers (sometimes)",
      ]}
      questionsToAsk={[
        "Where is the tumor and how will we treat it?",
        "What does the next month look like (appointments, chemo, scans)?",
        "What side effects should we expect this week?",
        "What symptoms should prompt an urgent call?",
        "Who do we contact after hours?",
      ]}
    />
  );
}
