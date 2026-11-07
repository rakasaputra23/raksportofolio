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
    category: "Web Application · Freelance",
    summary:
      "A Laravel + Filament platform where customers submit, track, and resolve product complaints with investigation, corrective-action, and multi-level approval workflows.",
    stack: ["Laravel 13", "Filament", "MySQL", "PDF/QR Verification"],
    featured: true,
    role: "Freelance Full-Stack Developer",
    timeline: "Aug 2026",
    overview:
      "The Customer Complaint System is an internal platform at PT INKA Multi Solusi built with Laravel 13 and Filament, split into a Customer panel and an Admin panel. A customer submits a complaint with product details and supporting attachments; the admin team then investigates, records corrective actions, and routes the case through a structured approval process before the customer confirms the resolution. Every closed complaint produces a PDF report with a QR-coded verification signature.",
    link: "https://support.ims.id",
    problem:
      "Customer complaints about delivered products were being tracked informally, with no single record of a complaint's investigation, the corrective action taken, or who had signed off on closing it. There was no structured way to make sure every stage — investigation, repair, and multi-department approval — was actually completed and documented before a complaint was marked resolved, and no way for a customer to formally confirm the outcome.",
    features: [
      {
        title: "Customer complaint submission",
        description:
          "Customers submit product details, contract number, and one or more complaint items (product number, component/unit, and a description), each required field enforced so a complaint can't be filed incomplete, plus mandatory supporting attachments.",
      },
      {
        title: "Admin investigation workflow",
        description:
          "Admins log investigation details (warranty period, project reference, investigator) and findings, each step requiring its own notes and attachments before moving forward.",
      },
      {
        title: "Corrective action tracking",
        description:
          "A dedicated step records the root cause and the corrective action taken, who carried it out, and supporting evidence, creating a clear before/after trail for each complaint.",
      },
      {
        title: "Multi-department approval & closure",
        description:
          "Closing a complaint requires sign-off across departments (quality control, engineering, commercial) before it's sent back to the customer for final confirmation.",
      },
      {
        title: "Customer approve/reject with revision loop",
        description:
          "The customer can approve the resolution to close the case, or reject it with notes and attachments explaining why. A rejection automatically opens a new, linked revision case carrying over the relevant data, so admins pick up exactly where the original left off instead of starting from scratch — while the revision case closes out through the system once action is retaken, instead of re-entering an unbounded approve/reject loop.",
      },
      {
        title: "PDF reports with QR verification",
        description:
          "Every closed complaint generates a formal PDF report, with a QR code for verifying the document's authenticity.",
      },
    ],
    contributions: [
      "Designed the database schema linking complaints, investigation records, corrective actions, approvals, attachments, and the original-to-revision complaint relationship.",
      "Built both Filament panels (Customer and Admin) covering submission, investigation, corrective action, multi-department approval, and closure.",
      "Implemented the reject-and-revise flow: automatic creation of a linked revision complaint on customer rejection, carrying over relevant prior data and surfacing the previous rejection reason to admins.",
      "Enforced required fields and mandatory attachments across every stage of the flow, from initial submission through final approval.",
      "Built PDF report generation with QR code verification for closed complaints.",
    ],
    challenges: [
      "The original flow allowed a complaint to be rejected, revised, and sent back for approval indefinitely, with no stopping condition — had to redesign the revision path so a revised complaint closes out automatically instead of looping back through customer approval again.",
      "Keeping admins oriented when picking up a revision case, since the rejection context (who rejected it, why, and with what evidence) originally lived only on the old, already-closed complaint record.",
      "Making nearly every field across two panels and several multi-step forms mandatory without the forms becoming error-prone or confusing to fill out in order.",
    ],
    learnings: [
      "A workflow with a reject-and-retry loop needs an explicit exit condition designed in from the start, or it will eventually surface as an infinite cycle once it meets real usage.",
      "Carrying context forward (like a prior rejection reason) across linked records matters as much as the workflow logic itself — without it, the next person in the flow is working blind.",
      "Incremental, review-before-execute changes work well on a live business workflow: analyzing the exact behavior change before touching code avoided breaking the parts of the flow that already matched how the company actually operates.",
    ],
    screenshotCaptions: ["Login User", "Dashboard User", "Login Admin", "Dashboard Admin"],
  },
  {
    slug: "food-ordering-ims",
    title: "Food Ordering Management System",
    category: "Web Application · Freelance",
    summary:
      "A food ordering management system with multi-role permissions, built as a freelance collaboration with a fellow intern.",
    stack: ["Laravel", "Vite", "React", "shadcn/ui", "MySQL"],
    featured: false,
    role: "Full-Stack Developer (Collaboration, freelance)",
    timeline: "Jan — Feb 2026",
    overview:
      "A food ordering management system built for PT INKA Multi Solusi (IMS) as a freelance project together with a fellow intern: a decoupled Laravel backend paired with a separate Vite + React frontend built on shadcn/ui. The system handles multiple roles — including vendors — each with their own scoped access and permissions.",
    link: "https://order.ims.id",
    problem:
      "Food ordering records were still being managed manually in spreadsheets, with no system behind the process — data entry, tracking, and reporting all depended on someone keeping the spreadsheet up to date by hand.",
    features: [
      {
        title: "Multi-role access with vendor accounts",
        description:
          "Different user roles, including vendors, each scoped to their own permissions within the system.",
      },
      {
        title: "Automatic spreadsheet export",
        description:
          "Generates spreadsheet reports automatically from system data, formatted to match the company's existing template, replacing manual spreadsheet upkeep.",
      },
    ],
    contributions: [
      "Worked on the multi-role permission system covering different user types, including vendors.",
      "Diagnosed and fixed a vendor export permission issue that was letting the wrong role access export functionality.",
    ],
    challenges: [
      "Getting the automatically generated spreadsheet export to match the company's existing template exactly, so the output could replace the manual spreadsheet without disrupting how the data was already being read and used.",
    ],
    learnings: [
      "Working with a decoupled architecture — a Laravel backend separate from a Vite + React frontend built on shadcn/ui — rather than a tied-together Inertia setup.",
    ],
    screenshotCaptions: ["Login", "Dashboard Admin", "Verifikasi Pesanan", "Export Excel"],
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