import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function TraumaticBrainInjuryPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Traumatic Brain Injury"
      diagnosisName="Traumatic Brain Injury (TBI)"
      subtitle="An injury to the brain caused by a bump, blow, or jolt to the head"
      plainEnglish={[
        "Traumatic brain injury, often called TBI, happens when the brain is injured by a sudden impact or force to the head.",
        "TBIs can range from mild (such as a concussion) to more severe injuries.",
        "The effects of a TBI can be temporary or long‑lasting, depending on the severity and location of the injury.",
        "Recovery looks different for every child and may take time.",
      ]}
      whatYouMayHear={[
        "Concussion",
        "Loss of consciousness",
        "Imaging scans (CT or MRI)",
        "Cognitive symptoms",
        "Rehabilitation or therapy",
      ]}
      whatFamiliesNotice={[
        "Headaches or dizziness",
        "Changes in mood, behavior, or sleep",
        "Problems with attention, memory, or learning",
        "Nausea or vomiting",
        "Sensitivity to light or noise",
      ]}
      questionsToAsk={[
        "How severe is my child’s brain injury?",
        "What symptoms should we watch for at home?",
        "What activities should my child avoid during recovery?",
        "Will my child need therapy or follow‑up care?",
        "Who should we contact if symptoms worsen or new symptoms appear?",
      ]}
    />
  );
}