import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJoin16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6 3.333a4.667 4.667 0 0 0 0 9.334c.693 0 1.373-.16 2-.454a4.717 4.717 0 0 0 2 .454 4.667 4.667 0 0 0 0-9.334c-.694 0-1.374.16-2 .454a4.716 4.716 0 0 0-2-.454Zm0 1.334c.226 0 .446.02.666.066A4.678 4.678 0 0 0 5.333 8c0 1.22.48 2.393 1.333 3.26-.22.047-.44.073-.666.073a3.333 3.333 0 0 1 0-6.666Zm4 0a3.333 3.333 0 1 1-.667 6.6A4.678 4.678 0 0 0 10.666 8a4.65 4.65 0 0 0-1.333-3.26c.22-.047.44-.073.667-.073Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconJoin16;
