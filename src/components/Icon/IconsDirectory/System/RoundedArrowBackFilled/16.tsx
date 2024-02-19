import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowBackFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.105 4.9v2.6L1 4.25 5.105 1v2.6h3.421C11.55 3.6 14 5.928 14 8.8c0 2.872-2.45 5.2-5.474 5.2H2.368v-1.3h6.158c2.268 0 4.106-1.746 4.106-3.9s-1.838-3.9-4.106-3.9h-3.42Z"
      />
    </svg>
  );
};

export default IconRoundedArrowBackFilled16;
