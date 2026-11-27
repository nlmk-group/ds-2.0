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
import { LiveContext, LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as ReactRouterDom from 'react-router-dom';

import * as UI from '@components/index';
import { Box, Button, Typography } from '@components/index';
import { Themes } from '@components/Theme/types';
import clsx from 'clsx';
import { themes } from 'prism-react-renderer';

import styles from '../Stories.module.scss';

import PreviewSkeleton from '../../PreviewSkeleton';
import { usePreviewTheme } from '../usePreviewTheme';
import CopyCodeButton from './CopyCodeButton';
import { openCodeSandbox } from './sandboxUtils';

const MemoizedLivePreview = memo(LivePreview);

function CompiledPreview() {
  const { element, error } = useContext(LiveContext);
  if (error) return <LiveError className={styles['live-error']} />;
  if (!element) return <PreviewSkeleton kind="component" />;

  return (
    <MemoizedLivePreview
      Component={Box}
      display="flex"
      alignItems="center"
      gap={20}
      flexWrap="wrap"
      st={{ margin: 20 }}
    />
  );
}

const Editor: FC<{
  code: string;
  description?: string;
  minHeight?: number;
  maxHeight?: number;
  previewPaneWidth?: string;
  stacked?: boolean;
}> = ({ code, description, minHeight = 280, maxHeight, previewPaneWidth = '50%', stacked = false }) => {
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

  const theme = usePreviewTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setNearViewport] = useState(false);
  const [editorCode, setEditorCode] = useState(code);

  useEffect(() => {
    setEditorCode(code);
  }, [code]);

  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) return;
    const { top, bottom } = element.getBoundingClientRect();
    if ((top < window.innerHeight + 240 && bottom > -240) || !window.IntersectionObserver) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' }
    );
    observer.observe(element);
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

    return `${cleanCode};\nrender(<App />);`;
  };

  const openSandbox = () => {
    openCodeSandbox(editorCode, theme as Themes);
  };

  const lineCount = editorCode.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');

  return (
    <div className={styles.wrapper} style={{ marginTop: '20px', background: 'transparent', padding: 0 }}>
      {description && (
        <div className={styles.description}>
          <Typography variant="Subheading3-Medium">{description}</Typography>
        </div>
      )}

      <div className={styles['editor-container']}>
        <div className={styles.toolbar}>
          <CopyCodeButton code={editorCode} />

          <Button size="s" variant="secondary" onClick={openSandbox}>
            Открыть в CodeSandbox
          </Button>
        </div>

        <div
          ref={contentRef}
          className={clsx(styles['content-area'], stacked && styles.stacked)}
          style={
            {
              '--preview-pane-width': previewPaneWidth,
              '--preview-min-height': `${minHeight}px`
            } as CSSProperties
          }
        >
          {isNearViewport ? (
            <LiveProvider
              code={editorCode}
              transformCode={transformCode}
              scope={scope}
              noInline={true}
              theme={theme === Themes.DARK ? themes.vsDark : themes.github}
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
                  backgroundColor: theme === Themes.DARK ? 'var(--background-default)' : 'var(--steel-10)'
                }}
              >
                <CompiledPreview />
              </div>
            </LiveProvider>
          ) : (
            <>
              <div className={styles['editor-pane']}>
                <PreviewSkeleton kind="code" />
              </div>
              <div className={styles['preview-pane']}>
                <PreviewSkeleton kind="component" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Editor);
