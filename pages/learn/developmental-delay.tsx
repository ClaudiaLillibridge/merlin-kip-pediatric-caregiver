import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function DevelopmentalDelayPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Developmental Delay"
      diagnosisName="Developmental Delay"
      subtitle="When a child reaches milestones later than expected"
      plainEnglish={[
        "Developmental delay means a child is reaching one or more milestones later than expected for their age.",
        "Milestones can include movement (gross motor), hand skills (fine motor), speech/language, learning, or social skills.",
        "Developmental delay is a description of what is happening — it is not always a final diagnosis.",
        "Many children improve with the right supports, and early intervention can be very helpful.",
      ]}
      whatYouMayHear={[
        "Milestones",
        "Early Intervention",
        "Speech therapy (SLP)",
        "Occupational therapy (OT)",
        "Physical therapy (PT)",
      ]}
      whatFamiliesNotice={[
        "Delays in sitting, crawling, walking, or coordination",
        "Delayed speech or fewer words than expected",
        "Difficulty understanding directions or communicating needs",
        "Challenges with feeding, play, or fine motor skills",
        "Social interaction differences or trouble with transitions",
      ]}
      questionsToAsk={[
        "Which areas of development are most affected right now?",
        "What evaluations or screenings are recommended next?",
        "What therapies or supports can we start now?",
        "What can we do at home to support progress between visits?",
        "When should we follow up, and who should be on our care team?",
      ]}
    />
  );
}