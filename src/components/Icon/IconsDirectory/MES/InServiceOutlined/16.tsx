import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInServiceOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.958 6.937v6.896a.834.834 0 0 1-.833.834h-1a.833.833 0 0 1-.833-.834V6.937a3 3 0 0 1 .666-5.612V4.25l.667.417.667-.417V1.325a3 3 0 0 1 .666 5.612Zm0-4.497v2.31l-1.333.833-1.333-.833V2.44a2.244 2.244 0 0 0 0 3.62l.583.346a.55.55 0 0 0 .083.035v6.976a.5.5 0 0 0 .5.5h.334a.5.5 0 0 0 .5-.5V6.44a.599.599 0 0 0 .083-.035l.583-.347a2.245 2.245 0 0 0 0-3.618ZM7.625 10a2 2 0 0 0 1.917-1.43v1.738A3 3 0 1 1 7.867 5.01c.078.385.215.755.406 1.098A2 2 0 1 0 7.625 10Zm.5-8h-1l-.15 1.8a4.228 4.228 0 0 0-1.782.716L3.867 3.393l-.708.708 1.103 1.302a4.227 4.227 0 0 0-.837 1.947l-1.8.15v1l1.8.15c.104.675.37 1.315.775 1.865l-1.124 1.327.707.707 1.328-1.123c.55.404 1.19.67 1.864.774l.15 1.8h1l.15-1.802a4.23 4.23 0 0 0 1.267-.405v1.001a5.377 5.377 0 0 1-.391.14l-.193 1.733H6.292l-.127-1.716a5.24 5.24 0 0 1-.928-.37l-1.41 1.128-.25-.25-.004.004-1.414-1.414.003-.004-.222-.222 1.157-1.342a5.145 5.145 0 0 1-.427-1.02L.958 9.332V6.667l1.732-.193a5.13 5.13 0 0 1 .43-.992L2.011 4.096 3.897 2.21 5.28 3.402a5.21 5.21 0 0 1 .885-.354l.127-1.715h2.666l.017.149a3.84 3.84 0 0 0-.801 1.099L8.125 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInServiceOutlined16;
