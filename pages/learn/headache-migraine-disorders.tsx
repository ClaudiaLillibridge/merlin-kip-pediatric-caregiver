import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function HeadacheMigraineDisordersPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Headache & Migraine Disorders"
      diagnosisName="Headache & Migraine Disorders"
      subtitle="Conditions that cause frequent or severe headaches"
      plainEnglish={[
        "Headache and migraine disorders are conditions that cause repeated headaches or head pain.",
        "Migraines are a specific type of headache that can be more intense and may include other symptoms, such as nausea or sensitivity to light.",
        "Headaches can vary in how often they happen, how long they last, and how severe they feel.",
        "Many children with headache or migraine disorders can improve with the right treatment plan and lifestyle supports.",
      ]}
      whatYouMayHear={[
        "Migraine",
        "Tension headache",
        "Triggers",
        "Preventive medication",
        "Headache diary",
      ]}
      whatFamiliesNotice={[
        "Frequent complaints of head pain",
        "Sensitivity to light, sound, or smells",
        "Nausea or vomiting with headaches",
        "Need to rest or lie down during headaches",
        "Headaches that interfere with school or activities",
      ]}
      questionsToAsk={[
        "What type of headaches is my child having?",
        "Are there triggers we should watch for or avoid?",
        "What treatments can help prevent or reduce headaches?",
        "When should we call the care team or seek urgent care?",
        "What can we do at home to support headache management?",
      ]}
    />
  );
}