import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTranslationServices24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m11.9 22 4.55-12h2.1l4.55 12H21l-1.05-3.05H15.1L14 22h-2.1Zm3.8-4.8h3.6l-1.75-4.95h-.1L15.7 17.2ZM4 19l-1.4-1.4 5.05-5.05a15.992 15.992 0 0 1-1.662-2.175A16.005 16.005 0 0 1 4.75 8h2.1c.3.6.621 1.142.963 1.625.341.483.754.992 1.237 1.525.733-.8 1.342-1.62 1.825-2.462.483-.842.892-1.738 1.225-2.688H1V4h7V2h2v2h7v2h-2.9a18.153 18.153 0 0 1-1.425 3.45 16.134 16.134 0 0 1-2.225 3.15l2.4 2.45-.75 2.05L9 14l-5 5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTranslationServices24;
