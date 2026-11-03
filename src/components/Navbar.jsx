import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  
  // Barra de progreso súper suave
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Detectar scroll para cambiar el fondo sutilmente
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/firma' },
    { name: 'COntacto', path: '/contacto' }, 
  ];

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. BARRA DE PROGRESO DE SCROLL */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* 2. NAVBAR PRINCIPAL (Flotante y Minimalista) */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled ? 'bg-[#030303]/80 backdrop-blur-xl py-6 border-b border-white/5' : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-24 flex justify-between items-center">
          
          {/* LOGO CON EL NOMBRE OFICIAL */}
          <Link 
            to="/" 
            className="font-serif font-bold text-lg md:text-xl tracking-[0.2em] uppercase text-white hover:text-[#D4AF37] transition-colors duration-500 z-[60] relative"
            onClick={() => setIsOpen(false)}
          >
            GESTORÍA JURÍDICA <span className="text-[#D4AF37] font-normal text-xs md:text-sm block md:inline tracking-[0.3em]">ABOGADOS</span>
          </Link>

          {/* MENÚ DERECHO (Botón Menú + CTA) */}
          <div className="flex items-center gap-8 z-[60] relative">
            <Link 
              to="/contacto"
              className="hidden md:inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              Aseroria
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group flex flex-col items-end justify-center w-8 h-8 focus:outline-none overflow-hidden"
              aria-label="Menú de navegación"
            >
              {/* Icono de Hamburguesa Animado Personalizado */}
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-8 h-[2px] bg-white mb-2 block transition-all duration-300 group-hover:bg-[#D4AF37]"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="w-6 h-[2px] bg-white block transition-all duration-300 group-hover:w-8 group-hover:bg-[#D4AF37]"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -6, w: '2rem' } : { rotate: 0, y: 0 }}
                className="w-4 h-[2px] bg-white mt-2 block transition-all duration-300 group-hover:w-8 group-hover:bg-[#D4AF37]"
              />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MENÚ FULL-SCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(100% 0 0% 0)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[55] bg-[#050505] flex flex-col justify-center items-center"
          >
            {/* Elemento Decorativo Fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-[#D4AF37]/5 rounded-full pointer-events-none"></div>

            <nav className="flex flex-col items-center gap-10 md:gap-14 text-center relative z-10 w-full max-w-4xl px-8">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group relative inline-block text-4xl md:text-6xl lg:text-7xl font-serif text-gray-500 hover:text-white transition-colors duration-500"
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Línea animada al pasar el cursor */}
                      <span className="absolute left-0 top-1/2 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-700 ease-in-out transform -translate-y-1/2 opacity-0 group-hover:opacity-100 mix-blend-screen"></span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Footer interno del menú (Ajustado a Querétaro) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-12 w-full px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-light text-gray-500"
            >
              <div className="flex gap-8">
                <a href="https://www.facebook.com/share/1DnAL2YjYi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Facebook</a>
                <a href="https://www.instagram.com/gestoriajuridica_?mdxt=dHBjMzloZ21zYWFy" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
              </div>
              <p>Santiago de Querétaro, Qro. — {new Date().getFullYear()}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}