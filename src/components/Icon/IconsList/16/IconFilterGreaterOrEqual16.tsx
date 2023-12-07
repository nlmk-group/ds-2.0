import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterGreaterOrEqual16: FC<IIconsProps> = ({
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
        d="M3.0001 14.4421L13.1265 14.4421V12.7544L3.0001 12.7544V14.4421ZM3.0001 12L14 6.50001L3.0001 1.00004V3.01986L9.96041 6.50001L3.0001 9.98017V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterGreaterOrEqual16;
