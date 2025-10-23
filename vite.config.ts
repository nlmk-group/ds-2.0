import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

const isLibBuild = process.env.BUILD_MODE === 'lib';

/**
 * Получение размера директории в байтах
 */
const getDirectorySize = (dirPath: string): number => {
  let totalSize = 0;

  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = resolve(dirPath, file.name);

    if (file.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += fs.statSync(filePath).size;
    }
  }

  return totalSize;
};

/**
 * Форматирование размера в человекочитаемый формат
 */
const formatSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

/**
 * Пост-обработка сборки:
 * - Копирование CSS токенов и шрифтов
 * - Создание package.json для tree-shaking
 * - Подсчет размера пакета
 */
const buildPostProcessPlugin = () => ({
  name: 'build-post-process',
  closeBundle: async () => {
    if (!isLibBuild) return;

    console.log('\n🔧 Пост-обработка сборки...\n');

    const libPath = resolve(__dirname, 'lib');
    const cssDir = resolve(libPath, 'css');
    const fontsDir = resolve(libPath, 'fonts');

    [cssDir, fontsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    const publicCssDir = resolve(__dirname, 'public/css');
    if (fs.existsSync(publicCssDir)) {
      fs.cpSync(publicCssDir, cssDir, { recursive: true });
    }

    const publicFontsDir = resolve(__dirname, 'public/fonts');
    if (fs.existsSync(publicFontsDir)) {
      fs.cpSync(publicFontsDir, fontsDir, { recursive: true });
    }

    const mainCssContent = `/* NLMK DS 2.0 Tokens */
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
    console.log('✅ Создан main.css с токенами (CSS модули инжектируются автоматически)');

    const packageJson = {
      type: 'module',
      sideEffects: [
        './css/**/*.css',
        './index.js'
      ],
      exports: {
        '.': {
          import: './index.js',
          types: './index.d.ts'
        },
        './css/main.css': './css/main.css',
        './fonts/*': './fonts/*'
      }
    };

    fs.writeFileSync(resolve(libPath, 'package.json'), JSON.stringify(packageJson, null, 2));

    const cssExports = `// CSS файлы библиотеки NLMK DS 2.0
// CSS модули компонентов инжектируются автоматически
// Токены можно импортировать отдельно при необходимости
export const mainCSS = './css/main.css';
export const variablesCSS = './css/temp-variables.css';
export const darkThemeCSS = './css/dark-theme-storybook.css';
`;
    fs.writeFileSync(resolve(libPath, 'styles.js'), cssExports);

    const indexJsPath = resolve(libPath, 'index.js');
    if (fs.existsSync(indexJsPath)) {
      let indexContent = fs.readFileSync(indexJsPath, 'utf-8');
      
      if (!indexContent.includes("import './css/main.css'")) {
        indexContent = `import './css/main.css';\n\n${indexContent}`;
        fs.writeFileSync(indexJsPath, indexContent);
        console.log('✅ Добавлен импорт токенов в index.js');
      }
    }

    const totalSize = getDirectorySize(libPath);
    const cssSize = fs.existsSync(cssDir) ? getDirectorySize(cssDir) : 0;
    const fontsSize = fs.existsSync(fontsDir) ? getDirectorySize(fontsDir) : 0;

    const componentDirs = fs
      .readdirSync(libPath, { withFileTypes: true })
      .filter(
        item =>
          item.isDirectory() &&
          !['css', 'fonts', 'declaration', 'utils'].includes(item.name) &&
          !item.name.startsWith('.')
      );

    const componentSizes = componentDirs
      .map(dir => {
        const dirPath = resolve(libPath, dir.name);
        const size = getDirectorySize(dirPath);
        return { name: dir.name, size };
      })
      .sort((a, b) => b.size - a.size); // Сортируем по размеру (от большего к меньшему)

    const componentsSize = componentSizes.reduce((sum, comp) => sum + comp.size, 0);

    console.log('📦 Статистика сборки:\n');
    console.log('📂 Компоненты:');
    componentSizes.forEach(comp => {
      console.log(`   ${comp.name.padEnd(25)} ${formatSize(comp.size).padStart(10)}`);
    });
    console.log(`\n   Итого компонентов (${componentDirs.length} шт): ${formatSize(componentsSize)}`);
    console.log(`   CSS токены: ${formatSize(cssSize)}`);
    console.log(`   Шрифты: ${formatSize(fontsSize)}`);
    console.log(`   ─────────────────────────────`);
    console.log(`   Общий размер: ${formatSize(totalSize)}`);
    console.log('\n✅ Сборка завершена!\n');
  }
});

export default defineConfig({
  root: isLibBuild ? undefined : 'src',
  publicDir: isLibBuild ? false : '../public',
  logLevel: isLibBuild ? 'warn' : 'info',

  server: {
    open: true,
    port: 3000
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },

  ...(isLibBuild && {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/components/index.ts'),
        formats: ['es'],
        fileName: () => '[name].js'
      },
      outDir: 'lib',
      sourcemap: true,
      minify: false,
      rollupOptions: {
        external: id => {
          if (['react', 'react-dom', 'react/jsx-runtime'].includes(id)) return true;
          if (id.startsWith('react/') || id.startsWith('react-dom/')) return true;
          if (id.includes('node_modules') && !id.includes('.module.scss')) return true;
          return /(_stories|\.stories\.|_storybook|\.test\.|__tests__)/.test(id);
        },
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src/components',
          entryFileNames: chunkInfo => {
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name?.endsWith('.css')) {
              return '[name][extname]';
            }
            return 'assets/[name][extname]';
          },
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime'
          }
        }
      },
      cssCodeSplit: true,
      cssMinify: false
    }
  }),

  plugins: [
    tsConfigPaths(),
    ...(isLibBuild
      ? [
          cssInjectedByJsPlugin({
            relativeCSSInjection: true,
            jsAssetsFilterFunction: (chunk) => {
              return !chunk.fileName.includes('utils/') && 
                     !chunk.fileName.includes('declaration/') &&
                     !chunk.fileName.includes('Theme/');
            }
          }),
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
            outDir: 'lib',
            insertTypesEntry: false,
            rollupTypes: false,
            logLevel: 'error',
            compilerOptions: {
              declarationMap: true,
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
  ],

  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  }
});
