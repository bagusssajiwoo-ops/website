# 🔧 Cara Mengatasi Error "Permission Denied" di Vercel

## ✅ Solusi yang Sudah Diterapkan

Saya sudah membuat 3 file untuk memperbaiki error deployment Anda:

### 1. **`.gitattributes`** - Memperbaiki Line Endings
File ini memastikan semua file text menggunakan LF (Unix-style) line endings, bukan CRLF (Windows-style). Ini adalah penyebab utama error "Permission denied" di Vercel.

### 2. **`package.json`** - Ditambahkan Node.js Version
Menambahkan field `engines` untuk memastikan Vercel menggunakan Node.js versi yang benar.

### 3. **`vercel.json`** - Konfigurasi Build Eksplisit
File konfigurasi untuk memberitahu Vercel cara build project dengan benar.

---

## 📋 Langkah Selanjutnya

Sekarang Anda perlu **push perubahan ini ke GitHub**:

```bash
# 1. Tambahkan semua perubahan
git add .

# 2. Commit dengan pesan
git commit -m "Fix: permission denied error di Vercel"

# 3. Push ke GitHub
git push
```

**Vercel akan otomatis detect perubahan dan deploy ulang dalam 1-2 menit!**

---

## 🎯 Cara Kerja Solusinya

### Masalah:
- Windows menggunakan CRLF (`\r\n`) untuk line endings
- Linux/Unix (server Vercel) menggunakan LF (`\n`)
- Ketika file dengan CRLF di-upload, Vercel tidak bisa execute file binary seperti `vite`

### Solusi:
- File `.gitattributes` memaksa Git untuk convert semua file ke LF saat commit
- Ini memastikan file di server Vercel memiliki permission yang benar

---

## ✅ Verifikasi Berhasil

Setelah push dan Vercel deploy ulang, Anda akan lihat:
- ✅ Build berhasil tanpa error
- ✅ Website live di URL Vercel Anda
- ✅ Bisa diakses oleh semua orang

---

## 🐛 Jika Masih Error

### Opsi 1: Re-normalize Line Endings
Jika masih error setelah push, lakukan ini:

```bash
# Hapus cache Git dan re-normalize semua file
git rm --cached -r .
git reset --hard
git add .
git commit -m "Normalize line endings"
git push --force
```

### Opsi 2: Hapus node_modules dari Git (jika ada)
```bash
# Pastikan node_modules di .gitignore
echo "node_modules/" >> .gitignore
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

### Opsi 3: Deploy Manual dengan Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 📞 Troubleshooting Lainnya

### Error masih muncul setelah 2x deploy?
Coba hapus project di Vercel dan import ulang dari GitHub:
1. Masuk ke Vercel Dashboard
2. Pilih project → Settings → Delete Project
3. Import ulang repository dari GitHub

### Git push error?
```bash
# Jika ada conflict atau error
git pull origin main --rebase
git push
```

---

**Tips**: Setelah ini, setiap kali Anda edit code dan push ke GitHub, Vercel akan otomatis deploy tanpa masalah!

Good luck! 🚀
