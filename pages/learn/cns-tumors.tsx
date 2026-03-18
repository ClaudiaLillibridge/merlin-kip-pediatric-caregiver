import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function BrainAndCNSTumorsPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Brain & Central Nervous System (CNS) Tumors"
      diagnosisName="Brain & Central Nervous System Tumors"
      subtitle="Tumors that affect the brain or spinal cord"
      plainEnglish={[
        "Brain and central nervous system (CNS) tumors are growths that form in the brain or spinal cord.",
        "The brain and spinal cord control many important functions, including movement, thinking, balance, and breathing.",
        "There are many different types of brain and CNS tumors, and they can behave very differently from one another.",
        "Some tumors grow slowly, while others grow more quickly and may require urgent treatment.",
      ]}
      whatYouMayHear={[
        "Brain tumor type",
        "Tumor location",
        "Imaging scans (MRI or CT)",
        "Biopsy",
        "Neurologic symptoms",
      ]}
      whatFamiliesNotice={[
        "Headaches, especially in the morning",
        "Nausea or vomiting",
        "Changes in vision, balance, or coordination",
        "Seizures",
        "Changes in behavior, mood, or school performance",
      ]}
      questionsToAsk={[
        "Where is the tumor located in the brain or spinal cord?",
        "What type of tumor does my child have?",
        "What tests were used to make the diagnosis?",
        "What treatment options are recommended and why?",
        "Who should we call if new symptoms appear?",
      ]}
    />
  );
}