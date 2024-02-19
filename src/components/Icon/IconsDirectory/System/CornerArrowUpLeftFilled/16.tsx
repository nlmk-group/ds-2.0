import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpLeftFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.82 2.076A1 1 0 0 1 7.437 3v2.438h.006c1.119 0 2.019 0 2.748.06.75.06 1.405.19 2.01.498a5.125 5.125 0 0 1 2.24 2.24c.309.605.438 1.261.5 2.01.059.73.059 1.63.059 2.749V14a1 1 0 1 1-2 0v-.963c0-1.171 0-1.99-.053-2.627-.051-.626-.147-.99-.288-1.266a3.125 3.125 0 0 0-1.365-1.366c-.277-.14-.64-.236-1.266-.288-.631-.051-1.439-.052-2.59-.052v2.437a1 1 0 0 1-1.708.707L2.293 7.145a1 1 0 0 1 0-1.415L5.73 2.293a1 1 0 0 1 1.09-.217Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowUpLeftFilled16;
