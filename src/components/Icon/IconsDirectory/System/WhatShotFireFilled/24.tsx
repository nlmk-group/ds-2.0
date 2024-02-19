import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWhatShotFireFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.24 5.95c0-2.217-.74-4.95-.74-4.95C17.41 4.228 20 9.19 20 14.749 20 19.308 16.42 23 12 23s-8-3.692-8-8.251c0-3.487 1.21-6.694 3.23-9.17l-.03.372c0 2.124 1.56 3.847 3.63 3.847 2.06 0 3.41-1.723 3.41-3.847ZM9.4 16.369c0-1.29.81-2.197 2.17-2.486 1.37-.288 2.78-.959 3.57-2.063.31 1.032.46 2.115.46 3.218 0 2.115-1.66 3.827-3.71 3.827a2.488 2.488 0 0 1-2.49-2.496Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWhatShotFireFilled24;
