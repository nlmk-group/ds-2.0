import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowForwardOutlined32: FC<IIconsProps> = ({
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
        d="M23.9632 9.05263H14.5263C10.1662 9.05263 6.63158 12.6882 6.63158 17.1729C6.63158 21.6576 10.1662 25.2932 14.5263 25.2932H26.3684V28H14.5263C8.71279 28 4 23.1526 4 17.1729C4 11.1933 8.71279 6.34586 14.5263 6.34586H23.9632L20.6263 2.91368L22.4868 1L29 7.69925L22.4868 14.3985L20.6263 12.4848L23.9632 9.05263Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowForwardOutlined32;
