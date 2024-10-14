import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToRepairOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M11.634 9.386 14.11 6.91a3.684 3.684 0 0 1-4.265 5.448l-2.534 2.535a.838.838 0 0 1-1.184 0l-1.184-1.184a.838.838 0 0 1 0-1.184L7.477 9.99a3.683 3.683 0 0 1 5.449-4.264L10.45 8.202l.236.947.948.237Zm-.208-3.344a2.847 2.847 0 0 0-2.96 4.144L5.891 12.76a.503.503 0 0 0 0 .71l.474.474a.502.502 0 0 0 .71 0L9.65 11.37a2.846 2.846 0 0 0 4.144-2.96l-1.924 1.923-1.957-.418-.41-1.95 1.923-1.923Zm-8.301.333L4 5.5H1.25V3.25H4l-.875-.875L4.75.75l3.625 3.625L4.75 8 3.125 6.375Zm1.625-4.5-.5.5L5.875 4H2v.75h3.875L4.25 6.375l.5.5 2.5-2.5-2.5-2.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToRepairOutlined16;
