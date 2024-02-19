import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWarningFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.444 7h17.334c.794 0 1.444.65 1.444 1.444V13.5L29 7.722v15.89l-5.778-5.779v5.056c0 .794-.65 1.444-1.444 1.444H4.444C3.65 24.333 3 23.683 3 22.89V8.444C3 7.65 3.65 7 4.444 7Zm15.89 14.444V9.89H5.888v11.555h14.444Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWarningFilled32;
