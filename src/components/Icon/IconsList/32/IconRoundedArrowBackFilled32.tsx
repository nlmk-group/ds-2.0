import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowBackFilled32: FC<IIconsProps> = ({
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
        d="M10.8947 9.1V14.5L3 7.75L10.8947 1V6.4H17.4737C23.2872 6.4 28 11.2353 28 17.2C28 23.1647 23.2872 28 17.4737 28H5.63158V25.3H17.4737C21.8338 25.3 25.3684 21.6735 25.3684 17.2C25.3684 12.7265 21.8338 9.1 17.4737 9.1H10.8947Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowBackFilled32;
