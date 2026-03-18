import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function AcuteMyeloidLeukemiaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Acute Myeloid Leukemia (AML)"
      diagnosisName="Acute Myeloid Leukemia"
      subtitle="A less common but serious childhood blood cancer"
      plainEnglish={[
        "Acute Myeloid Leukemia, or AML, is a cancer of the blood and bone marrow.",
        "It happens when the body makes too many immature blood cells called myeloid blasts.",
        "These abnormal cells crowd out healthy blood cells, which can affect infection fighting, oxygen delivery, and blood clotting.",
        "AML is less common than ALL in children, but it often requires intensive treatment early on.",
      ]}
      whatYouMayHear={[
        "Bone marrow biopsy",
        "Myeloid cells",
        "Blasts",
        "Induction therapy",
        "Remission",
      ]}
      whatFamiliesNotice={[
        "Fatigue or weakness",
        "Frequent infections or fevers",
        "Easy bruising or bleeding",
        "Paleness or shortness of breath",
        "Bone or joint pain",
      ]}
      questionsToAsk={[
        "What subtype of AML does my child have?",
        "What tests were used to confirm the diagnosis?",
        "What does the first phase of treatment involve?",
        "What side effects should we watch for at home?",
        "Who should we contact if symptoms change suddenly?",
      ]}
    />
  );
}