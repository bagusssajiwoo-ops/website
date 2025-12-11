// Add New Product Form - Improved UI
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiSave, FiX, FiImage, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Sidebar from '../../../components/admin/Sidebar';
import { addProduct, uploadProductImage } from '../../../services/productService';

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Ukuran gambar maksimal 10MB');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      // Clear URL input when file is selected
      setFormData({ ...formData, image: '' });
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

    // Validation
    if (!formData.name || !formData.category || !formData.price || !formData.description) {
      toast.error('Semua field harus diisi!');
      return;
    }

    if (!imageFile && !formData.image) {
      toast.error('Gambar produk harus diupload atau URL diisi!');
      return;
    }

    setLoading(true);

    try {
      let imageUrl = formData.image;

      // Upload image to ImgBB if file selected
      if (imageFile) {
        toast.info('Uploading image...');
        const uploadResult = await uploadProductImage(imageFile);

        if (!uploadResult.success) {
          toast.error(uploadResult.error);
          setLoading(false);
          return;
        }

        imageUrl = uploadResult.imageUrl;
      }

      // Add product to Firestore
      const productData = {
        name: formData.name,
        category: formData.category,
        price: formData.price,
        description: formData.description,
        image: imageUrl
      };

      const result = await addProduct(productData);

      if (result.success) {
        toast.success('Produk berhasil ditambahkan!');
        navigate('/admin/products');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Gagal menambahkan produk');
    }

    setLoading(false);
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <div className="page-header">
          <div>
            <h1>Add New Product</h1>
            <p className="subtitle">Create a new furniture product for your catalog</p>
          </div>
          <button
            onClick={() => navigate('/admin/products')}
            className="btn-back"
          >
            ← Back to Products
          </button>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>

            {/* IMAGE UPLOAD SECTION */}
            <div className="form-section upload-section">
              <div className="section-header">
                <FiImage />
                <div>
                  <h3>Product Image</h3>
                  <p>Upload a high-quality image or provide an image URL</p>
                </div>
              </div>

              <div className="upload-wrapper">
                {imagePreview ? (
                  <div className="image-preview-container">
                    <div className="image-preview">
                      <img src={imagePreview} alt="Preview" />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setImageFile(null);
                        }}
                        className="remove-image"
                        title="Remove image"
                      >
                        <FiX />
                      </button>
                    </div>
                    <p className="image-info">
                      <FiAlertCircle /> Image ready to upload
                    </p>
                  </div>
                ) : (
                  <div className="upload-area">
                    <label className="upload-label">
                      <FiUpload className="upload-icon" />
                      <span className="upload-title">Click to upload image</span>
                      <span className="upload-subtitle">or drag and drop</span>
                      <span className="upload-format">PNG, JPG, WEBP (max 10MB)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        hidden
                      />
                    </label>
                  </div>
                )}

                <div className="divider-or">
                  <span>OR</span>
                </div>

                <div className="url-input-wrapper">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    disabled={!!imageFile}
                    className="url-input"
                  />
                  <small>Paste a direct link to an image from the web</small>
                </div>
              </div>
            </div>

            {/* PRODUCT DETAILS SECTION */}
            <div className="form-section">
              <div className="section-header">
                <h3>Product Details</h3>
                <p>Fill in the product information</p>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label>
                    Product Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Modern Minimalist Sofa"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Category <span className="required">*</span>
                  </label>
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
                  <label>
                    Price <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="e.g. Rp 5.500.000"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label>
                    Description <span className="required">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the product features, materials, dimensions, etc."
                    rows="5"
                    required
                  />
                </div>
              </div>
            </div>

            {/* FORM ACTIONS */}
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
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Saving...
                  </>
                ) : (
                  <>
                    <FiSave />
                    Save Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
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

        .page-header h1 {
          font-size: 2rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: #666;
          font-size: 0.95rem;
        }

        .btn-back {
          padding: 0.75rem 1.5rem;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-back:hover {
          background: #f5f5f5;
          border-color: #D4A373;
          color: #D4A373;
        }

        .form-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          max-width: 900px;
        }

        .form-section {
          padding: 2.5rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .form-section:last-of-type {
          border-bottom: none;
        }

        .upload-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-header svg {
          font-size: 1.5rem;
          color: #D4A373;
          margin-top: 0.25rem;
        }

        .section-header h3 {
          font-size: 1.25rem;
          color: #1a1a2e;
          margin-bottom: 0.25rem;
        }

        .section-header p {
          color: #666;
          font-size: 0.9rem;
        }

        .upload-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .upload-area {
          border: 2px dashed #d0d0d0;
          border-radius: 12px;
          background: white;
          transition: all 0.3s ease;
        }

        .upload-area:hover {
          border-color: #D4A373;
          background: #fefaf5;
        }

        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          cursor: pointer;
          text-align: center;
        }

        .upload-icon {
          font-size: 3.5rem;
          color: #D4A373;
          margin-bottom: 1rem;
        }

        .upload-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
          display: block;
        }

        .upload-subtitle {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 0.75rem;
          display: block;
        }

        .upload-format {
          font-size: 0.85rem;
          color: #999;
          background: #f5f5f5;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }

        .image-preview-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .image-preview {
          position: relative;
          max-width: 400px;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .image-preview img {
          width: 100%;
          display: block;
        }

        .remove-image {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #ff4444;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .remove-image:hover {
          background: #cc0000;
          transform: scale(1.1);
        }

        .image-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #22c55e;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .divider-or {
          text-align: center;
          position: relative;
          margin: 1rem 0;
        }

        .divider-or span {
          background: white;
          padding: 0 1rem;
          color: #999;
          font-weight: 600;
          font-size: 0.85rem;
          position: relative;
          z-index: 1;
        }

        .divider-or::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e0e0e0;
        }

        .url-input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .url-input-wrapper label {
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .url-input {
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .url-input:focus {
          outline: none;
          border-color: #D4A373;
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
        }

        .url-input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .url-input-wrapper small {
          color: #999;
          font-size: 0.85rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .required {
          color: #ff4444;
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
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-actions {
          padding: 2rem 2.5rem;
          background: #f8f9fa;
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          border-radius: 0 0 16px 16px;
        }

        .btn-cancel,
        .btn-submit {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-cancel {
          background: white;
          color: #666;
          border: 2px solid #ddd;
        }

        .btn-cancel:hover:not(:disabled) {
          background: #f5f5f5;
          border-color: #999;
        }

        .btn-submit {
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
        }

        .btn-submit:disabled,
        .btn-cancel:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
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

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-section {
            padding: 1.5rem;
          }

          .form-actions {
            padding: 1.5rem;
            flex-direction: column-reverse;
          }

          .btn-cancel,
          .btn-submit {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AddProduct;
