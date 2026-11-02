import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Con el Lema y Nombre Real adaptados al diseño) */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-end pb-24 px-8 md:px-24">
        <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Gestoría Jurídica Abogados" 
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent"></div>
        </motion.div>

        <motion.div style={{ opacity: opacityHero }} className="relative z-10 w-full max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs font-mono text-[#D4AF37] tracking-[0.5em] uppercase">Gestoría Jurídica Abogados</span>
              <div className="w-24 h-[1px] bg-[#D4AF37]"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-serif leading-[0.95] tracking-tighter mb-8 uppercase">
              Tu confianza <br />
              <span className="italic text-[#D4AF37] font-normal lowercase">nos compromete.</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl leading-relaxed mb-12">
              Nuestra estrategia te respalda. Soluciones legales y administrativas integrales para proteger tus derechos y regularizar tus actividades con absoluta certidumbre.
            </p>

            <Link 
              to="/contacto"
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-colors duration-500"
            >
              <span>Consulta Estratégica</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </motion.div>
      </section>

      {/* 2. SECCIÓN DE MANIFIESTO / PROPUESTA DE VALOR */}
      <section className="relative w-full px-8 md:px-24 py-32 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40">
              <h2 className="text-[120px] font-serif text-[#111] leading-none -ml-4 select-none">
                01
              </h2>
              <h3 className="text-2xl font-serif text-[#D4AF37] mt-4 mb-8">
                Propuesta <br/>de Valor.
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold border-l-2 border-[#D4AF37] pl-4">
                ¿Qué nos distingue?
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-20 mt-8 lg:mt-32">
            <FadeIn>
              <p className="text-3xl md:text-5xl font-light leading-tight text-gray-200">
                Integramos <span className="italic font-serif text-[#D4AF37]">servicios legales y de gestoría</span> en un mismo despacho para optimizar cada paso.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-400">
                Desde la tramitación de licencias y permisos comerciales hasta asuntos civiles, familiares, patrimoniales y penales. Construimos relaciones de confianza a largo plazo, brindándole orientación clara para tomar decisiones informadas.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="pt-6">
                <Link 
                  to="/firma"
                  className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold"
                >
                  <span className="border-b border-[#D4AF37] pb-1 group-hover:border-white group-hover:text-white transition-colors">Conozca la Firma</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN FINAL / LLAMADA A LA ACCIÓN */}
      <section className="relative w-full border-t border-white/5 py-32 md:py-48 bg-[#050505] text-center px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-bold block mb-6">
              Certidumbre y Soluciones
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight mb-10 leading-tight">
              La élite corporativa exige resultados. <br />
              <span className="italic text-[#D4AF37]">Nosotros los garantizamos.</span>
            </h2>
            
            <Link 
              to="/contacto"
              className="inline-block bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-[0.3em] px-12 py-6 hover:bg-white transition-colors duration-500"
            >
              Agendar Audiencia Privada
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

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