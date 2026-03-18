import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function MedulloblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Medulloblastoma"
      diagnosisName="Medulloblastoma"
      subtitle="A type of childhood brain tumor"
      plainEnglish={[
        "Medulloblastoma is a type of brain tumor that usually starts in the lower back part of the brain, called the cerebellum.",
        "The cerebellum helps control balance, coordination, and some movement.",
        "Medulloblastoma most often affects children, but it can occur at any age.",
        "Because it is located in the brain, symptoms may appear quickly and often require prompt evaluation.",
      ]}
      whatYouMayHear={[
        "Cerebellum",
        "Brain imaging (MRI or CT scan)",
        "Hydrocephalus",
        "Surgery",
        "Radiation therapy",
      ]}
      whatFamiliesNotice={[
        "Headaches, especially in the morning",
        "Nausea or vomiting",
        "Problems with balance or walking",
        "Clumsiness or coordination changes",
        "Behavior or mood changes",
      ]}
      questionsToAsk={[
        "Where exactly is the tumor located in the brain?",
        "What tests were used to make the diagnosis?",
        "What treatments are recommended and in what order?",
        "Will treatment affect learning or development?",
        "Who should we contact if symptoms suddenly worsen?",
      ]}
    />
  );
}