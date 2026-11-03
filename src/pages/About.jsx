import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const boardMembers = [
  {
    id: '01',
    name: 'Lic. Bernardo Sotomayor',
    role: 'Socio Director — Derecho Corporativo y Gestoría',
    bio: 'Especialista en regularización de complejos comerciales, licencias de alto impacto y relaciones institucionales con más de 15 años liderando negociaciones corporativas en el Bajío.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '02',
    name: 'Lic. Mariana Valenzuela',
    role: 'Socia — Litigio Civil, Mercantil y Patrimonial',
    bio: 'Experta en el diseño de estrategias de recuperación de cartera vencida, defensa de bienes inmuebles y resolución de controversias complejas de alta cuantía.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '03',
    name: 'Lic. Alejandro Garza',
    role: 'Socio — Derecho Inmobiliario y Condominal',
    bio: 'Encabezando la coordinación de flujos notariales y regímenes condominales, garantizando que cada desarrollo cuente con una arquitectura legal blindada.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function AboutSection() {
  const [activeMember, setActiveMember] = useState(boardMembers[0]);

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO DE IMPACTO INICIAL ("EL LEGADO / HEGEMONÍA JURÍDICA") */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
        
        {/* Imagen de fondo corporativa con filtro cinematográfico */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
            alt="Despacho Jurídico Oficina" 
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-[#030303]/90"></div>
        </div>

        {/* Contenido del Hero de Impacto */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          
          <span className="text-[10px] md:text-xs font-mono text-[#D4AF37] tracking-[0.5em] uppercase mb-4">
            El Legado
          </span>
          <div className="w-[1px] h-12 bg-[#D4AF37] mb-8"></div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-serif uppercase tracking-tight leading-[1.05] mb-6">
            HEGEMONÍA <br />
            <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>
              JURÍDICA.
            </span>
          </h1>

          <p className="text-sm md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Años dictando las reglas del juego corporativo en Querétaro. No solo interpretamos la norma; la utilizamos como un arma estratégica.
          </p>

        </div>
      </section>

      {/* 2. SECCIÓN: LOS PILARES ("EL CÓDIGO GJA") */}
      <section className="w-full py-28 px-6 md:px-24 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase block mb-3">Nuestros Pilares</span>
            <h2 className="text-4xl md:text-6xl font-serif">El Código <br /><span className="text-[#D4AF37] italic">GJA.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="border-t border-white/20 pt-8">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest block mb-4">01. PILAR ESTRATÉGICO</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Precisión <span className="italic text-gray-400">Quirúrgica.</span></h3>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              Un error administrativo o una licencia mal gestionada puede detener operaciones enteras. Nuestro análisis es exhaustivo; nuestras ejecuciones, impecables. No dejamos margen para el error ni la sorpresa.
            </p>
          </div>

          <div className="border-t border-white/20 pt-8">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest block mb-4">02. PILAR DE SEGURIDAD</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Hermetismo <span className="italic text-gray-400">Absoluto.</span></h3>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              La información es poder, y su exposición es debilidad. Operamos bajo estrictos protocolos de confidencialidad para proteger el prestigio y el patrimonio de nuestros representados en todo momento.
            </p>
          </div>

          <div className="border-t border-white/20 pt-8">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest block mb-4">03. PILAR OPERATIVO</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Agresividad <span className="italic text-gray-400">Táctica.</span></h3>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              El entorno comercial en Querétaro no premia la pasividad. Diseñamos rutas legales ofensivas y defensivas orientadas a abrumar los obstáculos burocráticos y asegurar desenlaces favorables.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN: EL CONSEJO DIRECTIVO / SOCIOS */}
      <section className="w-full py-28 px-6 md:px-24 max-w-[1400px] mx-auto border-t border-white/10">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase">El Consejo Directivo</span>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Listado interactivo izquierdo */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {boardMembers.map((member) => (
              <div 
                key={member.id}
                onMouseEnter={() => setActiveMember(member)}
                onClick={() => setActiveMember(member)}
                className="group cursor-pointer pb-6 border-b border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-[#D4AF37]">{member.id}</span>
                  <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-300 ${
                    activeMember.id === member.id ? 'text-[#D4AF37] translate-x-3' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {member.name}
                  </h3>
                </div>
                
                <div className={`mt-3 pl-10 transition-all duration-500 overflow-hidden ${
                  activeMember.id === member.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <span className="text-xs font-mono text-[#D4AF37] tracking-widest block mb-2">{member.role}</span>
                  <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-xl">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen dinámica derecha */}
          <div className="lg:col-span-5 relative h-[450px] md:h-[550px] overflow-hidden border border-white/10 bg-[#080808]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeMember.id}
                src={activeMember.image} 
                alt={activeMember.name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
          </div>

        </div>
      </section>

    </div>
  );
}