import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

const isLibBuild = process.env.BUILD_MODE === 'lib';

const buildPostProcessPlugin = () => ({
  name: 'build-post-process',
  closeBundle: async () => {
    if (!isLibBuild) return;

    console.log('🔧 Пост-обработка сборки...');

    const libPath = resolve(__dirname, 'lib');

    const cssDir = resolve(libPath, 'css');
    const fontsDir = resolve(libPath, 'fonts');
    const distDir = resolve(libPath, 'dist');

    [cssDir, fontsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    const publicCssDir = resolve(__dirname, 'public/css');
    const publicFontsDir = resolve(__dirname, 'public/fonts');

    if (fs.existsSync(publicCssDir)) {
      fs.cpSync(publicCssDir, cssDir, { recursive: true });
      console.log('📋 Скопированы CSS файлы');
    }

    if (fs.existsSync(publicFontsDir)) {
      fs.cpSync(publicFontsDir, fontsDir, { recursive: true });
      console.log('📋 Скопированы шрифты');
    }

    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css') && f !== 'main.css');
    const viteGeneratedCss = cssFiles.find(f => f.includes('ds-2') || f.includes('index')) || cssFiles[0];

    if (viteGeneratedCss) {
      const oldPath = resolve(cssDir, viteGeneratedCss);
      const newPath = resolve(cssDir, 'style.css');

      if (fs.existsSync(oldPath)) {
        let cssContent = fs.readFileSync(oldPath, 'utf-8');

        cssContent = cssContent.replace(/@charset "UTF-8";\s*/g, '');
        cssContent = `@charset "UTF-8";\n${cssContent}`;

        fs.writeFileSync(newPath, cssContent);
        fs.unlinkSync(oldPath);
        console.log(`✅ Переименован ${viteGeneratedCss} → style.css`);
      }
    }

    const mainCssContent = `/* NLMK DS 2.0 Styles */
@import './style.css';
@import './tokens/old-colour-shadow.css';
@import './tokens/main-color-light.css';
@import './tokens/spacing.css';
@import './tokens/sizing.css';
@import './tokens/opacity.css';
@import './tokens/radius.css';
@import './temp-variables.css';
@import './tokens/main-typography.css';
@import './tokens/desktop/typo/main-typography.css';
@import './tokens/desktop/color/main-color-light.css';
@import './tokens/light-tokens.css';
@import './tokens/typography-tokens.css';
@import './dark-theme-storybook.css';
`;

    fs.writeFileSync(resolve(cssDir, 'main.css'), mainCssContent);
    console.log('✅ Создан main.css');

    const createdFiles = fs.readdirSync(libPath).filter(f => f.startsWith('index.') && f.endsWith('.js'));
    console.log('📁 Найдены файлы сборки:', createdFiles);

    fs.writeFileSync(resolve(libPath, 'index.js'), `export * from './index.es.js';\n`);

    createdFiles.forEach(filename => {
      const filePath = resolve(libPath, filename);

      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');

        if (filename !== 'index.js' && !content.includes("import './css/main.css'")) {
          const newContent = `import './css/main.css';\n\n${content}`;
          fs.writeFileSync(filePath, newContent);
          console.log(`✅ Добавлен CSS импорт в ${filename}`);
        }
      }
    });

    const dtsContent = `export * from './dist/index';\nexport type { ComponentProps } from 'react';\n`;
    fs.writeFileSync(resolve(libPath, 'index.d.ts'), dtsContent);

    const cssExports = `// CSS файлы библиотеки NLMK DS 2.0
export const mainCSS = './css/main.css';
export const stylesCSS = './css/style.css';
export const variablesCSS = './css/temp-variables.css';
export const darkThemeCSS = './css/dark-theme-storybook.css';
`;
    fs.writeFileSync(resolve(libPath, 'styles.js'), cssExports);

    if (fs.existsSync(distDir)) {
      fs.writeFileSync(resolve(distDir, 'package.json'), '{"sideEffects": false}\n');
      console.log('📦 Создан dist/package.json для tree-shaking');
    }

    console.log('🎉 Пост-обработка завершена!');
  }
});

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
            insertTypesEntry: true,
            compilerOptions: {
              skipLibCheck: true,
              emitDeclarationOnly: true
            }
          }),
          buildPostProcessPlugin()
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
