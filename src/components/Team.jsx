import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "Rifat Abhista",
            role: "CEO",
            bio: "Pencetus dan Ketua Team Comunity Papat.",
            image: "rifat.webp",
            social: {
                instagram: "https://www.instagram.com/rifatabhistaa?igsh=MWVuZ2d0aTVqbjYyMg=="
            }
        },
        {
            name: "Priyoga L.A.",
            role: "Full Stack Developer",
            bio: "Spesialis dalam React JS dan Node.js dengan pengalaman 2 tahun dalam pengembangan web.",
            image: "nanda.webp",
            social: {
                instagram: "https://www.instagram.com/_nandanannn?igsh=MjdsZHBqMmo1OXR3&utm_source=qr",
                github: "https://github.com/nandanannn24"
            }
        },
        {
            name: "Zaki Haidar Y.",
            role: "Finance Manager",
            bio: "Bendahara Umum Comunity Papat.",
            image: "zaki.webp",
            social: {
                instagram: "https://www.instagram.com/zqihaidar_?igsh=MWFkMTVldjlnOG80dQ=="
            }
        },
        {
            name: "Dicky Karillo",
            role: "Customer Services",
            bio: "pelayanan 24/7 dari Customer Services.",
            image: "dicky.webp",
            social: {
                instagram: "https://www.instagram.com/kyrotax?igsh=N2t6d3U2eDJxc3Iw"
            }
        },
        {
            name: "Gani Abi V.S.",
            role: "UI/UX Designer",
            bio: "Pengalaman 5 tahun mendesain Web Site.",
            image: "gani.webp",
            social: {
                instagram: "https://www.instagram.com/jettt.ae?igsh=aDVlOThhNDNyOXA2"
            }
        }
    ];

    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-title">
                    <h2>Tim Pengembang</h2>
                    <p>Kami adalah tim mahasiswa yang berdedikasi untuk memberikan solusi digital terbaik</p>
                </div>

                <div className="team-grid-new">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member glass-card">
                            <div className="member-photo">
                                <img src={`/images/${member.image}`} alt={member.name} className="team-photo" />
                            </div>
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p className="member-bio text-justify">{member.bio}</p>

                            <div className="member-social">
                                {member.social.instagram && (
                                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                )}
                                {member.social.github && (
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;