import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartDonut24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13 2v3.038c3.39.49 6 3.398 6 6.937 0 .902-.18 1.754-.5 2.546l2.62 1.534c.56-1.243.88-2.626.88-4.08C22 6.782 18.05 2.5 13 2Zm-1 16.992a6.991 6.991 0 0 1-4.95-2.055A7.027 7.027 0 0 1 5 11.975a7.007 7.007 0 0 1 6-6.937V2c-5.06.501-9 4.772-9 9.975 0 2.659 1.054 5.209 2.929 7.089A9.999 9.999 0 0 0 12 22c3.3 0 6.23-1.614 8.05-4.1l-2.6-1.534A6.892 6.892 0 0 1 12 18.993Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartDonut24;
