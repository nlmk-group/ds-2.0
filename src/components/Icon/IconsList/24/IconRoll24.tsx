import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconRoll24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.625C9.58375 7.625 7.625 9.58375 7.625 12C7.625 14.4162 9.58375 16.375 12 16.375C14.4162 16.375 16.375 14.4162 16.375 12C16.375 9.58375 14.4162 7.625 12 7.625ZM6.625 12C6.625 9.03147 9.03147 6.625 12 6.625C14.9685 6.625 17.375 9.03147 17.375 12C17.375 14.9685 14.9685 17.375 12 17.375C9.03147 17.375 6.625 14.9685 6.625 12Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoll24;
