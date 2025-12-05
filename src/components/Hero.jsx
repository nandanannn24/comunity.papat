import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Solusi <span className="gradient-text">Digital</span> Masa Depan</h1>
                    <p className="hero-subtitle text-justify">
                        PatDev Studio menghadirkan jasa pembuatan website yang terjangkau, fleksibel,
                        dan profesional untuk individu, UMKM, hingga perusahaan menengah.
                    </p>
                    <div className="hero-actions">
                        <a href="#services" className="cta-button primary">Lihat Layanan Kami</a>
                        <a href="#contact" className="cta-button secondary">Konsultasi Sekarang</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-animation">
                        <div className="code-wrapper">
                            <div className="code-line"><span className="code-tag">&lt;website&gt;</span></div>
                            <div className="code-line"><span className="code-indent"></span><span className="code-tag">&lt;inovasi/&gt;</span></div>
                            <div className="code-line"><span className="code-indent"></span><span className="code-tag">&lt;kreativitas/&gt;</span></div>
                            <div className="code-line"><span className="code-indent"></span><span className="code-tag">&lt;teknologi/&gt;</span></div>
                            <div className="code-line"><span className="code-tag">&lt;/website&gt;</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;