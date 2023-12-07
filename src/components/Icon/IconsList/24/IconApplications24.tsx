import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconApplications24: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.875 7.5C4.875 6.8775 5.3775 6.375 6 6.375C6.6225 6.375 7.125 6.8775 7.125 7.5C7.125 8.1225 6.6225 8.625 6 8.625C5.3775 8.625 4.875 8.1225 4.875 7.5ZM4.875 12C4.875 11.3775 5.3775 10.875 6 10.875C6.6225 10.875 7.125 11.3775 7.125 12C7.125 12.6225 6.6225 13.125 6 13.125C5.3775 13.125 4.875 12.6225 4.875 12ZM6 15.375C5.3775 15.375 4.875 15.885 4.875 16.5C4.875 17.115 5.385 17.625 6 17.625C6.615 17.625 7.125 17.115 7.125 16.5C7.125 15.885 6.6225 15.375 6 15.375ZM18.75 17.25H8.25V15.75H18.75V17.25ZM8.25 12.75H18.75V11.25H8.25V12.75ZM8.25 8.25V6.75H18.75V8.25H8.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconApplications24;
