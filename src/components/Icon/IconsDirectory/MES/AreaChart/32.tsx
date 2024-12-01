import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAreaChart32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.495 11.08c.95 0 1.728-.768 1.728-1.707 0-.938-.778-1.706-1.728-1.706s-1.727.768-1.727 1.706c0 .154.017.299.06.436l-3.065 3.037a1.545 1.545 0 0 0-.45-.06c-.155 0-.31.018-.448.06l-2.203-2.176c.043-.136.06-.29.06-.443 0-.939-.777-1.707-1.727-1.707-.95 0-1.727.768-1.727 1.707 0 .153.017.307.06.443L8.39 14.553a1.483 1.483 0 0 0-.44-.06c-.95 0-1.727.768-1.727 1.707 0 .939.777 1.707 1.727 1.707.95 0 1.727-.768 1.727-1.707 0-.154-.017-.299-.06-.435l3.93-3.891c.137.042.293.06.448.06.156 0 .311-.018.45-.06l2.202 2.176c-.043.136-.06.29-.06.443 0 .939.777 1.707 1.727 1.707.95 0 1.727-.768 1.727-1.707a1.49 1.49 0 0 0-.06-.443l3.074-3.03c.138.043.285.06.44.06ZM7.626 23.667l5.61-5.405a1.307 1.307 0 0 1 1.77-.036l2.812 2.492c.54.477 1.37.426 1.844-.115l3.178-3.623c.786-.896 2.275-.347 2.275.838v5.849H7.626Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAreaChart32;
