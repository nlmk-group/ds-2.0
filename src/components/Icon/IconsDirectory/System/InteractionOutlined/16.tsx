import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInteractionOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.435 1h-5c-.687 0-1.25.6-1.25 1.333V13c0 .733.556 1.333 1.244 1.333h7.506c.688 0 1.25-.6 1.25-1.333V5l-3.75-4Zm1.25 6.667h-5V9h5V7.667Zm0 2.666h-5v1.334h5v-1.334ZM4.435 13h7.5V5.667H8.81V2.333H4.435V13Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInteractionOutlined16;
