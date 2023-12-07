import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterCalendarClearToday16: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9 1.4H13.6C14.37 1.4 15 2.03 15 2.8V14C15 14.77 14.37 15.4 13.6 15.4H2.4C1.63 15.4 1 14.77 1 14V2.8C1 2.03 1.63 1.4 2.4 1.4H3.1V0H4.5V1.4H11.5V0H12.9V1.4ZM2.4 14H13.6V4.9H2.4V14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterCalendarClearToday16;
