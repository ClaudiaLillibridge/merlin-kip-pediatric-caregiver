
export type SpecialtyId = "oncology" | "neurology";

export type Disease = {
  id: string;
  name: string;
  specialty: SpecialtyId;
};

export const diseasesBySpecialty: Record<SpecialtyId, Disease[]> = {
  oncology: [
    { id: "all", name: "Acute Lymphoblastic Leukemia (ALL)", specialty: "oncology" },
    { id: "aml", name: "Acute Myeloid Leukemia (AML)", specialty: "oncology" },
    { id: "cns-tumors", name: "Brain and Central Nervous System Tumors", specialty: "oncology" },
    { id: "neuroblastoma", name: "Neuroblastoma", specialty: "oncology" },
    { id: "wilms", name: "Wilms Tumor (Nephroblastoma)", specialty: "oncology" },
    { id: "hodgkin", name: "Hodgkin Lymphoma", specialty: "oncology" },
    { id: "non-hodgkin", name: "Non-Hodgkin Lymphoma", specialty: "oncology" },
    { id: "rhabdomyosarcoma", name: "Rhabdomyosarcoma", specialty: "oncology" },
    { id: "osteosarcoma", name: "Osteosarcoma", specialty: "oncology" },
    { id: "ewing", name: "Ewing Sarcoma", specialty: "oncology" },
    { id: "retinoblastoma", name: "Retinoblastoma", specialty: "oncology" },
    { id: "hepatoblastoma", name: "Hepatoblastoma", specialty: "oncology" },
    { id: "medulloblastoma", name: "Medulloblastoma", specialty: "oncology" },
    { id: "germ-cell", name: "Germ Cell Tumors", specialty: "oncology" },
    { id: "ependymoma", name: "Ependymoma", specialty: "oncology" },
  ],

  neurology: [
    { id: "epilepsy", name: "Epilepsy / Seizure Disorders", specialty: "neurology" },
    { id: "developmental-delay", name: "Developmental Delay", specialty: "neurology" },
    { id: "cerebral-palsy", name: "Cerebral Palsy", specialty: "neurology" },
    { id: "headaches", name: "Chronic Headaches / Migraines", specialty: "neurology" },
    { id: "brain-injury", name: "Traumatic Brain Injury", specialty: "neurology" },
    { id: "brain-malformation", name: "Brain Malformations", specialty: "neurology" },
    { id: "neuromuscular", name: "Neuromuscular Disorders", specialty: "neurology" },
    { id: "genetic-neuro", name: "Genetic Neurologic Conditions", specialty: "neurology" },
  ],
};
