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
            title: 'ASICS Indonesia',
            description: 'Membangun platform e-commerce responsif dengan fitur keranjang belanja dan otentikasi pengguna.',
            liveLink: 'https://asics.co.id', // Ganti dengan link demo live
            repoLink: 'https://github.com/namaanda/project1-repo' // Ganti dengan link GitHub repo
        },
        {
            image: project2Img,
            title: 'Planet Suf Indonesia',
            description: 'Shopify store untuk Planet Surf Indonesia dengan desain responsif dan integrasi pembayaran.',
            liveLink: 'https://www.planetsurfonline.com/',
            repoLink: 'https://github.com/namaanda/project2-repo'
        },
        {
            image: project3Img,
            title: 'KJ Perabot',
            description: 'Membangun platform e-commerce responsif dengan fitur keranjang belanja dan otentikasi pengguna.',
            liveLink: 'https://kjperabot.co.id/',
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