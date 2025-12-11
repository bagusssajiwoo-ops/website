// Product List - Improved UI
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiPackage, FiRefreshCw } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Sidebar from '../../../components/admin/Sidebar';
import { getAllProducts, deleteProduct } from '../../../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const result = await getAllProducts();
    if (result.success) {
      setProducts(result.products);
      console.log('Loaded products:', result.products);
    } else {
      toast.error(result.error);
    }
    setLoading(false);
  };

  const handleDelete = async (productId) => {
    const result = await deleteProduct(productId);
    if (result.success) {
      toast.success('Produk berhasil dihapus!');
      loadProducts();
      setDeleteConfirm(null);
    } else {
      toast.error(result.error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <div className="page-header">
          <div className="page-title">
            <h1>Product Management</h1>
            <p>Kelola katalog furniture Anda • {products.length} produk total</p>
          </div>
          <div className="header-actions">
            <button onClick={loadProducts} className="btn-refresh" title="Refresh">
              <FiRefreshCw />
              Refresh
            </button>
            <Link to="/admin/products/add" className="btn-primary">
              <FiPlus /> Add Product
            </Link>
          </div>
        </div>

        <div className="toolbar">
          <div className="search-box">
            <FiSearch />
            <input
              type="text"
              placeholder="Search by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner-large"></div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="empty-state">
            <FiPackage className="empty-icon" />
            <h3>No products found</h3>
            <p>
              {searchTerm
                ? 'No products match your search. Try different keywords.'
                : 'Start by adding your first product to the catalog.'}
            </p>
            {!searchTerm && (
              <Link to="/admin/products/add" className="btn-primary">
                <FiPlus /> Add Your First Product
              </Link>
            )}
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <Link
                      to={`/admin/products/edit/${product.id}`}
                      className="overlay-btn btn-edit-overlay"
                    >
                      <FiEdit2 />
                    </Link>
                    <button
                      onClick={() => setDeleteConfirm(product)}
                      className="overlay-btn btn-delete-overlay"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h3>{product.name}</h3>
                    <span className="category-badge">{product.category}</span>
                  </div>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <FiTrash2 className="modal-icon" />
                <h2>Delete Product?</h2>
              </div>
              <p>
                Are you sure you want to delete "<strong>{deleteConfirm.name}</strong>"?
              </p>
              <p className="modal-warning">This action cannot be undone.</p>
              <div className="modal-actions">
                <button onClick={() => setDeleteConfirm(null)} className="btn-cancel">
                  Cancel
                </button>
                <button onClick={() => handleDelete(deleteConfirm.id)} className="btn-delete-confirm">
                  <FiTrash2 /> Delete Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .admin-content {
          margin-left: 250px;
          padding: 2rem;
          min-height: 100vh;
          background: #f5f7fa;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .page-title h1 {
          font-size: 2rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .page-title p {
          color: #666;
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-refresh {
          padding: 0.75rem 1.25rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          color: #666;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-refresh:hover {
          border-color: #D4A373;
          color: #D4A373;
          background: #fef8f3;
        }

        .btn-primary {
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
        }

        .toolbar {
          margin-bottom: 2rem;
        }

        .search-box {
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          max-width: 500px;
        }

        .search-box svg {
          color: #999;
          font-size: 1.25rem;
        }

        .search-box input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 1rem;
        }

        .loading-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .spinner-large {
          width: 48px;
          height: 48px;
          border: 4px solid #f0f0f0;
          border-top-color: #D4A373;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .empty-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .empty-icon {
          font-size: 4rem;
          color: #ddd;
          margin-bottom: 1.5rem;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          color: #1a1a2e;
          margin-bottom: 0.75rem;
        }

        .empty-state p {
          color: #666;
          margin-bottom: 2rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .product-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .overlay-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-edit-overlay {
          background: #4a9eff;
          color: white;
        }

        .btn-edit-overlay:hover {
          background: #3a8eef;
          transform: scale(1.1);
        }

        .btn-delete-overlay {
          background: #ff4444;
          color: white;
        }

        .btn-delete-overlay:hover {
          background: #cc0000;
          transform: scale(1.1);
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .product-info h3 {
          font-size: 1.125rem;
          color: #1a1a2e;
          margin: 0;
          flex: 1;
        }

        .category-badge {
          background: #e7f3ff;
          color: #0066cc;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .product-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #D4A373;
          margin-bottom: 0.75rem;
        }

        .product-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          max-width: 450px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .modal-icon {
          font-size: 2rem;
          color: #ff4444;
        }

        .modal h2 {
          color: #1a1a2e;
          font-size: 1.5rem;
          margin: 0;
        }

        .modal p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .modal-warning {
          color: #ff4444;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          border: 2px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          color: #666;
          transition: all 0.3s ease;
        }

        .btn-cancel:hover {
          background: #f5f5f5;
          border-color: #999;
        }

        .btn-delete-confirm {
          padding: 0.75rem 1.5rem;
          border: none;
          background: #ff4444;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-delete-confirm:hover {
          background: #cc0000;
        }

        @media (max-width: 768px) {
          .admin-content {
            margin-left: 70px;
            padding: 1rem;
          }

          .page-header {
            flex-direction: column;
            gap: 1rem;
          }

          .header-actions {
            width: 100%;
            flex-direction: column;
          }

          .btn-refresh,
          .btn-primary {
            width: 100%;
            justify-content: center;
          }

          .search-box {
            max-width: 100%;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .modal-actions {
            flex-direction: column-reverse;
          }

          .btn-cancel,
          .btn-delete-confirm {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductList;
