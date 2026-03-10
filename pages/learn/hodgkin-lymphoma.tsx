
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function HodgkinLymphomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Hodgkin Lymphoma"
      diagnosisName="Hodgkin Lymphoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Hodgkin lymphoma is a cancer of the lymphatic system (part of the immune system).",
        "It often starts in lymph nodes and can cause swelling in the neck, chest, or other areas.",
        "Treatment is planned based on where it is and how the body is affected.",
        "Your team will walk you through the stage and the plan step by step.",
      ]}
      whatYouMayHear={[
        "Lymph nodes: small glands that help fight infection",
        "Biopsy: confirms the diagnosis",
        "Imaging (CT/PET): helps see where disease is present",
        "Staging: helps guide treatment intensity",
        "Chemotherapy: main treatment",
        "Radiation therapy: sometimes used depending on the plan",
      ]}
      whatFamiliesNotice={[
        "Swollen lymph nodes (often painless)",
        "Cough or chest symptoms if nodes are in the chest",
        "Fatigue",
        "Fever or night sweats (sometimes)",
        "Itching or weight changes (sometimes)",
      ]}
      questionsToAsk={[
        "What stage is it and what does that mean for our plan?",
        "What tests are needed before treatment starts?",
        "What side effects should we expect this week?",
        "What symptoms should prompt an urgent call?",
        "Who do we contact after hours?",
      ]}
    />
  );
}
