export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  type: "Freelance" | "Final Project" | "Internship" | "Organization";
  points: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Aug 2026 — Present",
    role: "Freelance Full-Stack Developer",
    org: "Independent — Sidoarjo",
    type: "Freelance",
    points: [
      "Designed and developed the Customer Complaint System, a web application that replaces informal complaint tracking with a structured, fully documented workflow. Every complaint must pass investigation, corrective action, and multi-department approval before it can be closed.",
      "Built complaint submission with mandatory field validation and supporting attachments, so no complaint can be filed incomplete.",
      "Implemented an admin investigation workflow (warranty period, project reference, investigator, findings) where each step requires its own notes and attachments before moving forward.",
      "Created corrective action tracking that records the root cause, action taken, responsible person, and evidence, giving a clear before/after trail.",
      "Added multi-department sign-off (quality control, engineering, commercial) before a resolution is sent back to the customer for final confirmation.",
      "Designed a customer approve/reject flow: a rejection automatically opens a linked revision case that carries over the relevant data, with a bounded closure path instead of an endless loop.",
      "Generated formal PDF reports for closed complaints, each with a QR code for verifying the document's authenticity.",
    ],
    tags: ["Laravel", "Filament", "PDF Generation", "Workflow Design"],
  },
  {
    period: "Jan 2026 — Jul 2026",
    role: "Software Developer (Final Project)",
    org: "Politeknik Negeri Madiun — Kota Madiun",
    type: "Final Project",
    points: [
      "Designed and developed STJ Tracker, a bus monitoring system for PO Sudiro Tungga Jaya, as my final project. It consists of a web-based admin dashboard and two Android applications (one for bus crew, one for passengers).",
      "Built the admin dashboard with Laravel, Inertia.js, and React for managing fleets, routes, and trip history.",
      "Developed the crew app with Kotlin and Jetpack Compose to send real-time GPS location during trips.",
      "Implemented live tracking using Firebase Realtime Database and the Google Maps API.",
      "Designed and optimized the database schema, then deployed the system to a VPS (PHP-FPM and Nginx).",
      "Worked independently on the whole development cycle: requirements, design, implementation, testing, and deployment.",
    ],
    tags: ["Laravel", "Inertia.js", "React", "Kotlin", "Jetpack Compose", "Firebase", "Google Maps"],
  },
  {
    period: "Jul 2025 — Dec 2025",
    role: "Software Development Intern",
    org: "PT INKA Multi Solusi — Madiun",
    type: "Internship",
    points: [
      "Completed an internship in the Information Technology (IT) department, under the Human Resources and Risk Management division.",
      "Developed Kasbon Online, a web-based application built with Laravel to support and streamline the company's employee cash advance management.",
      "Participated in web development activities, IT technical support, and data management to support the company's operational needs.",
    ],
    tags: ["Laravel", "PHP", "MySQL"],
  },
  {
    period: "2024 — 2025",
    role: "Coordinator, Human Resources Division (PSDM)",
    org: "HIMATIF",
    type: "Organization",
    points: [
      "Coordinated the human resources division (PSDM) of the student association.",
      "Served as event chair of the study program orientation (masa pengenalan program studi).",
    ],
    tags: ["Leadership", "Event Management", "Teamwork"],
  },
];

export const education = {
  school: "Politeknik Negeri Madiun",
  program: "D3 Information Technology",
  period: "2023 — 2026",
  gpa: "3.28 / 4.00",
  note: "Associate degree (Diploma III) in Information Technology, graduated with a GPA of 3.28 out of 4.00.",
};

export const highSchool = {
  school: "Hang Tuah 5 Senior High School",
  program: "Mathematics and Natural Sciences (MIPA)",
  period: "2020 — 2023",
};

export const training = [
  "Web Development (PHP)",
  "Laravel",
  "Android Development",
  "Kotlin",
  "Flutter",
  "Database Management",
  "Computer Networking",
  "IT Support",
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
