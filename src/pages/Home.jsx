import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacityText = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const yText = useTransform(heroScroll, [0, 0.5], [0, -100]);
  const scaleImage = useTransform(heroScroll, [0, 1], [1, 1.15]);

  return (
    <div className="w-full bg-[#030303] selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO VANGUARDISTA (Mantenemos la genialidad del inicio) */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Texto gigante de fondo animado */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
          <h1 className="text-[18vw] font-serif font-bold whitespace-nowrap text-outline-gold tracking-tighter select-none">
            IMPLACABLES
          </h1>
        </div>

        <motion.div 
          style={{ opacity: opacityText, y: yText }}
          className="z-10 w-full max-w-[1400px] px-8 md:px-24 flex flex-col items-start"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="uppercase text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold">Litigio & Blindaje</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[1.05] mb-8 max-w-4xl"
          >
            Redefiniendo el <br />
            <span className="italic text-gray-500">poder legal</span> en la <br />
            era moderna.
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <Link to="/contacto" className="group relative inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] pb-2 overflow-hidden">
              <span className="z-10 group-hover:text-[#D4AF37] transition-colors duration-300">Consulta Estratégica</span>
              <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
              </div>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-800">
                <span className="absolute bottom-0 left-0 w-0 h-full bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagen abstracta asimétrica */}
        <motion.div style={{ scale: scaleImage }} className="absolute right-0 top-0 w-1/3 h-full hidden lg:block opacity-30 mix-blend-luminosity grayscale">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Corporate Architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]"></div>
        </motion.div>
      </section>

      {/* 2. MANIFIESTO (Adiós cajas, hola diseño editorial asimétrico) */}
      <section className="relative py-40 px-8 md:px-24 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
             {/* Texto rotado decorativo */}
             <div className="absolute -left-12 top-0 transform -rotate-90 origin-top-left text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] opacity-60 hidden md:block">
                EL ENFOQUE LXC
             </div>
             
             <FadeIn>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-500 leading-tight">
                No defendemos <br/>casos.<br/>
                <span className="text-white not-italic font-bold mt-2 block">Protegemos legados.</span>
              </h3>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12 mt-8 lg:mt-0 lg:pl-12 border-l border-white/5">
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-300">
                En un entorno corporativo implacable, la reactividad es un riesgo inaceptable. Operamos en la intersección exacta de la agudeza jurídica y la estrategia táctica.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-sm md:text-base font-light leading-relaxed text-gray-500 max-w-2xl">
                Nuestra firma no es para todos. Representamos exclusivamente a un portafolio selecto de corporaciones e individuos de alto patrimonio. Neutralizamos amenazas legales antes de que impacten los balances financieros, manteniendo un hermetismo absoluto en cada maniobra.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6}>
               <Link to="/firma" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white hover:text-[#D4AF37] transition-colors mt-4">
                 <span>Conozca la firma</span>
                 <ArrowUpRight className="w-4 h-4" />
               </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS (Lista interactiva de alto impacto, cero cajas) */}
      <section className="py-40 px-8 md:px-24 bg-[#050505] relative overflow-hidden">
        {/* Glow sutil en el fondo */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-6 mb-24">
              <span className="uppercase text-[10px] tracking-[0.4em] text-gray-500 font-semibold whitespace-nowrap">Áreas de Hegemonía</span>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="flex flex-col w-full">
            <ServiceRow number="01." title="Resolución de Disputas & Litigio" desc="Controversias comerciales de alto riesgo." link="/servicios" />
            <ServiceRow number="02." title="Blindaje Corporativo Estructural" desc="Arquitectura fiduciaria e inmunidad de activos." link="/servicios" />
            <ServiceRow number="03." title="Fusiones & Adquisiciones Críticas" desc="Due diligence agresivo y estrategia de expansión." link="/servicios" />
            <ServiceRow number="04." title="Intervención Fiscal & Auditoría" desc="Defensa tributaria frente a auditorías agresivas." link="/servicios" />
          </div>
        </div>
      </section>

      {/* 4. CIERRE / LLAMADA A LA ACCIÓN EDITORIAL */}
      <section className="py-32 px-8 md:px-24 max-w-[1400px] mx-auto text-center border-t border-white/5">
         <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 italic">
               La élite corporativa exige resultados.<br/>
               <span className="not-italic font-bold text-[#D4AF37]">Nosotros los garantizamos.</span>
            </h2>
            <Link to="/contacto" className="inline-block border border-[#D4AF37]/40 text-[#D4AF37] px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
               Agendar Audiencia Privada
            </Link>
         </FadeIn>
      </section>

    </div>
  );
}

/* COMPONENTES AUXILIARES PARA ANIMACIONES Y LIMPIEZA */

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}>
      {children}
    </motion.div>
  );
}

// Nueva Fila Interactiva para Servicios (Diseño Editorial)
function ServiceRow({ number, title, desc, link }) {
  return (
    <FadeIn>
      <Link to={link} className="group flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 py-10 cursor-pointer relative overflow-hidden">
        
        {/* Hover background layer (Sutil) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10 w-full">
          <span className="text-sm font-mono text-gray-600 group-hover:text-[#D4AF37] transition-colors duration-300 w-12">{number}</span>
          <h4 className="text-3xl md:text-5xl font-serif text-gray-300 group-hover:text-white transition-colors duration-300 mb-2 md:mb-0 flex-grow">{title}</h4>
        </div>
        
        <div className="relative z-10 flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0">
           <span className="text-sm font-light text-gray-600 group-hover:text-gray-400 transition-colors hidden lg:block text-right whitespace-nowrap">
             {desc}
           </span>
           <div className="text-gray-700 group-hover:text-[#D4AF37] transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2">
             <ArrowUpRight className="w-8 h-8" />
           </div>
        </div>
      </Link>
    </FadeIn>
  );
}