import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStackedBarChartHorizontal16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6.733v2.534H9.95V6.733H14Zm-4.893 0v2.534H7.082V6.733h2.025ZM6.103 9.267V6.733H2v2.534h4.103ZM9.94 2v2.535H7.833V2h2.106ZM6.894 4.535V2H4.868v2.535h2.026ZM3.904 2v2.535H2V2h1.904Zm8.174 12v-2.535H8.533V14h3.545Zm-4.547-2.535V14H5.506v-2.535H7.53ZM4.532 14v-2.535H2V14h2.532Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStackedBarChartHorizontal16;
