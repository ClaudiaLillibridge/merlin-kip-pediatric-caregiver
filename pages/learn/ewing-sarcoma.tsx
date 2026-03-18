import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function EwingSarcomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Ewing Sarcoma"
      diagnosisName="Ewing Sarcoma"
      subtitle="A cancer that can affect bones or soft tissue"
      plainEnglish={[
        "Ewing sarcoma is a type of cancer that most often starts in the bone, but it can also begin in soft tissues around the bone.",
        "It commonly affects children and teenagers, especially during periods of rapid growth.",
        "Ewing sarcoma can develop in different parts of the body, including the legs, pelvis, arms, chest, or spine.",
        "Although it can be aggressive, many children respond well to treatment when it is diagnosed and treated promptly.",
      ]}
      whatYouMayHear={[
        "Bone or soft tissue tumor",
        "Imaging scans (X‑ray, MRI, CT)",
        "Biopsy",
        "Chemotherapy",
        "Radiation therapy",
      ]}
      whatFamiliesNotice={[
        "Bone pain that may get worse over time",
        "Swelling or a lump near a bone",
        "Pain that may increase at night or with activity",
        "Fever or fatigue",
        "Difficulty moving the affected area",
      ]}
      questionsToAsk={[
        "Where is the tumor located?",
        "What tests were used to confirm the diagnosis?",
        "What treatment options are recommended and why?",
        "Will surgery or radiation be part of treatment?",
        "Who should we contact if pain or symptoms suddenly worsen?",
      ]}
    />
  );
}