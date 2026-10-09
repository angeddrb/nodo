// Proyectos de Nodo.
// Para sumar uno: agrega aquí su objeto (con un slug único), su imagen en
// /public/projects/bg-<slug>.png y su logo en src/assets/logos/<slug>.svg
// (registrándolo en src/data/logos.ts).

export type ProjectType = "shopify" | "webflow" | "codigo-ia";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: ProjectType; // define en qué filtro aparece
  href: string;
  image: string; // ruta pública: /projects/bg-<slug>.png
  badge?: string; // opcional; por defecto muestra la etiqueta del tipo
  year?: number; // año del proyecto
}

// Tipos disponibles para los filtros (orden = orden de los botones/chips).
export const PROJECT_TYPES = [
  { id: "shopify", label: "Shopify" },
  { id: "webflow", label: "Webflow" },
  { id: "codigo-ia", label: "Desarrollo" },
] as const;

export const typeLabel = (t: ProjectType) =>
  PROJECT_TYPES.find((x) => x.id === t)?.label ?? t;

// Proyectos que se muestran en la HOME, elegidos a mano.
// El orden de esta lista = el orden en que aparecen en la grilla.
// Para filas parejas de 4: (1 intro + N + 1 ver-más) múltiplo de 4 → N = 6 ó 10.
export const HOME_SLUGS: string[] = [
  "fuandes",
  "portis",
  "le-cotonnier",
  "oz-cranberry-lab",
  "fundacion-aclara",
  "urco",
];

const SUB = "Migración • Estructura • Rediseño";

export const projects: Project[] = [
  {
    slug: "fuandes",
    title: "Fundación Uandes",
    subtitle: "Diseño • Contenido • Desarrollo",
    type: "webflow",
    href: "https://fuandes.cl/",
    image: "/projects/bg-fuandes.png",
    year: 2026,
  },
  {
    slug: "portis",
    title: "Portis",
    subtitle: "Diseño • Estructura • Desarrollo",
    type: "shopify",
    href: "https://portis.cl/",
    image: "/projects/bg-portis.png",
    year: 2026,
  },
  {
    slug: "fundacion-aclara",
    title: "Fundación Aclara",
    subtitle: "Diseño • Estructura • Contenido • Desarrollo",
    type: "codigo-ia",
    href: "https://fundacionaclara.cl/",
    image: "/projects/bg-fundacion-aclara.png",
    year: 2026,
  },
  {
    slug: "le-cotonnier",
    title: "Le Cotonnier",
    subtitle: "Migración • Rediseño • Estructura",
    type: "shopify",
    href: "https://lecotonnier.cl/",
    image: "/projects/bg-le-cotonnier.png",
    year: 2026,
  },
  {
    slug: "bettership",
    title: "Bettership",
    subtitle: "Implementación • Desarrollo",
    type: "webflow",
    href: "https://bettership.health/",
    image: "/projects/bg-bettership.png",
    year: 2026,
  },
  {
    slug: "bodegas-don-tito",
    title: "Bodegas Don Tito",
    subtitle: "Implementación • Desarrollo",
    type: "webflow",
    href: "https://bodegasdontito.cl/",
    image: "/projects/bg-bodegas-don-tito.png",
    year: 2026,
  },
  {
    slug: "carpintero",
    title: "Carpintero",
    subtitle: "Implementación diseño personalizado",
    type: "shopify",
    href: "https://www.grupocarpintero.com/",
    image: "/projects/bg-carpintero.png",
    year: 2025,
  },
  {
    slug: "oz-cranberry-lab",
    title: "Oz Cranberry Lab",
    subtitle: "Rediseño • Estructura • Orden • Mantención",
    type: "shopify",
    href: "https://ozcranberry.com/",
    image: "/projects/bg-oz-cranberry-lab.png",
    year: 2025,
  },
  {
    slug: "banco-de-ropa",
    title: "Banco de Ropa",
    subtitle: "Diseño • Contenido • Estructura",
    type: "webflow",
    href: "https://www.bancoderopa.cl/",
    image: "/projects/bg-banco-de-ropa.png",
    year: 2025,
  },
  {
    slug: "zeiva",
    title: "Zeiva",
    subtitle: "Diseño • Estructura",
    type: "shopify",
    href: "https://zeiva.cl/",
    image: "/projects/bg-zeiva.png",
    year: 2025,
  },
  {
    slug: "boilera",
    title: "Boilera",
    subtitle: "Diseño • Personalización producto",
    type: "shopify",
    href: "https://boilera.cl/",
    image: "/projects/bg-boilera.png",
    year: 2024,
  },
  {
    slug: "caramba",
    title: "Caramba",
    subtitle: "Migración • Diseño • Estructura",
    type: "shopify",
    href: "https://caramba.cl/",
    image: "/projects/bg-caramba.png",
    year: 2020,
  },
  {
    slug: "lucrecia-franzoy",
    title: "Lucrecia Franzoy",
    subtitle: "Diseño • Estructura",
    type: "shopify",
    href: "https://lucreciafranzoy.cl/",
    image: "/projects/bg-lucrecia-franzoy.png",
    year: 2020,
  },
  {
    slug: "tienda-copec",
    title: "Tienda Copec",
    subtitle: "Implementación para lanzamiento",
    type: "shopify",
    href: "https://www.tiendacopec.cl/",
    image: "/projects/bg-tienda-copec.png",
    year: 2020,
  },
  {
    slug: "urco",
    title: "Urco",
    subtitle: "Diseño • Estructura",
    type: "shopify",
    href: "https://www.urco.cl/",
    image: "/projects/bg-urco.png",
    year: 2019,
  },
];

// Proyectos seleccionados para la HOME, en el orden de HOME_SLUGS.
// Si un slug no existe en `projects`, se ignora (útil al renombrar).
export const homeProjects: Project[] = HOME_SLUGS.map((slug) =>
  projects.find((p) => p.slug === slug),
).filter((p): p is Project => Boolean(p));
