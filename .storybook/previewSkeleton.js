import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

// Render the DS component once when preparing the HTML, before preview JS is available.
export async function renderPreviewSkeleton() {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const vite = await createServer({
    root,
    configFile: false,
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true },
    resolve: { alias: { '@components': fileURLToPath(new URL('../src/components', import.meta.url)) } }
  });
  try {
    const [{ default: PreviewSkeleton }, { default: layout }, { default: bars }] = await Promise.all([
      vite.ssrLoadModule('/src/components/_storybook/PreviewSkeleton.tsx'),
      vite.ssrLoadModule('/src/components/_storybook/PreviewSkeleton.module.scss?inline'),
      vite.ssrLoadModule('/src/components/SkeletonLoader/SkeletonLoader.module.scss?inline')
    ]);
    const markup = ['component', 'docs', 'table']
      .map(kind => renderToStaticMarkup(createElement(PreviewSkeleton, { kind })))
      .join('');
    return `<style>${bars}${layout}</style><div id="preview-loading">${markup}</div>`;
  } finally {
    await vite.close();
  }
}
