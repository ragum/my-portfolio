// src/App.js
import React from 'react';
// import Header from './components/Header'; // Jika Anda membuat komponen Header terpisah
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials'; // Uncomment jika digunakan
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Jika Anda tidak punya App.css khusus, bisa dihapus atau biarkan kosong.
// Atau bisa import langsung CSS komponen di masing-masing komponen.
//import './App.css'; // Opsional, bisa kosong atau untuk layouting App saja

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <About />
      <Portfolio />
      {/* <Testimonials /> */} {/* Uncomment ini jika Anda menggunakan Testimonials */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;