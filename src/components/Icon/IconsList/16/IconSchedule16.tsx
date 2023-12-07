import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSchedule16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M7.993 1C4.129 1 1 4.136 1 8C1 11.864 4.129 15 7.993 15C11.864 15 15 11.864 15 8C15 4.136 11.864 1 7.993 1ZM8 13.6C4.906 13.6 2.4 11.094 2.4 8C2.4 4.906 4.906 2.4 8 2.4C11.094 2.4 13.6 4.906 13.6 8C13.6 11.094 11.094 13.6 8 13.6ZM8.35 4.5H7.3V8.7L10.975 10.905L11.5 10.044L8.35 8.175V4.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSchedule16;
