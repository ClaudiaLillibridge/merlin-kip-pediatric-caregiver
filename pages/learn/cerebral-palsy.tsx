import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function CerebralPalsyPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Cerebral Palsy"
      diagnosisName="Cerebral Palsy"
      subtitle="A condition that affects movement, posture, and muscle control"
      plainEnglish={[
        "Cerebral palsy is a condition that affects how a child moves and controls their muscles.",
        "It is caused by an injury or difference in the developing brain, usually before or shortly after birth.",
        "Cerebral palsy does not get worse over time, but the way it affects a child can change as they grow.",
        "Every child with cerebral palsy is different, and abilities can range widely.",
      ]}
      whatYouMayHear={[
        "Motor skills",
        "Muscle tone (high or low)",
        "Spastic, dyskinetic, or ataxic cerebral palsy",
        "Physical and occupational therapy",
        "Developmental milestones",
      ]}
      whatFamiliesNotice={[
        "Delays in rolling, sitting, crawling, or walking",
        "Stiff or tight muscles, or muscles that feel floppy",
        "Difficulty with balance or coordination",
        "Challenges with feeding, speech, or fine motor skills",
        "Movements that seem awkward or hard to control",
      ]}
      questionsToAsk={[
        "What type of cerebral palsy does my child have?",
        "What therapies or supports can help my child right now?",
        "How might this affect my child as they grow?",
        "What specialists should be part of my child’s care team?",
        "Who should we contact if we notice new challenges?",
      ]}
    />
  );
}