/**
 * Rota la palabra destacada del titular (data-words="a|b|c") con un
 * crossfade vertical, y reajusta el ancho del subrayado lima a cada palabra.
 */
export function initRotatingWord(): void {
  const slot = document.querySelector<HTMLElement>('.swap');
  const word = slot?.querySelector<HTMLElement>('.swap-word');
  if (!slot || !word) return;

  const words = (slot.dataset.words || '')
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean);
  const list = words.length ? words : [word.textContent || ''];

  const fit = () => {
    slot.style.width = word.offsetWidth + 'px';
  };
  fit();
  window.addEventListener('resize', fit);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (list.length < 2) return;

  let i = 0;
  setInterval(() => {
    word.style.transition = 'opacity .26s ease, transform .26s ease';
    word.style.opacity = '0';
    word.style.transform = 'translateY(-46%)';

    setTimeout(() => {
      i = (i + 1) % list.length;
      word.textContent = list[i];
      word.style.transition = 'none';
      word.style.transform = 'translateY(46%)';
      slot.style.width = word.offsetWidth + 'px'; // el subrayado sigue el ancho
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          word.style.transition = 'opacity .3s ease, transform .3s ease';
          word.style.opacity = '1';
          word.style.transform = 'translateY(0)';
        }),
      );
    }, 270);
  }, 2600);
}
