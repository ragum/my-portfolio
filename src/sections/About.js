// src/sections/About.js
import React from 'react';
import './About.css'; // Import CSS khusus About

function About() {
    const skills = [
        { name: 'HTML5', iconClass: 'fab fa-html5' },
        { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
        { name: 'JavaScript', iconClass: 'fab fa-js' },
        { name: 'React.js', iconClass: 'fab fa-react' },
        { name: 'Node.js', iconClass: 'fab fa-node-js' },
        // { name: 'Express.js', iconClass: 'fas fa-server' },
        { name: 'SQL', iconClass: 'fas fa-database' },
        { name: 'Git', iconClass: 'fab fa-git-alt' },
        { name: 'Figma', iconClass: 'fab fa-figma' },
        // Tambahkan skill lain sesuai keahlian Anda
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>Tentang Saya</h2>
                <p>Halo! Saya Ragum, seorang web programmer dengan 5 tahun pengalaman dalam membangun aplikasi web yang responsif, efisien, dan ramah pengguna. Saya bersemangat dalam mengubah ide menjadi kode yang berfungsi dengan baik dan memberikan solusi nyata.</p>
                <p>Saya memiliki keahlian dalam:</p>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <i className={skill.iconClass}></i>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;