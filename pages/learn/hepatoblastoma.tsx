import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function HepatoblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Hepatoblastoma"
      diagnosisName="Hepatoblastoma"
      subtitle="A rare childhood cancer that starts in the liver"
      plainEnglish={[
        "Hepatoblastoma is a type of cancer that begins in the liver.",
        "It most often affects infants and very young children, usually under the age of three.",
        "The liver plays an important role in digestion, filtering the blood, and storing energy.",
        "With coordinated treatment, many children with hepatoblastoma can have very good outcomes.",
      ]}
      whatYouMayHear={[
        "Liver tumor",
        "Imaging scans (ultrasound, CT, MRI)",
        "Alpha‑fetoprotein (AFP)",
        "Chemotherapy",
        "Surgery",
      ]}
      whatFamiliesNotice={[
        "Swelling or a firm mass in the abdomen",
        "Abdominal discomfort or pain",
        "Poor appetite or weight loss",
        "Nausea or vomiting",
        "Fatigue or irritability",
      ]}
      questionsToAsk={[
        "How large is the tumor and where is it located in the liver?",
        "What tests were used to confirm the diagnosis?",
        "What treatments are recommended and in what order?",
        "Will surgery be needed, and what does recovery look like?",
        "Who should we contact if symptoms change or worsen?",
      ]}
    />
  );
}