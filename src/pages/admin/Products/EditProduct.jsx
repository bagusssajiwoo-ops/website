// Edit Product Form
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiUpload, FiSave, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Sidebar from '../../../components/admin/Sidebar';
import { getProductById, updateProduct, uploadProductImage } from '../../../services/productService';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loadingProduct, setLoadingProduct] = useState(true);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        description: '',
        image: ''
    });

    const categories = ['Sofa', 'Meja', 'Kursi', 'Tempat Tidur', 'Lemari', 'Lampu'];

    useEffect(() => {
        loadProduct();
    }, [id]);

    const loadProduct = async () => {
        const result = await getProductById(id);
        if (result.success) {
            setFormData(result.product);
            setImagePreview(result.product.image);
        } else {
            toast.error('Produk tidak ditemukan');
            navigate('/admin/products');
        }
        setLoadingProduct(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                toast.error('Ukuran gambar maksimal 10MB');
                return;
            }
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.category || !formData.price || !formData.description) {
            toast.error('Semua field harus diisi!');
            return;
        }

        setLoading(true);

        try {
            let imageUrl = formData.image;

            // Upload new image if selected
            if (imageFile) {
                toast.info('Uploading new image...');
                const uploadResult = await uploadProductImage(imageFile);

                if (!uploadResult.success) {
                    toast.error(uploadResult.error);
                    setLoading(false);
                    return;
                }

                imageUrl = uploadResult.imageUrl;
            }

            const productData = {
                name: formData.name,
                category: formData.category,
                price: formData.price,
                description: formData.description,
                image: imageUrl
            };

            const result = await updateProduct(id, productData);

            if (result.success) {
                toast.success('Produk berhasil diupdate!');
                navigate('/admin/products');
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error('Gagal mengupdate produk');
        }

        setLoading(false);
    };

    if (loadingProduct) {
        return (
            <div className="admin-layout">
                <Sidebar />
                <div className="admin-content">
                    <div className="loading">Loading product...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-layout">
            <Sidebar />
            <div className="admin-content">
                <div className="page-header">
                    <h1>Edit Product</h1>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h3>Product Image</h3>

                            <div className="image-upload-area">
                                {imagePreview ? (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Preview" />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setImagePreview(null);
                                                setImageFile(null);
                                            }}
                                            className="remove-image"
                                        >
                                            <FiX />
                                        </button>
                                        <label className="change-image">
                                            <FiUpload /> Change Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                hidden
                                            />
                                        </label>
                                    </div>
                                ) : (
                                    <label className="upload-label">
                                        <FiUpload />
                                        <span>Click to upload new image</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            hidden
                                        />
                                    </label>
                                )}
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>Product Details</h3>

                            <div className="form-group">
                                <label>Product Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Category *</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Price *</label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Description *</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button
                                type="button"
                                onClick={() => navigate('/admin/products')}
                                className="btn-cancel"
                                disabled={loading}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={loading}
                            >
                                <FiSave /> {loading ? 'Updating...' : 'Update Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
        .form-container {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          max-width: 800px;
        }

        .form-section {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .form-section:last-of-type {
          border-bottom: none;
        }

        .form-section h3 {
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .image-preview {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .image-preview img {
          width: 100%;
          border-radius: 12px;
        }

        .remove-image {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,0,0,0.8);
          color: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .change-image {
          display: block;
          margin-top: 1rem;
          padding: 0.75rem;
          background: #D4A373;
          color: white;
          text-align: center;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .change-image:hover {
          background: #c59363;
        }

        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          border: 2px dashed #ddd;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .upload-label:hover {
          border-color: #D4A373;
        }

        .upload-label svg {
          font-size: 3rem;
          color: #D4A373;
          margin-bottom: 1rem;
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

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #D4A373;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn-cancel,
        .btn-submit {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-cancel {
          background: #f0f0f0;
          color: #666;
        }

        .btn-submit {
          background: #D4A373;
          color: white;
        }

        .btn-submit:hover:not(:disabled) {
          background: #c59363;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default EditProduct;
