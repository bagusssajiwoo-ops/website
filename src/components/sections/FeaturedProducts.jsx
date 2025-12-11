import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const FeaturedProducts = () => {
  // Tampilkan 9 produk pertama
  const featuredProducts = products.slice(0, 9);

  return (
    <section className="section-padding" id="collection">
      <div className="container">
        <div className="section-header">
          <h2>Produk Unggulan</h2>
          <p>Koleksi furniture premium pilihan terbaik kami</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map(product => (
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
