import React, { useState, useEffect } from 'react';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo">
          <a href="/">Jati Prime.</a>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Beranda</a>
          <a href="#katalog" onClick={() => setMenuOpen(false)}>Katalog</a>
          <a href="#profile" onClick={() => setMenuOpen(false)}>Profil</a>
          <a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang Kami</a>
          <a href="#bantuan" onClick={() => setMenuOpen(false)}>Bantuan</a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a>
        </div>

        <div className="nav-icons">
          <button aria-label="Cari"><FiSearch /></button>
          <button aria-label="Keranjang" className="cart-btn">
            <FiShoppingBag />
            <span className="cart-count">0</span>
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: var(--shadow-sm);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-icons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-icons button {
          background: none;
          font-size: 1.25rem;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .nav-icons button:hover {
          transform: scale(1.1);
          color: var(--color-accent);
        }

        .cart-btn {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -5px;
          right: -8px;
          background: var(--color-accent);
          color: white;
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-toggle {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            background: white;
            flex-direction: column;
            padding: 6rem 2rem;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: right 0.3s ease;
          }

          .nav-links.active {
            right: 0;
          }

          .menu-toggle {
            display: flex;
            z-index: 1001;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
