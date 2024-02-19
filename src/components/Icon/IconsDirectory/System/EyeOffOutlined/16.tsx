import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOffOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.921 12.865A7.336 7.336 0 0 1 .787 8a7.321 7.321 0 0 1 2.227-4.044L.928 1.872l.943-.943 13.2 13.2-.944.942-2.206-2.206ZM3.957 4.9A5.977 5.977 0 0 0 2.149 8a6.003 6.003 0 0 0 8.8 3.892L9.597 10.54A3 3 0 0 1 5.46 6.403L3.957 4.9Zm4.652 4.652L6.448 7.391a1.667 1.667 0 0 0 2.16 2.16l.001.001Zm5.262 1.51-.954-.954A5.958 5.958 0 0 0 13.851 8a6.004 6.004 0 0 0-7.483-4.441L5.316 2.507A7.336 7.336 0 0 1 15.213 8a7.299 7.299 0 0 1-1.342 3.061ZM7.815 5.004a3 3 0 0 1 3.18 3.18l-3.18-3.18Z"
      />
    </svg>
  );
};

export default IconEyeOffOutlined16;
