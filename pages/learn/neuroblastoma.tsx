import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function NeuroblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Neuroblastoma"
      diagnosisName="Neuroblastoma"
      subtitle="A childhood cancer that develops from nerve tissue"
      plainEnglish={[
        "Neuroblastoma is a cancer that starts in immature nerve cells.",
        "It most often develops in the adrenal glands, which sit on top of the kidneys, but it can also grow in the chest, abdomen, or spine.",
        "Neuroblastoma mainly affects infants and young children.",
        "The behavior of neuroblastoma can vary widely, from slow‑growing tumors to more aggressive disease.",
      ]}
      whatYouMayHear={[
        "Adrenal glands",
        "Sympathetic nervous system",
        "Tumor staging",
        "Risk group",
        "Imaging scans",
      ]}
      whatFamiliesNotice={[
        "A lump or swelling in the abdomen, chest, or neck",
        "Bone pain or limping",
        "Fatigue or irritability",
        "Loss of appetite or weight loss",
        "Changes in bowel or bladder habits",
      ]}
      questionsToAsk={[
        "Where is the tumor located?",
        "What risk group does my child’s neuroblastoma fall into?",
        "What tests were used to determine the stage?",
        "What treatment options are recommended for this type?",
        "Who should we contact if symptoms change?",
      ]}
    />
  );
}