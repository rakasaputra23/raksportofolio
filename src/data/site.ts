export const site = {
  name: "Mohammad Raka Saputra",
  shortName: "Raka",
  role: "Junior Software Engineer",
  focus: "Web & Mobile Development",
  tagline: "Building web and mobile applications for real users.",
  description:
    "Junior software engineer and D3 Information Technology graduate. I build web apps with PHP and Laravel and mobile apps with Kotlin and Flutter, from real client projects to an Android and GPS final project.",
  url: "https://rakasaputra.vercel.app", // TODO: ganti dengan URL vercel.app yang sebenarnya setelah deploy
  email: "mhrakaas@gmail.com",
  phone: "+62 813-5916-1718",
  phoneHref: "+6281359161718",
  location: "Sidoarjo, Jawa Timur, Indonesia",
  github: "https://github.com/rakasaputra23",
  linkedin: "https://www.linkedin.com/in/mohammad-raka-saputra-965652327/",
  cv: "/cv.pdf", // TODO: taruh file CV di public/cv.pdf
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;
