export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  type: "Internship" | "Organization";
  points: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jul 2025 — Dec 2025",
    role: "Software Development Intern",
    org: "PT INKA Multi Solusi — Madiun",
    type: "Internship",
    points: [
      "Interned in the Information Technology (IT) department, supporting the Human Resources and Risk Management division.",
      "Developed Kasbon Online, a web application for managing cash advance and business trip requests.",
      "Built a Customer Complaint System using Laravel 13 and Filament.",
      "Worked with Laravel, PHP, and MySQL in a real company environment.",
      "Gained hands-on experience in web development, IT technical support, and data management.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Filament"],
  },
  {
    period: "2024 — 2025",
    role: "Coordinator, Human Resources Division (PSDM)",
    org: "HIMATIF",
    type: "Organization",
    points: [
      "Coordinated the human resources division of the student association.",
      "Served as chairperson of the study program orientation event (masa pengenalan program studi).",
    ],
    tags: ["Leadership", "Event Management", "Teamwork"],
  },
];

export const education = {
  school: "Politeknik Negeri Madiun",
  program: "D3 Information Technology",
  period: "2023 — 2026",
  gpa: "3.28 / 4.00",
  note: "Diploma III in Information Technology (Teknologi Informasi), graduated with a GPA of 3.28 out of 4.00.",
};

export const training = [
  "Web Development (PHP)",
  "Laravel",
  "Android Development",
  "Kotlin",
  "Flutter",
  "Database Management",
  "Team Coordination",
  "IT Project Management",
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "EPT score 486" },
];

export const certifications = [
  {
    title: "Junior Cyber Security",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
  },
  {
    title: "English Proficiency Test (EPT)",
    issuer: "Score 486",
  },
];
