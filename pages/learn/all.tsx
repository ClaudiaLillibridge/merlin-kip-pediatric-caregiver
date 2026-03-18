import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function AcuteLymphoblasticLeukemiaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Acute Lymphoblastic Leukemia (ALL)"
      diagnosisName="Acute Lymphoblastic Leukemia"
      subtitle="A common childhood blood cancer"
      plainEnglish={[
        "Acute Lymphoblastic Leukemia, or ALL, is a cancer of the blood and bone marrow.",
        "It happens when the body makes too many immature white blood cells called lymphoblasts.",
        "These abnormal cells crowd out healthy blood cells, which can affect how the body fights infection, carries oxygen, and stops bleeding.",
        "ALL is the most common type of cancer diagnosed in children.",
      ]}
      whatYouMayHear={[
        "Bone marrow",
        "White blood cells",
        "Blasts or lymphoblasts",
        "Remission",
        "Chemotherapy phases",
      ]}
      whatFamiliesNotice={[
        "Fatigue or low energy",
        "Frequent infections or fevers",
        "Easy bruising or bleeding",
        "Bone or joint pain",
        "Paleness or shortness of breath",
      ]}
      questionsToAsk={[
        "What subtype of ALL does my child have?",
        "What tests were used to make the diagnosis?",
        "What does treatment look like in the first few weeks?",
        "What side effects should we watch for at home?",
        "Who should we call if we’re worried?",
      ]}
    />
  );
}