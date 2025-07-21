// src/sections/Hero.js
import React from 'react';
import profileImg from '../assets/images/profile.jpg'; // Pastikan path benar
import './Hero.css'; // Import CSS khusus Hero

function Hero() {
    return (
        <header className="hero-section">
            <div className="container">
                <img src={profileImg} alt="Foto Profil Nama Anda" className="profile-img" />
                <h1>Ragum: Your Daily Web Programmer</h1>
                <p>Mengembangkan Solusi Web Inovatif dan Berkinerja Tinggi.</p>
                <div className="cta-buttons">
                    <a href="#portfolio" className="btn btn-primary">Lihat Portofolio Saya</a>
                    <a href="#contact" className="btn btn-secondary">Hubungi Saya</a>
                </div>
            </div>
        </header>
    );
}

export default Hero;