// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://armandrenoust.fr', // <--- INDISPENSABLE pour le SEO et Sitemap
  integrations: [sitemap()]
});