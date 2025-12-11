# Dokumentasi Website Jati Prime

## 📋 Daftar Isi
- [Ringkasan Proyek](#-ringkasan-proyek)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Proyek](#-struktur-proyek)
- [Komponen Website](#-komponen-website)
- [Fitur Utama](#-fitur-utama)
- [Cara Menjalankan Proyek](#-cara-menjalankan-proyek)
- [Panduan Pengembangan](#-panduan-pengembangan)
- [Informasi Kontak](#-informasi-kontak)

---

## 🎯 Ringkasan Proyek

**Jati Prime** adalah website katalog online untuk toko mebel yang berbasis di Jepara, Jawa Tengah. Website ini menampilkan berbagai produk furniture berkualitas tinggi yang terbuat dari kayu jati solid Perhutani dan kayu jati daur ulang.

### Tujuan Website:
- Menampilkan katalog produk furniture premium
- Memberikan informasi lengkap tentang perusahaan dan kualitas produk
- Memudahkan calon pembeli untuk menghubungi penjual melalui WhatsApp
- Menampilkan lokasi workshop/toko

---

## 🛠 Teknologi yang Digunakan

### Frontend Framework & Library:
- **React** (v18.2.0) - Library JavaScript untuk membangun user interface
- **Vite** (v4.4.5) - Build tool modern untuk development yang cepat
- **Framer Motion** (v10.16.4) - Library animasi untuk transisi dan efek halus
- **React Icons** (v4.10.1) - Library icon SVG untuk React

### Bahasa & Styling:
- **JavaScript (JSX)** - Bahasa pemrograman utama
- **CSS** - Styling dengan custom properties (CSS variables)
- **Google Fonts** - Tipografi: Outfit & Playfair Display

### Tools Development:
- **ESLint** - Linter untuk menjaga kualitas kode
- **npm** - Package manager

---

## 📁 Struktur Proyek

```
haje/
├── dist/                    # Folder hasil build production (generated)
├── node_modules/            # Dependencies (generated)
├── src/                     # Source code utama
│   ├── components/          # Komponen React
│   │   ├── About.jsx       # Komponen "Tentang Kami"
│   │   ├── Footer.jsx      # Footer website
│   │   ├── Hero.jsx        # Banner utama/hero section
│   │   ├── Location.jsx    # Peta lokasi Google Maps
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── ProductGrid.jsx # Grid katalog produk
│   │   └── Profile.jsx     # Profil perusahaan detail
│   ├── App.jsx             # Komponen utama aplikasi
│   ├── main.jsx            # Entry point aplikasi
│   └── index.css           # Styling global
├── index.html              # HTML template
├── package.json            # Dependencies dan scripts
├── vite.config.js          # Konfigurasi Vite
└── DOKUMENTASI.md          # File dokumentasi ini
```

---

## 🧩 Komponen Website

### 1. **Navbar** (`Navbar.jsx`)
Navigasi bar di bagian atas halaman yang berisi:
- Logo "Jati Prime"
- Menu navigasi: Home, Katalog, Tentang, Profile, Lokasi
- Tombol "Hubungi Kami" yang terhubung ke WhatsApp
- Responsive mobile menu (hamburger menu)

**Fitur Khusus:**
- Sticky navbar (tetap terlihat saat scroll)
- Background blur efek saat di-scroll
- Animasi smooth scroll ke section

### 2. **Hero** (`Hero.jsx`)
Banner utama halaman yang menampilkan:
- Background gambar furniture berkualitas tinggi
- Tagline: "Jati Prime Berkualitas 100% Terpercaya"
- Subtitle: "Kualitas Export & Harga Bersahabat"
- Call-to-action button "Lihat Katalog"

**Fitur Khusus:**
- Animasi fade-in menggunakan Framer Motion
- Gradient overlay untuk keterbacaan teks
- Responsive design

### 3. **ProductGrid** (`ProductGrid.jsx`)
Grid katalog produk yang menampilkan 6 produk unggulan:
1. Meja Kerja Kantor Klasik Mewah (Rp 5.500.000)
2. Meja Kantor Ukir Mewah Kayu Jati (Rp 6.200.000)
3. Kitchen Set Mewah Letter L (Rp 12.000.000)
4. Sofa Tamu Mewah Klasik (Rp 8.500.000)
5. Tempat Tidur Ukir Jepara (Rp 7.800.000)
6. Lemari Pakaian Jati 4 Pintu (Rp 9.000.000)

**Fitur Khusus:**
- Hover efek: gambar zoom-in dan menampilkan tombol aksi
- Klik pada produk langsung membuka WhatsApp dengan template pesan
- Grid responsif (auto-fill layout)
- Animasi smooth menggunakan Framer Motion

**Integrasi WhatsApp:**
```
Nomor: 6282330302593
Template: "Halo, saya tertarik dengan produk [Nama Produk]"
```

### 4. **About** (`About.jsx`)
Bagian "Tentang Kami" yang menjelaskan:
- Deskripsi singkat tentang Jati Prime
- Fokus pada kualitas kayu jati Perhutani
- Pengalaman dan keahlian dalam permebelan

**Fitur Khusus:**
- Marquee scrolling text untuk menampilkan komitmen perusahaan
- Animasi fade-in saat scroll ke section
- Underline accent styling

**Komitmen yang ditampilkan:**
- Menggunakan kayu jati legal dan berkualitas tinggi
- Memberikan detail pengerjaan terbaik
- Menghadirkan desain modern, elegan, dan tahan lama
- Memberikan pelayanan profesional

### 5. **Profile** (`Profile.jsx`)
Profil perusahaan lengkap dengan informasi:

**Informasi Perusahaan:**
- Nama: JATI PRIME
- Alamat: Jl. Sulaiman No. 24 RT 04/RW 01, Mlongan, Jepara, Jawa Tengah
- Telepon: 0895-4225-32976, 0813-3344-1655
- Email: jeparasolikin37@gmail.com
- Website: www.jatiprime.go.id
- Kode Pos: 59421

**Material & Kualitas:**
- Kayu Jati Solid (Perhutani)
- Kayu Jati Daur Ulang
- Grade: A & B
- Kualitas: Ekspor dengan Garansi 100%

**Kapasitas & Produksi:**
- Kapasitas: 6 kontainer 40 ft per bulan
- Gudang: 3500 m²
- Pasar: Worldwide (Seluruh Dunia)
- Packing: Karton Box, Single Face / Kertas Wrapping

**Pembayaran & Garansi:**
- Deposit: 50% di awal
- Pelunasan: 50% sebelum kirim
- Waktu Produksi: ± 2 bulan setelah deposit
- Garansi: Ganti baru gratis jika rusak saat diterima

### 6. **Location** (`Location.jsx`)
Section yang menampilkan lokasi toko/workshop:
- Google Maps embed (iframe)
- Informasi alamat workshop
- Tombol "Buka di Google Maps"

**Lokasi:**
- Jaya Jati Makmur, Jepara, Jawa Tengah

### 7. **Footer** (`Footer.jsx`)
Footer website dengan informasi:
- Copyright information
- Link sosial media atau kontak tambahan (jika ada)

---

## ✨ Fitur Utama

### 1. **Responsif & Mobile-Friendly**
- Layout otomatis menyesuaikan dengan ukuran layar
- Mobile menu untuk navigasi di perangkat kecil
- Grid produk responsif

### 2. **Animasi & Interaktivitas**
- Smooth scroll navigation
- Hover effects pada produk
- Fade-in animations menggunakan Framer Motion
- Marquee text animation
- Sticky navbar dengan blur effect

### 3. **Integrasi WhatsApp**
- Direct link ke WhatsApp dari tombol "Hubungi Kami"
- Template pesan otomatis saat klik produk
- Nomor WhatsApp: +62 823-3030-2593

### 4. **SEO-Friendly**
- Title tag: "Jati Prime - Toko Online Mebel Jepara Terpercaya 100%"
- Semantic HTML structure
- Meta viewport untuk mobile optimization
- Font preconnect untuk performance

### 5. **Peta Lokasi Interaktif**
- Google Maps terintegrasi
- Menampilkan lokasi Jaya Jati Makmur, Jepara
- Link langsung ke Google Maps

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat:
- **Node.js** (versi 14 atau lebih baru)
- **npm** (biasanya sudah terinstall dengan Node.js)

### Langkah-langkah:

1. **Buka Terminal/Command Prompt**
   Navigasi ke folder proyek:
   ```bash
   cd c:\Users\bagus\haje
   ```

2. **Install Dependencies** (jika belum)
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

4. **Buka Browser**
   - Setelah perintah di atas dijalankan, akan muncul URL di terminal
   - Biasanya: `http://localhost:5173`
   - Buka URL tersebut di browser

5. **Build untuk Production** (opsional)
   ```bash
   npm run build
   ```
   - Hasil build akan ada di folder `dist/`

6. **Preview Build Production** (opsional)
   ```bash
   npm run preview
   ```

---

## 🔧 Panduan Pengembangan

### Menambah Produk Baru

Edit file `src/components/ProductGrid.jsx`:

```javascript
const products = [
  // ... produk yang sudah ada
  {
    id: 7,  // ID unik, increment dari produk terakhir
    name: "Nama Produk Baru",
    category: "Kategori",
    price: "Rp X.XXX.XXX",
    image: "URL_GAMBAR"
  }
];
```

### Mengubah Nomor WhatsApp

Edit file `src/components/Navbar.jsx` dan `src/components/ProductGrid.jsx`:
- Cari: `6282330302593`
- Ganti dengan nomor baru (format: 62XXXXXXXXXX)

### Mengubah Warna Brand

Edit file `src/index.css`, cari bagian CSS variables:

```css
:root {
  --color-primary: #2D1F16;    /* Warna utama */
  --color-accent: #C4A962;     /* Warna aksen */
  --color-text: #333333;       /* Warna teks */
  --color-text-light: #666666; /* Warna teks secondary */
}
```

### Mengubah Font

Edit file `index.html`, ganti link Google Fonts dan update di `src/index.css`:

```css
:root {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Outfit', sans-serif;
}
```

### Mengubah Lokasi Google Maps

Edit file `src/components/Location.jsx`:
- Ganti parameter `q=` di URL iframe dengan nama lokasi baru
- Update link Google Maps di tombol

---

## 📞 Informasi Kontak

**Jati Prime**
- **Alamat**: Jl. Sulaiman No. 24 RT 04/RW 01, Mlongan, Jepara, Jawa Tengah – Indonesia
- **WhatsApp/Mobile**: 
  - 0895-4225-32976
  - 0813-3344-1655
- **Email**: jeparasolikin37@gmail.com
- **Website**: www.jatiprime.go.id
- **Kode Pos**: 59421

---

## 📝 Catatan Tambahan

### Performa Website:
- Menggunakan lazy loading untuk Google Maps
- Image optimization dari Unsplash
- Minified code saat production build
- Preconnect untuk Google Fonts

### Browser Support:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Maintenance:
- Update dependencies secara berkala: `npm update`
- Check security vulnerabilities: `npm audit`
- Test di berbagai device dan browser

---

**Versi Dokumentasi**: 1.0  
**Tanggal**: Desember 2025  
**Dibuat untuk**: Jati Prime - Mebel Jepara
