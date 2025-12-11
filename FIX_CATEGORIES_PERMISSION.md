# 🔧 FIX: Firestore Permission Error untuk Categories

## ⚠️ Error yang Terjadi:
```
FirebaseError: Missing or insufficient permissions
Error adding category
```

## 🎯 Penyebab:
Firestore Security Rules belum di-set untuk collection **`categories`**.

---

## ✅ SOLUSI - Update Firestore Security Rules

### Step 1: Buka Firebase Console

1. Go to: https://console.firebase.google.com/project/website-funiture
2. Login dengan Google account Anda
3. Pilih project "website-funiture"

### Step 2: Navigate ke Firestore Rules

1. Di sidebar kiri, klik **"Firestore Database"**
2. Klik tab **"Rules"**

### Step 3: Update Rules

**Hapus semua** isi yang ada di Rules editor, lalu **paste** rules berikut:

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
    
    // Categories collection ✅ TAMBAHKAN INI
    match /categories/{categoryId} {
      // Semua orang bisa read (untuk public website)
      allow read: if true;
      
      // Hanya authenticated user bisa write (untuk admin)
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

### Step 4: Publish Rules

1. Klik tombol **"Publish"** (pojok kanan atas)
2. Tunggu beberapa detik sampai rules active

---

## 🧪 Test Setelah Update Rules

1. **Refresh** halaman admin panel
2. Coba **Add Category** lagi
3. ✅ **Berhasil!** Category tersimpan

---

## 📋 Penjelasan Rules

### Products Collection:
```javascript
match /products/{productId} {
  allow read: if true;                        // Semua orang bisa lihat produk
  allow create, update, delete: if request.auth != null;  // Hanya admin login
}
```

### Categories Collection:
```javascript
match /categories/{categoryId} {
  allow read: if true;                        // Semua orang bisa lihat kategori
  allow create, update, delete: if request.auth != null;  // Hanya admin login
}
```

**Security:**
- ✅ Public website bisa **READ** (lihat products & categories)
- ✅ Hanya admin yang login bisa **WRITE** (add/edit/delete)
- ✅ Users yang tidak login **TIDAK BISA** add/edit/delete

---

## 🚀 Setelah Rules Updated

Anda bisa:
- ✅ Add categories
- ✅ Delete categories
- ✅ Add products dengan category yang baru
- ✅ Public website load categories dari Firestore

---

## ⚡ Quick Reference

**Firebase Console URL:**
https://console.firebase.google.com/project/website-funiture/firestore/rules

**Collections yang perlu rules:**
- `products` ✅ (sudah ada)
- `categories` ✅ (tambahkan sekarang)

---

## 🆘 Troubleshooting

### Error masih muncul setelah publish rules?

**Solusi:**
1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Logout** dari admin panel
3. **Login** lagi
4. Coba add category lagi

### Rules tidak bisa di-publish?

**Check:**
- Syntax benar (copy-paste exact dari guide ini)
- Tidak ada karakter aneh
- Kurung kurawal `{}` balance

---

**Problem SOLVED!** 🎉

Update rules sekarang, lalu test add category!
