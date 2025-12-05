import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Landing Page",
            price: "Rp 50.000",
            subtitle: "Halaman Sederhana",
            features: [
                { text: "1 Halaman Website", check: true },
                { text: "Desain Responsif", check: true },
                { text: "Form Kontak", check: true },
                { text: "Optimasi SEO Dasar", check: true },
                { text: "Panel Admin", check: false },
                { text: "Database", check: false }
            ],
            popular: false
        },
        {
            title: "Website UMKM",
            price: "Rp 500.000",
            subtitle: "Website Profesional",
            features: [
                { text: "3-5 Halaman Website", check: true },
                { text: "Desain Responsif", check: true },
                { text: "Form Kontak & Chat", check: true },
                { text: "Optimasi SEO", check: true },
                { text: "Panel Admin Sederhana", check: true },
                { text: "Database Kompleks", check: false }
            ],
            popular: false
        },
        {
            title: "Website E-commerce",
            price: "Rp 2.500.000",
            subtitle: "Toko Online Lengkap",
            features: [
                { text: "Halaman Dinamis", check: true },
                { text: "Sistem Keranjang Belanja", check: true },
                { text: "Pembayaran Online", check: true },
                { text: "Panel Admin Lengkap", check: true },
                { text: "Database Produk", check: true },
                { text: "Optimasi SEO Lengkap", check: true }
            ],
            popular: true
        },
        {
            title: "Website Aplikasi",
            price: "Rp 5.000.000",
            subtitle: "Front End + Back End",
            features: [
                { text: "Website Dinamis Lengkap", check: true },
                { text: "Sistem Database Kompleks", check: true },
                { text: "Panel Admin Custom", check: true },
                { text: "Integrasi API", check: true },
                { text: "Keamanan Tingkat Tinggi", check: true },
                { text: "Support 6 Bulan", check: true }
            ],
            popular: false
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Layanan & Paket Harga</h2>
                    <p>Kami menawarkan berbagai paket layanan yang dapat disesuaikan dengan kebutuhan dan anggaran Anda</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card glass-card ${service.popular ? 'featured' : ''}`}>
                            {service.popular && <div className="service-badge">Populer</div>}

                            <div className="service-header">
                                <h3>{service.title}</h3>
                                <div className="service-price">{service.price}</div>
                                <p>{service.subtitle}</p>
                            </div>

                            <div className="service-body">
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className={`fas fa-${feature.check ? 'check' : 'times'}`}></i>
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/6281249189380?text=Saya%20tertarik%20dengan%20paket%20${encodeURIComponent(service.title)}`}
                                    className="cta-button"
                                    style={{ width: '100%', textAlign: 'center' }}
                                >
                                    Pesan Sekarang
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;