import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReplayOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.1 4.5 7.6 8V5.2c2.317 0 4.2 1.883 4.2 4.2s-1.883 4.2-4.2 4.2a4.203 4.203 0 0 1-4.2-4.2H2C2 12.494 4.506 15 7.6 15s5.6-2.506 5.6-5.6-2.506-5.6-5.6-5.6V1L4.1 4.5Z"
      />
    </svg>
  );
};

export default IconReplayOutlined16;
