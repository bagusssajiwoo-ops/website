import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: "Meja Kerja Kantor Klasik Mewah",
    category: "Meja Kantor",
    price: "Rp 5.500.000",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Meja Kantor Ukir Mewah Kayu Jati",
    category: "Meja Kantor",
    price: "Rp 6.200.000",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Kitchen Set Mewah Letter L",
    category: "Dapur",
    price: "Rp 12.000.000",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sofa Tamu Mewah Klasik",
    category: "Ruang Tamu",
    price: "Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Tempat Tidur Ukir Jepara",
    category: "Kamar Tidur",
    price: "Rp 7.800.000",
    image: "https://images.unsplash.com/photo-1505693416388-50398820f870?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Lemari Pakaian Jati 4 Pintu",
    category: "Lemari",
    price: "Rp 9.000.000",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
  }
];

const ProductCard = ({ product }) => (
  <motion.div
    className="product-card"
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
    onClick={() => window.open(`https://wa.me/6282330302593?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}`, '_blank')}
  >
    <div className="product-image">
      <img src={product.image} alt={product.name} />
      <div className="product-actions">
        <button aria-label="Order via WhatsApp"><FiShoppingBag /></button>
      </div>
    </div>
    <div className="product-info">
      <span className="category">{product.category}</span>
      <h3>{product.name}</h3>
      <span className="price">{product.price}</span>
    </div>
  </motion.div>
);

const ProductGrid = () => {
  return (
    <section className="section-padding" id="katalog">
      <div className="container">
        <div className="section-header">
          <h2>Katalog Produk Terbaru</h2>
          <p>Pilihan furniture berkualitas untuk rumah impian Anda</p>
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
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3rem;
        }

        .product-card {
          background: white;
          cursor: pointer;
        }

        .product-image {
          position: relative;
          height: 350px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border-radius: var(--border-radius);
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-actions {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          display: flex;
          gap: 1rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .product-card:hover .product-actions {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .product-actions button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.2s ease;
        }

        .product-actions button:hover {
          background: var(--color-primary);
          color: white;
        }

        .product-info {
          text-align: center;
        }

        .category {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--color-text-light);
          letter-spacing: 1px;
        }

        .product-info h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          font-family: var(--font-body);
          font-weight: 500;
        }

        .price {
          font-weight: 600;
          color: var(--color-accent);
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
