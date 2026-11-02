import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/celebration-in-a-box',
  integrations: [react(), tailwind()],
});
