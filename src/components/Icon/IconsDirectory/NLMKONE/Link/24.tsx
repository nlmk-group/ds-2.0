import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLink24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.201 4.8a2.728 2.728 0 0 0-3.858 0l-3.954 3.953L9.974 7.34l3.955-3.954a4.728 4.728 0 0 1 6.686 6.686l-3.954 3.955-1.414-1.415L19.2 8.657a2.728 2.728 0 0 0 0-3.858Zm-2.539 2.539a1 1 0 0 1 0 1.414l-7.908 7.909a1 1 0 0 1-1.414-1.415l7.908-7.908a1 1 0 0 1 1.414 0Zm-7.909 4.05L4.8 15.343A2.728 2.728 0 0 0 8.657 19.2l3.954-3.954 1.415 1.414-3.955 3.954a4.728 4.728 0 0 1-6.686-6.686l3.954-3.955 1.414 1.415Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLink24;
