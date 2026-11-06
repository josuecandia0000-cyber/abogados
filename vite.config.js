import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Plugin para clonar index.html para las rutas de servicios en servidores estáticos
function spaFallbackPlugin() {
  return {
    name: 'spa-fallback-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        const htmlContent = fs.readFileSync(indexPath, 'utf-8');
        
        // Lista exacta de los slugs de tus servicios para que tengan su carpeta y archivo físico
        const services = [
          'gestion-notarial',
          'licencias-de-alcohol',
          'licencias-de-funcionamiento',
          'defensa-civil-patrimonial',
          'derecho-mercantil-cobranza',
          'derecho-familiar',
          'proteccion-derechos-defensa',
          'derecho-laboral-integral',
          'derecho-condominal',
          'derecho-agrario-regularizacion',
          'gestion-notarial'
        ];

        // Crear carpeta y archivo index.html para cada ruta de servicio
        services.forEach(slug => {
          const serviceDir = path.join(distDir, 'servicios', slug);
          fs.mkdirSync(serviceDir, { recursive: true });
          fs.writeFileSync(path.join(serviceDir, 'index.html'), htmlContent);
        });

        // Crear también la carpeta general de servicios
        const servicesRoot = path.join(distDir, 'servicios');
        fs.mkdirSync(servicesRoot, { recursive: true });
        fs.writeFileSync(path.join(servicesRoot, 'index.html'), htmlContent);
        
        // Copiar también como 404.html principal
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