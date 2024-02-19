import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetalFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M10.07 1.237V3.8l1.851-1.294-1.851-1.27Zm-1-.045v3.405L7.26 7.063l-2.213-3.8 4.023-2.07Zm-4.773 2.77-2.169 5.21 4.343-1.475-2.174-3.735Zm-1.984 6.203 3.604 4.5.704-5.963-4.308 1.463ZM6.884 15h4.25a.513.513 0 0 0 .464-.292l2.175-4.526-6.133-1.58L6.884 15Zm7.035-5.812-1.424-5.862-2.571 1.797-1.873 2.551 5.868 1.514Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalFilled16;
