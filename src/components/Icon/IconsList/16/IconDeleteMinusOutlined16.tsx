import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconDeleteMinusOutlined16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M20 13H13.1429H10.8571H4V11H10.8571H10.2857H12.5714H13.1429H20V13Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDeleteMinusOutlined16;
