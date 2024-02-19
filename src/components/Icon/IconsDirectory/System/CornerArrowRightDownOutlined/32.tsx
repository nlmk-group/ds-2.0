import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightDownOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.707 6.104C12.423 6.001 10.79 6 8.534 6H4a1 1 0 0 1 0-2h4.578c2.202 0 3.916 0 5.29.11 1.394.113 2.527.344 3.546.854a8.94 8.94 0 0 1 3.935 3.876c.522 1.008.758 2.129.872 3.505.112 1.355.112 3.043.112 5.21v6.057l4.966-4.887A1 1 0 0 1 28.7 20.15l-6.666 6.563a1 1 0 0 1-1.403 0l-6.667-6.563a1 1 0 0 1 1.403-1.425l4.965 4.887V17.6c0-2.222 0-3.827-.105-5.09-.104-1.25-.305-2.074-.655-2.75a6.938 6.938 0 0 0-3.056-3.008c-.693-.347-1.536-.546-2.81-.648Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowRightDownOutlined32;
