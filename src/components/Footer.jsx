import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/images/logo.webp" alt="PatDev Studio Logo" className="footer-logo-img" />
                            <span className="footer-logo-text">PatDev Studio</span>
                        </div>
                        <p className="text-justify">
                            Solusi Kebutuhan Digital di Berbagai Sektor. Partner praktis bagi UMKM,
                            kreator, dan usaha kecil yang ingin hadir profesional di ranah digital.
                        </p>
                        <div className="footer-social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Layanan</h4>
                        <ul className="footer-links">
                            <li><a href="#services"><i className="fas fa-chevron-right"></i> Landing Page</a></li>
                            <li><a href="#services"><i className="fas fa-chevron-right"></i> Website UMKM</a></li>
                            <li><a href="#services"><i className="fas fa-chevron-right"></i> E-commerce</a></li>
                            <li><a href="#services"><i className="fas fa-chevron-right"></i> Website Aplikasi</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Perusahaan</h4>
                        <ul className="footer-links">
                            <li><a href="#about"><i className="fas fa-chevron-right"></i> Tentang Kami</a></li>
                            <li><a href="#team"><i className="fas fa-chevron-right"></i> Tim Kami</a></li>
                            <li><a href="#projects"><i className="fas fa-chevron-right"></i> Projects</a></li>
                            <li><a href="#contact"><i className="fas fa-chevron-right"></i> Kontak</a></li>
                        </ul>
                    </div>

                    <div className="footer-column newsletter">
                        <h4>Newsletter</h4>
                        <p>Dapatkan informasi terbaru tentang teknologi dan promo menarik dari kami.</p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-button">
                                <i className="fas fa-paper-plane"></i> Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; <span className="current-year">{currentYear}</span> PatDev Studio.
                        All rights reserved. <a href="#">Privacy Policy</a>
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;