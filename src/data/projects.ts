export type Feature = { title: string; description: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  featured: boolean;
  // ---- Detail halaman proyek (semua opsional: bagian yang kosong otomatis disembunyikan) ----
  role?: string;
  timeline?: string;  
  overview?: string;
  problem?: string;
  features?: Feature[];
  contributions?: string[];
  challenges?: string[];
  learnings?: string[];
  // Satu link tujuan proyek (GitHub, demo, Play Store, dll). Kosongkan jika belum ada.
  link?: string;
  // Teks tombol, default "Visit Project". Contoh: "View on GitHub".
  linkLabel?: string;
  // Caption untuk screenshot 1..4 (file: public/images/projects/<slug>/1.png .. 4.png)
  screenshotCaptions?: string[];
};

export const SCREENSHOT_COUNT = 4;

// Ubah `featured` untuk menentukan proyek yang tampil di homepage.
// Teks adalah DRAF — silakan ganti. Isi field yang kosong untuk memunculkan bagiannya di halaman detail.
export const projects: Project[] = [
  {
    slug: "stj-tracker",
    title: "STJ Tracker",
    category: "Mobile · Web · Real-time",
    summary:
      "A bus monitoring system with live GPS tracking, made of an admin dashboard, a crew app, and a passenger app.",
    stack: ["Kotlin", "Jetpack Compose", "Laravel", "React", "Firebase", "Google Maps"],
    featured: true,
    role: "Full-stack & Android Developer (solo project)",
    overview:
      "STJ Tracker is a bus monitoring ecosystem built for PO Sudiro Tungga Jaya. It connects buses, crews, passengers, and operators through live location data, so everyone can see where a bus is and when it is expected to arrive.",
    problem:
      "Operators need visibility over buses on the road, and passengers need reliable information about where their bus is. Without a shared real-time view, tracking depends on phone calls and guesswork.",
    features: [
      {
        title: "Live GPS tracking",
        description:
          "Crew devices send location updates to Firebase Realtime Database, which the dashboard and passenger app read in real time.",
      },
      {
        title: "Admin dashboard",
        description:
          "A web dashboard for operators to monitor active buses, manage routes, and review trip history on Google Maps.",
      },
      {
        title: "Crew app",
        description:
          "A native Android app for bus crews that shares trip status and location during a journey.",
      },
      {
        title: "Passenger app",
        description:
          "A native Android app that lets passengers follow a bus and see its estimated arrival.",
      },
    ],
    contributions: [
      "Designed and built the whole system alone, from database schema to the Android apps.",
      "Built the admin dashboard with Laravel, Inertia.js, and React.",
      "Developed the crew and passenger apps in Kotlin with Jetpack Compose.",
      "Integrated Firebase Realtime Database and the Google Maps API for tracking and route views.",
      "Deployed the dashboard to a production server and fixed issues found in real use.",
    ],
    challenges: [
      "Keeping location data accurate and up to date across several apps at once.",
      "Debugging production issues such as map library conflicts and stale state inside interval callbacks.",
      "Redesigning the database schema with better column types as the data grew.",
    ],
    learnings: [
      "Real-time systems need careful handling of state and timing on every client.",
      "Shipping to production teaches things a local environment never shows.",
    ],
    screenshotCaptions: [
      "Admin dashboard",
      "Route monitoring",
      "Crew app",
      "Passenger app",
    ],
  },
  {
    slug: "kasbon-online",
    title: "Kasbon Online",
    category: "Web Application · Internship",
    summary:
      "A web application for managing cash advance requests and business trips, developed during my internship.",
    stack: ["Laravel", "PHP", "MySQL"],
    featured: true,
    role: "Developer (Internship)",
    timeline: "Jul — Dec 2025",
    overview:
      "Kasbon Online is a web application for managing cash advance (kasbon) requests and business trips. I developed it during my internship at PT INKA Multi Solusi.",
    // Isi sendiri: problem, features, contributions, challenges, learnings, link.
    // Contoh:
    // features: [{ title: "Request submission", description: "..." }],
    // contributions: ["..."],
    screenshotCaptions: ["Screenshot 1", "Screenshot 2", "Screenshot 3", "Screenshot 4"],
  },
  {
    slug: "customer-complaint",
    title: "Customer Complaint System",
    category: "Web Application · Internship",
    summary:
      "An application for recording, tracking, and resolving customer complaints in one place.",
    stack: ["Laravel 13", "Filament"],
    featured: true,
    role: "Developer (Internship)",
    timeline: "Jul — Dec 2025",
    overview:
      "The Customer Complaint System helps a team record, follow up, and resolve customer complaints in one place. It was built with Laravel and Filament during my internship at PT INKA Multi Solusi.",
    // Isi sendiri: problem, features, contributions, challenges, learnings, link.
    screenshotCaptions: ["Screenshot 1", "Screenshot 2", "Screenshot 3", "Screenshot 4"],
  },
  {
    slug: "dapur-malika",
    title: "Dapur Malika",
    category: "Company Profile Website",
    summary: "A company profile website that presents a catering business to its customers.",
    stack: ["Laravel", "Web Development"],
    featured: false,
    role: "Web Developer",
    overview:
      "Dapur Malika is a company profile website that presents a catering business and its offerings to customers.",
    // Isi sendiri: problem, features, contributions, challenges, learnings, link.
    screenshotCaptions: ["Screenshot 1", "Screenshot 2", "Screenshot 3", "Screenshot 4"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}
