import { initLenis } from './lenis';
import { initHeader } from './header';
import { initReveal } from './reveal';
import { initRotatingWord } from './rotatingWord';
import { initBgMorph } from './bgMorph';

const lenis = initLenis();
initHeader();
initReveal();
initRotatingWord();
initBgMorph(lenis);
