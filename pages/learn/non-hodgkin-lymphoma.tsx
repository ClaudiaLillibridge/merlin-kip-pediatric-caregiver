
import { DiagnosisTemplate } from "./_diagnosis-template";

export default function NonHodgkinLymphomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Non-Hodgkin Lymphoma"
      diagnosisName="Non-Hodgkin Lymphoma"
      subtitle="A plain-language overview for caregivers (2–3 minute read)."
      plainEnglish={[
        "Non-Hodgkin lymphoma is a cancer of the lymphatic system (immune system).",
        "There are different subtypes — the subtype helps guide treatment.",
        "It can involve lymph nodes or other parts of the body.",
        "Your team will explain the exact type and the treatment plan.",
      ]}
      whatYouMayHear={[
        "Subtype: the specific kind of non-Hodgkin lymphoma",
        "Biopsy: confirms diagnosis and subtype",
        "CT/PET scans: imaging that helps guide treatment",
        "Staging: shows where disease is present",
        "Chemotherapy: main treatment",
        "Central line/port: helps give treatment and draw labs",
      ]}
      whatFamiliesNotice={[
        "Swollen lymph nodes",
        "Belly swelling/pain or fullness (depending on location)",
        "Cough or breathing symptoms (if in chest)",
        "Fatigue",
        "Fevers (sometimes)",
      ]}
      questionsToAsk={[
        "What subtype is it and how does that guide treatment?",
        "What tests are needed before treatment starts?",
        "What side effects should we watch for this week?",
        "What symptoms mean ‘call urgently’?",
        "Who do we contact after hours?",
      ]}
    />
  );
}
