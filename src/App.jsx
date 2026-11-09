import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail'; 
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Componente para asegurar que al cambiar de página, volvemos arriba
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            {/* CORREGIDO: Cambiamos :id por :slug para que coincida con ServiceDetail */}
            <Route path="/servicios/:slug" element={<ServiceDetail />} />
            <Route path="/firma" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          <FloatingWhatsApp />
          <ScrollToTopButton /> 
        </div>
      </div>
    </Router>
  );
}