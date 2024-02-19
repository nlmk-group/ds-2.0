import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMixer24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.25 10.43V7.849a4.217 4.217 0 0 0-.863 8.048 4.218 4.218 0 0 0 4.595-6.88l1.061-1.06a5.72 5.72 0 0 1 .712 7.22 5.716 5.716 0 0 1-6.943 2.106 5.72 5.72 0 0 1-1.44-9.704 5.717 5.717 0 0 1 2.878-1.248V3.415A8.615 8.615 0 0 0 4.4 16.061a8.62 8.62 0 0 0 10.103 4.186 8.613 8.613 0 0 0 6.073-9.09 8.62 8.62 0 0 0-2.484-5.25l1.061-1.06a10.12 10.12 0 0 1 1.26 12.775 10.113 10.113 0 0 1-12.284 3.725 10.12 10.12 0 0 1-6.052-11.322A10.114 10.114 0 0 1 5.58 4.18c2.098-1.723 4.54-2.247 7.169-2.296v8.524a1.75 1.75 0 1 1-1.5.023Z"
      />
    </svg>
  );
};

export default IconMixer24;
