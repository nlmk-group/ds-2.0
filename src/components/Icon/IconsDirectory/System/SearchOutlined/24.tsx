import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSearchOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m22.314 20.899-4.283-4.282A8.96 8.96 0 0 0 20 11c0-4.968-4.032-9-9-9s-9 4.032-9 9 4.032 9 9 9a8.96 8.96 0 0 0 5.617-1.969l4.282 4.283 1.415-1.415ZM18 11a6.977 6.977 0 0 1-1.975 4.875l-.15.15A6.977 6.977 0 0 1 11 18c-3.868 0-7-3.133-7-7 0-3.868 3.132-7 7-7 3.867 0 7 3.132 7 7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSearchOutlined24;
