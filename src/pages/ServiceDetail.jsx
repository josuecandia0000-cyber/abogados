import React, { useRef } from 'react';
import { useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();
  const service = location.state?.serviceData;

  // Hooks para efectos de scroll en el Hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO CINEMÁTICO (Fullscreen, sin márgenes) */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-end pb-24 px-8 md:px-24">
        {/* Imagen con Parallax */}
        <motion.div 
          style={{ y: yImage }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-30"
          />
          {/* Gradiente brutalista para oscurecer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>
        </motion.div>

        {/* Contenido del Hero */}
        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-[1400px] mx-auto"
        >
          <FadeIn>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs font-mono text-[#D4AF37] tracking-[0.5em]">0{service.id}</span>
              <div className="w-24 h-[1px] bg-[#D4AF37]"></div>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[140px] font-serif leading-[0.9] tracking-tighter mb-8 uppercase">
              {service.title.split(' ')[0]} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                {service.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl font-light text-gray-400 max-w-3xl leading-relaxed">
              {service.desc}
            </p>
          </FadeIn>
        </motion.div>

        {/* Indicador de Scroll flotante */}
        <motion.div 
          style={{ opacity: opacityHero }}
          className="absolute right-8 md:right-24 bottom-24 flex flex-col items-center gap-4 text-[#D4AF37]"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>Descubrir</span>
          <ArrowDownRight className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* 2. CONTENIDO EDITORIAL ASIMÉTRICO (Adiós cajas aburridas) */}
      <section className="relative w-full px-8 md:px-24 py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Columna Izquierda: STICKY (Congelada en la pantalla) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40">
              <h2 className="text-[120px] font-serif text-[#111] leading-none -ml-4 select-none">
                0{service.id}
              </h2>
              <h3 className="text-2xl font-serif text-[#D4AF37] mt-4 mb-8">
                El <br/>Manifiesto.
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-bold border-l-2 border-[#D4AF37] pl-4">
                Estrategia <br/>Implacable
              </p>
            </div>
          </div>

          {/* Columna Derecha: EL FLUJO DE TEXTO GIGANTE */}
          <div className="lg:col-span-8 flex flex-col gap-24 mt-16 lg:mt-32">
            
            <FadeIn>
              <p className="text-3xl md:text-5xl font-light leading-tight text-gray-200">
                Nuestra intervención no es consultiva; es <span className="italic font-serif text-gray-500">táctica y quirúrgica</span>. Analizamos las contingencias antes de que muten en crisis financieras.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-400">
                Garantizamos la seguridad jurídica de las operaciones más críticas de nuestros clientes. En el ámbito de <strong>{service.title.toLowerCase()}</strong>, construimos arquitecturas legales diseñadas no solo para resistir auditorías, sino para neutralizar por completo cualquier amenaza de adversarios.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="relative p-8 md:p-16 bg-[#080808] border-l-4 border-[#D4AF37]">
                <p className="text-2xl md:text-4xl font-serif italic text-white leading-snug">
                  "Exigimos un único resultado: cero exposición al riesgo y dominancia operativa continua."
                </p>
              </blockquote>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 3. LLAMADA A LA ACCIÓN MONUMENTAL */}
      <section className="relative w-full border-t border-white/5 mt-20">
        <Link 
          to="/contacto"
          state={{ subject: `Auditoría sobre ${service.title}` }}
          className="group block w-full relative overflow-hidden bg-[#030303] hover:bg-[#D4AF37] transition-colors duration-700 ease-in-out py-32 md:py-48 px-8 md:px-24"
        >
          {/* Texto que cambia de color brutalmente */}
          <div className="relative z-10 flex flex-col items-start max-w-[1400px] mx-auto">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-500 group-hover:text-black/60 transition-colors duration-700 font-bold mb-8">
              Siguiente Paso
            </span>
            
            <div className="flex items-center justify-between w-full">
              <h2 className="text-5xl md:text-8xl lg:text-[100px] font-serif text-white group-hover:text-black transition-colors duration-700 leading-none tracking-tighter">
                AGENDAR <br/> AUDIENCIA
              </h2>
              
              {/* Flecha gigante que se mueve */}
              <div className="hidden md:flex w-32 h-32 rounded-full border border-white/20 group-hover:border-black items-center justify-center group-hover:bg-black transition-all duration-700 transform group-hover:rotate-[-45deg]">
                <ArrowRight className="w-12 h-12 text-white group-hover:text-[#D4AF37]" />
              </div>
            </div>
          </div>
        </Link>
      </section>

    </div>
  );
}

// COMPONENTE DE ANIMACIÓN
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 40 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
      transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}