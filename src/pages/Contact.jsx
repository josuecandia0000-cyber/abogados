import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Gestoría y Licencias Comerciales',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Reemplaza este número con el WhatsApp oficial del despacho (Código de país + área + número sin espacios ni guiones)
    const whatsappNumber = "524422361702"; 

    // Formatear el mensaje institucional para WhatsApp
    const text = `*Nueva Consulta Jurídica - Sitio Web*%0A%0A` +
                 `*• Nombre / Representante:* ${formData.name}%0A` +
                 `*• Teléfono:* ${formData.phone}%0A` +
                 `*• Correo:* ${formData.email}%0A` +
                 `*• Materia de Interés:* ${formData.service}%0A%0A` +
                 `*• Síntesis del Asunto:*%0A${formData.message}`;

    // Abrir la API de WhatsApp con el mensaje prellenado
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  // URL para las indicaciones en Google Maps hacia Central Park
  const routeUrl = "https://www.google.com/maps/dir/?api=1&destination=Gestor%C3%ADa+Jur%C3%ADdica+Abogados+Central+Park+Quer%C3%A9taro&destination_place_id=ChIJ4VtM8_NF04URe0DeIIySVik";

  return (
    <section className="bg-[#030303] text-[#F5F5F5] py-32 px-6 md:px-24 border-t border-white/10 font-sans relative overflow-hidden">
      
      {/* Luz ambiental sutil de fondo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LADO IZQUIERDO: INFORMACIÓN INSTITUCIONAL, MAPA Y BOTÓN DE RUTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Tag y Línea Dorada */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase">Contacto Oficial</span>
                <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
              </div>

              {/* Titular Monumental */}
              <h2 className="text-4xl sm:text-6xl font-serif uppercase tracking-tight leading-[1.1] mb-6">
                Iniciar <br />
                <span className="italic text-transparent font-normal lowercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>
                  consulta.
                </span>
              </h2>

              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-10">
                Establezca contacto directo con nuestro equipo legal para evaluar las necesidades de su empresa, inmueble o asunto particular bajo absoluta confidencialidad.
              </p>
            </div>

            {/* Datos de Contacto y Ubicación */}
            <div className="flex flex-col gap-8 pt-8 border-t border-white/10">
              
              {/* Sede */}
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
                  SEDE CORPORATIVA
                </span>
                <h3 className="text-xl font-serif text-white mb-1">Central Park Querétaro Corporativo 1 Piso 8 letra C</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                  Av. Armando Birlain Shaffler 2001, Corporativo 1<br />
                  Centro Sur, 76090 Santiago de Querétaro, Qro.
                </p>

                {/* CONTENEDOR DEL MAPA */}
                <div className="relative w-full h-48 border border-white/10 overflow-hidden bg-[#060606] mb-4">
                  <iframe
                    title="Gestoría Jurídica Abogados - Central Park Querétaro"
                    src="https://maps.google.com/maps?q=Gestor%C3%ADa%20Jur%C3%ADdica%20Abogados%20Central%20Park%20Quer%C3%A9taro&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* BOTÓN DORADO DE NAVEGACIÓN GPS */}
                <motion.a
                  href={routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#D4AF37] text-black py-4 px-6 flex items-center justify-between transition-colors duration-300 group mt-2 font-semibold shadow-lg shadow-[#D4AF37]/10"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-black/70 tracking-[0.3em] uppercase mb-0.5 font-bold">
                      NAVEGACIÓN GPS
                    </span>
                    <span className="text-xs md:text-sm font-sans tracking-wide">
                      Obtener ruta desde mi ubicación
                    </span>
                  </div>
                  <span className="text-lg text-black transition-transform transform group-hover:translate-x-1 duration-300">
                    →
                  </span>
                </motion.a>
              </div>

              {/* Canales Directos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
                    LÍNEA DIRECTA
                  </span>
                  <a 
                    href="tel:+524422361702" 
                    className="text-lg font-serif text-white hover:text-[#D4AF37] transition-colors"
                  >
                    +52 (442) 236 1702
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
                    CORREO INSTITUCIONAL
                  </span>
                  <a 
                    href="mailto:abogados@gestoriajuridica.org" 
                    className="text-sm font-sans text-gray-300 hover:text-[#D4AF37] transition-colors underline underline-offset-4"
                  >
                    abogados@gestoriajuridica.org
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* LADO DERECHO: FORMULARIO CON REDIRECCIÓN A WHATSAPP */}
          <div className="lg:col-span-7 bg-[#060606] border border-white/10 p-8 sm:p-12 relative">
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <h3 className="text-xl font-serif text-white">Formulario de Atención Jurídica</h3>
              <span className="text-[10px] font-mono text-[#25D366] tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                WHATSAPP DIRECTO
              </span>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Nombre */}
                <div className="relative group">
                  <label className="text-[10px] font-mono text-gray-400 tracking-widest uppercase block mb-2">
                    Nombre o Representante Legal *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Lic. Alejandro Morales"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-700"
                  />
                </div>

                {/* Teléfono */}
                <div className="relative group">
                  <label className="text-[10px] font-mono text-gray-400 tracking-widest uppercase block mb-2">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej. 442 123 4567"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Correo Electrónico */}
                <div className="relative group">
                  <label className="text-[10px] font-mono text-gray-400 tracking-widest uppercase block mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="empresa@contacto.com"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-700"
                  />
                </div>

                {/* Selector de Servicio */}
                <div className="relative group">
                  <label className="text-[10px] font-mono text-gray-400 tracking-widest uppercase block mb-2">
                    Área o Materia de Interés *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#060606] border-b border-white/20 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <option value="Gestoría y Licencias Comerciales">Gestoría y Licencias Comerciales</option>
                    <option value="Derecho Condominal">Derecho Condominal</option>
                    <option value="Derecho Corporativo">Derecho Corporativo</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Derecho Notarial">Gestión Notarial</option>
                    <option value="Derecho Agrario">Derecho Agrario y Propiedad</option>
                    <option value="Derecho Penal">Derecho Penal</option>
                    <option value="Otra Consulta">Otra Consulta Especializada</option>
                  </select>
                </div>
              </div>

              {/* Mensaje o Contexto */}
              <div className="relative group">
                <label className="text-[10px] font-mono text-gray-400 tracking-widest uppercase block mb-2">
                  Síntesis del Asunto o Consulta *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describa brevemente la situación o los requerimientos de su trámite..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              {/* Botón de Envío a WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-gray-500">
                  * Sus datos están protegidos bajo estricto secreto profesional.
                </span>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto bg-[#25D366] text-black font-mono text-xs tracking-[0.2em] uppercase py-4 px-8 hover:bg-[#20ba5a] transition-colors duration-300 font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <span>Enviar a WhatsApp</span>
                  <span>→</span>
                </motion.button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}