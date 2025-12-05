import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { icon: "fab fa-react", name: "React JS" },
                { icon: "fab fa-vuejs", name: "Vue JS" },
                { icon: "fab fa-js", name: "JavaScript" },
                { icon: "fab fa-html5", name: "HTML5" },
                { icon: "fab fa-css3-alt", name: "CSS3" },
                { icon: "fab fa-sass", name: "SASS" }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { icon: "fab fa-node-js", name: "Node.js" },
                { icon: "fab fa-php", name: "PHP" },
                { icon: "fas fa-database", name: "MySQL" },
                { icon: "fas fa-database", name: "MongoDB" },
                { icon: "fab fa-python", name: "Python" },
                { icon: "fas fa-fire", name: "Firebase" }
            ]
        },
        {
            title: "Tools & Framework",
            skills: [
                { icon: "fab fa-vite", name: "Vite" },
                { icon: "fab fa-react", name: "Next.js" },
                { icon: "fab fa-laravel", name: "Laravel" },
                { icon: "fab fa-git-alt", name: "Git" },
                { icon: "fab fa-figma", name: "Figma" },
                { icon: "fab fa-docker", name: "Docker" }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Teknologi & Skills</h2>
                    <p>Kami menguasai berbagai teknologi modern untuk memberikan solusi terbaik</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <i className={skill.icon}></i>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;