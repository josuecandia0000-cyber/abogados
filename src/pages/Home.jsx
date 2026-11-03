import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Los 3 servicios clave exactos de la referencia visual
const featuredServices = [
  {
    id: '01',
    category: 'GESTORÍA',
    title: 'Gestoría Corporativa y Licencias',
    desc: 'Obtención y regularización de licencias de funcionamiento, alcoholes y autorizaciones comerciales.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '02',
    category: 'DEFENSA',
    title: 'Defensa Civil, Familiar y Penal',
    desc: 'Representación jurídica en convenios, contratos, derecho familiar y procesos penales.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    category: 'PATRIMONIO',
    title: 'Propiedad, Agrario y Notarial',
    desc: 'Regularización de inmuebles, derecho mercantil, condominios y acompañamiento notarial.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Estado para alternar entre "Propuesta de Valor" y "Misión"
  const [activeTab, setActiveTab] = useState('distingue');

  // Estado para el servicio activo en la sección interactiva
  const [activeService, setActiveService] = useState(featuredServices[0]);

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION */}
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

            
            <h1 className="text-5xl md:text-7xl lg:text-[95px] font-serif leading-[0.95] tracking-tighter mb-8 uppercase">
              Tu confianza <br />
              <span className="italic text-[#D4AF37] font-normal lowercase">nos compromete.</span> <br />
              <span className="italic text-gray-400 font-normal lowercase text-4xl md:text-6xl lg:text-[75px] block mt-2">
                Nuestra estrategia te respalda.
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl font-light text-gray-300 max-w-3xl leading-relaxed mb-12">
              Ayudamos a personas, empresas a resolver problemas jurídicos y administrativos, proteger sus derechos y regularizar sus actividades mediante asesoría legal, representación y gestión de trámites.
            </p>

            <Link 
              to="/contacto"
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-colors duration-500"
            >
              <span>Solicitar Asesoría</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </motion.div>
      </section>

      {/* 2. SECCIÓN DINÁMICA: PROPUESTA DE VALOR / NUESTRA MISIÓN */}
      <section className="relative w-full px-8 md:px-24 py-32 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40">
              <h2 className="text-[120px] font-serif text-[#111] leading-none -ml-4 select-none">
                01
              </h2>
              <h3 className="text-2xl font-serif text-[#D4AF37] mt-4 mb-8">
                {activeTab === 'distingue' ? 'Propuesta\nde Valor.' : 'Misión\nEstratégica.'}
              </h3>

              <div className="flex flex-col gap-4 items-start">
                <button
                  onClick={() => setActiveTab('distingue')}
                  className={`text-xs uppercase tracking-[0.3em] font-bold transition-all text-left flex items-center gap-3 ${
                    activeTab === 'distingue'
                      ? 'text-[#D4AF37] border-l-2 border-[#D4AF37] pl-4'
                      : 'text-gray-600 hover:text-gray-300 pl-4 border-l-2 border-transparent'
                  }`}
                >
                  ¿Qué nos distingue?
                </button>

                <button
                  onClick={() => setActiveTab('mision')}
                  className={`text-xs uppercase tracking-[0.3em] font-bold transition-all text-left flex items-center gap-3 ${
                    activeTab === 'mision'
                      ? 'text-[#D4AF37] border-l-2 border-[#D4AF37] pl-4'
                      : 'text-gray-600 hover:text-gray-300 pl-4 border-l-2 border-transparent'
                  }`}
                >
                  Nuestra Misión
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center min-h-[400px] mt-8 lg:mt-32">
            <AnimatePresence mode="wait">
              {activeTab === 'distingue' ? (
                <motion.div
                  key="distingue"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-12"
                >
                  <p className="text-3xl md:text-5xl font-light leading-tight text-gray-200">
                    Servicios <span className="italic font-serif text-[#D4AF37]"> legales y de gestoría</span> integrados en una sola visión estratégica.
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                  <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-400">
                    Brindamos atención cercana, transparente y personalizada. Identificamos riesgos, tramitamos permisos comerciales y resolvemos asuntos civiles, familiares, patrimoniales y penales con absoluta certeza. Más que trámites aislados, construimos relaciones de confianza para proteger sus derechos en cada etapa.
                  </p>

                  <div className="pt-4">
                    <Link 
                      to="/firma"
                      className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold"
                    >
                      <span className="border-b border-[#D4AF37] pb-1 group-hover:border-white group-hover:text-white transition-colors">Conozca la Firma</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="mision"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-12"
                >
                  <p className="text-3xl md:text-5xl font-light leading-tight text-gray-200">
                    Prevención de riesgos, <span className="italic font-serif text-[#D4AF37]">representación experta</span> y acompañamiento continuo.
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

                  <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-400">
                   Nuestra misión es blindar tu patrimonio y resolver controversias administrativas o judiciales con rigor profesional y cercanía, garantizando absoluta certeza jurídica en cada etapa de tu procedimiento.
                  </p>

                  <div className="pt-4">
                    <Link 
                      to="/contacto"
                      className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold"
                    >
                      <span className="border-b border-[#D4AF37] pb-1 group-hover:border-white group-hover:text-white transition-colors">Solicitar Asesoría</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN NUESTRA COBERTURA (Adaptativa: Hover en Desktop / Táctil interactiva en Celular) */}
      <section className="relative w-full px-8 md:px-24 py-32 max-w-[1400px] mx-auto border-t border-white/5">
        
        {/* Cabecera */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              Gestoria juridica, <br />
              <span className="italic text-gray-500 font-normal">especializada para cada necesidad.</span>
            </h2>
          </div>


        </div>

        {/* CONTENEDOR ADAPTATIVO MOBILE / DESKTOP */}
        
        {/* PARA COMPUTADORAS (Desktop): Efecto Hover a la izquierda + Panel con foto a la derecha */}
        <div className="hidden lg:grid grid-cols-12 gap-20 items-center">
          <div className="col-span-6 flex flex-col justify-center border-t border-white/5">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className="group py-8 border-b border-white/5 cursor-pointer relative transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className={`text-xs font-mono transition-colors duration-300 ${
                      activeService.id === service.id ? 'text-[#D4AF37]' : 'text-gray-600 group-hover:text-gray-400'
                    }`}>
                      {service.id}
                    </span>
                    <h3 className={`text-3xl font-serif transition-colors duration-300 ${
                      activeService.id === service.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                    activeService.id === service.id 
                      ? 'text-[#D4AF37] opacity-100 translate-x-0' 
                      : 'text-gray-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-6 flex flex-col justify-between h-[500px] bg-[#050505] border border-white/5 p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col justify-between h-full relative z-10"
              >
                <div className="relative w-full h-48 overflow-hidden mb-6 border border-white/5">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold block mb-3">
                    {activeService.category}
                  </span>
                  <p className="text-gray-300 font-light text-base leading-relaxed">
                    {activeService.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link 
                    to="/servicios" 
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white font-bold hover:text-[#D4AF37] transition-colors"
                  >
                    Conoce nuestros servicios
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* PARA CELULARES (Mobile): Tarjetas táctiles limpias idénticas al diseño de referencia */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="p-8 bg-[#050505] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#D4AF37] block mb-4">
                  {service.id} / {service.category}
                </span>
                <h3 className="text-2xl font-serif text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex justify-end">
                <Link to="/servicios" className="text-[#D4AF37]">
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="relative w-full px-8 md:px-24 py-32 max-w-[1400px] mx-auto border-t border-white/5 bg-[#030303]">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
              La opinión real de nuestros clientes, <br />
              <span className="italic text-gray-500 font-normal">respaldo real en cada trámite.</span>
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto">
              Buscamos la mejora continua para brindarte la mayor confianza y certeza jurídica.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#050505] p-2 md:p-6 shadow-2xl">
            <iframe 
              src="https://widgets.sociablekit.com/google-reviews/iframe/25726848" 
              style={{ border: 0 }}
              width="100%" 
              height="650px"
              title="Reseñas de Google - Gestoría Jurídica Abogados"
              loading="lazy"
            ></iframe>
          </div>
        </FadeIn>
      </section>

<section className="relative w-full border-t border-white/5 py-32 md:py-48 bg-[#050505] text-center px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-bold block mb-6">
              Asesoría Profesional
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight mb-8 leading-tight">
              Su tranquilidad jurídica <br />
              <span className="italic text-[#D4AF37]">es nuestra prioridad.</span>
            </h2>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Contáctenos hoy mismo y reciba orientación experta y transparente para proteger su patrimonio, su negocio o su familia.
            </p>
            
            <Link 
              to="/contacto"
              className="inline-block bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-[0.3em] px-12 py-6 hover:bg-white transition-colors duration-500"
            >
              Agendar Asesoría
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