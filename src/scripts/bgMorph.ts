import type Lenis from 'lenis';

/**
 * Morph de color de fondo blanco <-> lima ligado al scroll (estilo Gehl),
 * suavizado con requestAnimationFrame, más un parallax sutil de los blobs.
 * Si `lenis` existe, se sincroniza con su evento de scroll; si no, usa el nativo.
 */
export function initBgMorph(lenis: Lenis | null): void {
  const work = document.getElementById('como-trabajo');
  const root = document.documentElement;
  const blobs = document.querySelector<HTMLElement>('.blobs');
  if (!work) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WHITE: [number, number, number] = [255, 255, 255];
  const LIME: [number, number, number] = [229, 255, 60]; // #E5FF3C

  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
  const mix = (t: number) =>
    `rgb(${lerp(WHITE[0], LIME[0], t)},${lerp(WHITE[1], LIME[1], t)},${lerp(WHITE[2], LIME[2], t)})`;

  let target = 0;
  let cur = 0;
  let ticking = false;
  let pRaf = false;

  function computeTarget() {
    const r = work!.getBoundingClientRect();
    const vh = window.innerHeight;
    const mid = vh * 0.5;
    const ramp = vh * 0.35;
    const entry = clamp((mid - r.top) / ramp); // sube cuando el borde superior pasa el centro
    const exit = clamp((r.bottom - mid) / ramp); // baja cuando el borde inferior pasa el centro
    target = Math.min(entry, exit); // lima solo cuando la sección "manda" en pantalla
  }

  function frame() {
    cur += (target - cur) * 0.09; // seguimiento suavizado → mantequilla
    if (Math.abs(target - cur) < 0.001) cur = target;
    root.style.setProperty('--page-bg', mix(cur));
    root.classList.toggle('is-lime', cur > 0.5); // fase lima (invierte el botón del header)
    if (Math.abs(target - cur) > 0.0005) requestAnimationFrame(frame);
    else ticking = false;
  }

  function parallax(scroll: number) {
    pRaf = false;
    if (blobs && !reduce) blobs.style.transform = `translateY(${scroll * 0.18}px)`;
  }

  function onScroll(scroll: number) {
    computeTarget();
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(frame);
    }
    if (!pRaf) {
      pRaf = true;
      requestAnimationFrame(() => parallax(scroll));
    }
  }

  computeTarget();
  cur = target;
  root.style.setProperty('--page-bg', mix(cur));

  if (lenis) {
    lenis.on('scroll', (e: { scroll: number }) => onScroll(e.scroll ?? window.scrollY));
  } else {
    window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  }
  window.addEventListener('resize', () => onScroll(window.scrollY));
}
