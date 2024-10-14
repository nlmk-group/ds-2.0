import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoneyHelpInfo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17.16 0a5.84 5.84 0 0 0-5.84 5.84 5.84 5.84 0 0 0 5.84 5.84A5.84 5.84 0 0 0 23 5.84 5.84 5.84 0 0 0 17.16 0Zm0 9.904a4.06 4.06 0 0 1-4.06-4.058 4.06 4.06 0 0 1 4.058-4.058 4.06 4.06 0 0 1 4.058 4.058 4.06 4.06 0 0 1-4.058 4.058Zm.89-4.064h-1.78v2.97h1.782V5.84Zm-1.882-1.978a.993.993 0 0 1 1.984 0 .994.994 0 0 1-.992.992.994.994 0 0 1-.992-.992Zm2.857 9.951-.13.03a7.867 7.867 0 0 1-1.587.178h-.124l.005.125c.012.16.018.326.018.487 0 3.957-3.22 7.17-7.17 7.17-3.951 0-7.177-3.213-7.177-7.17 0-3.511 2.614-6.56 6.077-7.088l.125-.018-.024-.124a8.426 8.426 0 0 1-.172-1.593v-.136l-.149.023C4.315 6.34 1 10.183 1 14.633c0 4.979 4.052 9.03 9.03 9.03 4.98 0 9.031-4.051 9.031-9.03a8.94 8.94 0 0 0-.024-.69l-.012-.136v.006Zm-12.76-.107h1.212v-3.648h2.602l.035.053a8.417 8.417 0 0 0 1.301 1.599l.214.202H9.336V13.7h2.11a.89.89 0 0 0 .89-.891v-.095l-.03-.256.215.143c.475.32.986.594 1.509.808l.1.041-.03.101a2.754 2.754 0 0 1-2.649 2.014H9.342v.57h1.218v1.86H9.342v1.622h-1.86v-1.622H6.266v-1.86h1.218v-.57H6.265v-1.86Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoneyHelpInfo24;
