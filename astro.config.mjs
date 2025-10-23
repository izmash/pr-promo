import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: '/pr-promo/',
  integrations: [tailwind()],
  site: 'https://izmash.github.io',
});
