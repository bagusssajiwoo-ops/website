import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="subtitle">Kualitas Export & Harga Bersahabat</span>
          <h1>Jati Prime <br />Berkualitas 100% Terpercaya</h1>
          <p>Temukan berbagai kebutuhan furniture anda di katalog produk terbaru kami. Kami selalu memberikan pilihan produk berkualitas mewah, modern, dan up to date.</p>
          <a href="#katalog" className="btn btn-primary">Lihat Katalog</a>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          filter: brightness(0.9);
          z-index: -1;
        }
        
        /* Overlay for better text readability */
        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .subtitle {
          display: block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        p {
          font-size: 1.1rem;
          color: var(--color-text-light);
          margin-bottom: 2.5rem;
          max-width: 450px;
        }

        @media (max-width: 768px) {
          .hero-bg::after {
            background: rgba(255,255,255,0.7);
          }
          
          h1 {
            font-size: 3rem;
          }
          
          .hero-text {
            text-align: center;
            margin: 0 auto;
          }

          p {
            margin: 0 auto 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
