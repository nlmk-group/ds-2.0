import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTrendIndicatorNormal24: FC<IIconsProps> = ({
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
        d="M16.0482 6.2014C15.8827 6.01522 15.6194 5.95067 15.3865 6.03919C15.1537 6.12772 14.9997 6.35091 14.9997 6.60002V9.59988L3.49719 11.4087C3.2098 11.4587 3 11.7081 3 11.9998C3 12.2915 3.2098 12.5409 3.49719 12.5909L14.9997 14.3998V17.3999C14.9997 17.649 15.1537 17.8722 15.3865 17.9607C15.6194 18.0492 15.8827 17.9847 16.0482 17.7985L20.8481 12.3986C21.0502 12.1712 21.0502 11.8287 20.8481 11.6013L16.0482 6.2014Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTrendIndicatorNormal24;
