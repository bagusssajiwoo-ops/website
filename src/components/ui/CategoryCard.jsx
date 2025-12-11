import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ category, onClick }) => {
    return (
        <motion.div
            className="category-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onClick}
        >
            <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                    <span className="category-icon">{category.icon}</span>
                </div>
            </div>
            <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
            </div>

            <style>{`
        .category-card {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .category-card:hover {
          box-shadow: var(--shadow-md);
        }

        .category-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card:hover .category-image img {
          transform: scale(1.1);
        }

        .category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-icon {
          font-size: 3rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .category-info {
          padding: 1.5rem;
          text-align: center;
        }

        .category-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--color-primary);
        }

        .category-info p {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
      `}</style>
        </motion.div>
    );
};

export default CategoryCard;
