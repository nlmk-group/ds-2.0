import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFunctionOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.667 12v-1.333H7.7l1.75-2-1.75-2H6.6L5.533 12.4c-.089.5-.294.892-.616 1.175-.323.283-.734.425-1.234.425s-.905-.133-1.216-.4C2.156 13.333 2 12.978 2 12.533c0-.355.094-.641.283-.858A.91.91 0 0 1 3 11.35c.278 0 .514.094.708.283a.918.918 0 0 1 .292.684 1.22 1.22 0 0 1-.033.3.235.235 0 0 0 .141-.092.56.56 0 0 0 .092-.208l1.033-5.65h-1.9V5.333h2.15l.35-1.9c.078-.422.286-.766.625-1.033.34-.267.742-.4 1.209-.4.489 0 .889.144 1.2.433.31.29.466.65.466 1.084 0 .333-.094.608-.283.825a.91.91 0 0 1-.717.325.979.979 0 0 1-.708-.284.937.937 0 0 1-.292-.7 1.217 1.217 0 0 1 .034-.3.299.299 0 0 0-.15.1.568.568 0 0 0-.084.2l-.283 1.65H10v1.334h-.533l.866.983.867-.983h-.533V5.333H14v1.334h-1.033l-1.75 2 1.75 2H14V12h-3.333v-1.333h.533l-.867-1-.866 1H10V12H6.667Z"
      />
    </svg>
  );
};

export default IconFunctionOutlined16;
