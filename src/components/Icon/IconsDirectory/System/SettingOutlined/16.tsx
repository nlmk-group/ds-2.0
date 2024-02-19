import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.222 11.33a6.679 6.679 0 0 1-.652-1.55 2 2 0 0 0 .001-3.564 6.66 6.66 0 0 1 1.667-2.892 2 2 0 0 0 3.088-1.782 6.66 6.66 0 0 1 3.337.001 2 2 0 0 0 3.088 1.781 6.69 6.69 0 0 1 1.669 2.891 2 2 0 0 0-.002 3.564 6.66 6.66 0 0 1-1.667 2.892 1.998 1.998 0 0 0-3.087 1.782 6.658 6.658 0 0 1-3.338-.001 2 2 0 0 0-3.088-1.781 6.679 6.679 0 0 1-1.016-1.34Zm3.773.131a3.328 3.328 0 0 1 1.5 1.847 5.32 5.32 0 0 0 1 0 3.33 3.33 0 0 1 1.5-1.846 3.328 3.328 0 0 1 2.35-.377c.193-.272.36-.562.498-.865a3.328 3.328 0 0 1-.848-2.222c0-.84.313-1.625.848-2.223a5.419 5.419 0 0 0-.5-.865 3.328 3.328 0 0 1-3.848-2.223 5.324 5.324 0 0 0-1 0 3.329 3.329 0 0 1-1.5 1.846c-.71.41-1.547.545-2.35.377a5.35 5.35 0 0 0-.499.865c.547.611.85 1.402.849 2.223 0 .84-.313 1.624-.849 2.222.14.303.307.593.5.865a3.328 3.328 0 0 1 2.349.376Zm2-1.464a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-1.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
      />
    </svg>
  );
};

export default IconSettingOutlined16;
