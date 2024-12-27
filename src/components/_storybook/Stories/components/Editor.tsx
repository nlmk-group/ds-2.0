import React, { FC, useEffect, useState } from 'react';

import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { ToggleButtonGroup, Typography } from '@components/index';
import { Themes } from '@components/Theme/types';
import { darkThemeStyles } from '@components/ThemeSwitcher/DarkTheme';
import clsx from 'clsx';

import styles from '../Stories.module.scss';

import IconHandler from './IconHandler';
import VERSION from './version';

const Editor: FC<{ code: string; description?: string; height?: number }> = ({ code, description, height = 280 }) => {
  const { origin, pathname } = window.parent.location;
  const path = pathname === '/' ? '' : pathname;
  const url = `${origin}${path}`;

  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  useEffect(() => {
    const controllersCollection: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('.sp-preview-actions');
    controllersCollection.forEach(controllersWrapper => {
      if (controllersWrapper !== null) {
        controllersWrapper.style.cssText = `
          align-items: center;
          width: 100%;
          padding: 0 var(--12-space);
          right: 0;
        `;
      }
    });
  }, []);

  return (
    <>
      <div className={styles.description}>
        <Typography>{description ?? 'Опишите здесь ваш пример, как можно более подробно.'}</Typography>
      </div>
      <SandpackProvider
        template="react"
        customSetup={{
          dependencies: {
            '@nlmk/ds-2.0': VERSION,
            'react-router-dom': '^6.27.0'
          }
        }}
        theme={{
          colors: {
            surface1: '#282c34',
            surface2: '#21252b',
            surface3: '#2c313c',
            clickable: '#a8b1c2',
            base: '#a8b1c2',
            disabled: '#4d4d4d',
            hover: '#e8effc',
            accent: '#c678dd',
            error: '#e06c75',
            errorSurface: '#ffeceb'
          },
          syntax: {
            plain: '#a8b1c2',
            comment: {
              color: '#757575',
              fontStyle: 'italic'
            },
            keyword: '#c678dd',
            tag: '#e06c75',
            punctuation: '#a8b1c2',
            definition: '#62aeef',
            property: '#d19a66',
            static: '#a8b1c2',
            string: '#98c379'
          },
          font: {
            body: '-apple-System, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
            size: '18px',
            lineHeight: '24px'
          }
        }}
        files={{
          '/App.js': code,
          '/styles.css': {
            code: `
              @import url('${url}/css/main.css');
              @import url('https://fonts.cdnfonts.com/css/pt-root-ui');

              html, body {
                background-color: var(--steel-10);
              }
              #root {
                -webkit-font-smoothing: auto;
                -moz-font-smoothing: auto;
                -moz-osx-font-smoothing: grayscale;
                font-smoothing: auto;
                text-rendering: optimizeLegibility;
                font-smooth: always;
                -webkit-tap-highlight-color: transparent;
                -webkit-touch-callout: none;
                margin: 20px;
                display: flex;
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;
              }

              ${theme === 'dark' ? darkThemeStyles : ''}

              * {
                font-family: 'PT Root UI', sans-serif !important;
              }
            `,
            hidden: true
          }
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor showRunButton showLineNumbers wrapContent style={{ height }} />
          <SandpackPreview
            style={{ height }}
            actionsChildren={
              <ToggleButtonGroup size="s" className={styles['toggle-btn-group']}>
                <ToggleButtonGroup.Button
                  className={clsx(styles['toggle-btn'], theme === Themes.DARK && styles['toggle-btn-active'])}
                  active={theme === Themes.DARK}
                  onClick={() => setTheme(Themes.DARK)}
                >
                  <ToggleButtonGroup.Button.Icon>
                    <IconHandler name="moon" />
                  </ToggleButtonGroup.Button.Icon>
                </ToggleButtonGroup.Button>

                <ToggleButtonGroup.Button
                  className={clsx(styles['toggle-btn'], theme === Themes.LIGHT && styles['toggle-btn-active'])}
                  active={theme === Themes.LIGHT}
                  onClick={() => setTheme(Themes.LIGHT)}
                >
                  <ToggleButtonGroup.Button.Icon>
                    <IconHandler name="sun" />
                  </ToggleButtonGroup.Button.Icon>
                </ToggleButtonGroup.Button>
              </ToggleButtonGroup>
            }
          />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
};

export default Editor;
