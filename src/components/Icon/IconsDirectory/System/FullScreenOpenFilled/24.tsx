import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenOpenFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.857 0H0v9.857h5.143V5.143h4.714V0ZM24 0h-9.857v5.143h4.714v4.714H24V0ZM5.143 14.143H0V24h9.857v-5.143H5.143v-4.714Zm18.857 0h-5.143v4.714h-4.714V24H24v-9.857Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullScreenOpenFilled24;
