import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWarningFilled24: FC<IIconsProps> = ({
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
        d="M1 22H23L12 3L1 22ZM13 19H11V17H13V19ZM13 15H11V11H13V15Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWarningFilled24;
