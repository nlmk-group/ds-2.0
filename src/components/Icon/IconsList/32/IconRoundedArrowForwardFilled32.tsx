import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowForwardFilled32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M21.1053 9.1H14.5263C10.1662 9.1 6.63158 12.7265 6.63158 17.2C6.63158 21.6735 10.1662 25.3 14.5263 25.3H26.3684V28H14.5263C8.71279 28 4 23.1647 4 17.2C4 11.2353 8.71279 6.4 14.5263 6.4H21.1053V1L29 7.75L21.1053 14.5V9.1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowForwardFilled32;
