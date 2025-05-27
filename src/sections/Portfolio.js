// src/sections/Portfolio.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Portfolio.css'; // Import CSS khusus Portfolio

// Import gambar proyek (sesuaikan path dan pastikan nama file cocok)
import project1Img from '../assets/images/project1.jpg';
import project2Img from '../assets/images/project2.jpg';
import project3Img from '../assets/images/project3.jpg';
// ... import gambar proyek lainnya

function Portfolio() {
    const projects = [
        {
            image: project1Img,
            title: 'E-commerce Store',
            description: 'Membangun platform e-commerce responsif dengan fitur keranjang belanja dan otentikasi pengguna.',
            liveLink: 'https://example.com/project1', // Ganti dengan link demo live
            repoLink: 'https://github.com/namaanda/project1-repo' // Ganti dengan link GitHub repo
        },
        {
            image: project2Img,
            title: 'Task Management App',
            description: 'Aplikasi manajemen tugas berbasis web untuk mengatur dan melacak pekerjaan harian.',
            liveLink: 'https://example.com/project2',
            repoLink: 'https://github.com/namaanda/project2-repo'
        },
        {
            image: project3Img,
            title: 'Blog Pribadi',
            description: 'Desain dan pengembangan blog pribadi dengan sistem posting dan komentar.',
            liveLink: 'https://example.com/project3',
            repoLink: 'https://github.com/namaanda/project3-repo'
        },
        // Tambahkan proyek lain sesuai kebutuhan Anda
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2>Proyek Unggulan</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            repoLink={project.repoLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;