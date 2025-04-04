import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconShkolaDlyaRoditelej24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8.49 9.15c-.57-.56-1.05-1.08-1.41-1.56-.37-.48-.65-.97-.83-1.45C6.08 5.68 6 5.19 6 4.7c0-1.03.36-1.93 1.09-2.64C7.81 1.35 8.72 1 9.75 1c.58 0 1.13.12 1.65.36.21.1.41.21.6.34.19-.13.39-.24.6-.34.52-.24 1.07-.36 1.65-.36 1.03 0 1.94.35 2.66 1.06.73.71 1.09 1.62 1.09 2.64 0 .49-.08.97-.23 1.44-.18.49-.47.97-.83 1.45s-.84 1-1.41 1.56-1.28 1.21-2.13 1.96l-.73.64c-.38.33-.94.33-1.32 0l-.73-.64c-.85-.75-1.56-1.4-2.13-1.96Zm2.08-5.97c-.26-.12-.53-.18-.82-.18-.28 0-.53.05-.74.14-.19.08-.37.2-.52.35C8.16 3.8 8 4.18 8 4.7c0 .26.04.51.13.76.09.24.26.54.54.92.29.38.69.82 1.22 1.34a36.838 36.838 0 0 0 1.165 1.102c.273.247.568.514.885.788l.06.06.06-.06c.59-.52 1.11-.99 1.55-1.41l.032-.03c.168-.159.327-.309.468-.45.44-.43.77-.8 1.04-1.13l.18-.21c.28-.38.45-.68.54-.91.09-.26.13-.51.13-.77 0-.52-.16-.9-.49-1.21-.32-.32-.72-.49-1.26-.49-.29 0-.56.06-.82.17-.26.12-.48.29-.67.51-.19.22-.47.35-.76.35-.29 0-.57-.13-.76-.35-.19-.22-.41-.38-.67-.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1.65 7.868A2 2 0 0 0 4 19h2.803a5.96 5.96 0 0 0-.72 2H2v-2a4 4 0 0 1 6.039-3.442 3.96 3.96 0 0 0 .538 1.513 6.034 6.034 0 0 0-.928.797ZM17.917 21H22v-2a4 4 0 0 0-6.039-3.442 3.973 3.973 0 0 1-.538 1.513c.336.234.647.501.928.797A2 2 0 0 1 20 19h-2.804c.352.607.6 1.282.72 2ZM18 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M16 22a4.002 4.002 0 0 0-8 0v1h8v-1Zm-4-2a2 2 0 0 0-1.732 1h3.464A2 2 0 0 0 12 20Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconShkolaDlyaRoditelej24;
