import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightUpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.035 4.287a1 1 0 0 0-1.403 0l-6.667 6.563a1 1 0 0 0 .702 1.713h5.666v.837c0 2.222 0 3.827-.105 5.09-.104 1.25-.305 2.074-.655 2.75a6.939 6.939 0 0 1-3.056 3.008c-.693.347-1.536.546-2.81.648-1.284.103-2.917.104-5.174.104H4a1 1 0 1 0 0 2h4.578c2.203 0 3.916 0 5.29-.11 1.394-.113 2.527-.343 3.546-.855a8.94 8.94 0 0 0 3.935-3.875c.522-1.008.758-2.129.872-3.505.112-1.355.112-3.043.112-5.21v-.883H28a1 1 0 0 0 .701-1.712l-6.666-6.563Z"
      />
    </svg>
  );
};

export default IconCornerArrowRightUpFilled32;
