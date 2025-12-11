import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappConfig } from '../../data/config';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        whatsappConfig.openWhatsApp(whatsappConfig.defaultMessage);
    };

    return (
        <button
            className="whatsapp-floating-btn"
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat via WhatsApp"
        >
            <FaWhatsapp />
            {isHovered && <span className="tooltip">Chat dengan Kami!</span>}

            <style>{`
        .whatsapp-floating-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          border: none;
          z-index: 999;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-floating-btn:active {
          transform: scale(0.95);
        }

        .tooltip {
          position: absolute;
          right: 70px;
          background: var(--color-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          white-space: nowrap;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: var(--shadow-md);
          animation: slideIn 0.3s ease;
        }

        .tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid var(--color-primary);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6);
          }
          100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-floating-btn {
            width: 55px;
            height: 55px;
            bottom: 1.5rem;
            right: 1.5rem;
            font-size: 1.75rem;
          }

          .tooltip {
            display: none;
          }
        }
      `}</style>
        </button>
    );
};

export default WhatsAppButton;
