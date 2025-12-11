// Featured Products - Load dari Firestore (REAL-TIME)
import React, { useState, useEffect } from 'react';
import ProductCard from '../ui/ProductCard';
import { getAllProducts } from '../../services/productService';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const result = await getAllProducts();
    if (result.success) {
      // Ambil max 9 produk untuk featured
      setProducts(result.products.slice(0, 9));
    } else {
      console.error('Error loading products:', result.error);
      setProducts([]);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section className="section-padding" id="collection">
        <div className="container">
          <div className="section-header">
            <h2>Produk Unggulan</h2>
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="section-padding" id="collection">
        <div className="container">
          <div className="section-header">
            <h2>Produk Unggulan</h2>
            <p>Belum ada produk. Silakan tambahkan produk melalui admin panel.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="collection">
      <div className="container">
        <div className="section-header">
          <h2>Produk Unggulan</h2>
          <p>Koleksi furniture premium pilihan terbaik kami</p>
        </div>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--color-text-light);
          font-size: 1.1rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .product-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
