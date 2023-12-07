import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  server: {
    open: true,
    port: 3000
  },
  plugins: [
    tsConfigPaths(),
    dts({
      tsConfigFilePath: '../tsconfig.json',
      include: ['src/components']
    }),
    react({
      include: '**/*.{jsx,tsx}'
    })
  ]
});
