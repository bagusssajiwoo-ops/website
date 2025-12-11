import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Public pages
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Admin pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProductList from './pages/admin/Products/ProductList';
import AddProduct from './pages/admin/Products/AddProduct';
import EditProduct from './pages/admin/Products/EditProduct';
import CategoryList from './pages/admin/Categories/CategoryList';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Home Page Component
const HomePage = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
    </>
);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/products"
                    element={
                        <ProtectedRoute>
                            <ProductList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/products/add"
                    element={
                        <ProtectedRoute>
                            <AddProduct />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/products/edit/:id"
                    element={
                        <ProtectedRoute>
                            <EditProduct />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/categories"
                    element={
                        <ProtectedRoute>
                            <CategoryList />
                        </ProtectedRoute>
                    }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {/* Toast Notifications */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* Loading Spinner CSS */}
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </BrowserRouter>
    );
}

export default App;
