import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function RhabdomyosarcomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Rhabdomyosarcoma"
      diagnosisName="Rhabdomyosarcoma"
      subtitle="A cancer that develops from muscle tissue"
      plainEnglish={[
        "Rhabdomyosarcoma is a type of cancer that starts in cells that normally develop into skeletal muscle.",
        "Skeletal muscles help the body move and are found throughout the body.",
        "Because muscle tissue exists in many places, rhabdomyosarcoma can occur in different parts of the body.",
        "This cancer most often affects children and adolescents.",
      ]}
      whatYouMayHear={[
        "Soft tissue tumor",
        "Muscle cells",
        "Tumor location",
        "Imaging scans",
        "Biopsy",
      ]}
      whatFamiliesNotice={[
        "A lump or swelling that may or may not be painful",
        "Swelling around the eyes, head, or neck",
        "Difficulty with urination or bowel movements (depending on location)",
        "Pain or discomfort in the affected area",
        "Fatigue or decreased activity",
      ]}
      questionsToAsk={[
        "Where is the tumor located?",
        "What type of rhabdomyosarcoma does my child have?",
        "What tests were used to make the diagnosis?",
        "What treatment options are recommended?",
        "Who should we contact if symptoms change or worsen?",
      ]}
    />
  );
}