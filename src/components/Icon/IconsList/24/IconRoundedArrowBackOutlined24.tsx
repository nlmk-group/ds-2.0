import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowBackOutlined24: FC<IIconsProps> = ({
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
        d="M5.828 6.96491L8.364 9.50727L6.95 10.9248L2 5.96241L6.95 1L8.364 2.41754L5.828 4.9599H13C17.4183 4.9599 21 8.5506 21 12.9799C21 17.4093 17.4183 21 13 21H4V18.995H13C16.3137 18.995 19 16.302 19 12.9799C19 9.65794 16.3137 6.96491 13 6.96491H5.828Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowBackOutlined24;
