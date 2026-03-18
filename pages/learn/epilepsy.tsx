import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function EpilepsyPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Epilepsy"
      diagnosisName="Epilepsy"
      subtitle="A condition that causes repeated seizures"
      plainEnglish={[
        "Epilepsy is a condition that affects the brain and causes repeated seizures.",
        "A seizure happens when there is a sudden change in the brain’s electrical activity.",
        "Epilepsy can look very different from one child to another, depending on the type of seizures they have.",
        "Many children with epilepsy can live full, active lives with the right treatment and support.",
      ]}
      whatYouMayHear={[
        "Seizure",
        "EEG (electroencephalogram)",
        "Anti‑seizure medication",
        "Neurologist",
        "Seizure type",
      ]}
      whatFamiliesNotice={[
        "Staring spells or brief pauses in activity",
        "Jerking or stiffening movements",
        "Loss of awareness or responsiveness",
        "Unusual movements, sensations, or behaviors",
        "Confusion or sleepiness after a seizure",
      ]}
      questionsToAsk={[
        "What type of seizures is my child having?",
        "What tests were used to make the diagnosis?",
        "What treatment options are available?",
        "What should we do if a seizure happens at home?",
        "Who should we contact if seizures change or worsen?",
      ]}
    />
  );
}