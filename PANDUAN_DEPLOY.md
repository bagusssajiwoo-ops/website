# 🚀 Panduan Deploy Website Furniture ke Hosting Gratis

## Rekomendasi Hosting Gratis Terbaik

### 1. **Vercel** ⭐ (Paling Direkomendasikan)
- ✅ Gratis unlimited untuk project personal
- ✅ Deploy otomatis dari Git
- ✅ SSL gratis
- ✅ CDN global super cepat
- ✅ Sangat mudah untuk React/Vite

### 2. **Netlify**
- ✅ Gratis dengan bandwidth 100GB/bulan
- ✅ Deploy otomatis
- ✅ SSL gratis
- ✅ Form handling gratis

### 3. **GitHub Pages**
- ✅ Gratis unlimited
- ✅ Hosting langsung dari repository GitHub
- ⚠️ Perlu konfigurasi tambahan untuk React

---

## 📋 Cara Deploy ke Vercel (Termudah & Tercepat)

### Persiapan Awal

#### 1. Install Git (jika belum)
```bash
# Cek apakah Git sudah terinstall
git --version

# Jika belum, download dari https://git-scm.com/
```

#### 2. Buat Akun GitHub
- Kunjungi [github.com](https://github.com)
- Klik "Sign up" dan ikuti langkahnya

#### 3. Buat Akun Vercel
- Kunjungi [vercel.com](https://vercel.com)
- Klik "Sign Up"
- **Pilih opsi "Continue with GitHub"** (ini penting!)

---

### 🎯 Langkah Deploy

#### **Langkah 1: Upload Project ke GitHub**

Buka terminal/PowerShell di folder project Anda (`C:\Users\bagus\haje`), lalu jalankan:

```bash
# Inisialisasi Git repository (jika belum)
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit - furniture website"

# Buat repository baru di GitHub
# (Lakukan ini di web browser GitHub):
# 1. Klik tombol "+" di kanan atas
# 2. Pilih "New repository"
# 3. Nama repository: "furniture-website" (atau nama lain)
# 4. Pilih "Public"
# 5. JANGAN centang "Initialize with README"
# 6. Klik "Create repository"

# Hubungkan dengan GitHub repository (ganti USERNAME dan NAMA_REPO)
git remote add origin https://github.com/USERNAME/NAMA_REPO.git
git branch -M main
git push -u origin main
```

> **Catatan**: Ganti `USERNAME` dengan username GitHub Anda, dan `NAMA_REPO` dengan nama repository yang Anda buat.

#### **Langkah 2: Deploy ke Vercel**

Ada 2 cara:

##### **Cara A: Melalui Website Vercel (Paling Mudah)**

1. Login ke [vercel.com](https://vercel.com)
2. Klik tombol **"Add New..."** → **"Project"**
3. Pilih **"Import Git Repository"**
4. Pilih repository GitHub yang baru saja Anda buat
5. Vercel akan otomatis mendeteksi bahwa ini adalah project Vite
6. Klik **"Deploy"**
7. Tunggu 1-2 menit
8. ✅ **Website Anda sudah online!**

##### **Cara B: Melalui Terminal (Lebih Cepat)**

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? → Yes
# - Which scope? → Pilih akun Anda
# - Link to existing project? → No
# - What's your project's name? → furniture-website
# - In which directory is your code located? → ./
# - Want to override the settings? → No

# Deploy ke production
vercel --prod
```

---

## 🌐 Mengakses Website

Setelah deploy berhasil, Anda akan mendapat URL seperti:
- `https://furniture-website.vercel.app`
- atau `https://furniture-website-username.vercel.app`

**URL ini bisa diakses oleh siapa saja di seluruh dunia!**

---

## 🔄 Update Website di Masa Depan

Setiap kali Anda ingin update website:

```bash
# 1. Lakukan perubahan di code Anda
# 2. Simpan file

# 3. Commit dan push ke GitHub
git add .
git commit -m "Update: deskripsi perubahan"
git push

# Vercel akan otomatis deploy ulang dalam 1-2 menit!
```

---

## 🎨 Custom Domain (Opsional)

### Domain Gratis
Anda bisa pakai domain gratis dari:
- [Freenom](https://www.freenom.com) - domain .tk, .ml, .ga gratis
- [InfinityFree](https://infinityfree.net) - dapat subdomain gratis

### Cara Setting Custom Domain di Vercel:
1. Masuk ke project di Vercel dashboard
2. Klik tab **"Settings"**
3. Klik **"Domains"**
4. Tambahkan domain Anda
5. Ikuti instruksi DNS yang diberikan

---

## 📱 Alternatif: Deploy ke Netlify

Jika ingin coba Netlify:

### Via Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Build project dulu
npm run build

# Deploy folder dist ke production
netlify deploy --prod --dir=dist
```

### Via Drag & Drop:
1. Build project: `npm run build`
2. Kunjungi [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag folder `dist` ke halaman tersebut
4. ✅ Done!

---

## 🐛 Troubleshooting

### Error: "Command 'git' not found"
**Solusi**: Install Git dari [git-scm.com](https://git-scm.com/)

### Error saat push ke GitHub
**Solusi**: Setup GitHub authentication
```bash
# Gunakan Personal Access Token
# 1. Buka GitHub → Settings → Developer settings → Personal access tokens
# 2. Generate new token (classic)
# 3. Pilih scope: repo
# 4. Copy token
# 5. Gunakan token sebagai password saat push
```

### Website tidak muncul gambar
**Solusi**: Pastikan semua gambar menggunakan URL lengkap (https://) atau upload gambar ke folder `public/` di project Anda

---

## 📞 Bantuan Lebih Lanjut

- **Dokumentasi Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Dokumentasi Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages Guide**: [pages.github.com](https://pages.github.com)

---

## ✅ Checklist Deploy

- [ ] Akun GitHub sudah dibuat
- [ ] Akun Vercel sudah dibuat (dengan GitHub)
- [ ] Git sudah terinstall
- [ ] Project sudah di-push ke GitHub
- [ ] Deploy berhasil di Vercel
- [ ] Website bisa diakses via URL
- [ ] Share URL ke teman/klien

**Selamat! Website furniture Anda sekarang bisa diakses oleh siapa saja! 🎉**
