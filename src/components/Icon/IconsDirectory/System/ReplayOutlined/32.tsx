import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReplayOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m9.2 9 7 7v-5.6c4.634 0 8.4 3.766 8.4 8.4s-3.766 8.4-8.4 8.4-8.4-3.766-8.4-8.4H5C5 24.988 10.012 30 16.2 30s11.2-5.012 11.2-11.2S22.388 7.6 16.2 7.6V2l-7 7Z"
      />
    </svg>
  );
};

export default IconReplayOutlined32;
