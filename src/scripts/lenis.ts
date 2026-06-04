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

  // Enlaces ancla → scroll suave con Lenis (respeta el header sticky de 76px)
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: id === '#top' ? 0 : -76 });
    });
  });

  return lenis;
}
