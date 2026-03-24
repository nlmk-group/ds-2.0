import React, {
  CSSProperties,
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as ReactRouterDom from 'react-router-dom';

import * as UI from '@components/index';
import { Box, Button, Typography } from '@components/index';
import { Themes } from '@components/Theme/types';
import { darkThemeStyles } from '@components/ThemeSwitcher/DarkTheme';
import clsx from 'clsx';
import parserTypescript from 'prettier/parser-typescript';
import prettier from 'prettier/standalone';
import { themes } from 'prism-react-renderer';

import styles from '../Stories.module.scss';

import CopyCodeButton from './CopyCodeButton';
import { openCodeSandbox } from './sandboxUtils';

const MemoizedLivePreview = memo(LivePreview);

const Editor: FC<{
  code: string;
  description?: string;
  minHeight?: number;
  maxHeight?: number;
  previewPaneWidth?: string;
}> = ({ code, description, minHeight = 280, maxHeight, previewPaneWidth = '50%' }) => {
  // Переменные доступные в live-редакторе при выполнении кода примеров.
  // react-live компилирует код через sucrase (CJS-трансформ) и выполняет через new Function(...scopeKeys, code),
  // поэтому всё что нужно в примерах — должно быть здесь.
  // Порядок важен: ...UI идёт после ...ReactRouterDom, чтобы DS-компоненты (например Link)
  // перекрывали одноимённые компоненты из react-router-dom.
  // exports: {} — полифил для sucrase: он генерирует Object.defineProperty(exports, "__esModule", ...)
  // но в контексте new Function переменная exports не определена без явной передачи.

  const scope = useMemo(
    () => ({
      ...ReactRouterDom,
      ...UI,
      React,
      useState,
      useEffect,
      useRef,
      useCallback,
      useMemo,
      useReducer,
      useContext,
      useLayoutEffect,
      exports: {}
    }),
    []
  );

  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);
  const [editorCode, setEditorCode] = useState(code);

  useEffect(() => {
    setEditorCode(code);
  }, [code]);

  useEffect(() => {
    // Отслеживаем изменение темы
    const checkTheme = () => {
      const hasDarkStyle = !!document.getElementById('dark');
      const htmlHasDarkAttr = document.documentElement.getAttribute('data-theme');
      const isDark = hasDarkStyle || (htmlHasDarkAttr && htmlHasDarkAttr.includes('dark'));
      setTheme(isDark ? Themes.DARK : Themes.LIGHT);
    };

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.head, { childList: true, subtree: true });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    checkTheme();

    return () => observer.disconnect();
  }, []);

  // Трансформация кода перед передачей в sucrase (react-live).
  // Проблема: примеры написаны как ES-модули (import/export), но sucrase с трансформом "imports"
  // компилирует их в CJS и добавляет обращения к exports — это ломается в браузере.
  // Решение: убираем импорты (зависимости уже в scope) и нормализуем export default → const App.
  // Все замены делаются ДО prettier, потому что prettier меняет пробелы и может сломать регексы.
  const transformCode = (code: string) => {
    let cleanCode = code.replace(/import\s+[^\n]*\n/g, '');

    // `export default App` отдельной строкой — просто реэкспорт уже объявленной переменной, удаляем
    cleanCode = cleanCode.replace(/export\s+default\s+App\s*;?\s*$/gm, '');
    // `export default App = () => ...` — инлайн-объявление, превращаем в const
    cleanCode = cleanCode.replace(/export\s+default\s+App\s*=\s*/g, 'const App = ');
    // `export default function App` — именованная функция
    cleanCode = cleanCode.replace(/export\s+default\s+function\s+App/g, 'function App');
    // `export default () => ...` или `export default class` — анонимный экспорт
    cleanCode = cleanCode.replace(/export\s+default\s+(?!App\b)/g, 'const App = ');

    try {
      cleanCode = prettier.format(cleanCode, {
        parser: 'typescript',
        plugins: [parserTypescript],
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        printWidth: 80
      });
    } catch (error) {
      console.warn('Failed to format code:', error);
    }

    return `${cleanCode};\nrender(<App />);`;
  };

  const openSandbox = () => {
    openCodeSandbox(editorCode, theme as Themes);
  };

  const scopedDarkTheme = darkThemeStyles.replace(/:root/g, '.dark-theme-wrapper');

  const lineCount = editorCode.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');

  return (
    <div className={styles.wrapper} style={{ marginTop: '20px', background: 'transparent', padding: 0 }}>
      {description && (
        <div className={styles.description}>
          <Typography variant="Subheading3-Medium">{description}</Typography>
        </div>
      )}

      <LiveProvider
        code={editorCode}
        transformCode={transformCode}
        scope={scope}
        noInline={true}
        theme={theme === Themes.DARK ? themes.vsDark : themes.github}
      >
        <div className={styles['editor-container']}>
          <div className={styles.toolbar}>
            <CopyCodeButton code={editorCode} />

            <Button size="s" variant="secondary" onClick={openSandbox}>
              Open in CodeSandbox
            </Button>
          </div>

          <div
            className={styles['content-area']}
            style={{
              '--preview-pane-width': previewPaneWidth,
              '--preview-min-height': `${minHeight}px`
            } as CSSProperties}
          >
            <div
              className={styles['editor-pane']}
              style={{
                backgroundColor: theme === Themes.DARK ? '#1e1e1e' : '#f6f8fa',
                minHeight: `${minHeight}px`,
                maxHeight: maxHeight !== undefined ? `${maxHeight}px` : undefined
              }}
            >
              <div
                className={styles['line-numbers']}
                style={{
                  color: theme === Themes.DARK ? '#858585' : '#ccc',
                  backgroundColor: theme === Themes.DARK ? '#1e1e1e' : '#f6f8fa',
                  borderRight: `1px solid ${theme === Themes.DARK ? '#333' : '#eee'}`
                }}
              >
                {lineNumbers}
              </div>

              <div className={styles['code-editor-wrapper']}>
                <LiveEditor
                  onChange={setEditorCode}
                  className={styles['code-editor']}
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    minHeight: '100%',
                    backgroundColor: 'transparent',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div
              className={clsx(
                'preview-container',
                styles['preview-pane'],
                theme === Themes.DARK && 'dark-theme-wrapper'
              )}
              style={{
                backgroundColor: theme === Themes.DARK ? 'var(--background-default)' : 'var(--steel-10)',
                width: previewPaneWidth
              }}
            >
              {theme === Themes.DARK && <style>{scopedDarkTheme}</style>}

              <LiveError className={styles['live-error']} />

              <MemoizedLivePreview
                Component={Box}
                display="flex"
                alignItems="center"
                gap={20}
                flexWrap="wrap"
                st={{ margin: 20 }}
              />
            </div>
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default memo(Editor);
