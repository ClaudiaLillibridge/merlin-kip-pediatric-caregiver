
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function RetinoblastomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Retinoblastoma"
      diagnosisName="Retinoblastoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Retinoblastoma is a cancer that starts in the retina (the light-sensing layer of the eye).",
        "It is most often diagnosed in young children.",
        "Treatment depends on whether one or both eyes are involved and how the eye is affected.",
        "Your team will focus on safety, vision, and long-term support.",
      ]}
      whatYouMayHear={[
        "Eye exam under anesthesia (EUA): detailed eye exam while asleep",
        "Imaging: helps understand the eye and surrounding area",
        "Genetics: sometimes testing is recommended to guide care",
        "Local therapies: treatments directed at the eye (when appropriate)",
        "Chemotherapy: may be used depending on the plan",
        "Vision support services: help over time",
      ]}
      whatFamiliesNotice={[
        "A white glow in the pupil in photos (sometimes called “white reflex”)",
        "Eye turning inward or outward",
        "Redness or swelling (sometimes)",
        "Vision changes (hard to detect in very young children)",
      ]}
      questionsToAsk={[
        "Is one eye or both eyes affected?",
        "What is our treatment plan and goals (safety, vision)?",
        "Do we need genetic testing or counseling?",
        "What should we watch for at home?",
        "Who do we call after hours with urgent concerns?",
      ]}
    />
  );
}
