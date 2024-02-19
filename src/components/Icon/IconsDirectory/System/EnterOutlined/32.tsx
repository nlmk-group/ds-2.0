import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnterOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M12.55 3h11.91c1.4 0 2.55 1.14 2.55 2.56v20.91c0 1.41-1.15 2.53-2.55 2.53H12.55c-1.4 0-2.55-1.13-2.55-2.53V20h2.55v6.48h11.91V5.53H12.55V12H10V5.56C10 4.15 11.15 3 12.55 3Zm8.27 13-5.09 5.12v-3.84H4v-2.56h11.73v-3.84L20.82 16Z"
      />
    </svg>
  );
};

export default IconEnterOutlined32;
