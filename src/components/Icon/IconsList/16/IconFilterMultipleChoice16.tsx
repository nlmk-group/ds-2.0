import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterMultipleChoice16: FC<IIconsProps> = ({
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
        d="M15 5.149H8.7V6.549H15V5.149ZM15 10.749H8.7V12.149H15V10.749ZM3.478 7.949L1 5.471L1.987 4.484L3.471 5.968L6.439 3L7.426 3.987L3.478 7.949ZM3.478 13.549L1 11.071L1.987 10.084L3.471 11.568L6.439 8.6L7.426 9.587L3.478 13.549Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterMultipleChoice16;
