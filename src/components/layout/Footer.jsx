import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Jati Prime.</h3>
            <p>Pusat furniture jepara berkualitas dengan harga bersahabat dan terpercaya.</p>
            <br />
            <h4>Metode Pembayaran</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bank BCA: 2470-0687-056<br />Bagus sajiwo</p>
            <p style={{ fontSize: '0.9rem' }}><br />Bagus</p>
          </div>

          <div className="footer-col">
            <h4>Produk</h4>
            <ul>
              <li><a href="#katalog">Ruang Tamu</a></li>
              <li><a href="#katalog">Kamar Tidur</a></li>
              <li><a href="#katalog">Ruang Makan</a></li>
              <li><a href="#katalog">Kantor</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontak Kami</h4>
            <ul>
              <li><a href="https://wa.me/62895422532976">+62 8954-2253-2976 (WhatsApp)</a></li>
              <li><a href="https://www.instagram.com/jepara_mebel_indonesia">Instagram</a></li>
              <li><a href="https://www.facebook.com/mebel.jepara.12720">Facebook</a></li>
              <li><a href="http://tiktok.com/@jeparamebel">TikTok</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Dapatkan info produk terbaru dan promo menarik.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Anda" />
              <button className="btn btn-primary">Daftar</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Jati Prime. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #f5f5f5;
          padding: 5rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-col h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-col h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-body);
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.8rem;
        }

        .footer-col a {
          text-decoration: none;
          color: var(--color-text-light);
          transition: color 0.3s ease;
        }

        .footer-col a:hover {
          color: var(--color-primary);
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .newsletter-form input {
          padding: 0.8rem;
          border: 1px solid #ddd;
          flex: 1;
          font-family: var(--font-body);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #e5e5e5;
          color: var(--color-text-light);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
