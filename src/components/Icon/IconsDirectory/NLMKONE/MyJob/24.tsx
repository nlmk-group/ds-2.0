import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMyJob24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.084 4.26c0-1.8 1.46-3.26 3.26-3.26h11.48c1.8 0 3.26 1.46 3.26 3.26v6.08c-.5-.5-1.15-.94-2-1.16V4.26c0-.7-.56-1.26-1.26-1.26H6.344c-.7 0-1.26.56-1.26 1.26v15.38c0 .7.56 1.26 1.26 1.26h4.53v2h-4.53a3.26 3.26 0 0 1-3.26-3.26V4.26Zm4.99 2.64h8v2h-8v-2Zm5 4h-5v2h5v-2Zm4.4-.2c-1.59 0-2.88 1.34-2.88 3 0 .9.38 1.7.98 2.25-1.69.61-2.9 2.28-2.9 4.25v1.5c0 .55.43 1 .96 1h7.68c.53 0 .96-.45.96-1v-1.5c0-1.97-1.21-3.64-2.9-4.25.6-.55.98-1.35.98-2.25 0-1.66-1.29-3-2.88-3Zm-.96 3c0-.55.43-1 .96-1s.96.45.96 1-.43 1-.96 1-.96-.45-.96-1Zm-1.92 6.5c0-1.38 1.07-2.5 2.4-2.5h.96c1.33 0 2.4 1.12 2.4 2.5v.5h-5.76v-.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMyJob24;
