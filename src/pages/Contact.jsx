import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const location = useLocation();
  // Recupera el tema (ej. "Auditoría sobre Póliza Jurídica") si el usuario viene de otra página
  const predefinedSubject = location.state?.subject || location.state?.selectedService || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: predefinedSubject,
    message: ''
  });

  // Si el tema predefinido cambia (por navegación interna), actualiza el estado
  useEffect(() => {
    if (predefinedSubject) {
      setFormData(prev => ({ ...prev, subject: predefinedSubject }));
    }
  }, [predefinedSubject]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo (ej. con emailjs, fetch a tu backend en PHP, etc.)
    console.log("Datos enviados:", formData);
    alert("Solicitud de audiencia enviada con éxito. Un socio se comunicará a la brevedad.");
  };

  return (
    <div className="bg-[#030303] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* ESPACIADOR PARA EL NAVBAR */}
      <div className="h-32"></div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-24 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN DE LA SEDE Y AUTORIDAD */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
                <span className="uppercase text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold">
                  Acceso Restringido
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] mb-8">
                Agendar <br />
                <span className="italic text-gray-500">Audiencia.</span>
              </h1>
              <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
                Las crisis corporativas requieren atención inmediata. Inicie un diálogo confidencial con nuestros socios directores para evaluar su exposición al riesgo.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20 lg:mt-32">
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-10 border-t border-white/5 pt-10">
                
                {/* Bloque de Sede */}
                <div>
                  <h3 className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-4">Sede Principal</h3>
                  <p className="text-2xl font-serif text-white mb-2">Torre Mayor, Piso 42</p>
                  <p className="text-gray-500 font-light text-sm">Paseo de la Reforma 505,<br />Ciudad de México, CDMX 06500</p>
                </div>

                {/* Bloque de Contacto Directo */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mb-2">Canal Ejecutivo</h3>
                  <a href="mailto:estrategia@lexcorp.com" className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors">
                    estrategia@lexcorp.com
                  </a>
                  <p className="text-gray-500 font-light text-sm mt-1">+52 (55) 9876 5432</p>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO ALTA COSTURA */}
        <div className="lg:col-span-7 mt-10 lg:mt-0">
          <FadeIn delay={0.3}>
            <div className="bg-[#050505] border border-white/5 p-8 md:p-16">
              
              <h2 className="text-2xl font-serif text-white mb-10">
                Formulario de Enlace Seguro
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Input: Nombre */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nombre del Representante *" 
                      className="w-full bg-transparent border-b border-gray-800 pb-4 focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-600 transition-colors peer" 
                    />
                    {/* Línea animada dorada al hacer focus */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 peer-focus:w-full"></span>
                  </div>

                  {/* Input: Empresa */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Corporación / Entidad" 
                      className="w-full bg-transparent border-b border-gray-800 pb-4 focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-600 transition-colors peer" 
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 peer-focus:w-full"></span>
                  </div>
                </div>

                {/* Input: Correo */}
                <div className="relative group">
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo Corporativo Seguro *" 
                    className="w-full bg-transparent border-b border-gray-800 pb-4 focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-600 transition-colors peer" 
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 peer-focus:w-full"></span>
                </div>

                {/* Input: Asunto (Pre-llenado si viene de otra página) */}
                <div className="relative group">
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Naturaleza de la Consulta" 
                    className="w-full bg-transparent border-b border-gray-800 pb-4 focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-600 transition-colors peer" 
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 peer-focus:w-full"></span>
                </div>

                {/* Input: Mensaje */}
                <div className="relative group">
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Contexto preliminar (Omita detalles ultra-confidenciales hasta la reunión) *" 
                    className="w-full bg-transparent border-b border-gray-800 pb-4 focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-600 transition-colors resize-none peer"
                  ></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 peer-focus:w-full"></span>
                </div>

                {/* Botón de Envío (CTA) */}
                <button 
                  type="submit" 
                  className="group relative overflow-hidden bg-white text-black self-start mt-4"
                >
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                  <span className="relative z-10 px-12 py-5 block text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors duration-300">
                    Enviar Solicitud
                  </span>
                </button>

              </form>

            </div>
          </FadeIn>
        </div>

      </div>
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