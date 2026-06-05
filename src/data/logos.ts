// Logos de proyectos como SVG crudo (blancos), indexados por slug.
//
// Cómo sumar un logo:
//   1. Guarda el SVG (relleno blanco) en src/assets/logos/<slug>.svg
//   2. Descomenta su import y su línea en el map de abajo.
// Si un slug no está acá, su card simplemente no muestra logo (no rompe nada).

import carpintero from '../assets/logos/carpintero.svg?raw';
import leCotonnier from '../assets/logos/le-cotonnier.svg?raw';
import ozCranberry from '../assets/logos/oz-cranberry-lab.svg?raw';

// --- Pendientes (agrega el SVG y descomenta) ---
// import bancoDeRopa from '../assets/logos/banco-de-ropa.svg?raw';
// import boilera from '../assets/logos/boilera.svg?raw';
// import urco from '../assets/logos/urco.svg?raw';
// import lucreciaFranzoy from '../assets/logos/lucrecia-franzoy.svg?raw';
// import caramba from '../assets/logos/caramba.svg?raw';
// import tiendaCopec from '../assets/logos/tienda-copec.svg?raw';
// import bodegasDonTito from '../assets/logos/bodegas-don-tito.svg?raw';
// import fundacionAclara from '../assets/logos/fundacion-aclara.svg?raw';
// import facetica from '../assets/logos/facetica.svg?raw';

export const logos: Record<string, string> = {
  'le-cotonnier': leCotonnier,
  'carpintero': carpintero,
  'oz-cranberry-lab': ozCranberry,
  // 'banco-de-ropa': bancoDeRopa,
  // 'boilera': boilera,
  // 'urco': urco,
  // 'lucrecia-franzoy': lucreciaFranzoy,
  // 'caramba': caramba,
  // 'tienda-copec': tiendaCopec,
  // 'bodegas-don-tito': bodegasDonTito,
  // 'fundacion-aclara': fundacionAclara,
  // 'facetica': facetica,
};
