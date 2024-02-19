import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOffOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.843 25.73A14.598 14.598 0 0 1 16 28C8.81 28 2.83 22.826 1.575 16a14.642 14.642 0 0 1 4.453-8.088L1.856 3.744l1.887-1.887 26.398 26.4-1.886 1.885-4.414-4.413h.002ZM7.913 9.8A11.954 11.954 0 0 0 4.297 16 12.006 12.006 0 0 0 21.9 23.784l-2.704-2.704a6 6 0 0 1-8.275-8.275L7.913 9.8Zm9.306 9.304-4.323-4.323a3.334 3.334 0 0 0 4.321 4.321l.002.002Zm10.524 3.018-1.908-1.906A11.912 11.912 0 0 0 27.703 16a12.004 12.004 0 0 0-14.967-8.883l-2.104-2.104A14.652 14.652 0 0 1 16 4c7.19 0 13.17 5.173 14.425 12a14.597 14.597 0 0 1-2.682 6.122ZM15.63 10.011a6 6 0 0 1 6.358 6.358l-6.36-6.358h.002Z"
      />
    </svg>
  );
};

export default IconEyeOffOutlined32;
