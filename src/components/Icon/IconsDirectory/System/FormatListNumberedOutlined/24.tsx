import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListNumberedOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 8H3V5H2V4h2v4Zm0 9.5V17H2v-1h3v4H2v-1h2v-.5H3v-1h1ZM2 11h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1Zm5-4V5h14v2H7Zm0 12h14v-2H7v2Zm14-6H7v-2h14v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListNumberedOutlined24;
