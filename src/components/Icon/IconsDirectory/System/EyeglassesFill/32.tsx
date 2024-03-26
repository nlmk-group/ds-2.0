import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeglassesFill32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.25 12.565a3.125 3.125 0 1 1 0 6.25 3.125 3.125 0 0 1 0-6.25Zm4.102.855a4.688 4.688 0 0 0-8.725 1.49H4.78a.781.781 0 1 0 0 1.562h.846a4.687 4.687 0 0 0 9.31-.782 1.562 1.562 0 1 1 3.126 0 4.688 4.688 0 0 0 9.31.782h.846a.781.781 0 1 0 0-1.563h-.846a4.687 4.687 0 0 0-8.725-1.489 3.115 3.115 0 0 0-2.148-.855 3.12 3.12 0 0 0-2.148.855Zm11.523 2.27a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0Z"
      />
    </svg>
  );
};

export default IconEyeglassesFill32;
