# 🧪 Panduan Testing Admin Panel - Step by Step

## 📋 Prerequisites

✅ Firebase Firestore created  
✅ Firebase Authentication enabled  
✅ Admin user sudah dibuat di Firebase Console  
✅ Firebase config sudah dipaste di `src/services/firebase.js`  

**Admin Credentials untuk Testing:**
```
Email: admin@luxeliving.com  (atau email yang Anda buat)
Password: [password yang Anda set di Firebase]
```

---

## 🚀 Step 1: Jalankan Development Server

### 1.1 Buka Terminal

Pastikan Anda di folder project:
```bash
cd C:\Users\bagus\haje
```

### 1.2 Start Dev Server

```bash
npm run dev
```

**Expected Output:**
```
  VITE v4.5.14  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

✅ **Server running di `http://localhost:5173`**

---

## 🔐 Step 2: Test Admin Login

### 2.1 Buka Admin Login Page

1. **Buka browser** (Chrome/Firefox/Edge)
2. **Navigate to**: `http://localhost:5173/admin/login`

**Expected Result:**
- ✅ Halaman login muncul dengan gradient purple background
- ✅ Form login dengan field Email & Password
- ✅ Title "LuxeLiving Admin"
- ✅ Link "Back to Website"

### 2.2 Test Login dengan Credentials Salah (Negative Test)

**Input:**
```
Email: wrong@email.com
Password: wrongpassword
```

**Action:** Klik "Login"

**Expected Result:**
- ❌ Toast notification merah muncul: "Email tidak terdaftar" atau "Password salah"
- ❌ Tetap di halaman login
- ❌ Tidak redirect

✅ **PASS jika error message muncul**

### 2.3 Test Login dengan Credentials Benar (Positive Test)

**Input:**
```
Email: admin@luxeliving.com
Password: [password Anda]
```

**Action:** Klik "Login"

**Expected Result:**
- ✅ Toast notification hijau: "Login berhasil!"
- ✅ Redirect ke `/admin/dashboard` (URL berubah)
- ✅ Dashboard page muncul dengan sidebar

✅ **PASS jika masuk ke Dashboard**

### 2.4 Check Browser Console

Press `F12` → Tab "Console"

**Expected:**
- ✅ NO errors (tidak ada text merah)
- ✅ Hanya logs biasa (hijau/biru)

---

## 📊 Step 3: Test Dashboard

Setelah berhasil login, Anda ada di Dashboard.

### 3.1 Verify Dashboard Elements

**Check List:**
- [ ] Sidebar di kiri (dark theme)
- [ ] Header "Dashboard"
- [ ] Stats card "Total Products" (angka 0 atau lebih)
- [ ] Quick Actions: 2 cards
  - "Add New Product"
  - "Manage Products"

✅ **PASS jika semua elements terlihat**

### 3.2 Test Sidebar Navigation

**Click:** "Products" di sidebar

**Expected Result:**
- ✅ URL berubah ke `/admin/products`
- ✅ Product List page muncul
- ✅ Sidebar item "Products" jadi active (highlight)

**Click:** "Dashboard" di sidebar

**Expected Result:**
- ✅ Kembali ke Dashboard
- ✅ URL: `/admin/dashboard`

✅ **PASS jika navigation bekerja**

### 3.3 Test "View Website" Link

**Click:** "View Website" di sidebar footer

**Expected Result:**
- ✅ Tab baru terbuka
- ✅ Public website muncul (homepage)

✅ **PASS jika homepage terbuka**

---

## ➕ Step 4: Test Add Product (CRITICAL!)

### 4.1 Navigate to Add Product

**Method 1:** Dashboard → Click "Add New Product" card  
**Method 2:** Sidebar → Products → Click "Add New Product" button

**Expected Result:**
- ✅ URL: `/admin/products/add`
- ✅ Form "Add New Product" muncul
- ✅ Upload area terlihat
- ✅ Form fields kosong

### 4.2 Test Image Upload

**Action 1: Upload via Click**

1. **Click** area upload (kotak dashed border)
2. **Select** gambar furniture dari komputer (max 10MB)
3. **Wait** 2-3 detik

**Expected Result:**
- ✅ Image preview muncul
- ✅ Button "X" (remove) muncul di pojok kanan atas gambar
- ✅ NO error message

**Action 2: Remove Image**

1. **Click** button "X" di preview image

**Expected Result:**
- ✅ Image preview hilang
- ✅ Upload area muncul lagi

✅ **PASS jika upload & remove bekerja**

### 4.3 Fill Product Form

**Test Data:**
```
Product Name: Test Sofa Modern Premium
Category: Sofa (pilih dari dropdown)
Price: Rp 8.500.000
Description: Sofa modern dengan desain minimalis dan bahan berkualitas tinggi. Sangat nyaman untuk ruang tamu Anda.
```

**Upload Image:**
- Upload gambar sofa (atau gambar furniture apa saja)

### 4.4 Submit Form (Positive Test)

**Action:** Click "Save Product"

**Expected Process:**
1. Button berubah: "Saving..." (disabled)
2. Toast notification: "Uploading image..." (biru)
3. Wait 3-5 detik (upload ke ImgBB)
4. Toast notification: "Produk berhasil ditambahkan!" (hijau)
5. Redirect ke `/admin/products`
6. Product baru muncul di tabel!

**Expected Result:**
- ✅ Product berhasil disimpan
- ✅ Muncul di Product List
- ✅ Image terlihat (thumbnail)
- ✅ Data sesuai (nama, category, price)

✅ **PASS jika product tersimpan & muncul di list**

### 4.5 Verify di Firebase Console

**Open:** https://console.firebase.google.com  
**Navigate:** Project → Firestore Database → products collection

**Expected:**
- ✅ Ada 1 document baru
- ✅ Document ID: random string
- ✅ Fields: name, category, price, description, image, createdAt, updatedAt
- ✅ Image URL: `https://i.ibb.co/...` (ImgBB URL)

✅ **PASS jika data ada di Firestore**

### 4.6 Verify di Public Website

**Open:** `http://localhost:5173` (public homepage)  
**Scroll:** Ke section "Featured Products"

**Expected:**
- ✅ Product baru **MUNCUL** di grid!
- ✅ Gambar terlihat
- ✅ Nama, category, price benar
- ✅ Tombol "Pre Order" ada

✅ **PASS - Real-time sync working!** 🎉

### 4.7 Test Validation (Negative Test)

**Navigate:** Kembali ke Add Product form

**Action:** Click "Save Product" tanpa isi apa-apa

**Expected Result:**
- ❌ Toast error: "Semua field harus diisi!"
- ❌ Form tidak submit
- ❌ Tetap di halaman Add Product

✅ **PASS jika validation bekerja**

---

## ✏️ Step 5: Test Edit Product

### 5.1 Navigate to Product List

**Click:** Sidebar → Products

**Expected:**
- ✅ Tabel produk muncul
- ✅ Product yang tadi ditambah ada di list

### 5.2 Click Edit Button

**Action:** Click button "Edit" pada product yang tadi dibuat

**Expected Result:**
- ✅ URL: `/admin/products/edit/[ID]`
- ✅ Form Edit Product muncul
- ✅ **Data sudah pre-filled** (nama, category, price, description)
- ✅ **Image sudah tampil** (preview)
- ✅ Button "Change Image" muncul

### 5.3 Edit Product Data

**Change:**
```
Product Name: Test Sofa Modern Premium - EDITED ✅
Price: Rp 9.900.000  (ubah harga)
Description: (ubah sedikit description, tambah "UPDATE TEST")
```

**Keep:** Category & Image (tidak diubah)

### 5.4 Submit Edit

**Action:** Click "Update Product"

**Expected Process:**
1. Button: "Updating..." (disabled)
2. Wait 1-2 detik
3. Toast: "Produk berhasil diupdate!" (hijau)
4. Redirect ke Product List
5. Data berubah di tabel!

**Verify:**
- ✅ Nama product ada "EDITED ✅"
- ✅ Harga baru: Rp 9.900.000
- ✅ Description updated

### 5.5 Verify Real-time Update

**Open:** Public website (`http://localhost:5173`)  
**Refresh:** Page (F5)  
**Check:** Product di Featured Products section

**Expected:**
- ✅ Nama sudah berubah (ada "EDITED ✅")
- ✅ Harga sudah update
- ✅ Image sama (tidak berubah)

✅ **PASS jika perubahan reflect di public site**

### 5.6 Test Change Image

**Navigate:** Edit Product lagi

**Action:**
1. Click "Change Image" button
2. Select gambar baru
3. Wait untuk preview
4. Click "Update Product"

**Expected:**
- ✅ Image baru ter-upload ke ImgBB
- ✅ Product image berubah
- ✅ Image lama tidak dipakai lagi (diganti)

✅ **PASS jika image berhasil diganti**

---

## 🗑️ Step 6: Test Delete Product

### 6.1 Navigate to Product List

Pastikan ada minimal 1 product di list.

### 6.2 Click Delete Button

**Action:** Click button "Delete" (merah) pada product

**Expected Result:**
- ✅ Modal confirmation muncul
- ✅ Text: "Delete Product?"
- ✅ Nama product ditampilkan
- ✅ Warning: "This action cannot be undone"
- ✅ 2 buttons: "Cancel" & "Delete"

### 6.3 Test Cancel Delete

**Action:** Click "Cancel"

**Expected:**
- ✅ Modal hilang
- ✅ Product **TIDAK** terhapus
- ✅ Masih ada di list

### 6.4 Test Confirm Delete

**Action:**
1. Click "Delete" lagi
2. Di modal, click "Delete" (merah)

**Expected Process:**
1. Modal hilang
2. Toast: "Produk berhasil dihapus!" (hijau)
3. Product **HILANG** dari tabel
4. List auto-refresh

**Verify:**
- ✅ Product tidak ada di Product List
- ✅ Total Products di Dashboard berkurang

### 6.5 Verify di Firestore

**Open:** Firebase Console → Firestore → products

**Expected:**
- ✅ Document product tersebut **HILANG**

### 6.6 Verify di Public Website

**Refresh:** Public website

**Expected:**
- ✅ Product **TIDAK MUNCUL** lagi di Featured Products

✅ **PASS - Delete working dengan real-time sync!**

---

## 🔍 Step 7: Test Search Functionality

### 7.1 Add Multiple Products

**Action:** Tambah 2-3 produk lagi dengan:
- Sofa Modern
- Meja Kayu Jati
- Kursi Minimalis

### 7.2 Test Search

**Navigate:** Product List

**Action:** Ketik di search box: "sofa"

**Expected:**
- ✅ Hanya product dengan kata "sofa" muncul
- ✅ Real-time filtering (tidak perlu submit)
- ✅ Product lain **HIDDEN**

**Action:** Clear search (hapus text)

**Expected:**
- ✅ Semua product muncul lagi

**Test Search by Category:**
- Ketik: "meja"
- Expected: Product category "Meja" muncul

✅ **PASS jika search bekerja**

---

## 🔐 Step 8: Test Protected Routes

### 8.1 Test Access Without Login

**Action:**
1. Click "Logout" di sidebar
2. Toast: "Logout berhasil!"
3. **Redirect** ke `/admin/login`

**Now try:**
1. Manually go to: `http://localhost:5173/admin/dashboard`

**Expected Result:**
- ✅ **Auto-redirect** ke `/admin/login`
- ✅ Cannot access dashboard tanpa login

**Try:**
- `/admin/products` → Redirect to login
- `/admin/products/add` → Redirect to login

✅ **PASS jika protected routes bekerja**

---

## 📱 Step 9: Test WhatsApp Integration (Public Website)

### 9.1 Check Floating WhatsApp Button

**Navigate:** Public homepage (`http://localhost:5173`)

**Check:**
- ✅ Floating button di pojok kanan bawah
- ✅ WhatsApp icon (green)
- ✅ Pulse animation

**Hover:** Over button

**Expected:**
- ✅ Tooltip: "Chat dengan Kami!"

**Click:** Floating button

**Expected:**
- ✅ WhatsApp Web/App terbuka
- ✅ Chat dengan nomor: 62895422532976
- ✅ Default message terisi

### 9.2 Test Product Pre-Order

**Scroll:** Ke Featured Products section

**Click:** Tombol "Pre Order" pada salah satu product

**Expected:**
- ✅ WhatsApp terbuka
- ✅ Message template terisi dengan:
  - Nama product
  - Deskripsi product
  - Harga
  - **Image URL** (bisa diklik untuk lihat gambar!)

**Example message:**
```
Halo Admin LuxeLiving,

Saya tertarik dengan produk:
📦 *Test Sofa Modern Premium*
📝 Sofa modern dengan desain minimalis...
💰 Harga: Rp 8.500.000

🖼️ Lihat Gambar Produk:
https://i.ibb.co/xxxxx/image.jpg

Mohon informasi lebih lanjut...
```

✅ **PASS jika WhatsApp integration bekerja**

---

## 🎨 Step 10: Test Responsive Design

### 10.1 Test Mobile View

**Method 1:** Browser DevTools
1. Press F12
2. Click device toggle icon (phone/tablet)
3. Select "iPhone 12 Pro" atau device lain

**Method 2:** Resize browser window (drag to small)

**Check Admin Panel:**
- [ ] Sidebar collapse (icon only)
- [ ] Table scrollable horizontal
- [ ] Forms masih usable
- [ ] Buttons cukup besar untuk touch

**Check Public Website:**
- [ ] Navbar hamburger menu
- [ ] Product grid jadi 1 column
- [ ] Hero text readable
- [ ] WhatsApp button posisi OK

✅ **PASS jika responsive**

---

## 🐛 Step 11: Error Handling Test

### 11.1 Test Offline Mode

**Action:**
1. **Disconnect internet** (Wi-Fi off)
2. Try to add product

**Expected:**
- ❌ Toast error: "Gagal mengupload gambar. Periksa koneksi internet."

**Action:** Reconnect internet

✅ **PASS jika error handling ada**

### 11.2 Test Large File Upload

**Action:**
1. Try upload image > 10MB

**Expected:**
- ❌ Toast error: "Ukuran gambar maksimal 10MB"
- ❌ Image tidak ter-upload

✅ **PASS jika validation bekerja**

---

## ✅ Testing Checklist Summary

### Authentication
- [x] Login dengan credentials benar ✅
- [x] Login dengan credentials salah (error) ✅
- [x] Logout ✅
- [x] Protected routes (auto-redirect) ✅

### Product CRUD
- [x] Add product dengan upload image ✅
- [x] Add product validation ✅
- [x] Edit product data ✅
- [x] Edit product image ✅
- [x] Delete product dengan confirmation ✅
- [x] Product list tampil ✅

### Real-time Sync
- [x] Add product → Muncul di public site ✅
- [x] Edit product → Update di public site ✅
- [x] Delete product → Hilang dari public site ✅

### Search & Filter
- [x] Search by product name ✅
- [x] Search by category ✅
- [x] Real-time filtering ✅

### Image Upload
- [x] Upload to ImgBB ✅
- [x] Image preview ✅
- [x] Remove image ✅
- [x] Change image ✅
- [x] File size validation ✅

### UI/UX
- [x] Toast notifications ✅
- [x] Loading states ✅
- [x] Empty states ✅
- [x] Responsive design ✅
- [x] Error handling ✅

### WhatsApp Integration
- [x] Floating button ✅
- [x] Per-product button ✅
- [x] Message template dengan image URL ✅

---

## 📊 Expected Test Results

### Success Criteria
✅ **All tests PASS**: Admin panel PRODUCTION READY!  
⚠️ **1-2 tests FAIL**: Minor fixes needed  
❌ **Multiple tests FAIL**: Review implementation  

---

## 🎯 After Testing

### If All Tests Pass:

1. ✅ **Admin panel siap production!**
2. 🚀 **Deploy to Vercel**
3. 🎉 **Go live!**

### If Tests Fail:

1. 📝 Note errors
2. 🔍 Check browser console
3. 📞 Contact support (atau lihat troubleshooting)

---

## 🔧 Troubleshooting Common Issues

### Issue: "Cannot read products"
**Solution:**
- Check Firestore rules sudah publish
- Check internet connection

### Issue: "Image upload failed"
**Solution:**
- Check internet
- Check file size < 10MB
- Check ImgBB API key di `config/imgbb.js`

### Issue: "Login failed"
**Solution:**
- Check admin user exists di Firebase Console
- Check email/password correct
- Check Firebase Auth enabled

---

## 📹 Testing Video (Optional)

Saat testing, Anda bisa:
1. **Record screen** (Windows: Win+G)
2. **Document bugs** dengan screenshot
3. **Share** untuk review

---

**Happy Testing! 🧪**

**Estimasi waktu total testing: 15-20 menit**

Let me know kalau ada issue! 🚀
