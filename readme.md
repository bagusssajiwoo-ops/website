# 🪑 LuxeLiving - Website Furniture E-commerce

Website furniture premium dengan **Admin Panel Lengkap**, **Real-time Database**, dan **Zero Cost Deployment**.

🌐 **Live Demo:** https://website-funiture.netlify.app  
🔐 **Admin Panel:** https://website-funiture.netlify.app/admin

---

## 📊 Apa Itu Website Ini?

### **Ini adalah REACT PROJECT, bukan HTML biasa!**

Website ini adalah **Single Page Application (SPA)** yang dibangun dengan **React** dan **Vite**. Berikut penjelasan detailnya:

#### 🔍 Perbedaan React vs HTML Biasa:

| Aspek | HTML Biasa | React Project (Website Ini) |
|-------|------------|----------------------------|
| **File Structure** | Banyak `.html` files | 1 `index.html` + React components |
| **Rendering** | Static, langsung di HTML | Dynamic, di-render oleh React |
| **Development** | Edit HTML langsung | Edit `.jsx` components |
| **Build Process** | Tidak perlu build | Perlu `npm run build` |
| **Deployment** | Upload HTML files | Upload folder `dist/` hasil build |

#### 📁 Cara Kerja React Project:

```
1. DEVELOPMENT (npm run dev):
   index.html → loads → /src/main.jsx → renders → React App
   
2. PRODUCTION (npm run build):
   Vite builds → /dist/index.html + bundled JS → Deploy to Netlify
   
3. USER ACCESS:
   User visit website → Netlify serves /dist/index.html → JS loads → React renders UI
```

#### 💡 Mengapa Pakai React?

✅ **Component-based** - Code lebih terorganisir  
✅ **Reusable** - Components bisa dipakai berulang  
✅ **Fast** - Virtual DOM untuk performa optimal  
✅ **Modern** - Ekosistem library yang lengkap  
✅ **Scalable** - Mudah dikembangkan ke fitur lebih besar

---

## 🏗️ Arsitektur Website

### **Type: Single Page Application (SPA)**

```
┌─────────────────────────────────────────┐
│         BROWSER (User View)            │
│  URL: https://website-funiture.netlify.app  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         NETLIFY CDN                     │
│  - Serves static files                 │
│  - Auto SSL (HTTPS)                    │
│  - Global distribution                 │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         /dist/ Folder                   │
│  ├── index.html (entry point)          │
│  ├── assets/                           │
│  │   ├── index-[hash].js  (React app) │
│  │   └── index-[hash].css (styles)    │
│  └── images/                           │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         REACT ROUTER                    │
│  - Client-side routing                 │
│  - No page reload                      │
│  - /admin/* protected routes           │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         FIREBASE BACKEND                │
│  ├── Firestore (Database)              │
│  │   ├── /products collection          │
│  │   └── /categories collection        │
│  ├── Authentication                    │
│  │   └── Email/Password                │
│  └── Security Rules                    │
└─────────────────────────────────────────┘
```

---

## 🎯 Fitur Lengkap

### **Public Website** (Customer View)

✅ **Homepage**
- Hero section dengan call-to-action
- Kategori produk (dynamic dari Firestore)
- Featured products (9 items, real-time)
- Testimonials
- Contact section

✅ **Product Display**
- Real-time loading dari database
- Beautiful product cards
- Hover animations
- WhatsApp pre-order integration

✅ **Categories Section**
- Dynamic categories dari Firestore
- Modern gradient cards
- Icon-based design
- Click-to-scroll navigation

### **Admin Panel** (Admin Only)

✅ **Secure Authentication**
- Firebase email/password login
- Protected routes
- Auto-logout on session expire

✅ **Dashboard**
- Quick stats overview
- Recent activity
- Quick action buttons

✅ **Product Management (CRUD)**
- ➕ Add new products
- 📝 Edit existing products
- 🗑️ Delete products
- 📸 Image upload (ImgBB)
- ✅ Real-time sync to website

✅ **Category Management**
- ➕ Add categories
- 🗑️ Delete categories
- ✅ Auto-update dropdowns

---

## 🛠 Tech Stack (Teknologi yang Digunakan)

### **Frontend Framework**
- **React 18.2** - UI Library
- **Vite 4.4** - Build Tool (super fast!)
- **React Router DOM 7** - Client-side routing

### **UI & Animations**
- **Framer Motion 10** - Smooth animations
- **React Icons 4** - Icon library
- **Vanilla CSS** - Custom styling dengan CSS Variables

### **Backend Services**
- **Firebase Firestore** - NoSQL real-time database
- **Firebase Auth** - User authentication
- **ImgBB API** - Image hosting (unlimited, gratis)

### **Deployment**
- **Netlify** - Static site hosting
- **GitHub** - Source control & CI/CD trigger

---

## 📁 Struktur Project Detail

```
C:/Users/bagus/haje/
│
├── 📄 index.html              # Entry point HTML (loads React)
├── 📄 package.json            # Dependencies & scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 netlify.toml            # Netlify deployment config
├── 📄 firestore.rules         # Firestore security rules
│
├── 📁 public/                 # Static assets
│   ├── _redirects            # Netlify SPA routing
│   └── images/               # Public images
│
├── 📁 src/                    # SOURCE CODE (React)
│   │
│   ├── 📄 main.jsx           # React entry point
│   ├── 📄 App.jsx            # Main App component (routing)
│   ├── 📄 index.css          # Global styles
│   │
│   ├── 📁 components/        # React Components
│   │   │
│   │   ├── 📁 layout/       # Layout components
│   │   │   ├── Navbar.jsx   # Navigation bar
│   │   │   └── Footer.jsx   # Footer
│   │   │
│   │   ├── 📁 sections/     # Page sections
│   │   │   ├── Hero.jsx     # Hero banner
│   │   │   ├── Categories.jsx     # Categories display
│   │   │   ├── FeaturedProducts.jsx  # Products grid
│   │   │   └── Contact.jsx  # Contact info
│   │   │
│   │   ├── 📁 ui/           # Reusable UI components
│   │   │   ├── ProductCard.jsx    # Product card
│   │   │   ├── CategoryCard.jsx   # Category card
│   │   │   └── WhatsAppButton.jsx # Floating WA button
│   │   │
│   │   └── 📁 admin/        # Admin-only components
│   │       ├── Sidebar.jsx  # Admin sidebar
│   │       └── ProtectedRoute.jsx  # Route protection
│   │
│   ├── 📁 pages/             # Page components
│   │   ├── HomePage.jsx      # Public homepage
│   │   └── 📁 admin/         # Admin pages
│   │       ├── Login.jsx     # Admin login
│   │       ├── Dashboard.jsx # Admin dashboard
│   │       ├── 📁 Products/  # Product management
│   │       │   ├── ProductList.jsx  # View all products
│   │       │   ├── AddProduct.jsx   # Add new product
│   │       │   └── EditProduct.jsx  # Edit product
│   │       └── 📁 Categories/  # Category management
│   │           └── CategoryList.jsx  # Manage categories
│   │
│   ├── 📁 services/          # Backend integration
│   │   ├── firebase.js       # Firebase config
│   │   ├── auth.js          # Auth functions
│   │   ├── productService.js  # Product CRUD
│   │   └── categoryService.js # Category CRUD
│   │
│   ├── 📁 hooks/             # Custom React hooks
│   │   └── useAuth.js       # Authentication hook
│   │
│   ├── 📁 data/              # Static data
│   │   ├── products.js      # (legacy, not used)
│   │   ├── categories.js    # (legacy, not used)
│   │   └── config.js        # WhatsApp config
│   │
│   └── 📁 config/            # Configuration
│       └── imgbb.js         # ImgBB API config
│
└── 📁 dist/                  # BUILD OUTPUT (generated)
    ├── index.html            # Production HTML
    ├── assets/               # Bundled JS & CSS
    └── images/               # Optimized images
```

---

## 🔄 Development Workflow

### **1. Clone Repository**
```bash
git clone https://github.com/bagusssajiwoo-ops/website.git
cd haje
```

### **2. Install Dependencies**
```bash
npm install
```
Ini akan install semua packages di `package.json`:
- React, React DOM
- React Router
- Firebase
- Framer Motion
- React Icons
- React Toastify
- Vite (dev dependency)

### **3. Development Mode**
```bash
npm run dev
```
- Menjalankan Vite dev server
- Opens at `http://localhost:5173`
- **Hot Module Replacement (HMR)** - code changes langsung reload
- Fast refresh tanpa full page reload

### **4. Build untuk Production**
```bash
npm run build
```
Process:
1. Vite compile all React code
2. Bundle JS files → `dist/assets/index-[hash].js`
3. Optimize CSS → `dist/assets/index-[hash].css`
4. Copy static assets → `dist/`
5. Generate `dist/index.html`

Output: Folder `dist/` siap deploy!

### **5. Preview Production Build**
```bash
npm run preview
```
Test production build locally sebelum deploy.

---

## 🚀 Deployment Process

### **Automatic Deployment (Current Setup)**

```
1. Developer push ke GitHub
   ↓
2. GitHub webhook → trigger Netlify
   ↓
3. Netlify clone repository
   ↓
4. Netlify run: npm install && npm run build
   ↓
5. Netlify deploy folder dist/
   ↓
6. Live at: https://website-funiture.netlify.app
```

### **Manual Deployment**

```bash
# Build project
npm run build

# Deploy dist/ folder to:
# - Netlify: drag & drop dist/ folder
# - Vercel: vercel --prod
# - GitHub Pages: push dist/ to gh-pages branch
```

---

## 🔐 Firebase Configuration

### **Collections Structure**

**Products Collection:**
```javascript
/products/{productId}
{
  name: "Sofa Minimalis",
  category: "Sofa",
  price: "Rp 5.000.000",
  description: "Sofa modern...",
  image: "https://i.ibb.co/...",
  createdAt: Timestamp
}
```

**Categories Collection:**
```javascript
/categories/{categoryId}
{
  name: "Sofa",
  createdAt: Timestamp
}
```

### **Security Rules**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Public read, Admin write
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /categories/{categoryId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## ⚙️ Configuration Files

### **vite.config.js**
Konfigurasi Vite build tool:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### **netlify.toml**
Konfigurasi Netlify deployment:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **public/_redirects**
SPA routing fix untuk Netlify:
```
/*    /index.html   200
```

---

## 📱 Cara Menggunakan

### **Untuk Developer:**

1. **Edit Components**
   - Components ada di `src/components/`
   - Edit `.jsx` files
   - Save → auto reload

2. **Add New Page**
   - Create file di `src/pages/`
   - Add route di `src/App.jsx`
   - Link dari Navbar

3. **Styling**
   - Global styles: `src/index.css`
   - Component styles: inline `<style>` tags
   - CSS Variables: defined di `:root`

4. **Add Firebase Function**
   - Service files di `src/services/`
   - Import Firestore functions
   - Use in components

### **Untuk Admin:**

1. **Login ke Admin Panel**
   - Visit: `/admin/login`
   - Email: `admin@luxeliving.com`
   - Password: [your password]

2. **Manage Products**
   - Dashboard → Products
   - Add/Edit/Delete products
   - Upload images (max 10MB)

3. **Manage Categories**
   - Dashboard → Categories
   - Add/Delete categories
   - Auto-update product dropdowns

---

## 💰 Cost Breakdown

### **Monthly Cost: $0** ✅

| Service | Plan | Usage Limit | Cost |
|---------|------|------------|------|
| **Firebase Firestore** | Free Spark | 50k reads/day, 20k writes/day | $0 |
| **Firebase Auth** | Free Spark | Unlimited users | $0 |
| **ImgBB** | Free | Unlimited uploads | $0 |
| **Netlify** | Free Starter | 100GB bandwidth/month | $0 |
| **GitHub** | Free | Unlimited repos | $0 |
| **TOTAL** | | | **$0/month** |

**Upgrade diperlukan jika:**
- Traffic >1000 users/day
- Firestore reads >50k/day
- Need custom domain email

---

## 🎨 Customization Guide

### **Ubah Warna Brand**
Edit `src/index.css`:
```css
:root {
  --color-primary: #D4A373;    /* Gold */
  --color-secondary: #1a1a2e;  /* Dark Navy */
  --color-accent: #E7C9A6;     /* Light Gold */
}
```

### **Ubah Nomor WhatsApp**
Edit `src/data/config.js`:
```javascript
export const whatsappConfig = {
  phoneNumber: "6282330302593",  // Ganti nomor
  message: "Halo Admin...",      // Ganti template
};
```

### **Ubah Firebase Config**
Edit `src/services/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-domain.firebaseapp.com",
  projectId: "your-project-id",
  // ...
};
```

---

## 🔍 Troubleshooting

### **Problem: `npm run dev` error**
**Solution:**
```bash
# Delete node_modules & reinstall
rm -rf node_modules
npm install
npm run dev
```

### **Problem: Build gagal**
**Solution:**
```bash
# Clear cache & rebuild
npm run build -- --force
```

### **Problem: Products tidak muncul**
**Solution:**
1. Check Firestore rules
2. Check Firebase config
3. Check browser console errors

### **Problem: 404 Error di Netlify**
**Solution:**
- Pastikan `public/_redirects` exists
- Pastikan `netlify.toml` configured

---

## 📚 Dokumentasi Tambahan

- **Panduan Admin:** `panduan_website_admin.md`
- **Firestore Rules:** `firestore.rules`
- **Website Analysis:** Lihat artifact `WEBSITE_ANALYSIS.md`

---

## 🎯 Development Roadmap

### ✅ **Phase 1: COMPLETED**
- [x] Basic website structure
- [x] Product catalog
- [x] Admin panel CRUD
- [x] Firebase integration
- [x] Category management
- [x] Real-time sync
- [x] Mobile responsive

### 🚧 **Phase 2: Planned**
- [ ] Shopping cart
- [ ] User authentication (customers)
- [ ] Order management
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Advanced search & filter

### 💡 **Phase 3: Future**
- [ ] Product reviews & ratings
- [ ] Inventory tracking
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics dashboard

---

## 🤝 Support & Contact

**Developer Support:**
- GitHub: [bagusssajiwoo-ops](https://github.com/bagusssajiwoo-ops)
- Email: support@luxeliving.com

**Business Inquiries:**
- WhatsApp: +62 823-3030-2593
- Website: https://website-funiture.netlify.app

---

## 📄 License

This project is private and proprietary.

---

## 🎉 Credits

**Built with:**
- ⚛️ React - UI Framework
- ⚡ Vite - Build Tool
- 🔥 Firebase - Backend
- 🎨 Framer Motion - Animations
- 🚀 Netlify - Hosting

**Made with ❤️ for LuxeLiving Furniture**

---

**Last Updated:** December 11, 2025  
**Version:** 3.0 (Admin Panel & Real-time Database)
