import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWhatShotFireOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.531 1s.509 1.74.509 3.15c0 1.353-.928 2.449-2.344 2.449C5.273 6.599 4.2 5.503 4.2 4.15l.02-.236A8.795 8.795 0 0 0 2 9.75C2 12.65 4.461 15 7.5 15S13 12.65 13 9.75C13 6.21 11.22 3.053 8.531 1ZM7.204 9.198c-.935.184-1.491.761-1.491 1.582 0 .88.763 1.588 1.711 1.588 1.41 0 2.551-1.09 2.551-2.435 0-.702-.103-1.392-.316-2.048-.543.702-1.513 1.13-2.455 1.313Zm-3.829.551c0 2.173 1.85 3.938 4.125 3.938 2.276 0 4.125-1.765 4.125-3.938 0-1.68-.454-3.301-1.3-4.745-.364 1.706-1.8 2.907-3.63 2.907a3.932 3.932 0 0 1-2.729-1.07 7.493 7.493 0 0 0-.591 2.908Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWhatShotFireOutlined16;
