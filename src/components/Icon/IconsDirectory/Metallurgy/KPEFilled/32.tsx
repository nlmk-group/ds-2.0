import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKPEFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.856 20.52c-.625 0-1.023-.671-.731-1.27a.814.814 0 0 1 1.028-.42.89.89 0 0 1 .434 1.217.814.814 0 0 1-.731.472Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.932 9.014v-3.19A11.815 11.815 0 0 0 8.09 8.8l2.261 2.261a.909.909 0 0 1-1.285 1.286l-2.234-2.235a11.81 11.81 0 0 0-2.682 6.997h3.112a.909.909 0 1 1 0 1.817H4.207a11.817 11.817 0 0 0 2.974 6.647l1.884-1.883a.909.909 0 0 1 1.285 1.285L9.125 26.2h13.432l-1.225-1.225a.909.909 0 0 1 1.285-1.285l2.05 2.05a11.82 11.82 0 0 0 3.127-6.813H24.42a.909.909 0 1 1 0-1.818h3.43a11.811 11.811 0 0 0-2.827-7.17l-2.407 2.408a.909.909 0 0 1-1.285-1.286l2.41-2.41A11.812 11.812 0 0 0 16.75 5.8v3.214a.909.909 0 0 1-1.818 0Zm3.234 11.853c.444-.914.34-2.076-.306-3.006-.076-.11-.17-.2-.264-.276l1.727-4.505c.172-.451 0-.976-.49-1.181a.875.875 0 0 0-1.154.51l-1.742 4.545a2 2 0 0 0-.081-.001c-.985 0-1.869.57-2.31 1.477-.464.953-.338 2.078.307 3.006.222.32.563.545.917.69.356.145.744.218 1.086.218.984 0 1.868-.57 2.31-1.477Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKPEFilled32;
