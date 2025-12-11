// Category Management Page
import React, { useState, useEffect } from 'react';
import { FiPlus, FiTrash2, FiTag, FiRefreshCw } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Sidebar from '../../../components/admin/Sidebar';
import { getAllCategories, addCategory, deleteCategory } from '../../../services/categoryService';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        setLoading(true);
        const result = await getAllCategories();
        if (result.success) {
            setCategories(result.categories);
            console.log('Loaded categories:', result.categories);
        } else {
            toast.error(result.error);
        }
        setLoading(false);
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();

        if (!newCategoryName.trim()) {
            toast.error('Nama kategori harus diisi!');
            return;
        }

        const result = await addCategory({ name: newCategoryName });

        if (result.success) {
            toast.success('Kategori berhasil ditambahkan!');
            setNewCategoryName('');
            setShowAddForm(false);
            loadCategories();
        } else {
            toast.error(result.error);
        }
    };

    const handleDelete = async (categoryId) => {
        const result = await deleteCategory(categoryId);

        if (result.success) {
            toast.success('Kategori berhasil dihapus!');
            loadCategories();
            setDeleteConfirm(null);
        } else {
            toast.error(result.error);
        }
    };

    return (
        <div className="admin-layout">
            <Sidebar />
            <div className="admin-content">
                <div className="page-header">
                    <div className="page-title">
                        <h1>Category Management</h1>
                        <p>Kelola kategori produk • {categories.length} kategori total</p>
                    </div>
                    <div className="header-actions">
                        <button onClick={loadCategories} className="btn-refresh" title="Refresh">
                            <FiRefreshCw />
                            Refresh
                        </button>
                        <button onClick={() => setShowAddForm(true)} className="btn-primary">
                            <FiPlus /> Add Category
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="loading-state">
                        <div className="spinner-large"></div>
                        <p>Loading categories...</p>
                    </div>
                ) : (
                    <>
                        {categories.length === 0 ? (
                            <div className="empty-state">
                                <FiTag className="empty-icon" />
                                <h3>No categories found</h3>
                                <p>Start by adding your first category.</p>
                                <button onClick={() => setShowAddForm(true)} className="btn-primary">
                                    <FiPlus /> Add Your First Category
                                </button>
                            </div>
                        ) : (
                            <div className="categories-grid">
                                {categories.map((category) => (
                                    <div key={category.id} className="category-card">
                                        <div className="category-icon">
                                            <FiTag />
                                        </div>
                                        <div className="category-info">
                                            <h3>{category.name}</h3>
                                        </div>
                                        <button
                                            onClick={() => setDeleteConfirm(category)}
                                            className="btn-delete-card"
                                            title="Delete category"
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* Add Category Modal */}
                {showAddForm && (
                    <div className="modal-overlay" onClick={() => setShowAddForm(false)}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <FiTag className="modal-icon-add" />
                                <h2>Add New Category</h2>
                            </div>
                            <form onSubmit={handleAddCategory}>
                                <div className="form-group">
                                    <label>Category Name *</label>
                                    <input
                                        type="text"
                                        value={newCategoryName}
                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                        placeholder="e.g. Sofa, Meja, Kursi"
                                        autoFocus
                                        required
                                    />
                                </div>
                                <div className="modal-actions">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowAddForm(false);
                                            setNewCategoryName('');
                                        }}
                                        className="btn-cancel"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn-submit">
                                        <FiPlus /> Add Category
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {deleteConfirm && (
                    <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <FiTrash2 className="modal-icon" />
                                <h2>Delete Category?</h2>
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
                                    <FiTrash2 /> Delete Category
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
          border: none;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
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
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .category-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-icon svg {
          font-size: 1.75rem;
          color: white;
        }

        .category-info {
          flex: 1;
        }

        .category-info h3 {
          font-size: 1.125rem;
          color: #1a1a2e;
          margin: 0;
        }

        .btn-delete-card {
          width: 36px;
          height: 36px;
          background: #ffe7e7;
          color: #ff4444;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .btn-delete-card:hover {
          background: #ff4444;
          color: white;
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

        .modal-icon-add {
          font-size: 2rem;
          color: #D4A373;
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

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
        }

        .form-group input {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #D4A373;
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
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

        .btn-submit {
          padding: 0.75rem 1.5rem;
          border: none;
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
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

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .category-card {
            padding: 1.5rem;
          }

          .category-icon {
            width: 50px;
            height: 50px;
          }

          .modal-actions {
            flex-direction: column-reverse;
          }

          .btn-cancel,
          .btn-submit,
          .btn-delete-confirm {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

export default CategoryList;
