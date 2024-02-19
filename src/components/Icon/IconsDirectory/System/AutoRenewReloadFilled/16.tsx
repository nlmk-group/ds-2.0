import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewReloadFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.2 4.545 7.5.777v2.655c-2.811.257-5 2.658-5 5.568a5.62 5.62 0 0 0 .85 2.975l.337.54L5.3 10.87l-.172-.323A3.29 3.29 0 0 1 4.75 9c0-1.664 1.2-3.033 2.75-3.279v2.593l3.7-3.769Zm1.45 1.48-.337-.54-1.61 1.64.165.322c.241.47.382.996.382 1.553 0 1.664-1.2 3.033-2.75 3.279V9.686l-3.7 3.768 3.7 3.769v-2.655c2.811-.257 5-2.658 5-5.568a5.614 5.614 0 0 0-.85-2.975Z"
      />
    </svg>
  );
};

export default IconAutoRenewReloadFilled16;
