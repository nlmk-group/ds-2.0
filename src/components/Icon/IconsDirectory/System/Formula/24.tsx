import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormula24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m12 2 10 13.333L19 22H5l-3-6.667L12 2Zm2.375 14.444h-4.75l1.5 3.334h1.75l1.5-3.334ZM13 6.806v7.416h5.55L13 6.806Zm-2 0-5.55 7.416H11V6.806Zm-3.6 9.638H4.75l1.5 3.334H8.9l-1.5-3.334Zm11.85 0H16.6l-1.5 3.334h2.65l1.5-3.334Z"
      />
    </svg>
  );
};

export default IconFormula24;
