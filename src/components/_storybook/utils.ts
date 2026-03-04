export const getStorybookImageSrc = (path: string): string => {
  const { origin, pathname } = window.parent.location;
  const base = pathname === '/' ? '' : pathname;
  return `${origin}${base}${path}`;
};
