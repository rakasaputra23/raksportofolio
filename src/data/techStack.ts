import type { Bi } from "@/i18n";

export type TechGroup = {
  label: string;
  hint: Bi;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    label: "Frontend",
    hint: { en: "Interfaces that feel fast and clear", id: "Antarmuka yang terasa cepat dan jelas" },
    items: ["React", "Next.js", "Inertia.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    hint: { en: "APIs and admin systems", id: "API dan sistem admin" },
    items: ["Laravel", "PHP", "MySQL", "REST API", "Filament", "PDF Generation", "Workflow Design", "Database Management"],
  },
  {
    label: "IT Support & Networking",
    hint: { en: "Keeping systems running and secure", id: "Menjaga sistem tetap berjalan dan aman" },
    items: [
      "IT Technical Support",
      "Computer Networking",
      "System Administration",
      "Linux & VPS Deployment",
      "Nginx",
      "Cyber Security Basics",
    ],
  },
  {
    label: "Mobile",
    hint: { en: "Native Android applications", id: "Aplikasi Android native" },
    items: ["Kotlin", "Jetpack Compose", "Android Development", "Firebase", "Google Maps API"],
  },
  {
    label: "Tools",
    hint: { en: "Workflow and deployment", id: "Alur kerja dan deployment" },
    items: ["Git", "GitHub", "Vercel", "IT Project Management", "Team Coordination"],
  },
];
