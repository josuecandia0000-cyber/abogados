import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail'; // NUEVO COMPONENTE
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

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
            {/* NUEVA RUTA: El ':id' es dinámico */}
            <Route path="/servicios/:id" element={<ServiceDetail />} />
            <Route path="/firma" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}