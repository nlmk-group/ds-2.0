import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

const isLibBuild = process.env.BUILD_MODE === 'lib';

export default defineConfig({
  root: isLibBuild ? undefined : 'src',
  publicDir: isLibBuild ? false : '../public',

  server: {
    open: true,
    port: 3000
  },

  define: {
    'process.env': process.env
  },

  ...(isLibBuild && {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/components/index.ts'),
        name: 'NLMKDS',
        fileName: format => `index.${format}.js`,
        formats: ['es', 'umd']
      },
      outDir: 'lib',
      rollupOptions: {
        external: id => {
          if (['react', 'react-dom'].includes(id)) return true;
          return /(_stories|\.stories\.|_storybook|\.test\.|__tests__)/.test(id);
        },
        output: {
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
          },
          assetFileNames: 'css/[name][extname]'
        }
      }
    }
  }),

  plugins: [
    tsConfigPaths(),
    ...(isLibBuild
      ? [
          dts({
            tsconfigPath: './tsconfig.json',
            include: ['src/components/**/*'],
            exclude: [
              'src/components/**/_stories/**/*',
              'src/components/**/*.stories.*',
              'src/components/**/*.test.*',
              'src/components/_storybook/**/*', 
              'src/stories/**/*',
              'src/**/__tests__/**/*'
            ],
            outDir: 'lib/dist',
            rollupTypes: false,
            bundledPackages: [],
            compilerOptions: {
              skipLibCheck: true,
              emitDeclarationOnly: true
            }
          })
        ]
      : []),
    react({
      include: '**/*.{jsx,tsx}',
      exclude: ['**/_stories/**/*', '**/*.stories.*', '**/_storybook/**/*', '**/*.test.*', '**/__tests__/**/*']
    }),
    svgr({
      include: '**/*.svg'
    })
  ]
});
