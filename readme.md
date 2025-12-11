# 🪑 LuxeLiving - Website Furniture Premium

Website katalog furniture modern dan elegan dengan integrasi WhatsApp untuk kemudahan pemesanan.

---

## 🎯 Fitur Utama

### ✅ Katalog Produk Interaktif
- **9 Produk Unggulan** dengan gambar berkualitas tinggi
- **Kategori Terorganis**: Sofa, Meja, Kursi, Tempat Tidur, Lemari, Lampu
- **Detail Lengkap**: Nama, kategori, harga, dan deskripsi produk

### 📱 Integrasi WhatsApp
- **Floating WhatsApp Button** yang selalu terlihat
- **Pre-Order per Produk**: Setiap produk memiliki tombol "Pre Order"
- **Template Pesan Otomatis**: Langsung kirim detail produk ke admin
- **Format Pesan**:
  ```
  Halo Admin LuxeLiving,
  
  Saya tertarik dengan produk:
  📦 *[Nama Produk]*
  💰 Harga: [Harga]
  
  Mohon informasi lebih lanjut...
  ```

### 🎨 Design Premium
- **Animasi Smooth** menggunakan Framer Motion
- **Hover Effects** yang menarik pada setiap card
- **Responsive** di semua ukuran layar
- **Typography Premium**: Playfair Display & Outfit

---

## 📁 Struktur Project

```
src/
├── components/
│   ├── layout/              # Komponen layout
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └─── Footer.jsx      # Footer
│   ├── sections/            # Section halaman
│   │   ├── Hero.jsx        # Hero banner
│   │   ├── Categories.jsx  # Showcase kategori
│   │   ├── FeaturedProducts.jsx  # Grid produk
│   │   └── Contact.jsx     # Informasi kontak
│   └── ui/                  # Komponen UI reusable
│       ├── ProductCard.jsx # Card produk
│       ├── CategoryCard.jsx # Card kategori
│       └── WhatsAppButton.jsx # Floating WA button
├── data/                    # Data statis
│   ├── products.js         # Data 9 produk
│   ├── categories.js       # Data 6 kategori
│   └── config.js           # Konfigurasi WhatsApp
├── App.jsx                 # Komponen utama
├── main.jsx                # Entry point
└── index.css               # Global styles
```

---

## 🛠 Teknologi yang Digunakan

- **React** 18.2.0 - Library UI
- **Vite** 4.4.5 - Build tool modern
- **Framer Motion** 10.16.4 - Animasi
- **React Icons** 4.10.1 - Icon library
- **Vanilla CSS** - Styling dengan CSS Variables

---

## 🚀 Cara Menjalankan Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Website akan berjalan di `http://localhost:5173`

### 3. Build untuk Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📞 Konfigurasi WhatsApp

Edit file `src/data/config.js` untuk mengubah nomor WhatsApp:

```javascript
export const whatsappConfig = {
  phoneNumber: "6282330302593",  // Ganti dengan nomor Anda
  // ...
};
```

---

## 🎨 Customization

### Mengubah Warna Brand
Edit `src/index.css`:
```css
:root {
  --color-primary: #2A2A2A;    /* Warna utama */
  --color-accent: #D4A373;     /* Warna aksen/highlight */
  --color-text: #1F1F1F;       /* Warna teks */
}
```

### Menambah/Edit Produk
Edit file `src/data/products.js`:
```javascript
export const products = [
  {
    id: 1,
    name: "Nama Produk",
    category: "Kategori",
    price: "Rp X.XXX.XXX",
    image: "URL_GAMBAR",
    description: "Deskripsi produk"
  },
  // Tambah produk lainnya...
];
```

### Menambah/Edit Kategori
Edit file `src/data/categories.js`

---

## 📦 Deployment

### Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

Atau push ke GitHub dan import di [vercel.com](https://vercel.com)

**Lihat panduan lengkap di**: `PANDUAN_DEPLOY.md`

---

## ✨ Fitur Detail

### 1. Product Card
- Gambar produk dengan zoom effect saat hover
- Badge kategori
- Deskripsi produk
- Harga dengan warna accent
- Tombol "Pre Order" langsung ke WhatsApp
- Tombol wishlist

### 2. Category Showcase
- 6 kategori furniture
- Card dengan gambar dan icon
- Click untuk scroll ke produk
- Smooth animations

### 3. WhatsApp Floating Button
- Fixed di pojok kanan bawah
- Pulse animation untuk menarik perhatian
- Tooltip saat hover
- Template pesan otomatis

### 4. Contact Section
- Informasi lengkap kontak
- Jam operasional
- Tombol direct ke WhatsApp
- Grid responsive

---

## 🎯 User Flow

1. **User membuka website** → Lihat Hero banner
2. **Scroll ke bawah** → Lihat kategori produk
3. **Klik kategori** → Auto-scroll ke daftar produk
4. **Pilih produk** → Klik tombol "Pre Order"
5. **Redirect ke WhatsApp** → Pesan otomatis terisi dengan detail produk
6. **Chat dengan admin** → Lanjutkan komunikasi untuk pemesanan

---

## � Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browsers

---

## 📝 Update Log

**Version 2.0** (Latest)
- ✅ Restructure folder (layout/, sections/, ui/, data/)
- ✅ WhatsApp integration (floating button + per produk)
- ✅ Categories showcase section
- ✅ Contact section dengan info lengkap
- ✅ Separate data files untuk maintenance mudah
- ✅ Enhanced product cards
- ✅ Improved responsive design

**Version 1.0**
- Basic catalog website
- Hero section
- Product grid
- Footer

---

## 🤝 Support

Untuk pertanyaan atau bantuan:
- WhatsApp: +62 823-3030-2593
- Email: support@luxeliving.com

---

**Dibuat dengan ❤️ menggunakan React + Vite**
