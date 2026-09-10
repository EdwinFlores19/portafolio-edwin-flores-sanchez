import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://edwinflores19.github.io',
  base: '/',
  build: {
    format: 'directory'
  }
});
