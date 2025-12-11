// Categories Section - Load dari Firestore (REAL-TIME)
import React, { useState, useEffect } from 'react';
import CategoryCard from '../ui/CategoryCard';
import { getAllCategories } from '../../services/categoryService';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    const result = await getAllCategories();
    if (result.success) {
      // Ambil max 6 kategori untuk showcase
      setCategories(result.categories.slice(0, 6));
    } else {
      console.error('Error loading categories:', result.error);
      setCategories([]);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Kategori Produk</h2>
            <p>Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return null; // Don't show section if no categories
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Kategori Produk</h2>
          <p>Jelajahi koleksi furniture berdasarkan kategori</p>
        </div>

        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
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

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;
