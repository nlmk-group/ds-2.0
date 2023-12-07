import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterLessOrEqual24: FC<IIconsProps> = ({
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
        d="M19 20.1082H5.27978L5.27978 17.9602L19 17.9602V20.1082ZM19 17.0001L4.99988 9.99998L19 2.99992V5.57059L10.1412 9.99998L19 14.4294V17.0001Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterLessOrEqual24;
