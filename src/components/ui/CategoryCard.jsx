// Category Card - Simplified untuk Firestore data
import React from 'react';
import { motion } from 'framer-motion';
import { FiTag } from 'react-icons/fi';

const CategoryCard = ({ category, onClick }) => {
  return (
    <motion.div
      className="category-card"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
    >
      <div className="category-icon-wrapper">
        <FiTag className="category-icon" />
      </div>
      <div className="category-info">
        <h3>{category.name}</h3>
      </div>

      <style>{`
        .category-card {
          background: linear-gradient(135deg, #D4A373 0%, #E7C9A6 100%);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.2);
          transition: all 0.3s ease;
          padding: 2.5rem 1.5rem;
          text-align: center;
          position: relative;
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .category-card:hover {
          box-shadow: 0 8px 24px rgba(212, 163, 115, 0.3);
          transform: translateY(-5px);
        }

        .category-card:hover::before {
          opacity: 1;
        }

        .category-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.4);
        }

        .category-icon {
          font-size: 2.5rem;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .category-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .category-card {
            padding: 2rem 1rem;
          }

          .category-icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .category-icon {
            font-size: 2rem;
          }

          .category-info h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CategoryCard;
