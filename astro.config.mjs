import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Detección automática para despliegue en GitHub Pages o entorno local
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'PORTAFOLIO-EDWIN-FLORES';

// Si corre en GitHub Actions sin dominio personalizado, asigna el subpath del repositorio
const base = process.env.BASE_URL 
  ? process.env.BASE_URL 
  : (isGitHubActions ? `/${repoName}/` : '/');

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://edwinflores19.github.io',
  base: base,
  build: {
    format: 'directory'
  }
});
