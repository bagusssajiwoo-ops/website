# ✅ Setup Firebase - Checklist Step by Step

## Status: Firebase Config ✅ DONE

Firebase config sudah benar di `src/services/firebase.js`!

---

## Next Steps: Setup di Firebase Console

### Step 1: Enable Firestore Database ⏳

1. **Buka Firebase Console**: https://console.firebase.google.com
2. **Login** dengan Google account Anda
3. **Pilih project**: "website-funiture"
4. Di sidebar kiri, klik **"Firestore Database"**
5. Klik **"Create database"**
6. **Pilih mode**: "Start in production mode" → Next
7. **Location**: Pilih "asia-southeast1 (Singapore)" → Enable
8. **Tunggu 30-60 detik** sampai database created

✅ **Firestore Database ready!**

---

### Step 2: Setup Firestore Security Rules ⏳

Setelah Firestore created:

1. **Klik tab "Rules"** di Firestore Database
2. **Hapus semua** isi yang ada
3. **Copy-paste** rules berikut:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Products collection
    match /products/{productId} {
      // Semua orang bisa read (untuk public website)
      allow read: if true;
      
      // Hanya authenticated user bisa write (untuk admin)
      allow create, update, delete: if request.auth != null;
    }
    
    // Categories collection (optional, untuk future)
    match /categories/{categoryId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

4. **Klik "Publish"**

✅ **Security Rules configured!**

---

### Step 3: Enable Authentication ⏳

1. Di sidebar kiri, klik **"Authentication"**
2. Klik **"Get started"**
3. **Klik tab "Sign-in method"**
4. Cari **"Email/Password"** di list
5. **Klik** row Email/Password
6. **Enable** toggle pertama (Email/Password)
7. **Klik "Save"**

✅ **Authentication enabled!**

---

### Step 4: Tambah Admin User ⏳

1. **Klik tab "Users"** di Authentication
2. **Klik "Add user"**
3. **Isi form**:
   ```
   Email: admin@luxeliving.com
   Password: Admin123! (atau password kuat lainnya)
   ```
4. **Klik "Add user"**

📝 **PENTING**: Catat email & password ini! Nanti dipakai untuk login!

```
Email: admin@luxeliving.com
Password: Admin123!
```

✅ **Admin user created!**

---

## Testing Admin Panel

Setelah semua setup di atas selesai:

### 1. Jalankan Dev Server

```bash
npm run dev
```

Website jalan di: `http://localhost:5173`

### 2. Akses Admin Login

1. Buka browser
2. Go to: `http://localhost:5173/admin/login`
3. Login dengan:
   - **Email**: admin@luxeliving.com
   - **Password**: Admin123! (atau password yang Anda set)
4. Klik **"Login"**

✅ **Anda akan masuk ke Dashboard!**

### 3. Test Add Product

1. Di Dashboard, klik **"Add New Product"**
2. **Upload gambar**:
   - Klik area upload
   - Pilih gambar furniture dari komputer
   - Gambar akan auto-upload ke ImgBB
3. **Isi form**:
   - Product Name: "Test Sofa Modern"
   - Category: "Sofa"
   - Price: "Rp 5.500.000"
   - Description: "Sofa modern dengan bahan premium"
4. Klik **"Save Product"**

✅ **Product saved to Firestore!**

### 4. Check Public Website

1. Go to: `http://localhost:5173`
2. Scroll ke section "Featured Products"
3. **Product yang baru ditambah akan muncul!**

🎉 **Real-time sync working!**

---

## Troubleshooting

### "Login failed" atau "Network error"

**Kemungkinan:**
- Authentication belum di-enable di Firebase
- User belum dibuat
- Firestore belum di-create

**Solusi:**
- Check Firebase Console → Authentication → Users (ada user?)
- Check Firestore Database (sudah ada?)

### "Permission denied" saat save product

**Kemungkinan:**
- Firestore rules belum di-publish
- User belum login

**Solusi:**
- Check Firestore → Rules (sudah publish?)
- Logout & login ulang

### "Upload gambar gagal"

**Kemungkinan:**
- Koneksi internet lambat
- File terlalu besar (>10MB)

**Solusi:**
- Check internet connection
- Compress gambar dulu

---

## Checklist Complete

- [x] Firebase config pasted ✅
- [ ] Firestore Database created ⏳
- [ ] Firestore Rules published ⏳
- [ ] Authentication enabled ⏳
- [ ] Admin user created ⏳
- [ ] Test login ⏳
- [ ] Test add product ⏳
- [ ] Verify product appears on website ⏳

---

## Next: Lakukan Step 1-4 di Firebase Console

**Waktu yang dibutuhkan**: ~10 menit

Setelah selesai, test login dan add product!

**Firebase Console**: https://console.firebase.google.com/project/website-funiture
