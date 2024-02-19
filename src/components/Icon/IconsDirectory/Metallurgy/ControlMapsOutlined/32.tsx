import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.267 22.48c.881 0 1.66-.543 2.025-1.324l15.254 4.604c.253 1 1.144 1.74 2.197 1.74 1.235 0 2.257-1.042 2.257-2.323a2.36 2.36 0 0 0-1.397-2.156l-.425-10.469c.86-.323 1.488-1.187 1.488-2.198 0-1.281-1.012-2.323-2.247-2.323a2.25 2.25 0 0 0-1.944 1.136L15.033 6.78c0-1.229-1.012-2.281-2.247-2.281-1.245 0-2.267 1.052-2.267 2.333 0 .688.293 1.313.759 1.74l-4.687 9.27c-.111-.02-.212-.02-.324-.02C5.022 17.823 4 18.865 4 20.146s1.022 2.333 2.267 2.333Zm6.52-13.313a2.22 2.22 0 0 0 1.811-.97l8.563 2.428c.102.927.75 1.698 1.59 1.958l.364 10.344a2.363 2.363 0 0 0-1.478 1.375L8.484 19.72a2.378 2.378 0 0 0-.567-1.157l4.697-9.406c.05 0 .111.01.172.01Z"
      />
    </svg>
  );
};

export default IconControlMapsOutlined32;
