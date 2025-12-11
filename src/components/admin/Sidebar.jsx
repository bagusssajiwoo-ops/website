// Admin Sidebar Navigation
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiGrid, FiPackage, FiLogOut, FiHome } from 'react-icons/fi';
import { logoutUser } from '../../services/auth';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const result = await logoutUser();
        if (result.success) {
            toast.success('Logout berhasil!');
            navigate('/admin/login');
        }
    };

    const menuItems = [
        { path: '/admin/dashboard', icon: <FiGrid />, label: 'Dashboard' },
        { path: '/admin/products', icon: <FiPackage />, label: 'Products' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>LuxeLiving</h2>
                <p>Admin Panel</p>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <a href="/" target="_blank" rel="noopener noreferrer" className="nav-item">
                    <FiHome />
                    <span>View Website</span>
                </a>
                <button onClick={handleLogout} className="nav-item logout-btn">
                    <FiLogOut />
                    <span>Logout</span>
                </button>
            </div>

            <style>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background: #1a1a2e;
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
        }

        .sidebar-header {
          padding: 2rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sidebar-header h2 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
          color: white;
        }

        .sidebar-header p {
          font-size: 0.85rem;
          color: #999;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1.5rem 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1.5rem;
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          font-size: 0.95rem;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }

        .nav-item.active {
          background: rgba(212, 163, 115, 0.15);
          color: #D4A373;
          border-left: 3px solid #D4A373;
        }

        .nav-item svg {
          font-size: 1.25rem;
        }

        .sidebar-footer {
          padding: 1rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .logout-btn {
          color: #ff6b6b;
        }

        .logout-btn:hover {
          background: rgba(255, 107, 107, 0.1);
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
          }

          .sidebar-header h2,
          .sidebar-header p,
          .nav-item span {
            display: none;
          }

          .nav-item {
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

export default Sidebar;
