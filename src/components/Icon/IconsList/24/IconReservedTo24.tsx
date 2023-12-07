import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconReservedTo24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M7 14C7 15.3845 7.41054 16.7378 8.17971 17.889C8.94888 19.0401 10.0421 19.9373 11.3212 20.4672C12.6003 20.997 14.0078 21.1356 15.3656 20.8655C16.7235 20.5954 17.9708 19.9287 18.9497 18.9497C19.9287 17.9708 20.5954 16.7235 20.8655 15.3656C21.1356 14.0078 20.997 12.6003 20.4672 11.3212C19.9373 10.0421 19.0401 8.94888 17.889 8.17971C16.7378 7.41054 15.3845 7 14 7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M14 9V14H18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.58579 5.70711L6.29289 3.41421L7.70711 2L12.4142 6.70711L7.70711 11.4142L6.29289 10L8.58578 7.70711H2V5.70711H8.58579Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReservedTo24;
