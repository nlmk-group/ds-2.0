import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowBackOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.62 4.877 5.353 6.53l-.967.921L1 4.226 4.387 1l.967.921L3.62 3.574h4.907C11.55 3.574 14 5.908 14 8.787S11.55 14 8.526 14H2.368v-1.303h6.158c2.268 0 4.106-1.75 4.106-3.91s-1.838-3.91-4.106-3.91H3.62Z"
      />
    </svg>
  );
};

export default IconRoundedArrowBackOutlined16;
