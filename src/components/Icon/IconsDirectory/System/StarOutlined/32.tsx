import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStarOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m16 21.272 5.303 3.12-1.406-5.875 4.615-3.896-6.076-.503L16 8.515l-2.437 5.603-6.075.503 4.615 3.896-1.406 5.874L16 21.271ZM7.657 28.5l2.214-9.25L2.5 13.026l9.707-.802L16 3.5l3.794 8.724 9.706.802-7.371 6.224 2.214 9.25L16 23.592 7.657 28.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStarOutlined32;
