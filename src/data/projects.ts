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
}

// Tipos disponibles para los filtros (orden = orden de los botones/chips).
export const PROJECT_TYPES = [
  { id: "shopify", label: "Shopify" },
  { id: "webflow", label: "Webflow" },
  { id: "codigo-ia", label: "Código + IA" },
] as const;

export const typeLabel = (t: ProjectType) =>
  PROJECT_TYPES.find((x) => x.id === t)?.label ?? t;

// Cuántos proyectos mostrar en la HOME antes de la card "Ver más".
// Para filas parejas de 4: (1 intro + N + 1 ver-más) múltiplo de 4 → N = 6 ó 10.
export const HOME_LIMIT = 6;

const SUB = "Migración • Estructura • Rediseño";

export const projects: Project[] = [
  {
    slug: "le-cotonnier",
    title: "Le Cotonnier",
    subtitle: "Migración • Rediseño • Estructura",
    type: "shopify",
    href: "https://lecotonnier.cl/",
    image: "/projects/bg-le-cotonnier.png",
  },
  {
    slug: "carpintero",
    title: "Carpintero",
    subtitle: "Implementación diseño personalizado",
    type: "shopify",
    href: "https://www.grupocarpintero.com/",
    image: "/projects/bg-carpintero.png",
  },
  {
    slug: "oz-cranberry-lab",
    title: "Oz Cranberry Lab",
    subtitle: "Rediseño • Estructura • Orden",
    type: "shopify",
    href: "https://ozcranberry.com/",
    image: "/projects/bg-oz-cranberry-lab.png",
  },
  {
    slug: "banco-de-ropa",
    title: "Banco de Ropa",
    subtitle: "Diseño • Contenido • Estructura",
    type: "webflow",
    href: "https://www.bancoderopa.cl/",
    image: "/projects/bg-banco-de-ropa.png",
  },
  {
    slug: "boilera",
    title: "Boilera",
    subtitle: "Diseño • Personalización producto",
    type: "shopify",
    href: "https://boilera.cl/",
    image: "/projects/bg-boilera.png",
  },
  {
    slug: "urco",
    title: "Urco",
    subtitle: "Diseño • Estructura",
    type: "shopify",
    href: "https://www.urco.cl/",
    image: "/projects/bg-urco.png",
  },
  {
    slug: "lucrecia-franzoy",
    title: "Lucrecia Franzoy",
    subtitle: "Diseño • Estructura",
    type: "shopify",
    href: "https://lucreciafranzoy.cl/",
    image: "/projects/bg-lucrecia-franzoy.png",
  },
  {
    slug: "caramba",
    title: "Caramba",
    subtitle: "Migración • Diseño • Estructura",
    type: "shopify",
    href: "https://caramba.cl/",
    image: "/projects/bg-caramba.png",
  },
  {
    slug: "bodegas-don-tito",
    title: "Bodegas Don Tito",
    subtitle: "Diseño • Estructura",
    type: "webflow",
    href: "https://bodegasdontito.cl/",
    image: "/projects/bg-bodegas-don-tito.png",
  },
  {
    slug: "tienda-copec",
    title: "Tienda Copec",
    subtitle: "Implementación para lanzamiento",
    type: "shopify",
    href: "https://www.tiendacopec.cl/",
    image: "/projects/bg-tienda-copec.png",
  },
  {
    slug: "zeiva",
    title: "Zeiva",
    subtitle: "Diseño • Estructura",
    type: "shopify",
    href: "https://zeiva.cl/",
    image: "/projects/bg-zeiva.png",
  },
  {
    slug: "fundacion-aclara",
    title: "Fundación Aclara",
    subtitle: " En proceso • Diseño • Estructura • Contenido • Desarrollo",
    type: "codigo-ia",
    href: "https://fundacionaclara.cl/",
    image: "/projects/bg-fundacion-aclara.png",
  },
  {
    slug: "facetica",
    title: "Facetica",
    subtitle: "Ajustes visuales",
    type: "codigo-ia",
    href: "https://facetica.com/",
    image: "/projects/bg-facetica.png",
  },
];
