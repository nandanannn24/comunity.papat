import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Hubungi Kami</h2>
                    <p>Jangan ragu untuk menghubungi kami untuk konsultasi gratis</p>
                </div>

                <div className="contact-desktop-layout">
                    {/* Map - Kiri (Besar untuk Desktop, Atas untuk Mobile) */}
                    <div className="contact-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2844822841764!2d107.63127827479824!3d-6.982217768670591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b6daf9a247%3A0x6e8b13e4c6e4a3f0!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                            className="map-iframe"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi PatDev Studio"
                        ></iframe>
                    </div>

                    {/* Info Kontak - Kanan (Desktop), Bawah (Mobile) */}
                    <div className="contact-info-container">
                        <h3>Informasi Kontak</h3>

                        <div className="contact-info-grid">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h4>Alamat</h4>
                                <p>Jl. Telekomunikasi No. 1, Bandung</p>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <h4>Telepon</h4>
                                <p>+62 812-4918-9380</p>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <h4>Email</h4>
                                <p>papatcomunity@gmail.com</p>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <h4>Instagram</h4>
                                <p>@_nandanannn</p>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <div className="whatsapp-container">
                            <a
                                href="https://wa.me/6281249189380"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-button"
                            >
                                <i className="fab fa-whatsapp"></i>
                                Hubungi via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;