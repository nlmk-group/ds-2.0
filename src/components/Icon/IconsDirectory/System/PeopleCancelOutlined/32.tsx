import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCancelOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M20.162 10.154c0 3.4-2.709 6.154-6.054 6.154s-6.054-2.754-6.054-6.154S10.764 4 14.108 4c3.345 0 6.054 2.754 6.054 6.154Zm-3.027 0c0-1.693-1.362-3.077-3.027-3.077s-3.027 1.384-3.027 3.077c0 1.692 1.362 3.077 3.027 3.077s3.027-1.385 3.027-3.077ZM5.027 25.538c.303-.969 3.89-2.584 7.507-2.984l3.088-3.077a13.92 13.92 0 0 0-1.514-.092C10.067 19.385 2 21.446 2 25.538v3.077h13.622l-3.027-3.076H5.027Zm18.919-4.861 3.92-3.985L30 18.862l-3.92 3.984L30 26.831 27.866 29l-3.92-3.985L20.026 29l-2.134-2.17 3.92-3.984-3.92-3.985 2.134-2.169 3.92 3.985Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCancelOutlined32;
