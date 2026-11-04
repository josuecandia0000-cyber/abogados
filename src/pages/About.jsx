import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const boardMembers = [
  {
    id: '01',
    name: 'Lic. Camilo Medina Ramírez',
    role: 'Director General y Socio Fundador',
    bio: 'Cuenta con más de 15 años de experiencia en el ejercicio profesional del Derecho, enfocado en Derecho Privado, Condominal y Administrativo. Especialista en la asesoría de empresas, personas físicas y la gestión de procedimientos para establecimientos comerciales en Querétaro.',
    image: './src/assets/Camilo.jpeg'
  },
  {
    id: '02',
    name: 'Lic. Stephania Fernández Lara Martínez',
    role: 'Socia Fundadora, Directora Administrativa y de Atención al Cliente',
    bio: 'Formación académica en Psicología que aporta una perspectiva humana y empática a la firma. Coordina la organización interna, la atención personalizada, los procesos administrativos y la comunicación directa entre los clientes y el equipo jurídico.',
    image: './src/assets/Stephania.jpeg'
  },
  {
    id: '03',
    name: 'Lic. Edwin Herrera Hervert',
    role: 'Socio y Abogado Postulante',
    bio: 'Especialista en litigio estratégico y postulación en materias mercantil, familiar, civil, constitucional y amparo. Su enfoque está orientado al análisis responsable de controversias y la búsqueda de soluciones prácticas y eficaces para cada cliente.',
    image: './src/assets/Edwin.jpg'
  },
  {
    id: '04',
    name: 'Lic. Daniela Ortiz Alcántara',
    role: 'Socia y Abogada Especialista',
    bio: 'Especialista en Derecho Administrativo, Notarial y Agrario. Su práctica se enfoca en la gestión de procedimientos ante autoridades, formalización de actos jurídicos ante fedatarios y regularización de derechos sobre la tierra para garantizar seguridad patrimonial.',
    image: './src/assets/Daniela.jpeg'
  },
  {
    id: '05',
    name: 'Lic. Jorge Villegas Luna',
    role: 'Especialista en Derecho Penal',
    bio: 'Especialista en Derecho Penal y Sistema de Justicia Penal con experiencia en el servicio público. Enfocado en la defensa técnica de imputados, asesoría a víctimas, análisis de carpetas de investigación y protección del debido proceso.',
    image: './src/assets/Jorge.jpeg'
  },
  {
    id: '06',
    name: 'Lic. Héctor Hugo García Mejía',
    role: 'Especialista en Derecho Laboral',
    bio: 'Especialista en Derecho Laboral y Relaciones de Trabajo. Su práctica abarca la representación tanto de trabajadores como de patrones en controversias, conciliación prejudicial, juicios laborales, contratos y prevención de contingencias.',
    image: './src/assets/Hector.jpeg'
  }
];

export default function AboutSection() {
  const [activeMember, setActiveMember] = useState(boardMembers[0]);

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO DE IMPACTO INICIAL REFINADO */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
{/* Imagen de fondo corporativa adaptada para móvil sin recortes */}
<div className="absolute inset-0 z-0 overflow-hidden bg-[#030303]">
  <img 
    src="./src/assets/socios.jpg" 
    alt="Despacho Jurídico Central Park Querétaro" 
    className="w-full h-full object-fill md:object-cover grayscale mix-blend-luminosity opacity-45"
  />
  {/* Gradiente sutil para fundir y mantener la legibilidad de los textos */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-[#030303]/70"></div>
</div>
        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          
          <span className="text-[10px] md:text-xs font-mono text-[#D4AF37] tracking-[0.5em] uppercase mb-4">
            Nosotros
          </span>
          <div className="w-[1px] h-12 bg-[#D4AF37] mb-8"></div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-serif uppercase tracking-tight leading-[1.05] mb-6">
            EXCELENCIA <br />
            <span className="italic text-transparent font-normal lowercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>
              jurídica.
            </span>
          </h1>

          <p className="text-sm md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Años respaldando el patrimonio de familias, empresas y desarrollos en Querétaro con rigor técnico, estrategia y absoluta certidumbre legal.
          </p>

        </div>
      </section>

      {/* 2. SECCIÓN: LOS PILARES ("EL ESTÁNDAR INSTITUCIONAL") */}
      <section className="w-full bg-[#030303] py-32 px-6 md:px-24 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Cabecera Asimétrica */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase">Filosofía de la Firma</span>
                <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif uppercase tracking-tight leading-none">
                El Estándar <br />
                <span className="text-transparent font-normal italic lowercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>
                  institucional.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed border-l-2 border-[#D4AF37]/50 pl-6">
                En Gestoría Jurídica Abogados no dejamos margen para la improvisación. Cada trámite, licencia y defensa se ejecuta bajo un protocolo de rigor técnico absoluto.
              </p>
            </div>
          </div>

          {/* Tarjetas de Pilares con profundidad */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pilar 01 */}
            <div className="bg-[#060606] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors duration-500 group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em]">01. RIGOR</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Precisión <span className="italic text-[#D4AF37]">Quirúrgica.</span>
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  Un error en la integración documental o en los requisitos municipales puede paralizar operaciones enteras. Nuestro análisis es exhaustivo para garantizar la viabilidad legal ante cualquier autoridad.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Análisis y Validación Documental
              </div>
            </div>

            {/* Pilar 02 */}
            <div className="bg-[#060606] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors duration-500 group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em]">02. PREVENCIÓN</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Criterio <span className="italic text-[#D4AF37]">Preventivo.</span>
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  La mejor defensa es anticiparse a la contingencia. Blindamos licencias, contratos, inmuebles y relaciones corporativas antes de que cualquier observación administrativa frene su patrimonio.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Blindaje Normativo y Patrimonial
              </div>
            </div>

            {/* Pilar 03 */}
            <div className="bg-[#060606] border border-white/10 p-8 md:p-10 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors duration-500 group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em]">03. EFICIENCIA</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Estrategia <span className="italic text-[#D4AF37]">Pragmática.</span>
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  El entorno comercial de Querétaro exige agilidad. Diseñamos rutas de gestión directas para simplificar procesos complejos, superar obstáculos burocráticos y acelerar la resolución de sus asuntos.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Gestión Ágil y Celeridad Legal
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SECCIÓN: EL CONSEJO DIRECTIVO / SOCIOS Y ESPECIALISTAS */}
      <section className="w-full py-32 px-6 md:px-24 max-w-[1400px] mx-auto border-t border-white/10">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase">Socios y Especialistas</span>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Listado interactivo izquierdo */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {boardMembers.map((member) => (
              <div 
                key={member.id}
                onMouseEnter={() => setActiveMember(member)}
                onClick={() => setActiveMember(member)}
                className="group cursor-pointer pb-5 border-b border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-[#D4AF37]">{member.id}</span>
                  <h3 className={`text-2xl md:text-4xl font-serif transition-colors duration-300 ${
                    activeMember.id === member.id ? 'text-[#D4AF37] translate-x-3' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {member.name}
                  </h3>
                </div>
                
                <div className={`mt-3 pl-10 transition-all duration-500 overflow-hidden ${
                  activeMember.id === member.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <span className="text-xs font-mono text-[#D4AF37] tracking-widest block mb-2 uppercase">{member.role}</span>
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