import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function WilmsTumorPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Wilms Tumor"
      diagnosisName="Wilms Tumor"
      subtitle="A childhood kidney cancer"
      plainEnglish={[
        "Wilms tumor is a type of cancer that starts in the kidneys.",
        "It is one of the most common kidney cancers in children and usually affects young children.",
        "Wilms tumor often grows as a single mass in one kidney, though it can sometimes affect both kidneys.",
        "With modern treatment approaches, many children with Wilms tumor have very good outcomes.",
      ]}
      whatYouMayHear={[
        "Kidney or renal tumor",
        "Imaging scans",
        "Surgery",
        "Chemotherapy",
        "Tumor stage",
      ]}
      whatFamiliesNotice={[
        "Swelling or a firm mass in the abdomen",
        "Abdominal pain",
        "Blood in the urine",
        "Fever or fatigue",
        "Loss of appetite",
      ]}
      questionsToAsk={[
        "Is the tumor affecting one or both kidneys?",
        "What tests were used to determine the stage?",
        "What treatments are recommended and why?",
        "Will surgery be needed, and when?",
        "Who should we contact if symptoms change?",
      ]}
    />
  );
}