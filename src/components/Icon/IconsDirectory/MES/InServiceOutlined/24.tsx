import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInServiceOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M20 10.407V20.75A1.25 1.25 0 0 1 18.75 22h-1.5A1.25 1.25 0 0 1 16 20.75V10.407a4.5 4.5 0 0 1 1-8.419v4.387L18 7l1-.625V1.988a4.5 4.5 0 0 1 1 8.419Zm0-6.746v3.464l-2 1.25-2-1.25V3.661a3.366 3.366 0 0 0 0 5.428l.875.52c.04.02.082.038.125.052v10.464a.75.75 0 0 0 .75.75h.5a.75.75 0 0 0 .75-.75V9.661a.9.9 0 0 0 .125-.052l.875-.52a3.366 3.366 0 0 0 0-5.428ZM12 15a3 3 0 0 0 2.875-2.146v2.607a4.5 4.5 0 1 1-2.511-7.945c.116.577.321 1.133.608 1.648A3 3 0 1 0 12 15Zm.75-12h-1.5l-.225 2.7a6.341 6.341 0 0 0-2.673 1.074L6.362 5.09l-1.06 1.06 1.653 1.954a6.34 6.34 0 0 0-1.256 2.92L3 11.25v1.5l2.7.225a6.337 6.337 0 0 0 1.162 2.797l-1.685 1.99 1.06 1.061 1.991-1.684a6.343 6.343 0 0 0 2.797 1.161l.225 2.7h1.5l.225-2.702a6.345 6.345 0 0 0 1.9-.61v1.503a7.991 7.991 0 0 1-.586.21L14 22h-4l-.19-2.574a7.847 7.847 0 0 1-1.393-.555l-2.115 1.692-.374-.373-.006.004-2.121-2.121.004-.006-.332-.332 1.735-2.013c-.268-.486-.483-1-.64-1.531L2 14v-4l2.598-.289a7.736 7.736 0 0 1 .645-1.488l-1.664-2.08 2.829-2.828 2.075 1.788a7.821 7.821 0 0 1 1.326-.53L10 2h4l.025.223a5.76 5.76 0 0 0-1.202 1.648L12.75 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInServiceOutlined24;
