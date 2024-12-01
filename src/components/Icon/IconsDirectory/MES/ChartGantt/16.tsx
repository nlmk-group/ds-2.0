import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartGantt16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2 2.95h5.2V1h1.3v13H7.2v-2.6H4.6V9.45h2.6v-1.3H3.3V6.2h3.9V4.9H2V2.95Zm7.8 0h1.95V4.9H9.8V2.95Zm0 3.25h3.25v1.95H9.8V6.2Zm0 3.25H15v1.95H9.8V9.45Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartGantt16;
