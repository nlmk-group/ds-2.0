import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowBackOutlined32: FC<IIconsProps> = ({
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
        d="M8.03684 9.05263L11.3737 12.4848L9.51316 14.3985L3 7.69925L9.51316 1L11.3737 2.91368L8.03684 6.34586H17.4737C23.2872 6.34586 28 11.1933 28 17.1729C28 23.1526 23.2872 28 17.4737 28H5.63158V25.2932H17.4737C21.8338 25.2932 25.3684 21.6576 25.3684 17.1729C25.3684 12.6882 21.8338 9.05263 17.4737 9.05263H8.03684Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowBackOutlined32;
