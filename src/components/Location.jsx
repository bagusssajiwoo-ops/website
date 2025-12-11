import React from 'react';

const Location = () => {
    return (
        <section className="section-padding" id="lokasi">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2>Lokasi Kami</h2>
                    <p>Kunjungi workshop kami untuk melihat kualitas produk secara langsung</p>
                </div>

                <div className="location-content">
                    <div className="map-container">
                        <iframe
                            src="https://maps.google.com/maps?q=Jaya%20Jati%20Makmur%20Jepara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Jaya Jati Makmur"
                        ></iframe>
                    </div>

                    <div className="location-info">
                        <div className="info-card">
                            <h3>Alamat Workshop</h3>
                            <p>Jaya Jati Makmur</p>
                            <p>Jepara, Jawa Tengah</p>
                            <p>Indonesia</p>
                            <a
                                href="https://maps.app.goo.gl/9Zz5Zz5Zz5Zz5Zz5"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                                style={{ marginTop: '1rem' }}
                            >
                                Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .map-container {
                    border-radius: var(--border-radius);
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    margin-bottom: 2rem;
                }

                .location-info {
                    display: flex;
                    justify-content: center;
                }

                .info-card {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-sm);
                    text-align: center;
                    max-width: 400px;
                    width: 100%;
                }

                .info-card h3 {
                    margin-bottom: 1rem;
                    color: var(--color-primary);
                }

                .info-card p {
                    color: var(--color-text-light);
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </section>
    );
};

export default Location;
