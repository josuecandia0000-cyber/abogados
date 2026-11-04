import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  // Función para hacer scroll suave hacia el inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#030303] text-gray-400 font-sans border-t border-white/10 pt-24 pb-12 overflow-hidden">
      
      {/* Texto de fondo gigantesco */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none text-center opacity-[0.03]">
        <span className="text-[16vw] font-serif font-bold tracking-tighter text-white whitespace-nowrap">
          GESTORÍA JURÍDICA
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-24">
        
        {/* Contenido Principal del Footer (Ajustado a 2 columnas principales para mayor limpieza) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/10 items-start">
          
          {/* Columna 1: Marca, Lema y Botón de Volver Arriba */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <Link to="/" className="text-2xl font-serif tracking-widest text-white uppercase block mb-6">
                GESTORIA <span className="text-[#D4AF37]">JURÍDICA</span> ABOGADOS
              </Link>
              <p className="text-sm font-light text-gray-400 max-w-lg leading-relaxed mb-8">
                Tu confianza nos compromete. Nuestra estrategia te respalda. Soluciones integrales en gestoría administrativa y defensa legal con rigor absoluto.
              </p>
            </div>


          </div>

          {/* Columna 2: Directorio & Ubicación */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase mb-6">
              Directorio & Ubicación
            </span>
            
            <div className="flex flex-col gap-4 text-sm font-light text-gray-300">
              <a href="mailto:abogados@gestoriajuridica.org" className="hover:text-[#D4AF37] transition-colors">
                abogados@gestoriajuridica.org
              </a>
              <a href="tel:4422361702" className="hover:text-[#D4AF37] transition-colors">
                +52 (442) 236 1702
              </a>
              <a 
                href="https://maps.app.goo.gl/rztYemEuHW6SsXmD7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-[#D4AF37] leading-relaxed pt-2 border-t border-white/5 transition-colors block"
              >
                Central Park Querétaro Corporativo 1 Piso 8 letra C, C. Armando Birlain Shafler 2001, Centro Sur, 76090 Santiago de Querétaro, Qro.
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior: Copyright, Autoría de JOZUL y Redes Sociales */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-gray-500 uppercase tracking-[0.2em] text-center">
            <span>© 2026 Gestoría Jurídica Abogados.</span>
            <span className="w-1 h-1 rounded-full bg-gray-700 hidden md:inline-block"></span>
            
            {/* Enlace de autoría a JOZUL */}
            <a 
              href="https://jozul.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-white transition-colors font-medium tracking-[0.25em]"
            >
              Desarrollado por JOZUL
            </a>
          </div>

          {/* Redes Sociales con SVGs Nativos */}
          <div className="flex items-center gap-4">
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/1DnAL2YjYi/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/gestoriajuridica_?mdxt=dHBjMzloZ21zYWFy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@gestoriajuridica_?_r=1&_t=ZS-9B5DjbJPfvC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              title="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}