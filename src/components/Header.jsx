import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <img src="/images/logo.webp" alt="PatDev Studio Logo" className="logo-img" />
                        <div className="logo-text">PatDev Studio</div>
                    </div>

                    <div className="nav-center-right">
                        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <li><a href="#home" onClick={closeMenu}>Beranda</a></li>
                            <li><a href="#about" onClick={closeMenu}>Tentang</a></li>
                            <li><a href="#services" onClick={closeMenu}>Layanan</a></li>
                            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                            <li><a href="#team" onClick={closeMenu}>Team</a></li>
                            <li><a href="#contact" onClick={closeMenu}>Kontak</a></li>
                        </ul>

                        <div className="nav-actions">
                            <a href="https://wa.me/6281249189380" className="cta-button">Konsultasi Gratis</a>
                        </div>

                        <button
                            className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;