import React from 'react';
import { categories } from '../../data/categories';
import CategoryCard from '../ui/CategoryCard';

const Categories = () => {
    const handleCategoryClick = (category) => {
        // Scroll ke section produk
        const productSection = document.getElementById('collection');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="categories-section section-padding" id="categories">
            <div className="container">
                <div className="section-header">
                    <h2>Kategori Produk</h2>
                    <p>Jelajahi koleksi furniture kami berdasarkan kategori</p>
                </div>

                <div className="categories-grid">
                    {categories.map(category => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            onClick={() => handleCategoryClick(category)}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        .categories-section {
          background: #f9f9f9;
        }

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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Categories;
