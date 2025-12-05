import React from 'react';

const LogoPhilosophy = () => {
    return (
        <section id="philosophy" className="logo-philosophy">
            <div className="container">
                <div className="section-title">
                    <h2>Filosofi Logo</h2>
                    <p>Setiap elemen dalam logo kami memiliki makna dan filosofi yang mendalam</p>
                </div>

                {/* Solar System dengan orbit lebih luas */}
                <div className="solar-system">
                    {/* Sun (Logo Utama - Tidak Berputar) */}
                    <div className="sun">
                        <img src="/images/logo.webp" alt="PatDev Studio Logo" className="sun-logo" />
                    </div>

                    {/* Orbit 1 - Terluas */}
                    <div className="orbit orbit-1">
                        <div className="planet planet-1">
                            <div className="orbit-icon">
                                <img src="/images/P.webp" alt="P Logo" className="planet-img" />
                            </div>
                        </div>
                    </div>

                    {/* Orbit 2 */}
                    <div className="orbit orbit-2">
                        <div className="planet planet-2">
                            <div className="orbit-icon">
                                <img src="/images/dev.webp" alt="Dev Logo" className="planet-img" />
                            </div>
                        </div>
                    </div>

                    {/* Orbit 3 */}
                    <div className="orbit orbit-3">
                        <div className="planet planet-3">
                            <div className="orbit-icon">
                                <img src="/images/path.webp" alt="Path Logo" className="planet-img" />
                            </div>
                        </div>
                    </div>

                    {/* Orbit 4 */}
                    <div className="orbit orbit-4">
                        <div className="planet planet-4">
                            <div className="orbit-icon">
                                <img src="/images/titik.webp" alt="Titik Logo" className="planet-img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filosofi dalam grid layout */}
                <div className="philosophy-grid">
                    <div className="philosophy-item glass-card">
                        <div className="philosophy-icon">
                            <img src="/images/P.webp" alt="P Logo" className="philosophy-img" />
                        </div>
                        <h3>Bentuk Dasar "P"</h3>
                        <p className="text-justify">
                            Elemen utama logo ini membentuk huruf P yang mewakili identitas PatDev
                            Studio. Bentuknya dibuat melengkung dan terasa organik untuk menampilkan
                            karakter modern dan mudah beradaptasi.
                        </p>
                    </div>

                    <div className="philosophy-item glass-card">
                        <div className="philosophy-icon">
                            <img src="/images/dev.webp" alt="Dev Logo" className="philosophy-img" />
                        </div>
                        <h3>Simbol &lt;/&gt; di Tengah</h3>
                        <p className="text-justify">
                            Simbol &lt;/&gt; yang ditempatkan di tengah berperan sebagai representasi
                            langsung dari inti layanan PatDev Studio, yaitu pengembangan web.
                        </p>
                    </div>

                    <div className="philosophy-item glass-card">
                        <div className="philosophy-icon">
                            <img src="/images/path.webp" alt="Path Logo" className="philosophy-img" />
                        </div>
                        <h3>Elemen Panah ke Atas</h3>
                        <p className="text-justify">
                            Elemen panah yang mengarah ke atas menjadi pusat perhatian dan simbol
                            perjalanan menuju tujuan digital klien.
                        </p>
                    </div>

                    <div className="philosophy-item glass-card">
                        <div className="philosophy-icon">
                            <img src="/images/titik.webp" alt="Titik Logo" className="philosophy-img" />
                        </div>
                        <h3>Titik Kecil di Bawah</h3>
                        <p className="text-justify">
                            Titik kecil di bagian bawah berfungsi sebagai elemen penyeimbang visual.
                            Selain itu, titik ini menggambarkan titik awal perjalanan klien.
                        </p>
                    </div>

                    <div className="philosophy-item glass-card">
                        <div className="philosophy-icon">
                            <img src="/images/logo.webp" alt="Color Logo" className="philosophy-img" />
                        </div>
                        <h3>Gradasi Biru → Ungu</h3>
                        <p className="text-justify">
                            Gradasi warna dari biru ke ungu menghadirkan perpaduan antara kesan teknis
                            dan kreativitas. Biru mengekspresikan kepercayaan, stabilitas, serta kemampuan teknis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoPhilosophy;