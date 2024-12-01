import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStackedBarChartHorizontal32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 12.86v5.28h-8.44v-5.28H29Zm-10.193 0v5.28h-4.22v-5.28h4.22Zm-6.259 5.28v-5.28H4v5.28h8.548ZM20.54 3v5.28h-4.388V3h4.388Zm-6.343 5.28V3h-4.22v5.28h4.22ZM7.968 3v5.28H4V3h3.968Zm17.028 25v-5.28h-7.385V28h7.385Zm-9.472-5.28V28h-4.22v-5.28h4.22ZM9.275 28v-5.28H4V28h5.275Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStackedBarChartHorizontal32;
