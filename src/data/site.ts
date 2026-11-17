export const site = {
  name: "Mohammad Raka Saputra",
  shortName: "Raka",
  role: "Full-Stack Web & Android Developer",
  focus: "Web & Mobile Development",
  tagline: "Turning real-world needs into working software.",
  description:
    "Information Technology graduate from Politeknik Negeri Madiun and full-stack web and Android developer. I build with PHP, Laravel, React, and Kotlin, from freelance client systems and internal company tools to a real-time GPS bus tracking final project.",
  url: "https://rakasaputra.vercel.app", // TODO: ganti dengan URL vercel.app yang sebenarnya setelah deploy
  email: "mhrakaas@gmail.com",
  phone: "+62 813-5916-1718",
  phoneHref: "+6281359161718",
  location: "Sidoarjo, Jawa Timur, Indonesia",
  github: "https://github.com/rakasaputra23",
  linkedin: "https://www.linkedin.com/in/mohammadraka-saputra-965652327",
  cv: "/cv.pdf", // file CV (download & embed)
  cvPage: "/cv", // halaman untuk melihat CV langsung di web
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
] as const;
