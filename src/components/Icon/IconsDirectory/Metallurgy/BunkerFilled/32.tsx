import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBunkerFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M4 16C4 9.383 9.383 4 16 4s12 5.383 12 12v10.049A1.953 1.953 0 0 1 26.049 28h-2.482v-6.39a.95.95 0 0 0-.95-.95h-2.506v-4.934a.95.95 0 0 0-.95-.95H12.84a.95.95 0 0 0-.95.95v4.935H9.382a.95.95 0 0 0-.95.95V28H5.951A1.953 1.953 0 0 1 4 26.049V16Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M10.332 28h4.718v-5.44h-1.261v.566a.95.95 0 0 1-1.9 0v-.565h-1.557V28Zm6.618 0h4.718v-5.44H20.11v.566a.95.95 0 1 1-1.9 0v-.565h-1.26V28Zm-1.9-11.324v.584a.95.95 0 0 0 1.9 0v-.584h1.261v3.985H13.79v-3.985h1.261Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBunkerFilled32;
