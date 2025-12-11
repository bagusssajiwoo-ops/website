// Product List - View All Products with Edit/Delete
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiPackage } from 'react-icons/fi';
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
          <div>
            <h1>Products</h1>
            <p>Manage your furniture catalog</p>
          </div>
          <Link to="/admin/products/add" className="btn-primary">
            <FiPlus /> Add New Product
          </Link>
        </div>

        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="loading">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="empty-state">
            <FiPackage style={{ fontSize: '3rem', color: '#ccc' }} />
            <h3>No products found</h3>
            <p>Start by adding your first product</p>
            <Link to="/admin/products/add" className="btn-primary">
              <FiPlus /> Add Product
            </Link>
          </div>
        ) : (
          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} className="product-thumb" />
                    </td>
                    <td><strong>{product.name}</strong></td>
                    <td><span className="badge">{product.category}</span></td>
                    <td><strong>{product.price}</strong></td>
                    <td>
                      <div className="actions">
                        <Link to={`/admin/products/edit/${product.id}`} className="btn-edit">
                          <FiEdit2 /> Edit
                        </Link>
                        <button
                          onClick={() => setDeleteConfirm(product)}
                          className="btn-delete"
                        >
                          <FiTrash2 /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Delete Product?</h2>
              <p>Are you sure you want to delete "<strong>{deleteConfirm.name}</strong>"?</p>
              <p>This action cannot be undone.</p>
              <div className="modal-actions">
                <button onClick={() => setDeleteConfirm(null)} className="btn-cancel">
                  Cancel
                </button>
                <button onClick={() => handleDelete(deleteConfirm.id)} className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background: #D4A373;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #c59363;
          transform: translateY(-2px);
        }

        .search-box {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
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

        .loading {
          text-align: center;
          padding: 3rem;
          color: #999;
        }

        .empty-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: #1a1a2e;
        }

        .empty-state p {
          color: #999;
          margin-bottom: 1.5rem;
        }

        .products-table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: #f8f9fa;
        }

        th {
          text-align: left;
          padding: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          border-bottom: 2px solid #e0e0e0;
        }

        td {
          padding: 1rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .product-thumb {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }

        .badge {
          background: #e7f3ff;
          color: #0066cc;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-edit,
        .btn-delete {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-edit {
          background: #e7f3ff;
          color: #0066cc;
        }

        .btn-edit:hover {
          background: #cce5ff;
        }

        .btn-delete {
          background: #ffe7e7;
          color: #cc0000;
        }

        .btn-delete:hover {
          background: #ffcccc;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          max-width: 400px;
          width: 90%;
        }

        .modal h2 {
          margin-bottom: 1rem;
          color: #1a1a2e;
        }

        .modal p {
          margin-bottom: 1rem;
          color: #666;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          border: 1px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          table {
            font-size: 0.85rem;
          }

          th, td {
            padding: 0.75rem 0.5rem;
          }

          .product-thumb {
            width: 40px;
            height: 40px;
          }

          .actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductList;
