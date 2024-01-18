import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  server: {
    open: true,
    port: 3000
  },
  define: {
    'process.env': process.env
  },
  plugins: [
    tsConfigPaths(),
    dts({
      tsConfigFilePath: './tsconfig.json',
      include: ['src/components']
    }),
    react({
      include: '**/*.{jsx,tsx}'
    })
  ]
});
