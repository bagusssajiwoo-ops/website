// Admin Dashboard - Overview Page
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiPlus, FiTrendingUp } from 'react-icons/fi';
import Sidebar from '../../components/admin/Sidebar';
import { getAllProducts } from '../../services/productService';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalProducts: 0,
        loading: true
    });

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {
        const result = await getAllProducts();
        if (result.success) {
            setStats({
                totalProducts: result.products.length,
                loading: false
            });
        } else {
            setStats({ ...stats, loading: false });
        }
    };

    return (
        <div className="admin-layout">
            <Sidebar />
            <div className="admin-content">
                <div className="page-header">
                    <h1>Dashboard</h1>
                    <p>Welcome to LuxeLiving Admin Panel</p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon products">
                            <FiPackage />
                        </div>
                        <div className="stat-info">
                            <h3>{stats.loading ? '...' : stats.totalProducts}</h3>
                            <p>Total Products</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon trending">
                            <FiTrendingUp />
                        </div>
                        <div className="stat-info">
                            <h3>Active</h3>
                            <p>Status</p>
                        </div>
                    </div>
                </div>

                <div className="quick-actions">
                    <h2>Quick Actions</h2>
                    <div className="actions-grid">
                        <Link to="/admin/products/add" className="action-card">
                            <FiPlus />
                            <h3>Add New Product</h3>
                            <p>Create a new furniture product</p>
                        </Link>

                        <Link to="/admin/products" className="action-card">
                            <FiPackage />
                            <h3>Manage Products</h3>
                            <p>View, edit, or delete products</p>
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #f5f5f5;
        }

        .admin-content {
          margin-left: 250px;
          flex: 1;
          padding: 2rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .page-header p {
          color: #666;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .stat-icon.products {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .stat-icon.trending {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .stat-info h3 {
          font-size: 1.75rem;
          margin-bottom: 0.25rem;
          color: #1a1a2e;
        }

        .stat-info p {
          color: #666;
          font-size: 0.9rem;
        }

        .quick-actions h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .action-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          border: 2px solid transparent;
        }

        .action-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border-color: #D4A373;
        }

        .action-card svg {
          font-size: 2.5rem;
          color: #D4A373;
          margin-bottom: 1rem;
        }

        .action-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .action-card p {
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .admin-content {
            margin-left: 70px;
            padding: 1rem;
          }

          .stats-grid,
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
