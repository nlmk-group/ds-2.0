import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconASIImplementationOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 1h9.709v3.245H9.582V2.126H2.126v7.456h2.12v1.127H1V1Zm10.755 4.291H15V15H5.291v-3.245h1.127v2.119h7.456V6.418h-2.12V5.29Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.291 5.291h3.245v1.127H6.418v2.118H5.29V5.291Zm5.419 5.418V7.464H9.582v2.118H7.464v1.127h3.245Z"
      />
    </svg>
  );
};

export default IconASIImplementationOutlined16;
