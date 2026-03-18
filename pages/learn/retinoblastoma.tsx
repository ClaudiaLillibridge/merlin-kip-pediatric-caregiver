import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function RetinoblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Retinoblastoma"
      diagnosisName="Retinoblastoma"
      subtitle="A childhood cancer that affects the eye"
      plainEnglish={[
        "Retinoblastoma is a type of cancer that starts in the retina, the light‑sensitive layer at the back of the eye.",
        "It most often affects infants and young children.",
        "Retinoblastoma can involve one eye or both eyes.",
        "With early diagnosis and treatment, many children with retinoblastoma have very good outcomes.",
      ]}
      whatYouMayHear={[
        "Retina",
        "Eye exam under anesthesia",
        "Genetic testing",
        "Tumor size and location",
        "Eye‑preserving treatment",
      ]}
      whatFamiliesNotice={[
        "A white glow or reflection in the pupil (often seen in photos)",
        "Eyes that appear misaligned or crossed",
        "Redness or swelling of the eye",
        "Vision problems or poor tracking",
        "Pain or irritation in the eye (less common)",
      ]}
      questionsToAsk={[
        "Is one eye or both eyes affected?",
        "What tests were used to make the diagnosis?",
        "What treatment options are recommended and why?",
        "Will treatment affect my child’s vision?",
        "Should other family members be tested or screened?",
      ]}
    />
  );
}