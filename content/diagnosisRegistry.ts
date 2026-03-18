export type DiagnosisStatus = "ready" | "comingSoon";

export type DiagnosisReference = {
  label: string;
  url: string;
};

export type DiagnosisVisual = {
  emoji: string;          // simple “visual cue”
  label: string;          // short body-area tag
};

export type DiagnosisItem = {
  title: string;
  href: string;
  specialty: "oncology" | "neurology";
  status: DiagnosisStatus;

  // ✅ NEW (optional enhancements)
  visual?: DiagnosisVisual;
  references?: DiagnosisReference[];
};

export const diagnosisRegistry: DiagnosisItem[] = [
  // =========================
  // Oncology — READY
  // =========================
  {
    title: "Acute Lymphoblastic Leukemia (ALL)",
    href: "/learn/all",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🩸", label: "Blood / bone marrow" },
    references: [
      { label: "NCI PDQ: Childhood Acute Lymphoblastic Leukemia (Patient)", url: "https://www.cancer.gov/types/leukemia/patient/child-all-treatment-pdq" },
    ],
  },
  {
    title: "Acute Myeloid Leukemia (AML)",
    href: "/learn/aml",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🩸", label: "Blood / bone marrow" },
    references: [
      { label: "NCI PDQ: Childhood AML/Other Myeloid Malignancies (Patient)", url: "https://www.cancer.gov/types/leukemia/patient/child-aml-treatment-pdq" },
    ],
  },
  {
    title: "Neuroblastoma",
    href: "/learn/neuroblastoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧠", label: "Nerve tissue / adrenal area" },
    references: [
      { label: "NCI PDQ: Neuroblastoma Treatment (Patient)", url: "https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq" },
    ],
  },
  {
    title: "Wilms Tumor",
    href: "/learn/wilms-tumor",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🫁", label: "Kidney" },
    references: [
      // NCI syndication version (still NCI PDQ content)
      { label: "NCI PDQ: Wilms Tumor & Other Childhood Kidney Tumors (Patient content)", url: "https://www.myactivehealth.com/hwcontent/content/nci/ncicdr0000415235.html" },
    ],
  },
  {
    title: "Hodgkin Lymphoma",
    href: "/learn/hodgkin-lymphoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧫", label: "Lymph system" },
    references: [
      { label: "NCI PDQ: Childhood Hodgkin Lymphoma Treatment (Patient)", url: "https://www.cancer.gov/types/lymphoma/patient/child-hodgkin-treatment-pdq" },
    ],
  },
  {
    title: "Non-Hodgkin Lymphoma",
    href: "/learn/non-hodgkin-lymphoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧫", label: "Lymph system" },
    references: [
      { label: "NCI PDQ: Childhood Non-Hodgkin Lymphoma Treatment (Patient)", url: "https://www.cancer.gov/types/lymphoma/patient/child-nhl-treatment-pdq" },
    ],
  },
  {
    title: "Brain & CNS Tumors",
    href: "/learn/cns-tumors",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧠", label: "Brain / spinal cord" },
    references: [
      { label: "NCI PDQ: Pediatric Cancer Treatment Summaries (Browse brain tumor topics)", url: "https://www.cancer.gov/publications/pdq/information-summaries/pediatric-treatment" },
    ],
  },
  {
    title: "Rhabdomyosarcoma",
    href: "/learn/rhabdomyosarcoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "💪", label: "Muscle / soft tissue" },
    references: [
      { label: "NCI PDQ: Childhood Rhabdomyosarcoma Treatment (Patient)", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/patient/rhabdomyosarcoma-treatment-pdq" },
    ],
  },
  {
    title: "Osteosarcoma",
    href: "/learn/osteosarcoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🦴", label: "Bone" },
    references: [
      { label: "NCI PDQ: Osteosarcoma Treatment (Patient)", url: "https://www.cancer.gov/types/bone/patient/osteosarcoma-treatment-pdq" },
    ],
  },
  {
    title: "Ewing Sarcoma",
    href: "/learn/ewing-sarcoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🦴", label: "Bone / soft tissue" },
    references: [
      { label: "NCI PDQ: Ewing Sarcoma Treatment (Patient)", url: "https://www.cancer.gov/types/bone/patient/ewing-treatment-pdq" },
    ],
  },
  {
    title: "Retinoblastoma",
    href: "/learn/retinoblastoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "👁️", label: "Eye (retina)" },
    references: [
      { label: "NCI PDQ: Retinoblastoma Treatment (Patient)", url: "https://www.cancer.gov/types/retinoblastoma/patient/retinoblastoma-treatment-pdq" },
    ],
  },
  {
    title: "Hepatoblastoma",
    href: "/learn/hepatoblastoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🫀", label: "Liver" },
    references: [
      { label: "NCI: Childhood Liver Cancer (overview; includes hepatoblastoma)", url: "https://www.cancer.gov/types/liver/childhood-liver-cancer" },
    ],
  },
  {
    title: "Medulloblastoma",
    href: "/learn/medulloblastoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧠", label: "Brain (cerebellum)" },
    references: [
      { label: "NCI PDQ: Childhood Medulloblastoma & Other CNS Embryonal Tumors (Patient)", url: "https://www.cancer.gov/types/brain/patient/child-cns-embryonal-treatment-pdq" },
    ],
  },
  {
    title: "Germ Cell Tumors",
    href: "/learn/germ-cell-tumors",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧬", label: "Germ cells (varies by location)" },
    references: [
      { label: "NCI PDQ: Childhood Extracranial Germ Cell Tumors Treatment (Patient)", url: "https://www.cancer.gov/types/extracranial-germ-cell/patient/germ-cell-treatment-pdq" },
    ],
  },
  {
    title: "Ependymoma",
    href: "/learn/ependymoma",
    specialty: "oncology",
    status: "ready",
    visual: { emoji: "🧠", label: "Brain / spinal cord" },
    references: [
      { label: "NCI: Childhood Ependymoma (Patient overview)", url: "https://www.cancer.gov/types/brain/patient/childhood-ependymoma" },
    ],
  },

  // =========================
  // Oncology — COMING SOON (keep as placeholders)
  // =========================
  {
    title: "Coming soon: (add more oncology diagnoses here)",
    href: "/learn/coming-soon-oncology",
    specialty: "oncology",
    status: "comingSoon",
    visual: { emoji: "✨", label: "More diagnoses planned" },
    references: [
      { label: "NCI PDQ: Pediatric Cancer Treatment Summaries", url: "https://www.cancer.gov/publications/pdq/information-summaries/pediatric-treatment" },
    ],
  },

  // =========================
  // Neurology — READY
  // =========================
  {
    title: "Epilepsy",
    href: "/learn/epilepsy",
    specialty: "neurology",
    status: "ready",
    visual: { emoji: "⚡", label: "Brain electrical activity" },
    references: [
      { label: "MedlinePlus: Epilepsy", url: "https://medlineplus.gov/epilepsy.html" },
    ],
  },
  {
    title: "Cerebral Palsy",
    href: "/learn/cerebral-palsy",
    specialty: "neurology",
    status: "ready",
    visual: { emoji: "🧠", label: "Movement / posture" },
    references: [
      { label: "MedlinePlus: Cerebral Palsy", url: "https://medlineplus.gov/cerebralpalsy.html" },
      { label: "CDC: About Cerebral Palsy", url: "https://www.cdc.gov/cerebral-palsy/about/index.html" },
    ],
  },
  {
    title: "Traumatic Brain Injury",
    href: "/learn/traumatic-brain-injury",
    specialty: "neurology",
    status: "ready",
    visual: { emoji: "🪖", label: "Brain injury / concussion" },
    references: [
      { label: "CDC: Traumatic Brain Injury & Concussion", url: "https://www.cdc.gov/traumatic-brain-injury/index.html" },
      { label: "CDC HEADS UP: Parent Concussion Fact Sheet (PDF)", url: "https://www.cdc.gov/heads-up/media/pdfs/schools/TBI_factsheets_PARENTS-508-a.pdf" },
    ],
  },
  {
    title: "Developmental Delay",
    href: "/learn/developmental-delay",
    specialty: "neurology",
    status: "ready",
    visual: { emoji: "🌱", label: "Milestones / development" },
    references: [
      { label: "CDC: Developmental Monitoring & Screening (Act Early)", url: "https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html" },
      { label: "MedlinePlus: Developmental & Behavioral Screening Tests", url: "https://medlineplus.gov/lab-tests/developmental-and-behavioral-screening-tests/" },
    ],
  },
  {
    title: "Headache & Migraine Disorders",
    href: "/learn/headache-migraine-disorders",
    specialty: "neurology",
    status: "ready",
    visual: { emoji: "💡", label: "Head pain / migraine" },
    references: [
      { label: "MedlinePlus: Migraine", url: "https://medlineplus.gov/migraine.html" },
      { label: "HealthyChildren.org: Migraine Headaches in Kids", url: "https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/Migraine-Headaches-in-Children.aspx" },
    ],
  },
];