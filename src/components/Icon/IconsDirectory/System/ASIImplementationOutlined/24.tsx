import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconASIImplementationOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 2h13.87v4.636h-1.61V3.609H3.61v10.652h3.026v1.609H2V2Zm15.364 6.13H22V22H8.13v-4.636h1.61v3.027h10.65V9.739h-3.026V8.13Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.13 8.13h4.636v1.61H9.74v3.026H8.13V8.13Zm7.74 7.74v-4.636h-1.609v3.027h-3.027v1.609h4.636Z"
      />
    </svg>
  );
};

export default IconASIImplementationOutlined24;
