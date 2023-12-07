import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconTelegramFilled32: FC<IIconsProps> = ({
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
        d="M28.9612 4.34368C28.4925 3.94618 27.7562 3.8893 26.995 4.19493H26.9937C26.1931 4.51618 4.33051 13.8937 3.44051 14.2768C3.27863 14.3331 1.86488 14.8606 2.01051 16.0356C2.14051 17.095 3.27676 17.5337 3.41551 17.5843L8.97365 19.4875C9.3424 20.715 10.7018 25.2437 11.0024 26.2112C11.1899 26.8144 11.4955 27.6069 12.0312 27.77C12.5012 27.9512 12.9687 27.7856 13.2712 27.5481L16.6693 24.3962L22.1549 28.6744L22.2856 28.7525C22.6581 28.9175 23.0149 29 23.3556 29C23.6187 29 23.8712 28.9506 24.1124 28.8519C24.9343 28.5144 25.2631 27.7312 25.2975 27.6425L29.395 6.34431C29.645 5.2068 29.2975 4.62805 28.9612 4.34368ZM13.8755 20.2487L12.0005 25.2487L10.1255 18.9987L24.5006 8.37369L13.8755 20.2487Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTelegramFilled32;
