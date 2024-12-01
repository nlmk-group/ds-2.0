import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRCMParallelOperation32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m9.768 2 6.222 6-6.222 6V9.5H1.999v-3h7.769V2ZM23.778 18l6.223 6-6.223 6v-4.5H16.01v-3h7.77V18ZM15.994 17.556c.825 0 1.5.7 1.5 1.555 0 .856-.675 1.556-1.5 1.556s-1.5-.7-1.5-1.556c0-.855.675-1.555 1.5-1.555ZM15.994 11.333c.825 0 1.5.7 1.5 1.556 0 .855-.675 1.555-1.5 1.555s-1.5-.7-1.5-1.555c0-.856.675-1.556 1.5-1.556Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRCMParallelOperation32;
