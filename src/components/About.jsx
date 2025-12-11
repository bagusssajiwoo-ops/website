import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section-padding" id="tentang">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Tentang Kami – Jati Prime</h2>
                        <div className="underline"></div>

                        <p>
                            Jati Prime adalah brand mebel yang berfokus pada pembuatan furnitur berkualitas tinggi dari kayu jati Perhutani.
                            Setiap produk kami dirancang dengan presisi, mengutamakan kekuatan, keindahan, dan ketahanan jangka panjang.
                        </p>

                        <p>
                            Dengan pengalaman dalam dunia permebelan, kami menghadirkan berbagai pilihan produk seperti meja, kursi, lemari,
                            dan perabot custom yang dibuat oleh tenaga ahli berpengalaman. Kami percaya bahwa furnitur bukan hanya sekadar barang,
                            tetapi bagian dari cerita dan kenyamanan rumah Anda.
                        </p>

                        <div className="marquee-container">
                            <h3>Komitmen Kami:</h3>
                            <div className="marquee">
                                <div className="marquee-content">
                                    <span>Menggunakan kayu jati legal dan berkualitas tinggi</span>
                                    <span>•</span>
                                    <span>Memberikan detail pengerjaan terbaik</span>
                                    <span>•</span>
                                    <span>Menghadirkan desain modern, elegan, dan tahan lama</span>
                                    <span>•</span>
                                    <span>Memberikan pelayanan profesional kepada setiap pelanggan</span>
                                    <span>•</span>
                                    {/* Duplicate for seamless loop */}
                                    <span>Menggunakan kayu jati legal dan berkualitas tinggi</span>
                                    <span>•</span>
                                    <span>Memberikan detail pengerjaan terbaik</span>
                                    <span>•</span>
                                    <span>Menghadirkan desain modern, elegan, dan tahan lama</span>
                                    <span>•</span>
                                    <span>Memberikan pelayanan profesional kepada setiap pelanggan</span>
                                </div>
                            </div>
                        </div>

                        <p className="closing">
                            Kami hadir untuk memberikan nilai lebih dalam setiap perabot, menciptakan ruang yang indah dan berkelas untuk rumah, kantor, maupun bisnis Anda.
                        </p>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .about-content {
                    max-width: 700px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 0 1rem;
                }

                .about-text h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--color-primary);
                }

                .underline {
                    width: 80px;
                    height: 3px;
                    background-color: var(--color-accent);
                    margin: 0 auto 2rem;
                }

                .about-text p {
                    margin-bottom: 1.5rem;
                    color: var(--color-text);
                    line-height: 1.8;
                    text-align: center;
                }

                .marquee-container {
                    margin: 3rem 0;
                    overflow: hidden;
                    background: #f9f9f9;
                    padding: 2rem 0;
                    border-radius: var(--border-radius);
                }
                
                .marquee-container h3 {
                    margin-bottom: 1rem;
                    color: var(--color-primary);
                }

                .marquee {
                    display: flex;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .marquee-content {
                    display: flex;
                    animation: scroll 20s linear infinite;
                    gap: 1rem;
                }
                
                .marquee-content span {
                    font-weight: 500;
                    color: var(--color-text-light);
                    padding: 0 1rem;
                }

                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .closing {
                    font-weight: 500;
                    font-style: italic;
                    color: var(--color-primary);
                    margin-top: 2rem;
                }
            `}</style>
        </section>
    );
};

export default About;
