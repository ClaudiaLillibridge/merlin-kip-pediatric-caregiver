import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function OsteosarcomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Osteosarcoma"
      diagnosisName="Osteosarcoma"
      subtitle="A cancer that starts in the bones"
      plainEnglish={[
        "Osteosarcoma is a type of cancer that begins in the bone.",
        "It most often develops in areas where bones are growing quickly, such as around the knee, upper arm, or pelvis.",
        "Osteosarcoma is more commonly diagnosed in children and teenagers.",
        "With current treatment approaches, many children with osteosarcoma can be treated successfully.",
      ]}
      whatYouMayHear={[
        "Bone tumor",
        "Imaging scans (X‑ray, MRI, CT)",
        "Biopsy",
        "Chemotherapy",
        "Surgery",
      ]}
      whatFamiliesNotice={[
        "Bone pain that may worsen over time",
        "Swelling or a lump near a bone or joint",
        "Limping or difficulty using an arm or leg",
        "Pain that is worse at night or with activity",
        "Occasional fractures after minor injury",
      ]}
      questionsToAsk={[
        "Which bone is affected?",
        "What tests were used to confirm the diagnosis?",
        "What treatment steps are recommended and in what order?",
        "Will surgery be needed, and what does recovery look like?",
        "Who should we contact if pain or swelling suddenly worsens?",
      ]}
    />
  );
}