import React, { FC, useEffect, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as UI from '@components/index';
import { 
  Box, 
  Button, 
  Typography, 
  IconContentCopyOutlined24,
  Tooltip
} from '@components/index';
import { Themes } from '@components/Theme/types';
import { darkThemeStyles } from '@components/ThemeSwitcher/DarkTheme';
import clsx from 'clsx';

import { themes } from 'prism-react-renderer';
import prettier from 'prettier/standalone';
import parserTypescript from 'prettier/parser-typescript';
import { copyToClipboard as copyUtils } from '@components/utils/copyToClipboard';
import { openCodeSandbox } from './sandboxUtils';

import styles from '../Stories.module.scss';

const Editor: FC<{ code: string; description?: string; height?: number }> = ({ code, description, height = 280 }) => {
  const scope = { ...UI, React, useState, useEffect };



  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);
  const [isCopied, setIsCopied] = useState(false);
  const [editorCode, setEditorCode] = useState(code);

  useEffect(() => {
    setEditorCode(code);
  }, [code]);

  useEffect(() => {
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

  const transformCode = (code: string) => {
    let cleanCode = code.replace(/import\s+.*?[\r\n]/g, '');
    
    if (cleanCode.includes('export default App =')) {
      cleanCode = cleanCode.replace(/export\s+default\s+App\s+=\s+/, 'const App = ');
    } else if (cleanCode.includes('export default function App')) {
       cleanCode = cleanCode.replace(/export\s+default\s+function\s+App/, 'function App');
    }

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

    const result = `${cleanCode};\nrender(<App />);`;

    return result;
  };

  const copyToClipboard = () => {
    const lines = editorCode.split('\n');
    const codeWithNumbers = lines.map((line, i) => `${i + 1} ${line}`).join('\n');
    
    copyUtils(codeWithNumbers, () => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
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
          <Typography>{description}</Typography>
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
             
             <Tooltip render={<Typography variant="Body2-Bold">{isCopied ? 'Скопировано' : 'Копировать'}</Typography>}>
               <Button 
                  type="button" 
                  color="ghost" 
                  variant="primary" 
                  iconButton={<IconContentCopyOutlined24 />} 
                  onClick={copyToClipboard}
               />
             </Tooltip>

             <Button size="s" variant="secondary" onClick={openSandbox}>
                Open in CodeSandbox
             </Button>

          </div>

          <div className={styles['content-area']} style={{ minHeight: height ? `${height}px` : 'auto' }}>
            <div className={styles['editor-pane']} style={{ 
              backgroundColor: theme === Themes.DARK ? '#1e1e1e' : '#f6f8fa'
            }}>
               <div className={styles['line-numbers']} style={{
                 color: theme === Themes.DARK ? '#858585' : '#ccc',
                 backgroundColor: theme === Themes.DARK ? '#1e1e1e' : '#f6f8fa',
                 borderRight: `1px solid ${theme === Themes.DARK ? '#333' : '#eee'}`
               }}>
                 {lineNumbers}
               </div>

               <div className={styles['code-editor']}>
                 <LiveEditor 
                   onChange={setEditorCode}
                   style={{ 
                     fontFamily: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, monospace',
                     fontSize: 14,
                     minHeight: '100%',
                     backgroundColor: 'transparent',
                     outline: 'none'
                   }} 
                 />
               </div>
            </div>

            <div 
              className={clsx('preview-container', styles['preview-pane'], theme === Themes.DARK && 'dark-theme-wrapper')}
              style={{ 
                backgroundColor: theme === Themes.DARK ? 'var(--background-default)' : 'var(--steel-10)'
              }}
            >
               {theme === Themes.DARK && <style>{scopedDarkTheme}</style>}
               
               <LiveError className={styles['live-error']} />
               
               <LivePreview 
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

export default Editor;
