import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHourglassEmptyOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4 1v4.2h.007L4 5.207 6.8 8 4 10.8l.007.007H4V15h8.4v-4.193h-.007l.007-.007L9.6 8l2.8-2.793-.007-.007h.007V1H4Zm7 10.15v2.45H5.4v-2.45l2.8-2.8 2.8 2.8Zm-2.8-3.5-2.8-2.8V2.4H11v2.45l-2.8 2.8Z"
      />
    </svg>
  );
};

export default IconHourglassEmptyOutlined16;
