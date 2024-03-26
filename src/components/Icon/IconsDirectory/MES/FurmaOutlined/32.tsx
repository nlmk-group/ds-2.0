import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFurmaOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M23.112 4.044a2.319 2.319 0 0 0-2.654 1.541l-3.694 11.283c-.33-1.195-1.601-1.938-2.85-1.598L4.7 17.782a2.296 2.296 0 0 0-1.7 2.21v3.203c0 1.043.707 1.939 1.7 2.21l9.214 2.512c1.45.395 2.931-.671 2.931-2.21v-.238c0-.144.124-.292.317-.292h3.403c.608 0 1.195-.237 1.63-.665l2.01-1.97c.276-.272.48-.61.59-.982l.846-2.846 2.634-.753a1 1 0 1 0-.55-1.923l-1.409.403 2.59-8.713c.389-1.31-.454-2.636-1.772-2.895l-4.022-.79Zm-5.032 15.23 4.28-13.066a.32.32 0 0 1 .368-.202l4.022.79a.292.292 0 0 1 .24.362l-4.111 13.833a.287.287 0 0 1-.075.123l-2.008 1.971a.33.33 0 0 1-.23.092H17.16c-1.261 0-2.316 1.009-2.316 2.292v.238c0 .17-.179.342-.405.28l-9.213-2.512a.296.296 0 0 1-.227-.28v-3.203c0-.119.082-.24.227-.28L14.44 17.2c.227-.062.405.11.405.28v1.285c0 1.92 2.666 2.247 3.235.509Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFurmaOutlined32;
