import React from 'react';

const Process = () => {
    const processSteps = [
        {
            number: '01',
            icon: 'fas fa-comments',
            title: 'Konsultasi & Analisis',
            description: 'Diskusi kebutuhan dan tujuan website Anda, analisis target audience, dan perencanaan strategi.'
        },
        {
            number: '02',
            icon: 'fas fa-palette',
            title: 'Desain & Prototype',
            description: 'Pembuatan wireframe dan mockup, desain UI/UX yang user-friendly, dan approval desain.'
        },
        {
            number: '03',
            icon: 'fas fa-code',
            title: 'Development',
            description: 'Pengembangan frontend & backend, implementasi fitur, dan integrasi sistem.'
        },
        {
            number: '04',
            icon: 'fas fa-rocket',
            title: 'Testing & Deployment',
            description: 'Testing menyeluruh, optimasi performa, dan deployment ke server.'
        },
        {
            number: '05',
            icon: 'fas fa-headset',
            title: 'Maintenance & Support',
            description: 'Dukungan pasca-launch, maintenance berkala, dan update konten.'
        }
    ];

    return (
        <section id="process" className="process">
            <div className="container">
                <div className="section-title">
                    <h2>Proses Implementasi</h2>
                    <p>Langkah-langkah sistematis kami dalam mewujudkan website impian Anda</p>
                </div>

                <div className="process-container">
                    {/* Bus Line untuk Desktop */}
                    <div className="bus-line"></div>
                    <div className="bus-node"></div>
                    <div className="bus-node"></div>
                    <div className="bus-node"></div>
                    <div className="bus-node"></div>
                    <div className="bus-node"></div>

                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step glass-card">
                                <div className="step-number">{step.number}</div>
                                <div className="step-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <h3>{step.title}</h3>
                                <p className="text-justify">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;