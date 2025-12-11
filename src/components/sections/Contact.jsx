import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappConfig } from '../../data/config';

const Contact = () => {
    const handleWhatsAppClick = () => {
        whatsappConfig.openWhatsApp(whatsappConfig.defaultMessage);
    };

    return (
        <section className="contact-section section-padding" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Hubungi Kami</h2>
                    <p>Kami siap membantu Anda menemukan furniture impian</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaWhatsapp />
                        </div>
                        <h3>WhatsApp</h3>
                        <p>+62 823-3030-2593</p>
                        <button onClick={handleWhatsAppClick} className="btn btn-primary">
                            Chat Sekarang
                        </button>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FiPhone />
                        </div>
                        <h3>Telepon</h3>
                        <p>0895-4225-32976</p>
                        <p>0813-3344-1655</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FiMail />
                        </div>
                        <h3>Email</h3>
                        <p>info@luxeliving.com</p>
                        <p>sales@luxeliving.com</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FiMapPin />
                        </div>
                        <h3>Lokasi</h3>
                        <p>Jepara, Jawa Tengah</p>
                        <p>Indonesia</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FiClock />
                        </div>
                        <h3>Jam Operasional</h3>
                        <p>Senin - Sabtu</p>
                        <p>08:00 - 17:00 WIB</p>
                    </div>

                    <div className="contact-card highlight">
                        <h3>Layanan 24/7</h3>
                        <p>WhatsApp kami aktif 24 jam untuk konsultasi dan pertanyaan Anda</p>
                        <button onClick={handleWhatsAppClick} className="btn btn-primary">
                            <FaWhatsapp style={{ marginRight: '8px' }} />
                            Mulai Chat
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-section {
          background: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: var(--border-radius);
          text-align: center;
          transition: var(--transition);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .contact-card.highlight {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
        }

        .contact-card.highlight h3,
        .contact-card.highlight p {
          color: white;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: var(--color-accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1.5rem;
        }

        .contact-card.highlight .icon-wrapper {
          background: rgba(255, 255, 255, 0.2);
        }

        .contact-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-family: var(--font-body);
          font-weight: 600;
        }

        .contact-card p {
          color: var(--color-text-light);
          margin: 0.25rem 0;
        }

        .contact-card .btn {
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
