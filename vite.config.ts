import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

const isLibBuild = process.env.BUILD_MODE === 'lib';

export default defineConfig({
  // Настройки для режима разработки
  root: isLibBuild ? undefined : 'src',
  publicDir: isLibBuild ? 'public' : '../public',
  
  server: {
    open: true,
    port: 3000
  },
  
  define: {
    'process.env': process.env
  },
  
  // Настройки сборки (только для библиотеки)
  ...(isLibBuild && {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/components/index.ts'),
        name: 'NLMKDS',
        fileName: (format) => `index.${format}.js`,
      },
      outDir: 'lib',
      rollupOptions: {
        external: [
          'react', 
          'react-dom', 
          'react-is', 
          'react-popper', 
          'react-tooltip', 
          'react-transition-group', 
          'react-beautiful-dnd', 
          'date-fns', 
          'rc-tree'
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-is': 'ReactIs',
            'react-popper': 'ReactPopper',
            'react-tooltip': 'ReactTooltip',
            'react-transition-group': 'ReactTransitionGroup',
            'react-beautiful-dnd': 'ReactBeautifulDnd',
            'date-fns': 'DateFns',
            'rc-tree': 'RcTree'
          },
          assetFileNames: 'css/[name][extname]'
        },
      },
    }
  }),
  
  plugins: [
    tsConfigPaths(),
    ...(isLibBuild ? [
      dts({
        tsconfigPath: './tsconfig.json',
        include: ['src/components'],
        // Чтобы избежать зависания
        rollupTypes: false,
        // Простой вывод типов вместо бандлинга через rollup
        bundledPackages: [],
        compilerOptions: {
          skipLibCheck: true,
          emitDeclarationOnly: true
        }
      })
    ] : []),
    react({
      include: '**/*.{jsx,tsx}'
    }),
    svgr({
      include: '**/*.svg'
    })
  ]
});