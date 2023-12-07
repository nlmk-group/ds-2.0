import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Bunker24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0913 12.5L8 7.44422L9.45436 6L16 12.5L9.45436 19L8 17.5558L13.0913 12.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Bunker24;
