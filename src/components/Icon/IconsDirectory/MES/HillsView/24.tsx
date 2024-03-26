import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHillsView24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21.873 17H23a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h1.073L5.69 8.96c.507-1.126 2.118-1.092 2.576.055l.758 1.894 2.152-5.281c.482-1.183 2.166-1.156 2.61.042l2.32 6.266.178-.473c.423-1.128 1.979-1.23 2.546-.167L21.873 17Zm-3.89 0h2.077l-2.433-4.561-.67 1.79L17.982 17ZM3.827 17h2.717l1.612-3.957-1.2-2.997L3.828 17Zm4.444 0h8.006L12.464 6.708 8.271 17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHillsView24;
