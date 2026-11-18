import type { Bi } from "@/i18n";

export type ExperienceItem = {
  key: string;
  period: Bi;
  role: Bi;
  org: Bi;
  type: Bi;
  points: Bi<string[]>;
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    key: "freelance",
    period: { en: "Aug 2026 — Present", id: "Agu 2026 — Sekarang" },
    role: { en: "Freelance Full-Stack Developer", id: "Freelance Full-Stack Developer" },
    org: { en: "Independent — Sidoarjo", id: "Mandiri — Sidoarjo" },
    type: { en: "Freelance", id: "Freelance" },
    points: {
      en: [
        "Designed and developed the Customer Complaint System, a web application that replaces informal complaint tracking with a structured, fully documented workflow. Every complaint must pass investigation, corrective action, and multi-department approval before it can be closed.",
        "Built complaint submission with mandatory field validation and supporting attachments, so no complaint can be filed incomplete.",
        "Implemented an admin investigation workflow (warranty period, project reference, investigator, findings) where each step requires its own notes and attachments before moving forward.",
        "Created corrective action tracking that records the root cause, action taken, responsible person, and evidence, giving a clear before/after trail.",
        "Added multi-department sign-off (quality control, engineering, commercial) before a resolution is sent back to the customer for final confirmation.",
        "Designed a customer approve/reject flow: a rejection automatically opens a linked revision case that carries over the relevant data, with a bounded closure path instead of an endless loop.",
        "Generated formal PDF reports for closed complaints, each with a QR code for verifying the document's authenticity.",
      ],
      id: [
        "Merancang dan membangun Customer Complaint System, aplikasi web yang menggantikan pencatatan komplain informal dengan alur kerja terstruktur dan terdokumentasi penuh. Setiap komplain wajib melewati investigasi, tindakan korektif, dan persetujuan multi-departemen sebelum bisa ditutup.",
        "Membuat pengajuan komplain pelanggan dengan validasi kolom wajib dan lampiran pendukung, sehingga tidak ada komplain yang bisa diajukan dalam keadaan tidak lengkap.",
        "Mengimplementasikan alur investigasi admin (masa garansi, referensi proyek, penyelidik, temuan) di mana setiap langkah membutuhkan catatan dan lampiran sendiri sebelum bisa lanjut.",
        "Membuat pelacakan tindakan korektif yang mencatat akar masalah, tindakan yang dilakukan, penanggung jawab, dan bukti, sehingga ada jejak sebelum/sesudah yang jelas.",
        "Menambahkan persetujuan multi-departemen (quality control, engineering, commercial) sebelum solusi dikirim kembali ke pelanggan untuk konfirmasi akhir.",
        "Merancang alur setuju/tolak dari pelanggan: penolakan otomatis membuka kasus revisi yang terhubung dan membawa data terkait, dengan jalur penutupan yang terbatas, bukan siklus tanpa akhir.",
        "Menghasilkan laporan PDF resmi untuk komplain yang sudah ditutup, masing-masing dengan kode QR untuk memverifikasi keaslian dokumen.",
      ],
    },
    tags: ["Laravel", "Filament", "PDF Generation", "Workflow Design"],
  },
  {
    key: "final-project",
    period: { en: "Jan 2026 — Jul 2026", id: "Jan 2026 — Jul 2026" },
    role: { en: "Software Developer (Final Project)", id: "Software Developer (Tugas Akhir)" },
    org: { en: "Politeknik Negeri Madiun — Kota Madiun", id: "Politeknik Negeri Madiun — Kota Madiun" },
    type: { en: "Final Project", id: "Tugas Akhir" },
    points: {
      en: [
        "Designed and developed STJ Tracker, a bus monitoring system for PO Sudiro Tungga Jaya, as my final project. It consists of a web-based admin dashboard and two Android applications (one for bus crew, one for passengers).",
        "Built the admin dashboard with Laravel, Inertia.js, and React for managing fleets, routes, and trip history.",
        "Developed the crew app with Kotlin and Jetpack Compose to send real-time GPS location during trips.",
        "Implemented live tracking using Firebase Realtime Database and the Google Maps API.",
        "Designed and optimized the database schema, then deployed the system to a VPS (PHP-FPM and Nginx).",
        "Worked independently on the whole development cycle: requirements, design, implementation, testing, and deployment.",
      ],
      id: [
        "Merancang dan membangun STJ Tracker, sistem pemantauan bus untuk PO Sudiro Tungga Jaya, sebagai tugas akhir saya. Sistem ini terdiri dari dashboard admin berbasis web dan dua aplikasi Android (untuk kru bus dan penumpang).",
        "Membangun dashboard admin dengan Laravel, Inertia.js, dan React untuk mengelola armada, rute, dan riwayat perjalanan.",
        "Mengembangkan aplikasi kru dengan Kotlin dan Jetpack Compose untuk mengirim lokasi GPS secara real-time selama perjalanan.",
        "Mengimplementasikan pelacakan langsung dengan Firebase Realtime Database dan Google Maps API.",
        "Merancang dan mengoptimalkan skema database, lalu men-deploy sistem ke VPS (PHP-FPM dan Nginx).",
        "Mengerjakan seluruh siklus pengembangan secara mandiri: kebutuhan, desain, implementasi, pengujian, dan deployment.",
      ],
    },
    tags: ["Laravel", "Inertia.js", "React", "Kotlin", "Jetpack Compose", "Firebase", "Google Maps"],
  },
  {
    key: "inka-intern",
    period: { en: "Jul 2025 — Dec 2025", id: "Jul 2025 — Des 2025" },
    role: { en: "Software Development Intern", id: "Software Development Intern" },
    org: { en: "PT INKA Multi Solusi — Madiun", id: "PT INKA Multi Solusi — Madiun" },
    type: { en: "Internship", id: "Magang" },
    points: {
      en: [
        "Completed an internship in the Information Technology (IT) department, under the Human Resources and Risk Management division.",
        "Developed Kasbon Online, a web-based application built with Laravel to support and streamline the company's employee cash advance management.",
        "Participated in web development activities, IT technical support, and data management to support the company's operational needs.",
      ],
      id: [
        "Menyelesaikan magang di departemen Teknologi Informasi (TI), di bawah divisi Human Resources dan Risk Management.",
        "Mengembangkan Kasbon Online, aplikasi berbasis web dengan Laravel untuk mendukung dan menyederhanakan pengelolaan uang muka (kasbon) karyawan perusahaan.",
        "Ikut serta dalam kegiatan pengembangan web, dukungan teknis TI, dan pengelolaan data untuk mendukung kebutuhan operasional perusahaan.",
      ],
    },
    tags: ["Laravel", "PHP", "MySQL"],
  },
  {
    key: "himatif",
    period: { en: "2024 — 2025", id: "2024 — 2025" },
    role: {
      en: "Coordinator, Human Resources Division (PSDM)",
      id: "Koordinator Divisi Sumber Daya Manusia (PSDM)",
    },
    org: { en: "HIMATIF", id: "HIMATIF" },
    type: { en: "Organization", id: "Organisasi" },
    points: {
      en: [
        "Coordinated the human resources division (PSDM) of the student association.",
        "Served as event chair of the study program orientation (masa pengenalan program studi).",
      ],
      id: [
        "Mengoordinasi divisi sumber daya manusia (PSDM) himpunan mahasiswa.",
        "Menjabat sebagai ketua pelaksana masa pengenalan program studi.",
      ],
    },
    tags: ["Leadership", "Event Management", "Teamwork"],
  },
];

export const education = {
  school: "Politeknik Negeri Madiun",
  program: { en: "D3 Information Technology", id: "D3 Teknologi Informasi" } as Bi,
  period: "2023 — 2026",
  gpa: "3.28 / 4.00",
  note: {
    en: "Associate degree (Diploma III) in Information Technology, graduated with a GPA of 3.28 out of 4.00.",
    id: "Diploma III (Associate Degree) Teknologi Informasi, lulus dengan IPK 3,28 dari 4,00.",
  } as Bi,
};

export const highSchool = {
  school: "Hang Tuah 5 Senior High School",
  program: {
    en: "Mathematics and Natural Sciences (MIPA)",
    id: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
  } as Bi,
  period: "2020 — 2023",
};

export const training: Bi<string[]> = {
  en: [
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
  ],
  id: [
    "Pengembangan Web (PHP)",
    "Laravel",
    "Pengembangan Android",
    "Kotlin",
    "Flutter",
    "Manajemen Basis Data",
    "Jaringan Komputer",
    "Dukungan TI (IT Support)",
    "Koordinasi Tim",
    "Manajemen Proyek TI",
  ],
};

export const languages: { name: Bi; level: Bi }[] = [
  {
    name: { en: "Indonesian", id: "Bahasa Indonesia" },
    level: { en: "Native", id: "Bahasa ibu" },
  },
  {
    name: { en: "English", id: "Bahasa Inggris" },
    level: { en: "EPT score 486", id: "Skor EPT 486" },
  },
];

export const certifications: { title: Bi; issuer: Bi }[] = [
  {
    title: { en: "Junior Cyber Security", id: "Junior Cyber Security" },
    issuer: {
      en: "BNSP (National Professional Certification Agency)",
      id: "BNSP (Badan Nasional Sertifikasi Profesi)",
    },
  },
  {
    title: { en: "English Proficiency Test (EPT)", id: "English Proficiency Test (EPT)" },
    issuer: { en: "Score 486", id: "Skor 486" },
  },
];
