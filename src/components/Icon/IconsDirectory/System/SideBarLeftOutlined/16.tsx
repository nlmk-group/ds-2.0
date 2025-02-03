import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSideBarLeftOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2.4 14c-.385 0-.715-.147-.989-.44A1.498 1.498 0 0 1 1 12.5v-9c0-.413.137-.766.411-1.06.274-.293.604-.44.989-.44h11.2c.385 0 .715.147.989.44.274.294.411.647.411 1.06v9c0 .412-.137.766-.411 1.06-.274.293-.604.44-.989.44H2.4Zm4.2-1.5h7v-9h-7v9Zm-1.4 0v-9H2.4v9h2.8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSideBarLeftOutlined16;
