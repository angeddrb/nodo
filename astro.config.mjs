// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nodo.pages.dev', // ← cámbialo por tu dominio final
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
