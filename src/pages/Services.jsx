import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Lista de servicios consolidados con descripciones de élite e imágenes de fondo
const servicesList = [
  {
    id: '01',
    title: 'Condominios y Fraccionamientos',
    desc: 'Estructuración legal, régimen condominal y blindaje para desarrollos inmobiliarios comerciales y residenciales de alto valor.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Póliza Jurídica',
    desc: 'Mitigación absoluta de riesgos en arrendamientos inmobiliarios, garantizando el patrimonio a través de filtros exhaustivos.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Gestión Notarial',
    desc: 'Fe pública, protocolización de actas asamblearias y formalización de contratos estructurados a la medida.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2024&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Licencias de Funcionamiento',
    desc: 'Estrategia gubernamental para la apertura, operatividad y regularización de corporativos e industrias sin contratiempos.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Protección Civil',
    desc: 'Auditoría preventiva y cumplimiento estricto de normativas de seguridad estructural, neutralizando clausuras.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '06',
    title: 'Licencias Municipales y Alcohol',
    desc: 'Cabildeo ejecutivo y gestión de permisos especializados ante dependencias locales y estatales con máxima agilidad.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '07',
    title: 'Derecho Laboral Corporativo',
    desc: 'Contención de litigios obrero-patronales, diseño de contratos blindados y reestructuración de plantillas.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop'
  }
];

export default function Services() {
  const [activeImage, setActiveImage] = useState(servicesList[0].image);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white pt-32 pb-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* FONDO DINÁMICO (Image Reveal Effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: isHovering ? 0.15 : 0.05, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-cover grayscale mix-blend-luminosity"
            alt="Fondo de servicio"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/80 to-[#030303]"></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-24">
        
        {/* ENCABEZADO DE LA PÁGINA */}
        <div className="mb-24 md:mb-40">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
              <span className="uppercase text-[10px] tracking-[0.5em] text-[#D4AF37] font-semibold">Portafolio de Prácticas</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight">
              Dominio Total del <br />
              <span className="italic text-gray-500">entorno normativo.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="mt-10 text-gray-400 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
              No tercerizamos nuestra excelencia. Proveemos una gestión legal y administrativa quirúrgica para que sus proyectos operen con absoluta certidumbre jurídica.
            </p>
          </FadeIn>
        </div>

        {/* LISTA EDITORIAL DE SERVICIOS */}
        <div 
          className="flex flex-col border-t border-white/10"
          onMouseLeave={() => setIsHovering(false)}
        >
          {servicesList.map((service, index) => (
            <ServiceRow 
              key={service.id} 
              service={service} 
              index={index} 
              onMouseEnter={() => {
                setActiveImage(service.image);
                setIsHovering(true);
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// COMPONENTE: FILA DE SERVICIO ASIMÉTRICA CON ENLACE DINÁMICO
function ServiceRow({ service, index, onMouseEnter }) {
  // Convertimos el título a un "slug" limpio para la URL (ej. "Póliza Jurídica" -> "poliza-juridica")
  const slug = service.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '-');

  return (
    <FadeIn delay={index * 0.1}>
      <Link 
        to={`/servicios/${slug}`}
        state={{ serviceData: service }}
        onMouseEnter={onMouseEnter}
        className="group flex flex-col lg:flex-row lg:items-center justify-between border-b border-white/10 py-12 md:py-16 cursor-pointer relative overflow-hidden transition-colors duration-500 hover:bg-[#0A0A0A]/40 w-full"
      >
        
        {/* Izquierda: Número y Título */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 lg:w-7/12 relative z-10">
          <span className="text-sm font-mono text-gray-600 group-hover:text-[#D4AF37] transition-colors duration-500 w-12">
            {service.id}.
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-300 group-hover:text-white transition-colors duration-500">
            {service.title}
          </h2>
        </div>
        
        {/* Derecha: Descripción y Flecha */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 lg:w-5/12 mt-6 lg:mt-0 relative z-10 pl-0 md:pl-24 lg:pl-0">
          <p className="text-sm font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed max-w-sm">
            {service.desc}
          </p>
          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] text-gray-600 group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

      </Link>
    </FadeIn>
  );
}

// COMPONENTE DE ANIMACIÓN (Fade In)
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}