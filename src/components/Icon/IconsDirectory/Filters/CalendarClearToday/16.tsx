import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarClearToday16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9 1.4h.7c.77 0 1.4.63 1.4 1.4V14c0 .77-.63 1.4-1.4 1.4H2.4c-.77 0-1.4-.63-1.4-1.4V2.8c0-.77.63-1.4 1.4-1.4h.7V0h1.4v1.4h7V0h1.4v1.4ZM2.4 14h11.2V4.9H2.4V14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCalendarClearToday16;
