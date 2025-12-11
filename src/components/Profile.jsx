import React from 'react';

const Profile = () => {
    return (
        <section className="section-padding" id="profile" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Profil Perusahaan</h2>
                    <p>Informasi detail mengenai legalitas, standar produksi, dan layanan kami</p>
                </div>

                <div className="profile-grid">
                    {/* Informasi Perusahaan */}
                    <div className="profile-card full-width">
                        <h3>Informasi Perusahaan</h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <span className="label">Nama Perusahaan</span>
                                <span className="value">JATI PRIME</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Alamat Kantor</span>
                                <span className="value">Jl. Sulaiman No. 24 RT 04/RW 01, Mlongan, Jepara, Jawa Tengah – Indonesia</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Mobile / WhatsApp</span>
                                <span className="value">
                                    0895-4225-32976<br />
                                    0813-3344-1655
                                </span>
                            </div>
                            <div className="info-item">
                                <span className="label">Faximile</span>
                                <span className="value">0895-4225-32976</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Email</span>
                                <span className="value">jeparasolikin37@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Website</span>
                                <span className="value">www.jatiprime.go.id</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Kode Pos</span>
                                <span className="value">59421</span>
                            </div>
                        </div>
                    </div>

                    {/* Tentang Kami */}
                    <div className="profile-card full-width">
                        <h3>Tentang Kami</h3>
                        <p>
                            Jati Prime adalah perusahaan mebel Jepara yang berfokus pada produksi furniture berkualitas tinggi berbahan
                            <strong> kayu jati solid Perhutani</strong> dan <strong>kayu jati daur ulang (recycle teak wood)</strong>.
                            Didukung oleh pengrajin berpengalaman serta sistem produksi terstandarisasi, kami menghasilkan produk dengan desain elegan, kuat, dan tahan lama.
                        </p>
                        <p>
                            Kami melayani pasar lokal maupun internasional dengan standar kualitas ekspor, memastikan setiap produk melalui proses finishing dan quality control yang teliti.
                        </p>
                    </div>

                    {/* Material & Produksi */}
                    <div className="profile-card">
                        <h3>Material & Kualitas</h3>
                        <ul>
                            <li>Kayu Jati Solid (Perhutani)</li>
                            <li>Kayu Jati Daur Ulang</li>
                            <li><strong>Grade:</strong> Grade A & Grade B</li>
                            <li><strong>Kualitas:</strong> Ekspor – Garansi 100%</li>
                        </ul>
                    </div>

                    <div className="profile-card">
                        <h3>Kapasitas & Gudang</h3>
                        <ul>
                            <li><strong>Kapasitas:</strong> 6 kontainer 40 ft per bulan</li>
                            <li><strong>Gudang:</strong> 3500 m²</li>
                            <li><strong>Pasar:</strong> Seluruh Dunia (Worldwide)</li>
                            <li><strong>Packing:</strong> Karton Box, Single Face / Kertas Wrapping</li>
                        </ul>
                    </div>

                    {/* Pembayaran & Waktu */}
                    <div className="profile-card">
                        <h3>Syarat & Ketentuan</h3>
                        <ul>
                            <li><strong>Bank:</strong> BCA</li>
                            <li><strong>Waktu Produksi:</strong> ± 2 bulan setelah deposit</li>
                            <li><strong>Laporan:</strong> Mingguan (Produksi hingga Pengiriman)</li>
                        </ul>
                    </div>

                    <div className="profile-card">
                        <h3>Pembayaran & Garansi</h3>
                        <ul>
                            <li><strong>Deposit:</strong> 50% di awal pemesanan</li>
                            <li><strong>Pelunasan:</strong> 50% sebelum kirim/dokumen terbit</li>
                            <li><strong>Garansi:</strong> Ganti baru gratis jika rusak saat diterima (next container)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                .profile-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }

                .profile-card {
                    background: #f9f9f9;
                    padding: 2.5rem;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-sm);
                }

                .profile-card.full-width {
                    grid-column: 1 / -1;
                }

                .profile-card h3 {
                    color: var(--color-primary);
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid var(--color-accent);
                    display: inline-block;
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                }

                .label {
                    font-size: 0.85rem;
                    color: var(--color-text-light);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 0.3rem;
                }

                .value {
                    font-weight: 500;
                    color: var(--color-text);
                }

                .profile-card ul {
                    list-style: none;
                }

                .profile-card ul li {
                    margin-bottom: 0.8rem;
                    padding-left: 1.5rem;
                    position: relative;
                }

                .profile-card ul li::before {
                    content: '✓';
                    color: var(--color-accent);
                    position: absolute;
                    left: 0;
                }

                @media (max-width: 768px) {
                    .profile-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Profile;
