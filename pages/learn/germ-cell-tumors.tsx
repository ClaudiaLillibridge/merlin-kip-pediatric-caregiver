import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function GermCellTumorsPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Germ Cell Tumors"
      diagnosisName="Germ Cell Tumors"
      subtitle="Tumors that develop from cells involved in reproduction"
      plainEnglish={[
        "Germ cell tumors are a group of tumors that start from germ cells, which are the cells that normally develop into eggs or sperm.",
        "In children, germ cell tumors can form in different parts of the body, not just the ovaries or testicles.",
        "They may occur in the abdomen, chest, brain, or other areas along the body’s midline.",
        "Some germ cell tumors are benign (not cancer), while others are malignant and require treatment.",
      ]}
      whatYouMayHear={[
        "Germ cells",
        "Tumor markers",
        "Imaging scans (ultrasound, CT, MRI)",
        "Biopsy or surgical removal",
        "Chemotherapy",
      ]}
      whatFamiliesNotice={[
        "A lump or swelling, depending on where the tumor is located",
        "Abdominal pain or swelling",
        "Breathing problems if the tumor is in the chest",
        "Headaches or neurologic symptoms if the tumor is in the brain",
        "Early puberty or hormone changes (in some cases)",
      ]}
      questionsToAsk={[
        "Where is the tumor located?",
        "Is the tumor benign or malignant?",
        "What tests were used to confirm the diagnosis?",
        "What treatments are recommended for this type of tumor?",
        "Who should we contact if new symptoms appear or worsen?",
      ]}
    />
  );
}