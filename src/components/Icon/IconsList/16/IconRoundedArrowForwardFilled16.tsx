import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowForwardFilled16: FC<IIconsProps> = ({
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
        d="M10.8947 4.9H7.47368C5.20641 4.9 3.36842 6.64609 3.36842 8.8C3.36842 10.9539 5.20641 12.7 7.47368 12.7H13.6316V14H7.47368C4.45065 14 2 11.6719 2 8.8C2 5.92812 4.45065 3.6 7.47368 3.6H10.8947V1L15 4.25L10.8947 7.5V4.9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowForwardFilled16;
