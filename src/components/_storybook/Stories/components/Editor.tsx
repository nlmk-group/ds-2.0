import React, { FC } from 'react';

import { Sandpack } from '@codesandbox/sandpack-react';
import { Typography } from '@components/index';

import styles from '../Stories.module.scss';

const Editor: FC<{ code: string; description?: string; height?: number }> = ({ code, description, height = 280 }) => {
  const { origin, pathname } = window.parent.location;
  const path = pathname === '/' ? '' : pathname;
  const url = `${origin}${path}`;
  return (
    <>
      <div className={styles.description}>
        <Typography>{description ?? 'Опишите здесь ваш пример, как можно более подробно.'}</Typography>
      </div>
      <Sandpack
        customSetup={{
          dependencies: {
            '@nlmk/ds-2.0': '1.1.0'
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
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
            size: '18px',
            lineHeight: '24px'
          }
        }}
        options={{
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: height
        }}
        files={{
          '/App.js': code,
          '/styles.css': {
            code: `
             @import url('${url}/css/main.css');
      @import url('https://fonts.cdnfonts.com/css/pt-root-ui');
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

    * {
    font-family: 'PT Root UI', sans-serif !important;
    }
                  `,
            hidden: true
          }
        }}
        template="react"
      />
    </>
  );
};

export default Editor;
