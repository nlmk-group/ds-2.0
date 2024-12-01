import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRadarChart16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.094 3.153c0 .27.092.518.246.714L5.856 7.77a1.152 1.152 0 1 0 1.129 1.64h2.52a1.151 1.151 0 1 0 2.027-1.087L12.678 6.6A1.152 1.152 0 0 0 14 5.46a1.152 1.152 0 0 0-1.82-.94L9.377 2.94a1.152 1.152 0 0 0-2.282.212Zm1.15 1.154c.345 0 .654-.152.865-.392l2.592 1.46a1.15 1.15 0 0 0 .163.682l-1.146 1.722a1.151 1.151 0 0 0-1.213.65h-2.52a1.156 1.156 0 0 0-.214-.31l1.45-3.813h.024ZM5.92 3.972l-.108.284-.037.097-1.956 1.132a1.334 1.334 0 0 0-.666 1.155v3.793c0 .477.254.917.666 1.155l3.279 1.897c.412.238.919.238 1.33 0l3.28-1.897c.411-.238.665-.678.665-1.155V9.345l.307-.462.69-1.033c.053-.008.104-.017.155-.029V11.1c0 .476-.253.917-.665 1.155l-4.431 2.563a1.329 1.329 0 0 1-1.331 0l-4.432-2.563A1.334 1.334 0 0 1 2 11.1V5.973c0-.476.254-.917.665-1.155l3.11-1.798a2.029 2.029 0 0 0 .144.952Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRadarChart16;
