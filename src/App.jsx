import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import About from './sections/About';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Public portfolio page
function PortfolioPage() {
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    // Small delay to let components render
    const timer = setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Cinematic Spotlight Header */}
        <Hero onOpenInfo={() => setInfoModalOpen(true)} />
        
        {/* Continue Watching row */}
        <Experience />
        
        {/* Trending Now row */}
        <Projects />
        
        {/* Critically Acclaimed Skills row & Bio modal */}
        <About isInfoOpen={infoModalOpen} onCloseInfo={() => setInfoModalOpen(false)} />
        
        {/* My List / Certificates row */}
        <Certificates />
        
        {/* Sign In contact form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
