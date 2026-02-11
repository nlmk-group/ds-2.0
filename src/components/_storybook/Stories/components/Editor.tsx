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
import LZString from 'lz-string';
import { themes } from 'prism-react-renderer';

import styles from '../Stories.module.scss';
import VERSION from './version';

const Editor: FC<{ code: string; description?: string; height?: number }> = ({ code, description, height = 280 }) => {
  const scope = { ...UI, React, useState, useEffect };

  const { origin, pathname } = window.parent.location;
  const path = pathname === '/' ? '' : pathname;
  const url = `${origin}${path}`;

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

    return cleanCode + ';\nrender(<App />);';
  };

  const copyToClipboard = () => {
    const lines = editorCode.split('\n');
    const codeWithNumbers = lines.map((line, i) => `${i + 1} ${line}`).join('\n');
    navigator.clipboard.writeText(codeWithNumbers);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const openSandbox = () => {
    const parameters = getParameters({
      files: {
        'package.json': {
          content: {
            dependencies: {
              react: '^18.0.0',
              'react-dom': '^18.0.0',
              'react-scripts': '^5.0.0',
              '@nlmk/ds-2.0': VERSION,
              'react-router-dom': '^6.27.0'
            }
          }
        },
        'App.tsx': {
          content: editorCode
        },
        'index.html': {
          content: '<div id="root"></div>'
        },
        'styles.css': {
          content: `
            @import url('${url}/css/main.css');
            @import url('https://fonts.cdnfonts.com/css/pt-root-ui');
            html, body {
                font-family: 'PT Root UI', sans-serif;
            }
            #root {
              margin: 20px;
              display: flex;
              align-items: center;
              gap: 20px;
              flex-wrap: wrap;
            }
          `
        },
        'index.tsx': {
          content: `
            import React from 'react';
            import { createRoot } from 'react-dom/client'; 
            import App from './App';
            import './styles.css';
            import { darkThemeStyles } from './darkTheme';

            const container = document.getElementById('root');
            const root = createRoot(container);
            
            const ThemeWrapper = () => {
                 const [isDark, setIsDark] = React.useState(${theme === Themes.DARK});
                 
                 return (
                   <div className={isDark ? 'dark-theme-wrapper' : ''} style={{backgroundColor: isDark ? '#3c4854' : 'white', minHeight: '100vh', padding: '20px'}}>
                      <style>{isDark ? darkThemeStyles : ''}</style>
                      <button style={{marginBottom: 20}} onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
                      <App />
                   </div>
                 );
            }

            root.render(<ThemeWrapper />);
          `
        },
        'darkTheme.ts': {
           content: `export const darkThemeStyles = \`${darkThemeStyles}\`;`
        }
      }
    });

    const form = document.createElement('form');
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.method = 'POST';
    form.target = '_blank';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'parameters';
    input.value = parameters;
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  function getParameters(parameters: any) {
    return LZString.compressToBase64(JSON.stringify(parameters))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

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
        <div 
          style={{ 
            border: '1px solid var(--steel-30)', 
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'var(--steel-10)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '8px', 
              borderBottom: '1px solid var(--steel-30)',
              backgroundColor: 'var(--steel-20)',
              gap: '8px'
            }}>
             
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

          <div style={{ display: 'flex', minHeight: height ? `${height}px` : 'auto' }}>
            <div style={{ 
              flex: 1, 
              borderRight: '1px solid var(--steel-30)', 
              maxHeight: '600px', 
              overflow: 'auto', 
              backgroundColor: theme === Themes.DARK ? '#1e1e1e' : '#f6f8fa',
              display: 'flex'
            }}>
               <div style={{
                 padding: '10px 5px',
                 fontFamily: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, monospace',
                 fontSize: '14px',
                 lineHeight: '1.5',
                 textAlign: 'right',
                 color: theme === Themes.DARK ? '#858585' : '#ccc',
                 backgroundColor: theme === Themes.DARK ? '#1e1e1e' : '#f6f8fa',
                 borderRight: `1px solid ${theme === Themes.DARK ? '#333' : '#eee'}`,
                 minWidth: '30px',
                 userSelect: 'none',
                 whiteSpace: 'pre'
               }}>
                 {lineNumbers}
               </div>

               <div style={{ flex: 1 }}>
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
              className={clsx('preview-container', theme === Themes.DARK && 'dark-theme-wrapper')}
              style={{ 
                flex: 1,
                backgroundColor: theme === Themes.DARK ? '#3c4854' : 'var(--steel-10)',
                position: 'relative',
                overflow: 'auto',
                transition: 'background-color 0.2s ease'
              }}
            >
               {theme === Themes.DARK && <style>{scopedDarkTheme}</style>}
               
               <LiveError 
                 style={{ 
                   color: '#ff4d4f', 
                   backgroundColor: '#fff1f0', 
                   border: '1px solid #ffccc7',
                   padding: '12px',
                   fontFamily: 'monospace',
                   fontSize: '12px',
                   whiteSpace: 'pre-wrap',
                   marginBottom: '16px',
                   borderRadius: '4px',
                   margin: '20px'
                 }} 
               />
               
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
