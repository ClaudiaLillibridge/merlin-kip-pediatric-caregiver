
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function BrainAndCNSTumorsPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Brain and Central Nervous System Tumors"
      diagnosisName="Brain and Central Nervous System Tumors"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "These tumors start in the brain or spinal cord (the central nervous system).",
        "There are many types — treatment depends on the exact tumor type and location.",
        "Your team focuses on both treating the tumor and protecting brain function over time.",
        "It’s normal to feel overwhelmed — you can take this one step at a time.",
      ]}
      whatYouMayHear={[
        "MRI/CT: imaging used to see the brain/spine",
        "Neurosurgery: surgery to remove tumor or get a biopsy sample",
        "Biopsy/pathology: tells the exact tumor type",
        "Radiation therapy: targeted treatment for some tumor types",
        "Chemotherapy: medicine that treats cancer cells",
        "Steroids: may reduce swelling and symptoms",
      ]}
      whatFamiliesNotice={[
        "Headaches or nausea/vomiting (especially in the morning)",
        "Balance or walking changes",
        "Vision changes",
        "Seizures (sometimes the first symptom)",
        "Changes in energy, mood, or behavior",
      ]}
      questionsToAsk={[
        "What is the exact tumor type and where is it located?",
        "What tests do we need next to guide treatment?",
        "What symptoms should we call about right away?",
        "What are the goals of treatment for our child?",
        "Who should we contact after hours with urgent concerns?",
      ]}
    />
  );
}
