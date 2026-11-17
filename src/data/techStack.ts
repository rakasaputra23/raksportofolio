export type TechGroup = {
  label: string;
  hint: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    label: "Frontend",
    hint: "Interfaces that feel fast and clear",
    items: ["React", "Next.js", "Inertia.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    hint: "APIs and admin systems",
    items: ["Laravel", "PHP", "MySQL", "REST API", "Filament", "PDF Generation", "Workflow Design", "Database Management"],
  },
  {
    label: "Mobile",
    hint: "Android and cross-platform applications",
    items: ["Kotlin", "Jetpack Compose", "Flutter", "Android Development", "Firebase", "Google Maps API"],
  },
  {
    label: "Tools",
    hint: "Workflow and deployment",
    items: ["Git", "GitHub", "Nginx & PHP-FPM", "VPS Deployment", "Vercel", "IT Support", "Computer Networking", "IT Project Management"],
  },
];
