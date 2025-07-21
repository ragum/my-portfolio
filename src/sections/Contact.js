// src/sections/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import CSS khusus Contact

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan validasi form di sini (client-side)
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Semua kolom harus diisi!');
            return;
        }

        // Di sini Anda akan mengirim data form ke backend atau layanan pihak ketiga.
        // Contoh menggunakan Formspree (sangat mudah untuk portofolio statis):
        // 1. Daftar di Formspree.io dan buat form baru untuk mendapatkan URL endpoint Anda.
        // 2. Ganti 'YOUR_FORMSPREE_URL' dengan URL form Anda.
        fetch('https://formspree.io/f/xjkwnree', { // GANTI INI!
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                alert('Pesan Anda telah terkirim! Terima kasih.');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            } else {
                alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan jaringan. Silakan coba lagi.');
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Mari Berkolaborasi</h2>
                <p>Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya melalui formulir di bawah ini atau melalui media sosial.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="subject" placeholder="Subjek" value={formData.subject} onChange={handleChange} required />
                    <textarea name="message" rows="5" placeholder="Pesan Anda" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                </form>
                <div className="social-links">
                    <a href="mailto:ragum.zy@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                    <a href="https://linkedin.com/in/abdurrahman-ragum-zuhair-yazid-a58b05112/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/ragum" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    {/* Tambahkan link sosial media lain */}
                </div>
            </div>
        </section>
    );
}

export default Contact;