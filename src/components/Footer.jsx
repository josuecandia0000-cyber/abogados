import React from 'react';
import { Link } from 'react-router-dom';

// Íconos SVG 100% puros. Cero dependencias externas para evitar errores.
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#020202] pt-32 pb-12 relative overflow-hidden border-t border-white/5 mt-auto">
      
      {/* MARCA DE AGUA GIGANTE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[22vw] font-serif font-bold tracking-tighter text-white whitespace-nowrap">
          LEXCORP
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-24 relative z-10">
        
        {/* SECCIÓN SUPERIOR */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <div className="max-w-sm">
            <Link to="/" className="font-serif font-bold text-4xl tracking-widest uppercase text-white hover:text-[#D4AF37] transition-colors duration-500 block mb-6">
              L<span className="text-[#D4AF37]">X</span>C
            </Link>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              La élite corporativa exige resultados. Nosotros los garantizamos mediante estrategia asimétrica y rigor absoluto.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-24 gap-y-12">
            <div className="flex flex-col gap-6">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">Navegación</span>
              <div className="flex flex-col gap-4 text-xs uppercase tracking-widest font-light text-gray-400">
                <Link to="/" className="hover:text-white transition-colors duration-300">Inicio</Link>
                <Link to="/servicios" className="hover:text-white transition-colors duration-300">Prácticas</Link>
                <Link to="/firma" className="hover:text-white transition-colors duration-300">El Consejo</Link>
                <Link to="/contacto" className="hover:text-white transition-colors duration-300">Audiencia</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">Directorio</span>
              <div className="flex flex-col gap-4 text-xs uppercase tracking-widest font-light text-gray-400">
                <a href="mailto:estrategia@lexcorp.com" className="hover:text-white transition-colors duration-300">estrategia@lexcorp.com</a>
                <span className="text-gray-600">+52 (55) 9876 5432</span>
                <span className="text-gray-600 normal-case tracking-normal mt-2">Torre Mayor, Piso 42<br/>CDMX, México</span>
              </div>
            </div>
          </div>

        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-12"></div>

        {/* SECCIÓN INFERIOR: Redes Sociales y Legales */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {new Date().getFullYear()} LexCorp Abogados.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-800"></div>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-[#D4AF37] transition-colors duration-300">Privacidad</Link>
              <Link to="#" className="hover:text-[#D4AF37] transition-colors duration-300">Términos</Link>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-500">
              <FacebookIcon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-500" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-500">
              <InstagramIcon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-500" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-500">
              <TikTokIcon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-500" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}