import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconLessThanOrEqualTo24: FC<IIconsProps> = ({
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
        d="M17.6067 19.9295L4.83195 19.9295V17.9295L17.6067 17.9295V19.9295ZM17.6067 17.0354L4.5713 10.5177L17.6067 4V6.39355L9.35841 10.5177L17.6067 14.6418V17.0354Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLessThanOrEqualTo24;
