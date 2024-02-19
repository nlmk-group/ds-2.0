import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm15.714 2.143H8.571v1.714h11.143V5.143ZM6.857 4.714H4.286v2.572h2.571V4.714Zm0 6H4.286v2.572h2.571v-2.572Zm0 6H4.286v2.572h2.571v-2.572Zm12.857-5.571H8.571v1.714h11.143v-1.714Zm0 6H8.571v1.714h11.143v-1.714Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListFilled24;
