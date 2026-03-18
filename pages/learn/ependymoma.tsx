import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function EpendymomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Ependymoma"
      diagnosisName="Ependymoma"
      subtitle="A type of tumor that forms in the brain or spinal cord"
      plainEnglish={[
        "Ependymoma is a type of tumor that forms from ependymal cells, which line the spaces in the brain and spinal cord.",
        "These cells help produce and circulate cerebrospinal fluid, which cushions the brain and spinal cord.",
        "Ependymomas can occur in different parts of the central nervous system, including the brain or the spine.",
        "Symptoms and treatment depend on where the tumor is located and how it affects nearby structures.",
      ]}
      whatYouMayHear={[
        "Ependymal cells",
        "Central nervous system",
        "Brain or spinal cord tumor",
        "MRI imaging",
        "Surgery",
      ]}
      whatFamiliesNotice={[
        "Headaches or nausea, especially in the morning",
        "Vomiting",
        "Problems with balance or coordination",
        "Weakness or numbness in the arms or legs",
        "Changes in bladder or bowel control (if the spine is involved)",
      ]}
      questionsToAsk={[
        "Where is the tumor located in the brain or spinal cord?",
        "What tests were used to make the diagnosis?",
        "What treatment options are recommended and why?",
        "Will surgery be needed, and what are the goals of surgery?",
        "Who should we contact if symptoms suddenly worsen?",
      ]}
    />
  );
}