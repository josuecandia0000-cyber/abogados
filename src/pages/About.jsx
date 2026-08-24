import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Datos de los socios fundadores
const partners = [
  {
    id: '01',
    name: 'Alejandro Vargas',
    role: 'Socio Director — Litigio Estratégico',
    desc: 'Ex-magistrado federal con más de 25 años orquestando victorias en controversias corporativas de alto riesgo.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '02',
    name: 'Victoria Mendoza',
    role: 'Socia — M&A y Derecho Corporativo',
    desc: 'Arquitecta de las fusiones más complejas de la última década. Especialista en blindaje y auditoría de capitales.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '03',
    name: 'Roberto Elizondo',
    role: 'Socio — Estructuración Patrimonial',
    desc: 'Maestro en la creación de vehículos fiduciarios internacionales para la protección inquebrantable de Family Offices.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop'
  }
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Estado para controlar qué socio está activo en el hover
  const [activePartner, setActivePartner] = useState(partners[0]);

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO CINEMÁTICO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center border-b border-white/5">
        <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Boardroom" 
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/40 to-[#030303]"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-24 flex flex-col items-center text-center mt-20"
        >
          <FadeIn>
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <span className="text-xs font-mono text-[#D4AF37] tracking-[0.5em] uppercase">El Legado</span>
              <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#D4AF37]"></div>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[120px] font-serif leading-[0.9] tracking-tighter mb-8 uppercase">
              HEGEMONÍA <br />
              <span className="italic text-gray-500 font-normal">JURÍDICA.</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Más de 25 años dictando las reglas del juego corporativo. No solo interpretamos la ley; la utilizamos como un arma estratégica.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* 2. FILOSOFÍA (Sticky Asimétrico) */}
      <section className="relative w-full px-8 md:px-24 py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">El Código <br/><span className="text-[#D4AF37] italic">LXC.</span></h2>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold border-l border-[#D4AF37] pl-4">
                Nuestros Pilares
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-24 mt-8 lg:mt-32">
            <FadeIn>
              <h3 className="text-3xl md:text-5xl font-serif leading-tight text-gray-200">
                1. Precisión <span className="italic text-gray-600">Quirúrgica.</span>
              </h3>
              <p className="text-lg font-light leading-relaxed text-gray-400 mt-6 max-w-2xl">
                Un litigio perdido o una fusión mal estructurada puede destruir décadas de esfuerzo. Nuestro análisis es exhaustivo; nuestras ejecuciones, letales. No dejamos margen para el error, la ambigüedad o la sorpresa.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h3 className="text-3xl md:text-5xl font-serif leading-tight text-gray-200">
                2. Hermetismo <span className="italic text-gray-600">Absoluto.</span>
              </h3>
              <p className="text-lg font-light leading-relaxed text-gray-400 mt-6 max-w-2xl">
                La información es poder, y su exposición es debilidad. Operamos bajo protocolos de confidencialidad de grado militar. Su prestigio y sus movimientos permanecen en la más estricta sombra hasta que usted decide revelarlos.
              </p>
            </FadeIn>
            
            <FadeIn>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-3xl md:text-5xl font-serif leading-tight text-gray-200">
                3. Agresividad <span className="italic text-gray-600">Táctica.</span>
              </h3>
              <p className="text-lg font-light leading-relaxed text-gray-400 mt-6 max-w-2xl">
                El entorno corporativo no premia la pasividad. Diseñamos arquitecturas legales ofensivas y defensivas diseñadas para abrumar a la contraparte, asegurar activos y forzar desenlaces favorables antes de llegar a los tribunales.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. LOS SOCIOS (Hover Image Reveal de Alta Gama) */}
      <section className="relative w-full py-40 bg-[#050505] border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-24">
          
          <FadeIn>
            <div className="flex items-center gap-6 mb-24">
              <span className="uppercase text-[10px] tracking-[0.4em] text-gray-500 font-semibold whitespace-nowrap">El Consejo Directivo</span>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-h-[600px] relative items-center">
            
            {/* Lista interactiva de Socios (Columna Izquierda) */}
            <div className="flex flex-col justify-center relative z-10">
              {partners.map((partner, index) => (
                <div 
                  key={partner.id}
                  onMouseEnter={() => setActivePartner(partner)}
                  className="group py-10 border-b border-white/5 cursor-pointer relative"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-mono text-gray-700 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {partner.id}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-serif text-gray-500 group-hover:text-white transition-colors duration-500">
                      {partner.name}
                    </h3>
                  </div>
                  
                  {/* Contenido extra que aparece al hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-6 pl-16">
                    <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-3">{partner.role}</p>
                    <p className="text-gray-400 font-light text-sm max-w-md leading-relaxed">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Imagen Dinámica del Socio (Columna Derecha) */}
            <div className="hidden lg:flex justify-center items-center h-[700px] relative">
              <motion.img 
                key={activePartner.id}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={activePartner.image} 
                alt={activePartner.name}
                className="w-full h-full object-cover grayscale opacity-80"
              />
              {/* Marco decorativo */}
              <div className="absolute inset-0 border border-[#D4AF37]/20 m-6 pointer-events-none"></div>
            </div>

          </div>
        </div>
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