import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRightColumnArrowOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M13.444 2H15v12h-1.556V2ZM8.778 7.25V5l3.11 3-3.11 3V8.75H1v-1.5h7.778Z"
      />
    </svg>
  );
};

export default IconRightColumnArrowOutlined16;
