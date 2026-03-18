import DiagnosisTemplate from "../../components/learn/DiagnosisTemplate";

export default function NonHodgkinLymphomaPage() {
  return (
    <DiagnosisTemplate
      pageTitle="Non‑Hodgkin Lymphoma"
      diagnosisName="Non‑Hodgkin Lymphoma"
      subtitle="A group of cancers that affect the lymphatic system"
      plainEnglish={[
        "Non‑Hodgkin Lymphoma is a type of cancer that begins in the lymphatic system, which helps the body fight infection.",
        "It occurs when certain white blood cells, called lymphocytes, grow and divide in an uncontrolled way.",
        "There are several different types of Non‑Hodgkin Lymphoma, and they can behave differently from one another.",
        "In children, Non‑Hodgkin Lymphoma often grows quickly but can respond very well to treatment.",
      ]}
      whatYouMayHear={[
        "Lymph nodes",
        "Lymphocytes",
        "Biopsy",
        "Subtype",
        "Staging scans",
      ]}
      whatFamiliesNotice={[
        "Swollen lymph nodes that do not go away",
        "Abdominal swelling or pain",
        "Shortness of breath or cough",
        "Fever or night sweats",
        "Fatigue or decreased energy",
      ]}
      questionsToAsk={[
        "What type of Non‑Hodgkin Lymphoma does my child have?",
        "Where in the body is the lymphoma located?",
        "What tests were used to determine the stage?",
        "What treatments are recommended for this subtype?",
        "Who should we call if symptoms change or worsen?",
      ]}
    />
  );
}
