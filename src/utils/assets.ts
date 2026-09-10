/**
 * Resuelve rutas de assets estáticos de forma dinámica.
 * Funciona tanto en desarrollo local (base: '/') como en GitHub Pages (base: '/PORTAFOLIO-EDWIN-FLORES/')
 * o si en el futuro se configura un dominio personalizado (base: '/').
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
