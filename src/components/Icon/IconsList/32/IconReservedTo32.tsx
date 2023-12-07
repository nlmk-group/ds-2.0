import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconReservedTo32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M9 19C9 20.9778 9.58649 22.9112 10.6853 24.5557C11.7841 26.2002 13.3459 27.4819 15.1732 28.2388C17.0004 28.9957 19.0111 29.1937 20.9509 28.8079C22.8907 28.422 24.6725 27.4696 26.0711 26.0711C27.4696 24.6725 28.422 22.8907 28.8079 20.9509C29.1937 19.0111 28.9957 17.0004 28.2388 15.1732C27.4819 13.3459 26.2002 11.7841 24.5557 10.6853C22.9112 9.58649 20.9778 9 19 9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M19 12V19H24" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12.5858 8.00002L8.29289 3.70712L9.70711 2.29291L16.4142 9.00001L9.70711 15.7071L8.29289 14.2929L12.5858 10H2V8.00002H12.5858Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReservedTo32;
