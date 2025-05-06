import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPennantOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.5 18.364 18 22V2H7v20l5.5-3.636ZM9 18.28l3.5-2.314L16 18.28V4H9v14.28Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPennantOutlined24;
