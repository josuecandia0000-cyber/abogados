import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const servicesList = [
  {
    id: '01',
    slug: 'licencias-de-alcohol',
    category: 'GESTORÍA COMERCIAL',
    title: 'Licencias de alcohol',
    shortDesc: 'Obtención, regularización y renovación de licencias comerciales y permisos de alcoholes.',
    image: '/licen.jpeg'
  },
  {
    id: '02',
    slug: 'licencias-de-funcionamiento',
    category: 'GESTORÍA COMERCIAL',
    title: 'Licencias de Funcionamiento y Regularización',
    shortDesc: 'Apertura, regularización y renovación de licencias comerciales y vistos buenos para negocios sin alcohol.',
    image: '/funcio.jpg'
  },
  {
    id: '03',
    slug: 'derecho-familiar',
    category: 'DERECHO FAMILIAR',
    title: 'Derecho Familiar y Protección Patrimonial',
    shortDesc: 'Defendemos tus derechos, tu patrimonio y el bienestar de tu familia con sensibilidad jurídica.',
    image: '/patri.jpg'
  },
  {
    id: '04',
    slug: 'defensa-civil-patrimonial',
    category: 'DERECHO CIVIL',
    title: 'Defensa Civil y Protección Patrimonial',
    shortDesc: 'Incumplimiento de contratos, arrendamientos y recuperación de bienes inmuebles.',
    image: '/contra.jpeg'
  },
  {
    id: '05',
    slug: 'derecho-mercantil-cobranza',
    category: 'DERECHO MERCANTIL',
    title: 'Cobranza Judicial y Defensa Mercantil',
    shortDesc: 'Recuperación de adeudos, ejecución de pagarés, títulos de crédito y controversias comerciales.',
    image: '/cobra.jpg'
  },
  {
    id: '06',
    slug: 'derecho-penal-defensa',
    category: 'DERECHO PENAL',
    title: 'Defensa Penal y Representación Jurídica',
    shortDesc: 'Estrategia jurídica sólida para la defensa penal, protección de derechos y representación de víctimas.',
    image: '/penal.jpeg'
  },
  {
    id: '07',
    slug: 'derecho-laboral-integral',
    category: 'DERECHO LABORAL',
    title: 'Defensa Laboral para Trabajadores y Empresas',
    shortDesc: 'Despidos injustificados, conciliación prejudicial, cálculo de prestaciones y defensa patronal.',
    image: '/laboral.jpeg'
  },
  {
    id: '08',
    slug: 'derecho-condominal',
    category: 'DERECHO CONDOMINAL',
    title: 'Asesoría y Defensa de Derechos Condominales',
    shortDesc: 'Respaldo legal para mesas directivas, administraciones, asambleas y recuperación de cartera vencida.',
    image: '/condo.jpeg'
  },
  {
    id: '09',
    slug: 'derecho-agrario-regularizacion',
    category: 'DERECHO AGRARIO E INMOBILIARIO',
    title: 'Regularización de Predios y Certeza Patrimonial',
    shortDesc: 'Predios ejidales, dominio pleno, escrituración, inscripción registral y regularización inmobiliaria.',
    image: '/predio.jpeg'
  },
  {
    id: '10',
    slug: 'gestion-notarial',
    category: 'GESTIÓN NOTARIAL',
    title: 'Gestión Notarial y Formalización de Actos',
    shortDesc: 'Escrituración de inmuebles, constitución de sociedades, poderes, protocolización e inscripción registral.',
    image: '/notarial.jpeg'
  },
  
  
  // Aquí puedes seguir agregando los siguientes servicios...
];

export default function Servicios() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="relative bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black pt-32 pb-32 overflow-hidden">
      
      {/* IMAGEN DE FONDO DINÁMICA (Hover en Desktop) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
        <AnimatePresence>
          {hoveredService && (
            <motion.div
              key={hoveredService.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={hoveredService.image} 
                alt={hoveredService.title} 
                className="w-full h-full object-cover grayscale mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-[#030303]/80"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CABECERA */}
      <section className="relative z-10 w-full px-6 md:px-24 max-w-[1400px] mx-auto mb-24">
        <div className="flex items-center gap-6 mb-6">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.5em] uppercase">Nuestros servicios</span>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-[85px] font-serif leading-[1.05] tracking-tight mb-8 uppercase">
          Dominio total del <br />
          <span className="italic text-[#D4AF37] font-normal lowercase">entorno normativo.</span>
        </h1>
        
        <p className="text-base md:text-xl font-light text-gray-400 max-w-3xl leading-relaxed">
          No tercerizamos nuestra excelencia. Proveemos una gestión legal y administrativa quirúrgica para que sus proyectos operen con absoluta certeza jurídica.
        </p>
      </section>

      {/* LISTADO DE SERVICIOS ALINEADO Y SIMÉTRICO */}
      <section className="relative z-10 w-full px-6 md:px-24 max-w-[1400px] mx-auto">
        <div className="border-t border-white/10">
          {servicesList.map((service) => (
            <Link
              key={service.id}
              to={`/servicios/${service.slug}`}
              state={{ serviceData: service }}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-12 md:py-16 border-b border-white/10 transition-all duration-500 hover:px-6 bg-transparent hover:bg-white/[0.02]"
            >
              {/* Bloque Izquierdo: Número y Título perfectamente alineados al centro vertical */}
              <div className="flex items-center gap-6 md:gap-10 lg:w-7/12">
                <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] shrink-0">
                  {service.id}.
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                  {service.title}
                </h2>
              </div>

              {/* Bloque Derecho: Descripción corta y Botón 100% circular */}
              <div className="flex items-center justify-between lg:justify-end gap-10 mt-6 lg:mt-0 lg:w-5/12">
                <p className="text-gray-400 font-light text-sm md:text-base hidden md:block group-hover:text-gray-200 transition-colors">
                  {service.shortDesc}
                </p>

                {/* Contenedor del botón con medidas fijas (w-14 h-14) para garantizar que sea un círculo perfecto */}
                <div className="w-14 h-14 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-gray-300 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}