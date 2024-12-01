import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartDonut32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M17.3 3v3.949c4.407.638 7.8 4.418 7.8 9.018 0 1.173-.234 2.281-.65 3.31l3.406 1.995A12.899 12.899 0 0 0 29 15.967C29 9.217 23.865 3.652 17.3 3ZM16 25.09a9.088 9.088 0 0 1-6.435-2.672 9.134 9.134 0 0 1-2.665-6.45c0-4.601 3.393-8.38 7.8-9.02V3C8.122 3.652 3 9.204 3 15.967c0 3.457 1.37 6.772 3.808 9.216A12.999 12.999 0 0 0 16 29c4.29 0 8.099-2.098 10.465-5.33l-3.38-1.994A8.96 8.96 0 0 1 16 25.09Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartDonut32;
