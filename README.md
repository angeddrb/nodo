# Nodo · by Ange Díaz del Río

One page de marca personal. **Astro 6 + Tailwind v4 + Lenis** (smooth-scroll).
Diseño, orden y construcción digital.

## Requisitos
- Node.js 18+ (recomendado 20+)

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor local con HMR → http://localhost:4321
npm run build    # build de producción → /dist
npm run preview  # previsualiza el build
```

## Estructura

```
src/
├── assets/logos/        SVG de logos (nodo + proyectos), importados con ?raw
├── components/          Una pieza por sección
│   ├── Header.astro     Nav + botón WhatsApp
│   ├── Hero.astro       Titular con palabra rotativa
│   ├── Projects.astro   Grilla 4 col (intro + ProjectCard)
│   ├── ProjectCard.astro
│   ├── HowIWork.astro   Sección lima (4 pasos)
│   ├── Contact.astro
│   ├── Footer.astro
│   └── NodoLogo.astro
├── data/
│   ├── site.ts          WhatsApp + datos de marca (editar acá)
│   └── projects.ts      Lista de proyectos
├── layouts/Base.astro   <head>, fuentes, capa #bgfx, script cliente
├── pages/index.astro    Compone las secciones
├── scripts/             Efectos (TS), uno por archivo
│   ├── main.ts          orquesta todo
│   ├── lenis.ts         smooth-scroll
│   ├── bgMorph.ts       morph de fondo blanco↔lima + parallax
│   ├── rotatingWord.ts  palabra que rota en el hero
│   ├── reveal.ts        aparición al hacer scroll
│   └── header.ts
└── styles/global.css    Tokens de marca (@theme) + estilos custom
public/
├── projects/            Fotos de fondo de cada proyecto (reemplazables)
└── favicon.svg
```

## Cómo editar lo más común

- **Número de WhatsApp / datos de marca** → `src/data/site.ts`
- **Palabras que rotan en el hero** → array `rotating` en `src/components/Hero.astro`
- **Tamaño del logo** → regla `.brand svg { height: … }` en `src/styles/global.css`
- **Colores / fuentes** → bloque `@theme` en `src/styles/global.css`
  (ya disponibles como utilidades Tailwind: `bg-lime-300`, `text-dark`, `font-mono`…)
- **Proyectos** → `src/data/projects.ts`. Para uno nuevo: agrega su foto en
  `public/projects/`, su logo en `src/assets/logos/` y registra el slug en
  el mapa `logos` de `src/components/Projects.astro`.

> Nota: las fotos de proyectos vienen en baja resolución (export de Figma, 224×280).
> Para producción conviene exportarlas más grandes (~600×750 o el doble para retina)
> y, si quieres, pasarlas a `.webp`.

## Accesibilidad / movimiento
Todo respeta `prefers-reduced-motion`: con esa preferencia activa se desactivan
Lenis, la rotación de palabra y el parallax, y las apariciones quedan estáticas.

## Deploy en Cloudflare Pages

Es un sitio estático (`output: 'static'`), no necesita adaptador.

1. Sube el repo a GitHub.
2. En Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Configura el build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cada `git push` redeploya solo.

Recuerda actualizar `site` en `astro.config.mjs` con tu dominio final.
