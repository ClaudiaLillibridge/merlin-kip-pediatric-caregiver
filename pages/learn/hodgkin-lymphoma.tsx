import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function HodgkinLymphomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Hodgkin Lymphoma"
      diagnosisName="Hodgkin Lymphoma"
      subtitle="A cancer of the lymphatic system"
      plainEnglish={[
        "Hodgkin Lymphoma is a type of cancer that starts in the lymphatic system, which is part of the body’s immune system.",
        "It occurs when certain white blood cells, called lymphocytes, begin to grow abnormally.",
        "These abnormal cells can collect in lymph nodes and other parts of the body.",
        "Hodgkin Lymphoma is less common in young children and is more often diagnosed in adolescents and young adults.",
      ]}
      whatYouMayHear={[
        "Lymph nodes",
        "Lymphatic system",
        "Biopsy",
        "Staging",
        "Chemotherapy",
      ]}
      whatFamiliesNotice={[
        "Swollen lymph nodes in the neck, chest, or underarms",
        "Fatigue or low energy",
        "Fever or night sweats",
        "Unexplained weight loss",
        "Itching or skin discomfort",
      ]}
      questionsToAsk={[
        "Which lymph nodes are involved?",
        "What tests were used to determine the stage?",
        "What treatments are recommended and why?",
        "What side effects should we expect during treatment?",
        "Who should we contact if symptoms worsen?",
      ]}
    />
  );
}