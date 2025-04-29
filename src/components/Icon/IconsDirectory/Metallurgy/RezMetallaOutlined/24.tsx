import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRezMetallaOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6.4 5A1.6 1.6 0 0 1 8 3.4h8A1.6 1.6 0 0 1 17.6 5v3h-1.2V5a.4.4 0 0 0-.4-.4H8a.4.4 0 0 0-.4.4v3H6.4V5ZM17.6 19a1.6 1.6 0 0 1-1.6 1.6H8A1.6 1.6 0 0 1 6.4 19v-3h1.2v3c0 .22.18.4.4.4h8a.4.4 0 0 0 .4-.4v-3h1.2v3ZM3.2 11.2v1.6h5.38l-1.782-1.425a.8.8 0 0 0-.5-.175H3.2Zm4.348-.762A2 2 0 0 0 6.298 10H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9l-4.452-3.562ZM20.8 12.8v-1.6h-5.38l1.782 1.425a.8.8 0 0 0 .5.175H20.8Zm-4.348.762a2 2 0 0 0 1.25.438H21a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-9l4.452 3.562Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRezMetallaOutlined24;
