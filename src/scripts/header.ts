/** Añade un borde sutil al header al hacer scroll. */
export function initHeader(): void {
  const header = document.querySelector('header.site');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}
