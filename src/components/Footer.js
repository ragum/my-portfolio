// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS khusus Footer

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2024 Ragum. Hak Cipta Dilindungi Undang-Undang.</p>
                {/* <div className="footer-links">
                    <a href="#">Privasi</a>
                    <a href="#">Syarat Penggunaan</a>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;