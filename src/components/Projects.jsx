import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Kawan UMKM",
            description: "Platform untuk membantu UMKM dalam memasarkan produk mereka secara online dengan fitur lengkap dan mudah digunakan.",
            image: "kawan-umkm.webp",
            link: "https://kawan-umkm-sekawanpapat.netlify.app/",
            icon: "fas fa-external-link-alt",
            linkText: "Lihat Live Demo"
        },
        {
            title: "Eco Track",
            description: "Aplikasi monitoring lingkungan untuk melacak dan menganalisis dampak lingkungan dengan dashboard yang informatif.",
            image: "eco-track.webp",
            link: "https://github.com/nandanannn24/EcoTrack.git",
            icon: "fab fa-github",
            linkText: "Lihat di GitHub"
        },
        {
            title: "Civitas",
            description: "Sistem manajemen untuk institusi pendidikan dengan fitur lengkap pengelolaan data siswa, guru, dan akademik.",
            image: "civitas-fix.webp",
            link: "https://github.com/nandanannn24/CivitasFix.git",
            icon: "fab fa-github",
            linkText: "Lihat di GitHub"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-title">
                    <h2>Projects Kami</h2>
                    <p>Beberapa project yang telah kami kerjakan dan terpublish</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-image">
                                <img src={`/images/${project.image}`} alt={project.title} className="project-img" />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="text-justify">{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <i className={project.icon}></i>
                                    {project.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;