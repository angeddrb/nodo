// Proyectos seleccionados.
// Para sumar uno nuevo: agrega su imagen en /public/projects, su logo en
// src/assets/logos (SVG, idealmente blanco) y registra el slug en Projects.astro.
export interface Project {
  slug: 'carpintero' | 'le-cotonnier' | 'oz-cranberry-lab' | 'urco' | 'banco-de-ropa' | 'boilera';
  title: string;
  subtitle: string;
  badge: string;
  href: string;
  image: string; // ruta pública (carpeta /public)
}

export const projects: Project[] = [
   {
    slug: 'le-cotonnier',
    title: 'Le Cotonnier',
    subtitle: 'Migración • Estructura • Rediseño',
    badge: 'Shopify',
    href: 'https://lecotonnier.cl/',
    image: '/projects/bg-le-cotonnier.png',
  },
  {
    slug: 'carpintero',
    title: 'Carpintero',
    subtitle: 'Diseño a medida',
    badge: 'Shopify',
    href: 'https://www.grupocarpintero.com/',
    image: '/projects/bg-carpintero.png',
  },
  {
    slug: 'oz-cranberry-lab',
    title: 'Oz Cranberry Lab',
    subtitle: 'Orden • Rediseño',
    badge: 'Shopify',
    href: 'https://ozcranberry.com/',
    image: '/projects/bg-oz-cranberry-lab.png',
  },
    {
    slug: 'banco-de-ropa',
    title: 'Banco de Ropa',
    subtitle: 'Diseño • Estructura • Implementación',
    badge: 'Webflow',
    href: 'https://bancoderopa.cl/',
    image: '/projects/bg-banco-de-ropa.png',
  },
  {
    slug: 'boilera',
    title: 'Boilera',
    subtitle: 'App presonalizada',
    badge: 'Shopify',
    href: 'https://boilera.cl/',
    image: '/projects/bg-boilera.png',
  },
   {
    slug: 'urco',
    title: 'Urco',
    subtitle: 'Diseño • Estructura • Implementación',
    badge: 'Shopify',
    href: 'https://www.urco.cl/',
    image: '/projects/bg-urco.png',
  },
];
