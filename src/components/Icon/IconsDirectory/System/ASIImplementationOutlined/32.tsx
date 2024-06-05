import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconASIImplementationOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 2h19.418v6.49h-2.253V4.253H4.253v14.912H8.49v2.253H2V2Zm21.51 8.582H30V30H10.582v-6.49h2.253v4.237h14.912V12.835H23.51v-2.253Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.582 10.582h6.49v2.253h-4.237v4.238h-2.253v-6.49Zm10.837 10.836v-6.49h-2.253v4.237h-4.238v2.253h6.49Z"
      />
    </svg>
  );
};

export default IconASIImplementationOutlined32;
