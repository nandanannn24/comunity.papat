import React, { useState, useEffect } from 'react';

const FloatingContact = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Smooth scroll untuk anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '#!') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('header').offsetHeight || 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Tutup dropdown jika terbuka
                    setIsActive(false);
                }
            });
        });

        // Close dropdown ketika klik di luar
        const handleClickOutside = (e) => {
            if (!e.target.closest('.floating-contact')) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        // Close dengan ESC key
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && isActive) {
                setIsActive(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isActive]);

    const contactItems = [
        { icon: 'fab fa-whatsapp', text: 'WhatsApp', href: 'https://wa.me/6281249189380', className: 'whatsapp' },
        { icon: 'fas fa-phone', text: 'Telepon', href: 'tel:+6281249189380', className: 'phone' },
        { icon: 'fas fa-envelope', text: 'Email', href: 'mailto:papatcomunity@gmail.com', className: 'email' },
        { icon: 'fab fa-instagram', text: 'Instagram', href: 'https://www.instagram.com/_nandanannn?igsh=MjdsZHBqMmo1OXR3&utm_source=qr', className: 'instagram' },
        { icon: 'fab fa-github', text: 'GitHub', href: 'https://github.com/nandanannn24', className: 'github' }
    ];

    return (
        <div className={`floating-contact ${isActive ? 'active' : ''}`}>
            <button
                className="floating-button"
                onClick={() => setIsActive(!isActive)}
                aria-label="Hubungi Kami"
            >
                <i className="fas fa-comments"></i>
                <span className="floating-text">Hubungi Kami</span>
            </button>

            <div className="floating-dropdown">
                {contactItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`floating-item ${item.className}`}
                        onClick={() => setIsActive(false)}
                    >
                        <div className="floating-icon">
                            <i className={item.icon}></i>
                        </div>
                        <span>{item.text}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FloatingContact;