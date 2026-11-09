import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Plugin para clonar index.html correctamente según la estructura de rutas
function spaFallbackPlugin() {
  return {
    name: 'spa-fallback-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        const htmlContent = fs.readFileSync(indexPath, 'utf-8');
        
        // 1. Slugs que van dentro de /servicios/
        const serviceSlugs = [
          'gestion-notarial',
          'licencias-de-alcohol',
          'licencias-de-funcionamiento',
          'defensa-civil-patrimonial',
          'derecho-mercantil-cobranza',
          'derecho-familiar',
          'proteccion-derechos-defensa',
          'derecho-laboral-integral',
          'derecho-condominal',
          'derecho-agrario-regularizacion'
        ];

        // Crear carpeta y archivo index.html para cada SERVICIO
        const servicesRoot = path.join(distDir, 'servicios');
        fs.mkdirSync(servicesRoot, { recursive: true });
        // Crear también el index.html de la página general /servicios
        fs.writeFileSync(path.join(servicesRoot, 'index.html'), htmlContent);

        serviceSlugs.forEach(slug => {
          const serviceDir = path.join(servicesRoot, slug);
          fs.mkdirSync(serviceDir, { recursive: true });
          fs.writeFileSync(path.join(serviceDir, 'index.html'), htmlContent);
        });

        // 2. Páginas principales que van DIRECTAS en la raíz (ej. /contacto, /firma)
        const rootPages = [
          'contacto',
          'firma',
          'firmacambios'
        ];

        rootPages.forEach(page => {
          const pageDir = path.join(distDir, page);
          fs.mkdirSync(pageDir, { recursive: true });
          fs.writeFileSync(path.join(pageDir, 'index.html'), htmlContent);
        });
        
        // Copiar también como 404.html principal de respaldo
        fs.writeFileSync(path.join(distDir, '404.html'), htmlContent);
      }
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallbackPlugin()
  ],
})