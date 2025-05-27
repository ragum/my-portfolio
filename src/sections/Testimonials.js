// src/sections/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
    const testimonialsData = [
        {
            quote: "Nama Anda adalah developer yang sangat profesional dan teliti. Proyek kami selesai tepat waktu dengan kualitas luar biasa!",
            client: "Nama Klien 1, Jabatan/Perusahaan"
        },
        {
            quote: "Kerja sama dengan Nama Anda selalu menyenangkan. Komunikasi yang baik dan hasil yang melampaui ekspektasi.",
            client: "Nama Klien 2, Jabatan/Perusahaan"
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <h2>Apa Kata Mereka?</h2>
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <p>"{testimonial.quote}"</p>
                            <p className="client-name">- {testimonial.client}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;