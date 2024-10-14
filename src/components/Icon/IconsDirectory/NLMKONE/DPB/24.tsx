import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDPB24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.52 21H14v-2.4H9.52c-.933 0-1.727-.35-2.38-1.05-.653-.7-.98-1.55-.98-2.55V7.59L8.4 9.6l1.68-1.8L5.04 3 0 7.8l1.68 1.8 2.24-2.01V15c0 1.66.546 3.075 1.638 4.245C6.65 20.415 7.971 21 9.52 21Zm4.96-18H10v2.4h4.48c.933 0 1.727.35 2.38 1.05.653.7.98 1.55.98 2.55v7.41L15.6 14.4l-1.68 1.8 5.04 4.8L24 16.2l-1.68-1.8-2.24 2.01V9c0-1.66-.546-3.075-1.638-4.245C17.35 3.585 16.029 3 14.48 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDPB24;
