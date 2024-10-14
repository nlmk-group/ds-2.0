import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconIsReady32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m7.98 14.186 1.945-1.945 5.14 5.14L27.824 4.62l1.945 1.944L15.065 21.27 7.98 14.186ZM20 6.25H4.25v19.5h23.5V14H30v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16v2.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIsReady32;
