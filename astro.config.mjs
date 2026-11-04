import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/CelebrationInABox_Website',
  integrations: [react(), tailwind()],
});
