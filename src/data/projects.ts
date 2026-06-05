// Proyectos de Nodo.
// Para sumar uno: agrega aquí su objeto (con un slug único), su imagen en
// /public/projects/bg-<slug>.png y su logo en src/assets/logos/<slug>.svg
// (registrándolo en src/data/logos.ts).

export type ProjectType = 'shopify' | 'webflow' | 'codigo-ia';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: ProjectType;   // define en qué filtro aparece
  href: string;
  image: string;       // ruta pública: /projects/bg-<slug>.png
  badge?: string;      // opcional; por defecto muestra la etiqueta del tipo
}

// Tipos disponibles para los filtros (orden = orden de los botones/chips).
export const PROJECT_TYPES = [
  { id: 'shopify', label: 'Shopify' },
  { id: 'webflow', label: 'Webflow' },
  { id: 'codigo-ia', label: 'Código + IA' },
] as const;

export const typeLabel = (t: ProjectType) =>
  PROJECT_TYPES.find((x) => x.id === t)?.label ?? t;

// Cuántos proyectos mostrar en la HOME antes de la card "Ver más".
// Para filas parejas de 4: (1 intro + N + 1 ver-más) múltiplo de 4 → N = 6 ó 10.
export const HOME_LIMIT = 6;

const SUB = 'Migración • Estructura • Rediseño';

export const projects: Project[] = [
  { slug: 'le-cotonnier',     title: 'Le Cotonnier',     subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-le-cotonnier.png' },
  { slug: 'carpintero',       title: 'Carpintero',       subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-carpintero.png' },
  { slug: 'oz-cranberry-lab', title: 'Oz Cranberry Lab', subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-oz-cranberry-lab.png' },
  { slug: 'banco-de-ropa',    title: 'Banco de Ropa',    subtitle: SUB, type: 'webflow',   href: '#', image: '/projects/bg-banco-de-ropa.png' },
  { slug: 'boilera',          title: 'Boilera',          subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-boilera.png' },
  { slug: 'urco',             title: 'Urco',             subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-urco.png' },
  { slug: 'lucrecia-franzoy', title: 'Lucrecia Franzoy', subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-lucrecia-franzoy.png' },
  { slug: 'caramba',          title: 'Caramba',          subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-caramba.png' },
  { slug: 'tienda-copec',     title: 'Tienda Copec',     subtitle: SUB, type: 'shopify',   href: '#', image: '/projects/bg-tienda-copec.png' },
  { slug: 'bodegas-don-tito', title: 'Bodegas Don Tito', subtitle: SUB, type: 'webflow',   href: '#', image: '/projects/bg-bodegas-don-tito.png' },
  { slug: 'fundacion-aclara', title: 'Fundación Aclara', subtitle: SUB, type: 'codigo-ia', href: '#', image: '/projects/bg-fundacion-aclara.png' },
  { slug: 'facetica',         title: 'Facetica',         subtitle: SUB, type: 'codigo-ia', href: '#', image: '/projects/bg-facetica.png' },
];
