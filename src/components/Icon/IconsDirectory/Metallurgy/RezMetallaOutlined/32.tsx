import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRezMetallaOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8.15 6A1.85 1.85 0 0 1 10 4.15h12A1.85 1.85 0 0 1 23.85 6v5h-1.7V6a.15.15 0 0 0-.15-.15H10a.15.15 0 0 0-.15.15v5h-1.7V6ZM23.85 26A1.85 1.85 0 0 1 22 27.85H10A1.85 1.85 0 0 1 8.15 26v-5h1.7v5c0 .083.067.15.15.15h12a.15.15 0 0 0 .15-.15v-5h1.7v5ZM3.7 14.7v2.6h7.705l-2.95-2.528a.3.3 0 0 0-.195-.072H3.7Zm5.862-1.218A2 2 0 0 0 8.26 13H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13l-6.438-5.518ZM28.3 17.3v-2.6h-7.704l2.949 2.528a.3.3 0 0 0 .195.072h4.56Zm-5.862 1.218A2 2 0 0 0 23.74 19H29a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H16l6.438 5.518Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRezMetallaOutlined32;
