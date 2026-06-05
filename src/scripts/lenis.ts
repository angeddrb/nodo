import Lenis from 'lenis';

/**
 * Inicializa Lenis (smooth-scroll). Devuelve la instancia, o null si el
 * usuario pidió reducir movimiento (en ese caso usamos el scroll nativo).
 */
export function initLenis(): Lenis | null {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return null;

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Enlaces ancla → scroll suave con Lenis (respeta el header de 76px).
  // Soporta "#id" y "/#id" (este último navega entre páginas si hace falta).
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      const i = href.indexOf('#');
      if (i < 0) return;
      const id = href.slice(i); // "#que-hago"
      const path = href.slice(0, i); // "" | "/" | "/otra"
      const samePage = path === '' || path === location.pathname || (path === '/' && location.pathname === '/');
      if (!samePage) return; // dejar que el navegador cambie de página
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: id === '#top' ? 0 : -76 });
    });
  });

  return lenis;
}
