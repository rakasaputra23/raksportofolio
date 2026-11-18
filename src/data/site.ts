export const site = {
  name: "Mohammad Raka Saputra",
  shortName: "Raka",
  role: "Information Technology Graduate",
  roleId: "Lulusan Teknologi Informasi",
  headline:
    "Information Technology Graduate | Software Development Enthusiast | Freelance Web & Mobile Developer | IT Support & Networking",
  focusAreas: [
    { en: "Software Development", id: "Pengembangan Perangkat Lunak" },
    { en: "Freelance Web & Mobile", id: "Freelance Web & Mobile" },
    { en: "IT Support & Networking", id: "Dukungan TI & Jaringan" },
  ],
  focus: "Software Development & IT Support",
  tagline: "From web and mobile applications to IT support and networking.",
  taglineId: "Dari aplikasi web dan mobile sampai dukungan TI dan jaringan.",
  description:
    "D3 Information Technology graduate and software development enthusiast. As a freelance developer I build web apps with PHP and Laravel and mobile apps with Kotlin and Jetpack Compose, and I also work across IT support, networking, and database management.",
  descriptionId:
    "Lulusan D3 Teknologi Informasi dan peminat pengembangan perangkat lunak. Sebagai freelance developer saya membangun aplikasi web dengan PHP dan Laravel serta aplikasi mobile dengan Kotlin dan Jetpack Compose, dan saya juga bekerja di bidang dukungan TI, jaringan, dan manajemen database.",
  // URL situs. Atur NEXT_PUBLIC_SITE_URL di environment (mis. domain sendiri) agar sitemap,
  // canonical, dan gambar share preview memakai alamat yang benar. Di Vercel, otomatis memakai
  // domain produksi proyek jika variabel itu tidak diisi.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://rakasaputra.vercel.app"),
  email: "mhrakaas@gmail.com",
  phone: "+62 813-5916-1718",
  phoneHref: "+6281359161718",
  location: "Sidoarjo, Jawa Timur, Indonesia",
  github: "https://github.com/rakasaputra23",
  linkedin: "https://www.linkedin.com/in/mohammadraka-saputra-965652327",
  // Tombol WhatsApp (nomor tidak ditampilkan di halaman, hanya dipakai di link)
  whatsapp: {
    en: "https://wa.me/6281359161718?text=Hi%20Raka%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20talk.",
    id: "https://wa.me/6281359161718?text=Halo%20Raka%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi.",
  },
  cv: "/cv.pdf", // file CV (download & embed)
  cvPage: "/cv", // halaman untuk melihat CV langsung di web
};

export const navLinks = [
  { href: "/", label: "Home", labelId: "Beranda" },
  { href: "/about", label: "About", labelId: "Tentang" },
  { href: "/projects", label: "Projects", labelId: "Proyek" },
  { href: "/experience", label: "Experience", labelId: "Pengalaman" },
  { href: "/cv", label: "CV", labelId: "CV" },
  { href: "/contact", label: "Contact", labelId: "Kontak" },
] as const;
