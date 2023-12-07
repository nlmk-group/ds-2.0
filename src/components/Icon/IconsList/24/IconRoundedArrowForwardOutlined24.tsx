import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowForwardOutlined24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M18.172 6.96491H11C7.68629 6.96491 5 9.65794 5 12.9799C5 16.302 7.68629 18.995 11 18.995H20V21H11C6.58172 21 3 17.4093 3 12.9799C3 8.5506 6.58172 4.9599 11 4.9599H18.172L15.636 2.41754L17.05 1L22 5.96241L17.05 10.9248L15.636 9.50727L18.172 6.96491Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowForwardOutlined24;
