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
    category: "Mobile · Web · Real-time · Final Project",
    summary:
      "A bus trip monitoring system with live GPS tracking, arrival estimates (ETA), and seat availability, made of a passenger app, a crew app, and an admin dashboard.",
    stack: ["Kotlin", "Jetpack Compose", "Laravel", "React", "MySQL", "Firebase", "Google Maps", "REST API"],
    featured: true,
    role: "Full-stack & Android Developer (solo project)",
    timeline: "2026 · Diploma III final project",
    overview:
      "STJ Tracker is an integrated trip monitoring system for PO Sudiro Tungga Jaya, an intercity bus operator, and the subject of my Diploma III final project. It has three modules: an Android app for passengers, an Android app for bus crews, and a web dashboard for administrators. It uses a hybrid database: Firebase Realtime Database carries live location and occupancy data, while MySQL, served through a Laravel REST API, holds the master data. The crew's smartphone GPS is sent to Firebase about every 5 seconds and drawn on Google Maps, so passengers and operators see where a bus is, when it will arrive, and how many seats are left.",
    link: "https://adminstjtracker.my.id",
    linkLabel: "View project",
    problem:
      "The operator's existing hardware GPS trackers only show a bus's position to management and are not connected to cabin data such as passenger count. Passengers cannot see where their bus is, when it will arrive, or how many seats remain, and management has no single view that joins position and occupancy while a bus is still on the road.",
    features: [
      {
        title: "Live GPS tracking",
        description:
          "The crew app broadcasts GPS coordinates and speed to Firebase Realtime Database roughly every 5 seconds. The dashboard and passenger app render the bus on Google Maps in real time.",
      },
      {
        title: "ETA and seat availability",
        description:
          "Passengers see the estimated arrival time, remaining seats, and speed of a selected bus. ETA uses the remaining road distance from the Google Directions API and the bus's current speed (t = s / v). Occupancy is updated by the crew.",
      },
      {
        title: "Crew app (STJ Kru Tracker)",
        description:
          "Crew log in with a driver ID, choose a bus and route, start and end a trip, set traffic status (smooth, congested, breakdown), and adjust the passenger count with + and − buttons. A trip summary report is shown when the trip ends.",
      },
      {
        title: "Passenger app",
        description:
          "A login-free map where passengers search buses by name, plate number, route, or class, then tap a marker to see ETA, seat availability, and speed.",
      },
      {
        title: "Admin dashboard",
        description:
          "A Laravel web dashboard to manage buses, routes, fares, crew accounts, and users, watch active buses on a live map, and review trip history and revenue reports.",
      },
    ],
    contributions: [
      "Built the whole system alone: database design, REST API, web dashboard, and both Android apps.",
      "Designed the hybrid database: Firebase Realtime Database for location and occupancy, MySQL for master data and the archive of completed trips (including the GPS track of each trip).",
      "Built the Laravel admin dashboard and the token-secured REST API that the crew app uses for login and trip preparation, with Bcrypt-hashed passwords.",
      "Developed the crew and passenger Android apps in Kotlin, with GPS broadcasting, live map rendering, and the ETA feature.",
      "Tested all 15 functional requirements with Black Box Testing (all passed) and measured update interval, sync latency, and ETA accuracy.",
      "Deployed the dashboard to a VPS with its own domain and HTTPS, and prepared the signed Android App Bundle of the passenger app for Google Play internal testing.",
    ],
    challenges: [
      "Location updates depend on the crew phone's mobile signal: 94% of updates arrived within 5–10 seconds, with one 13-second gap on an unstable connection.",
      "ETA based on instantaneous speed is thrown off when a bus briefly stops. One test point was off by +6 minutes, although the average error was 1.57 minutes (limit: 5 minutes).",
      "Occupancy is entered manually by the crew, since the system uses no passenger-counting sensor.",
    ],
    learnings: [
      "A hybrid database works well: Firebase for fast real-time data (average sync latency 1.58 seconds against a 3-second target) and MySQL as the single source of truth.",
      "Real-time systems are only as reliable as the network on the device sending the data, so edge cases need testing in the field, not just in the lab.",
      "Instantaneous speed is a weak input for ETA. A moving average would be steadier.",
    ],
    screenshotCaptions: [
      "Login Admin",
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
      "A web-based cash advance (kasbon) system with a business trip order (SPPD) module, multi-level approval, and automatic PDF documents, built during my internship.",
    stack: ["Laravel", "PHP", "MySQL", "AdminLTE 3", "DataTables", "DOMPDF"],
    featured: true,
    role: "Developer (Internship)",
    timeline: "Jul — Dec 2025",
    overview:
      "Kasbon Online is an internal web application at PT INKA Multi Solusi, built in the HR and Risk Management (IT) division. I worked on its SPPD (Surat Perintah Perjalanan Dinas, business trip order) module, which digitizes the whole process: an employee submits a trip with an optional cash advance, the request goes through 5 or 6 approval levels that follow the company's job hierarchy, and the system produces official PDF documents with QR code signatures. Notifications go out by email and a WhatsApp (wa.me) pop-up. The system was in a month-long user acceptance test at the end of the internship, ahead of an official release planned for early 2026.",
    link: "https://kasbon.ims.id",
    problem:
      "Business trip orders were still filled out on paper and needed wet signatures from officials who are often away from the office, so documents got stuck and employees risked leaving without a valid order. Trip costs were calculated by hand against lumpsum rates that vary by job grade and destination, which invited calculation errors.",
    features: [
      {
        title: "SPPD with optional kasbon",
        description:
          "One form for trip details, participants, and per-diem costs, with an \"Include Kasbon\" option. Costs are calculated automatically from job group and destination, with multi-currency support (Rupiah, Dollar, Yen, Euro, Ringgit) and file attachments.",
      },
      {
        title: "Multi-level approval",
        description:
          "Approval follows the organization's job hierarchy across 5 or 6 levels. The Finance Division Head decides whether a request goes to a Director or straight to the Cashier. The budget staff level records a budget disposition (available, used, and remaining funds).",
      },
      {
        title: "Email and WhatsApp notifications",
        description:
          "Event-driven emails sent through a queue at every step (submitted, forwarded, approved, rejected, fully approved), plus a pop-up that opens a pre-written WhatsApp message to the right approver.",
      },
      {
        title: "PDF documents with QR signatures",
        description:
          "Generates the SPPD form, per-diem cost breakdown, and kasbon form as A4 PDFs. A QR code for each approver and participant links to a verification page, and a numbered document ID like 001/SPPD/X/2025 is assigned automatically.",
      },
      {
        title: "Employee data integration",
        description:
          "Looks up employees by NIP or name from the company's separate e-office database, so every request is tied to valid employee data.",
      },
      {
        title: "Dashboard, reports, and fund receipt",
        description:
          "Server-side DataTables with status, period, and kasbon filters, a dashboard of approval statistics, and reports with attachment download. After final approval, the requester confirms they received the funds.",
      },
    ],
    contributions: [
      "Designed the relational database for SPPD, participants, per-diem and kasbon details, the approval log, and the master data for rates and currencies.",
      "Built the approval engine in Laravel, with dynamic routing between 5 and 6 levels, a dual-role approval level (Director or Cashier), and permission-based access control.",
      "Implemented email notifications with Laravel events and queues, and the WhatsApp (wa.me) pop-up with recipient selection.",
      "Built PDF generation with DOMPDF and QR code digital signatures, automatic document numbering that is safe under concurrent requests, and the DataTables dashboard on AdminLTE 3.",
      "Tested the full approval flow, permissions, and PDF output, fixed bugs such as stale approval logs before routing, and ran a month of UAT with the field supervisor, the IT team, and users from several divisions.",
    ],
    challenges: [
      "The real approval process was far more complex than the field supervisor's verbal description, and its 5–6 level dynamic routing forced fundamental changes to the program logic.",
      "Many revisions from users and the client, such as moving fields between approval levels, removing date fields, and adding editable kasbon details.",
      "Users were not used to a complex digital system, so I had to keep the interface simple while the logic behind it stayed complicated.",
    ],
    learnings: [
      "Iterative work driven by feedback and regular demos kept the system aligned with the real business flow and the job hierarchy.",
      "Real user acceptance testing surfaces requirements that a spec never captures.",
      "Complex business rules call for careful design of data and permissions from the start.",
    ],
    screenshotCaptions: [
      "Login page",
      "Dashboard",
      "SPPD form",
      "Approval and PDF",
    ],
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
    link: "https://support.ims.id",
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
    link: "https://dapurmalika.com",
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