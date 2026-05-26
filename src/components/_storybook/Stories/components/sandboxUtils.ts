import { Themes } from '@components/Theme/types';
import { darkThemeStyles } from '@components/ThemeSwitcher/DarkTheme';
import LZString from 'lz-string';

import { ICodeSandboxParameters } from './types';

import VERSION from './version';

const getParameters = (parameters: ICodeSandboxParameters) => {
  return LZString.compressToBase64(JSON.stringify(parameters))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

export const openCodeSandbox = (code: string, theme: Themes = Themes.LIGHT) => {
  const { origin, pathname } = window.parent.location;
  const path = pathname === '/' ? '' : pathname;
  const url = `${origin}${path}`;

  const parameters = getParameters({
    files: {
      'package.json': {
        content: {
          dependencies: {
            'react': '^19.0.0',
            'react-dom': '^19.0.0',
            'react-scripts': '^5.0.0',
            '@nlmk/ds-2.0': VERSION,
            'react-router-dom': '^6.27.0'
          }
        }
      },
      'App.tsx': {
        content: code
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
                   <div className={isDark ? 'dark-theme-wrapper' : ''} style={{backgroundColor: isDark ? 'var(--background-default)' : 'white', minHeight: '100vh', padding: '20px'}}>
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

  // Используем скрытую форму для отправки POST-запроса в CodeSandbox.
  // Это позволяет передать большой объем данных (параметры), который не поместится в URL при GET-запросе.
  // Ссылка открывается в новой вкладке (_blank).
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
