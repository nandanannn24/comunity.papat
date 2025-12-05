import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>Tentang PatDev Studio</h2>
                    <p>Mengenal lebih dekat dengan tim dan visi kami</p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">
                            PatDev Studio adalah agency pengembangan web yang didirikan oleh lima mahasiswa
                            dengan kompetensi di bidang pengembangan dan desain digital. Nama PatDev mengacu
                            pada Path Development: membantu klien menemukan jalur digital yang tepat melalui
                            solusi website yang fungsional, mudah dipakai, dan estetis. PatDev Studio menyediakan
                            layanan end-to-end: konsultasi, desain UX/UI, development (frontend & backend ringan),
                            integrasi CMS, deployment, dan maintenance ringan. Posisi brand: partner praktis bagi
                            UMKM, kreator, dan usaha kecil yang ingin hadir profesional di ranah digital tanpa
                            kerumitan teknis.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Proyek Selesai</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Klien Puas</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5</span>
                                <span className="stat-label">Tim Ahli</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img
                            src="/images/full-team.webp"
                            alt="Tim PatDev Studio"
                            className="about-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;