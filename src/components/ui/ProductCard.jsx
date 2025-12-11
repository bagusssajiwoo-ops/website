import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import { whatsappConfig } from '../../data/config';

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = whatsappConfig.generateProductMessage(
      product.name,
      product.price,
      product.image,
      product.description
    );
    whatsappConfig.openWhatsApp(message);
  };

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-actions">
          <button
            onClick={handleWhatsAppClick}
            aria-label="Pre Order via WhatsApp"
            className="btn-whatsapp"
          >
            <FiShoppingBag /> Pre Order
          </button>
          <button aria-label="Add to Wishlist" className="btn-wishlist">
            <FiHeart />
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <span className="price">{product.price}</span>
      </div>

      <style>{`
        .product-card {
          background: white;
          cursor: pointer;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .product-card:hover {
          box-shadow: var(--shadow-md);
        }

        .product-image {
          position: relative;
          height: 350px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.08);
        }

        .product-actions {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          display: flex;
          gap: 0.75rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .product-card:hover .product-actions {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .product-actions button {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          background: white;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }

        .btn-whatsapp {
          background: #25D366 !important;
          color: white !important;
        }

        .btn-whatsapp:hover {
          background: #1fb855 !important;
          transform: scale(1.05);
        }

        .btn-wishlist {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-wishlist:hover {
          background: var(--color-primary) !important;
          color: white !important;
        }

        .product-info {
          padding: 1.5rem;
          text-align: center;
        }

        .category {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--color-text-light);
          letter-spacing: 1px;
          font-weight: 600;
        }

        .product-info h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--color-primary);
        }

        .description {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin: 0.5rem 0 1rem;
          line-height: 1.5;
        }

        .price {
          font-weight: 700;
          color: var(--color-accent);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .product-actions {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          
          .product-image {
            height: 280px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProductCard;
