import type { Project } from "@/data/projects";

// Terjemahan Bahasa Indonesia untuk tiap proyek (kunci = slug).
// Field yang tidak diisi di sini otomatis memakai teks Inggris dari data/projects.ts.
export const projectsId: Record<string, Partial<Project>> = {
  "stj-tracker": {
    category: "Mobile · Web · Real-time · Tugas Akhir",
    summary:
      "Sistem pemantauan perjalanan bus dengan pelacakan GPS langsung, estimasi waktu tiba (ETA), dan ketersediaan kursi, terdiri dari aplikasi penumpang, aplikasi kru, dan dashboard admin.",
    role: "Full-stack & Android Developer (proyek mandiri)",
    timeline: "2026 · Tugas akhir Diploma III",
    linkLabel: "Lihat proyek",
    overview:
      "STJ Tracker adalah sistem pemantauan perjalanan terintegrasi untuk PO Sudiro Tungga Jaya, operator bus antarkota, sekaligus topik tugas akhir Diploma III saya. Sistem ini punya tiga modul: aplikasi Android untuk penumpang, aplikasi Android untuk kru bus, dan dashboard web untuk administrator. Sistem memakai database hibrida: Firebase Realtime Database membawa data lokasi dan okupansi secara langsung, sedangkan MySQL, yang dilayani lewat REST API Laravel, menyimpan data master. GPS ponsel kru dikirim ke Firebase sekitar setiap 5 detik dan digambar di Google Maps, sehingga penumpang dan operator bisa melihat posisi bus, kapan bus tiba, dan berapa kursi yang tersisa.",
    problem:
      "GPS tracker perangkat keras milik operator hanya menunjukkan posisi bus kepada manajemen dan tidak terhubung dengan data kabin seperti jumlah penumpang. Penumpang tidak bisa melihat di mana busnya, kapan tiba, atau berapa kursi tersisa, dan manajemen tidak punya satu tampilan yang menggabungkan posisi dan okupansi selama bus masih di jalan.",
    features: [
      {
        title: "Pelacakan GPS langsung",
        description:
          "Aplikasi kru mengirim koordinat GPS dan kecepatan ke Firebase Realtime Database kira-kira setiap 5 detik. Dashboard dan aplikasi penumpang menampilkan bus di Google Maps secara real-time.",
      },
      {
        title: "ETA dan ketersediaan kursi",
        description:
          "Penumpang melihat estimasi waktu tiba, sisa kursi, dan kecepatan bus yang dipilih. ETA memakai sisa jarak jalan dari Google Directions API dan kecepatan bus saat ini (t = s / v). Okupansi diperbarui oleh kru.",
      },
      {
        title: "Aplikasi kru (STJ Kru Tracker)",
        description:
          "Kru masuk dengan ID pengemudi, memilih bus dan rute, memulai dan mengakhiri perjalanan, mengatur status lalu lintas (lancar, macet, mogok), dan menyesuaikan jumlah penumpang dengan tombol + dan −. Ringkasan perjalanan ditampilkan saat perjalanan selesai.",
      },
      {
        title: "Aplikasi penumpang",
        description:
          "Peta tanpa login tempat penumpang mencari bus berdasarkan nama, plat nomor, rute, atau kelas, lalu mengetuk penanda untuk melihat ETA, ketersediaan kursi, dan kecepatan.",
      },
      {
        title: "Dashboard admin",
        description:
          "Dashboard web Laravel untuk mengelola bus, rute, tarif, akun kru, dan pengguna, memantau bus aktif di peta langsung, serta meninjau riwayat perjalanan dan laporan pendapatan.",
      },
    ],
    contributions: [
      "Membangun seluruh sistem sendirian: desain database, REST API, dashboard web, dan kedua aplikasi Android.",
      "Merancang database hibrida: Firebase Realtime Database untuk lokasi dan okupansi, MySQL untuk data master dan arsip perjalanan yang sudah selesai (termasuk jejak GPS tiap perjalanan).",
      "Membangun dashboard admin Laravel dan REST API berpengaman token yang dipakai aplikasi kru untuk login dan persiapan perjalanan, dengan kata sandi yang di-hash Bcrypt.",
      "Mengembangkan aplikasi Android kru dan penumpang dengan Kotlin, lengkap dengan pengiriman GPS, rendering peta langsung, dan fitur ETA.",
      "Menguji seluruh 15 kebutuhan fungsional dengan Black Box Testing (semua lulus) dan mengukur interval pembaruan, latensi sinkronisasi, dan akurasi ETA.",
      "Men-deploy dashboard ke VPS dengan domain sendiri dan HTTPS, serta menyiapkan Android App Bundle bertanda tangan untuk aplikasi penumpang guna pengujian internal Google Play.",
    ],
    challenges: [
      "Pembaruan lokasi bergantung pada sinyal seluler ponsel kru: 94% pembaruan tiba dalam 5–10 detik, dengan satu jeda 13 detik pada koneksi yang tidak stabil.",
      "ETA berdasarkan kecepatan sesaat terganggu ketika bus berhenti sebentar. Satu titik uji meleset +6 menit, meski rata-rata galatnya 1,57 menit (batas: 5 menit).",
      "Okupansi diinput manual oleh kru, karena sistem tidak memakai sensor penghitung penumpang.",
    ],
    learnings: [
      "Database hibrida bekerja dengan baik: Firebase untuk data real-time yang cepat (rata-rata latensi sinkronisasi 1,58 detik terhadap target 3 detik) dan MySQL sebagai sumber kebenaran tunggal.",
      "Sistem real-time hanya seandal jaringan di perangkat yang mengirim datanya, jadi kasus tepi perlu diuji di lapangan, bukan hanya di laboratorium.",
      "Kecepatan sesaat adalah masukan yang lemah untuk ETA. Rata-rata bergerak akan lebih stabil.",
    ],
    screenshotCaptions: ["Login Admin", "Pemantauan rute", "Aplikasi kru", "Aplikasi penumpang"],
  },

  "kasbon-online": {
    category: "Aplikasi Web · Magang",
    summary:
      "Sistem kasbon (uang muka) berbasis web dengan modul surat perintah perjalanan dinas (SPPD), persetujuan multi-level, dan dokumen PDF otomatis, dibangun saat magang.",
    role: "Developer (Magang)",
    timeline: "Jul — Des 2025",
    overview:
      "Kasbon Online adalah aplikasi web internal di PT INKA Multi Solusi, dibangun di divisi HR dan Risk Management (TI). Saya mengerjakan modul SPPD (Surat Perintah Perjalanan Dinas), yang mendigitalkan seluruh prosesnya: karyawan mengajukan perjalanan dengan kasbon opsional, pengajuan melewati 5 atau 6 level persetujuan sesuai hierarki jabatan perusahaan, dan sistem menghasilkan dokumen PDF resmi dengan tanda tangan kode QR. Notifikasi dikirim lewat email dan pop-up WhatsApp (wa.me). Sistem menjalani user acceptance test selama sebulan di akhir magang, menjelang rilis resmi yang direncanakan awal 2026.",
    problem:
      "Surat perintah perjalanan dinas masih diisi di atas kertas dan membutuhkan tanda tangan basah dari pejabat yang sering tidak berada di kantor, sehingga dokumen tersangkut dan karyawan berisiko berangkat tanpa surat perintah yang sah. Biaya perjalanan dihitung manual berdasarkan tarif lumpsum yang berbeda menurut golongan jabatan dan tujuan, sehingga rawan salah hitung.",
    features: [
      {
        title: "SPPD dengan kasbon opsional",
        description:
          "Satu formulir untuk detail perjalanan, peserta, dan biaya uang harian, dengan opsi \"Include Kasbon\". Biaya dihitung otomatis dari golongan jabatan dan tujuan, mendukung multi-mata uang (Rupiah, Dolar, Yen, Euro, Ringgit) dan lampiran file.",
      },
      {
        title: "Persetujuan multi-level",
        description:
          "Persetujuan mengikuti hierarki jabatan organisasi di 5 atau 6 level. Kepala Divisi Keuangan menentukan apakah pengajuan ke Direktur atau langsung ke Kasir. Level staf anggaran mencatat disposisi anggaran (dana tersedia, terpakai, dan sisa).",
      },
      {
        title: "Notifikasi email dan WhatsApp",
        description:
          "Email berbasis event dikirim lewat antrean di setiap langkah (diajukan, diteruskan, disetujui, ditolak, disetujui penuh), ditambah pop-up yang membuka pesan WhatsApp siap kirim ke approver yang tepat.",
      },
      {
        title: "Dokumen PDF dengan tanda tangan QR",
        description:
          "Menghasilkan formulir SPPD, rincian biaya uang harian, dan formulir kasbon sebagai PDF A4. Kode QR untuk setiap approver dan peserta mengarah ke halaman verifikasi, dan nomor dokumen berurutan seperti 001/SPPD/X/2025 diberikan otomatis.",
      },
      {
        title: "Integrasi data karyawan",
        description:
          "Mencari karyawan berdasarkan NIP atau nama dari database e-office perusahaan yang terpisah, sehingga setiap pengajuan terhubung dengan data karyawan yang valid.",
      },
      {
        title: "Dashboard, laporan, dan penerimaan dana",
        description:
          "DataTables sisi server dengan filter status, periode, dan kasbon, dashboard statistik persetujuan, serta laporan dengan unduhan lampiran. Setelah persetujuan akhir, pemohon mengonfirmasi bahwa dana sudah diterima.",
      },
    ],
    contributions: [
      "Merancang database relasional untuk SPPD, peserta, rincian uang harian dan kasbon, log persetujuan, serta data master tarif dan mata uang.",
      "Membangun mesin persetujuan di Laravel, dengan routing dinamis antara 5 dan 6 level, level persetujuan berperan ganda (Direktur atau Kasir), dan kontrol akses berbasis izin.",
      "Mengimplementasikan notifikasi email dengan event dan queue Laravel, serta pop-up WhatsApp (wa.me) dengan pemilihan penerima.",
      "Membangun pembuatan PDF dengan DOMPDF dan tanda tangan digital kode QR, penomoran dokumen otomatis yang aman untuk permintaan bersamaan, serta dashboard DataTables di AdminLTE 3.",
      "Menguji alur persetujuan penuh, izin akses, dan hasil PDF, memperbaiki bug seperti log persetujuan yang usang sebelum routing, dan menjalankan UAT selama sebulan bersama pembimbing lapangan, tim TI, dan pengguna dari beberapa divisi.",
    ],
    challenges: [
      "Proses persetujuan yang sebenarnya jauh lebih kompleks daripada penjelasan lisan pembimbing lapangan, dan routing dinamis 5–6 level memaksa perubahan mendasar pada logika program.",
      "Banyak revisi dari pengguna dan klien, seperti memindahkan kolom antar level persetujuan, menghapus kolom tanggal, dan menambah rincian kasbon yang bisa diedit.",
      "Pengguna belum terbiasa dengan sistem digital yang kompleks, sehingga saya harus menjaga antarmuka tetap sederhana sementara logika di baliknya rumit.",
    ],
    learnings: [
      "Pengerjaan iteratif yang digerakkan oleh umpan balik dan demo rutin menjaga sistem tetap sejalan dengan alur bisnis dan hierarki jabatan yang sebenarnya.",
      "User acceptance testing yang nyata memunculkan kebutuhan yang tidak pernah tertangkap dalam spesifikasi.",
      "Aturan bisnis yang kompleks menuntut perancangan data dan izin akses yang cermat sejak awal.",
    ],
    screenshotCaptions: ["Halaman login", "Dashboard", "Formulir SPPD", "Persetujuan dan PDF"],
  },

  "customer-complaint": {
    category: "Aplikasi Web · Freelance",
    summary:
      "Platform Laravel + Filament tempat pelanggan mengajukan, melacak, dan menyelesaikan komplain produk dengan alur investigasi, tindakan korektif, dan persetujuan multi-level.",
    role: "Freelance Full-Stack Developer",
    timeline: "Agu 2026",
    overview:
      "Customer Complaint System adalah proyek freelance yang dibangun untuk PT INKA Multi Solusi dengan Laravel 13 dan Filament, terbagi menjadi panel Customer dan panel Admin. Pelanggan mengajukan komplain dengan detail produk dan lampiran pendukung; tim admin kemudian menyelidiki, mencatat tindakan korektif, dan mengarahkan kasus melalui proses persetujuan terstruktur sebelum pelanggan mengonfirmasi penyelesaian. Setiap komplain yang ditutup menghasilkan laporan PDF dengan tanda tangan verifikasi berkode QR.",
    problem:
      "Komplain pelanggan atas produk yang sudah dikirim dicatat secara informal, tanpa satu catatan pun tentang investigasi komplain, tindakan korektif yang diambil, atau siapa yang menyetujui penutupannya. Tidak ada cara terstruktur untuk memastikan setiap tahap — investigasi, perbaikan, dan persetujuan multi-departemen — benar-benar selesai dan terdokumentasi sebelum komplain dinyatakan selesai, dan pelanggan tidak punya cara resmi untuk mengonfirmasi hasilnya.",
    features: [
      {
        title: "Pengajuan komplain pelanggan",
        description:
          "Pelanggan mengisi detail produk, nomor kontrak, dan satu atau lebih item komplain (nomor produk, komponen/unit, dan deskripsi), dengan setiap kolom wajib divalidasi agar komplain tidak bisa diajukan tidak lengkap, ditambah lampiran pendukung yang wajib.",
      },
      {
        title: "Alur investigasi admin",
        description:
          "Admin mencatat detail investigasi (masa garansi, referensi proyek, penyelidik) dan temuan, dengan setiap langkah membutuhkan catatan dan lampiran sendiri sebelum bisa lanjut.",
      },
      {
        title: "Pelacakan tindakan korektif",
        description:
          "Satu langkah khusus mencatat akar masalah dan tindakan korektif yang diambil, siapa yang melakukannya, dan bukti pendukung, sehingga tercipta jejak sebelum/sesudah yang jelas untuk setiap komplain.",
      },
      {
        title: "Persetujuan multi-departemen & penutupan",
        description:
          "Menutup komplain membutuhkan persetujuan lintas departemen (quality control, engineering, commercial) sebelum dikirim kembali ke pelanggan untuk konfirmasi akhir.",
      },
      {
        title: "Setuju/tolak pelanggan dengan siklus revisi",
        description:
          "Pelanggan dapat menyetujui solusi untuk menutup kasus, atau menolaknya dengan catatan dan lampiran yang menjelaskan alasannya. Penolakan otomatis membuka kasus revisi baru yang terhubung dan membawa data terkait, sehingga admin melanjutkan tepat dari titik kasus awal alih-alih memulai dari nol — sementara kasus revisi ditutup lewat sistem begitu tindakan diulang, alih-alih masuk lagi ke siklus setuju/tolak tanpa batas.",
      },
      {
        title: "Laporan PDF dengan verifikasi QR",
        description:
          "Setiap komplain yang ditutup menghasilkan laporan PDF resmi, dengan kode QR untuk memverifikasi keaslian dokumen.",
      },
    ],
    contributions: [
      "Merancang skema database yang menghubungkan komplain, catatan investigasi, tindakan korektif, persetujuan, lampiran, dan relasi komplain asli ke revisi.",
      "Membangun kedua panel Filament (Customer dan Admin) yang mencakup pengajuan, investigasi, tindakan korektif, persetujuan multi-departemen, dan penutupan.",
      "Mengimplementasikan alur tolak-dan-revisi: pembuatan otomatis komplain revisi yang terhubung saat pelanggan menolak, membawa data sebelumnya yang relevan dan menampilkan alasan penolakan sebelumnya kepada admin.",
      "Menegakkan kolom wajib dan lampiran wajib di setiap tahap alur, dari pengajuan awal sampai persetujuan akhir.",
      "Membangun pembuatan laporan PDF dengan verifikasi kode QR untuk komplain yang ditutup.",
    ],
    challenges: [
      "Alur awal memungkinkan komplain ditolak, direvisi, dan dikirim ulang untuk persetujuan tanpa batas, tanpa kondisi berhenti — saya harus mendesain ulang jalur revisi agar komplain yang direvisi ditutup otomatis alih-alih kembali melewati persetujuan pelanggan.",
      "Menjaga admin tetap paham konteks saat mengambil kasus revisi, karena konteks penolakan (siapa yang menolak, alasannya, dan buktinya) awalnya hanya ada di catatan komplain lama yang sudah ditutup.",
      "Membuat hampir setiap kolom di dua panel dan beberapa formulir multi-langkah menjadi wajib tanpa membuat formulir rawan salah atau membingungkan saat diisi berurutan.",
    ],
    learnings: [
      "Alur kerja dengan siklus tolak-dan-ulang butuh kondisi keluar yang eksplisit sejak awal, kalau tidak, akhirnya akan muncul sebagai siklus tak terbatas begitu bertemu pemakaian nyata.",
      "Membawa konteks ke depan (seperti alasan penolakan sebelumnya) lewat record yang terhubung sama pentingnya dengan logika alurnya — tanpa itu, orang berikutnya dalam alur bekerja dengan mata tertutup.",
      "Perubahan bertahap dengan tinjau-sebelum-eksekusi cocok untuk alur bisnis yang sedang berjalan: menganalisis perubahan perilaku secara tepat sebelum menyentuh kode menghindarkan rusaknya bagian alur yang sudah sesuai dengan cara kerja perusahaan.",
    ],
    screenshotCaptions: ["Login User", "Dashboard User", "Login Admin", "Dashboard Admin"],
  },

  "food-ordering-ims": {
    category: "Aplikasi Web · Freelance",
    summary:
      "Sistem manajemen pemesanan makanan dengan izin multi-peran, dibangun sebagai kolaborasi freelance bersama sesama peserta magang.",
    role: "Full-Stack Developer (Kolaborasi, freelance)",
    timeline: "Jan — Feb 2026",
    overview:
      "Sistem manajemen pemesanan makanan yang dibangun untuk PT INKA Multi Solusi (IMS) sebagai proyek freelance bersama sesama peserta magang: backend Laravel yang terpisah dipasangkan dengan frontend Vite + React tersendiri berbasis shadcn/ui. Sistem ini menangani banyak peran — termasuk vendor — masing-masing dengan akses dan izin yang terbatas pada lingkupnya.",
    problem:
      "Pencatatan pemesanan makanan masih dikelola manual di spreadsheet, tanpa sistem di baliknya — input data, pelacakan, dan pelaporan semuanya bergantung pada seseorang yang memperbarui spreadsheet secara manual.",
    features: [
      {
        title: "Akses multi-peran dengan akun vendor",
        description:
          "Berbagai peran pengguna, termasuk vendor, masing-masing dibatasi pada izinnya sendiri di dalam sistem.",
      },
      {
        title: "Ekspor spreadsheet otomatis",
        description:
          "Menghasilkan laporan spreadsheet otomatis dari data sistem, diformat sesuai template perusahaan yang sudah ada, menggantikan pemeliharaan spreadsheet manual.",
      },
    ],
    contributions: [
      "Mengerjakan sistem izin multi-peran yang mencakup berbagai tipe pengguna, termasuk vendor.",
      "Mendiagnosis dan memperbaiki masalah izin ekspor vendor yang membuat peran yang salah bisa mengakses fungsi ekspor.",
    ],
    challenges: [
      "Membuat ekspor spreadsheet otomatis sesuai persis dengan template perusahaan yang ada, agar hasilnya dapat menggantikan spreadsheet manual tanpa mengganggu cara data tersebut dibaca dan dipakai.",
    ],
    learnings: [
      "Bekerja dengan arsitektur terpisah — backend Laravel yang terpisah dari frontend Vite + React berbasis shadcn/ui — alih-alih setup Inertia yang menyatu.",
    ],
    screenshotCaptions: ["Login", "Dashboard Admin", "Verifikasi Pesanan", "Export Excel"],
  },
};
