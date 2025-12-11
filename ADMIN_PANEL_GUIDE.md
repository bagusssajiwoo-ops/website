# 🎉 Admin Panel - Setup Complete!

## ✅ Yang Sudah Selesai

### 🔐 Authentication
- ✅ Login page dengan email/password
- ✅ Protected routes (hanya admin bisa akses)
- ✅ Logout functionality
- ✅ Session management

### 📊 Dashboard
- ✅ Overview stats (total products)
- ✅ Quick actions menu
- ✅ Navigation sidebar

### 📦 Product Management (CRUD Complete!)
- ✅ **Create**: Add new products dengan form lengkap
- ✅ **Read**: Lihat semua produk dalam tabel
- ✅ **Update**: Edit produk existing
- ✅ **Delete**: Hapus produk dengan confirmation

### 🖼️ Image Upload
- ✅ Upload ke ImgBB (gratis, unlimited)
- ✅ Alternative: Paste URL external
- ✅ Image preview sebelum upload
- ✅ Drag & drop support
- ✅ Max size validation (10MB)

### 🎨 UI Features
- ✅ Modern dark sidebar
- ✅ Responsive design (mobile friendly)
- ✅ Search products
- ✅ Toast notifications (success/error)
- ✅ Loading states
- ✅ Empty states

---

## 🚀 Cara Menggunakan Admin Panel

### 1. Setup Firebase (PENTING!)

**Anda BELUM setup Firebase!** Ikuti langkah berikut:

#### A. Buat Firebase Project
1. Buka: https://console.firebase.google.com
2. Klik "Add Project" / "Tambah Project"
3. Nama project: `luxeliving-furniture` (atau bebas)
4. Enable Google Analytics (optional)
5. Klik "Create Project"

#### B. Enable Firestore Database
1. Di sidebar, klik "Firestore Database"
2. Klik "Create database"
3. Pilih "Start in production mode"
4. Location: "asia-southeast1 (Singapore)"
5. Klik "Enable"

#### C. Setup Firestore Rules
Klik tab "Rules" dan paste ini:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{productId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

Klik "Publish"

#### D. Enable Authentication
1. Di sidebar, klik "Authentication"
2. Klik "Get started"
3. Klik "Email/Password"
4. Enable toggle
5. Klik "Save"

#### E. Tambah Admin User
1. Tab "Users" → "Add user"
2. Email: `admin@luxeliving.com` (atau email Anda)
3. Password: `[password kuat, min 6 karakter]`
4. Klik "Add user"

📝 **CATAT email & password ini untuk login!**

#### F. Get Firebase Config
1. Project Settings (icon roda gigi)
2. Scroll ke "Your apps"
3. Klik icon "</>" (Web)
4. App nickname: `luxeliving-web`
5. JANGAN centang Hosting
6. Klik "Register app"
7. **COPY** firebaseConfig object

#### G. Paste Config ke Code
Edit file: `src/services/firebase.js`

Replace ini:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Dengan config Anda dari Firebase Console!

---

### 2. Jalankan Development Server

```bash
npm run dev
```

Website jalan di: `http://localhost:5173`

---

### 3. Access Admin Panel

1. Buka browser → `http://localhost:5173/admin/login`
2. Login dengan:
   - Email: (yang Anda buat di Firebase)
   - Password: (yang Anda set di Firebase)
3. Klik "Login"

✅ Anda akan masuk ke Dashboard!

---

## 📖 Admin Panel Guide

### Login
- URL: `/admin/login`
- Gunakan email & password dari Firebase Authentication

### Dashboard
- URL: `/admin/dashboard`
- Lihat total produk
- Quick actions: Add Product, Manage Products

### Product List
- URL: `/admin/products`
- Lihat semua produk dalam tabel
- Search produk
- Edit / Delete actions

### Add Product
- URL: `/admin/products/add`
- Form lengkap:
  - **Upload Gambar**: Klik area upload → Pilih file (ImgBB auto-upload)
  - **Alternative**: Paste URL gambar dari mana saja
  - **Product Name**: Nama produk
  - **Category**: Pilih dari dropdown
  - **Price**: Format: "Rp X.XXX.XXX"
  - **Description**: Deskripsi produk
- Klik "Save Product"

### Edit Product
- URL: `/admin/products/edit/:id`
- Form sama seperti Add Product
- Data sudah pre-filled
- Bisa ganti gambar (klik "Change Image")
- Klik "Update Product"

### Delete Product
- Di Product List, klik "Delete" pada produk
- Confirmation modal muncul
- Klik "Delete" untuk confirm

---

## 🔒 Security

### Protected Routes
- Semua `/admin/*` routes (kecuali `/admin/login`) butuh authentication
- Kalau belum login → Auto-redirect ke login page
- Session disimpan (tetap login sampai logout)

### Firestore Rules
- Public dapat **READ** products (untuk website)
- Hanya authenticated admin dapat **WRITE** (create/update/delete)

### ImgBB
- API key tersimpan di config
- Upload gambar langsung ke ImgBB servers
- Gratis unlimited

---

## 🎯 Workflow Lengkap

1. **Login** di `/admin/login`
2. **Dashboard** → Lihat overview
3. **Add Product**:
   - Upload gambar (ImgBB)
   - Isi form
   - Save
4. **Product masuk Firestore**
5. **Website langsung update** (real-time!)
6. **Customer lihat produk** di homepage
7. **Edit/Delete** kapan saja dari admin panel

---

## 🌐 Website Integration

### Frontend (Public Website)
- Products di homepage fetch dari Firestore (real-time)
- Setiap product ada tombol "Pre Order"
- Klik → WhatsApp dengan template pesan

### Admin Panel
- Add/Edit/Delete products
- Changes langsung reflect di public website
- No need redeploy!

---

## 📁 File Structure

```
src/
├── pages/
│   └── admin/
│       ├── Login.jsx              # Admin login
│       ├── Dashboard.jsx          # Dashboard
│       └── Products/
│           ├── ProductList.jsx    # List semua produk
│           ├── AddProduct.jsx     # Form tambah produk
│           └── EditProduct.jsx    # Form edit produk
│
├── components/
│   └── admin/
│       ├── ProtectedRoute.jsx     # Route protection
│       └── Sidebar.jsx            # Admin sidebar
│
├── services/
│   ├── firebase.js                # Firebase config
│   ├── auth.js                    # Login/logout
│   └── productService.js          # CRUD products
│
├── config/
│   └── imgbb.js                   # ImgBB upload
│
└── hooks/
    └── useAuth.js                 # Auth state
```

---

## 🔧 Troubleshooting

### Build Failed
```bash
npm run build
```
Jika error, check:
- Semua imports benar
- Firebase config sudah diisi
- Dependencies sudah install

### Login Gagal
- Check Firebase console → Authentication sudah enable?
- User sudah dibuat di Authentication?
- Firebase config di `firebase.js` sudah benar?

### Upload Gambar Gagal
- Check koneksi internet
- File size max 10MB
- ImgBB API key di `config/imgbb.js` benar?

### Products Tidak Muncul
- Check Firebase console → Firestore Database ada data?
- Firestore rules sudah dipublish?
- Browser console ada error?

---

## 🚀 Deploy Production

### Frontend (Vercel)
```bash
git add .
git commit -m "feat: Full admin panel dengan Firebase + ImgBB"
git push
```
Vercel auto-deploy!

### Firebase
Sudah production-ready! Gratis sampai:
- 50k reads/day
- 20k writes/day

### ImgBB
Unlimited, gratis selamanya!

---

## 📊 Next Steps (Optional Enhancements)

1. **Category Management**: CRUD categories
2. **Image Gallery**: Multiple images per product
3. **Product Variants**: Sizes, colors
4. **Inventory**: Stock tracking
5. **Orders**: Track WhatsApp orders
6. **Analytics**: View stats, popular products
7. **Bulk Upload**: CSV import

---

## ✅ Checklist Setup

- [ ] Firebase project created
- [ ] Firestore enabled & rules set
- [ ] Authentication enabled
- [ ] Admin user created
- [ ] Firebase config pasted di `firebase.js`
- [ ] `npm run dev` running
- [ ] Login berhasil
- [ ] Add product test
- [ ] Product muncul di homepage

---

**Selamat! Admin Panel Anda sudah siap! 🎉**

Questions? Check:
- FIREBASE_SETUP_GUIDE.md (setup Firebase detail)
- SOLUSI_TANPA_KARTU_KREDIT.md (ImgBB info)
