import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArmaturaFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.015 3.198c1.54 1.54 2.085 3.491 1.217 4.359-.867.867-2.818.322-4.358-1.218C9.334 4.8 8.79 2.85 9.657 1.981c.867-.867 2.819-.322 4.358 1.217ZM9.253 6.46v7.09l4.325-4.319a4.577 4.577 0 0 1-.622-.128c-1.041-.291-2.103-.946-3-1.844a8.215 8.215 0 0 1-.703-.8Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.253 3.306c.073.924.649 2.061 1.621 3.033 1.54 1.54 3.49 2.085 4.358 1.218.868-.868.323-2.819-1.217-4.359-.733-.733-1.56-1.24-2.318-1.477l-2.025.246-.015.014c-.24.24-.372.563-.404.938v.387Zm-1.3.354L6.122 5.49v10.038c.565.089 1.144.008 1.564-.413l.267-.266V3.66ZM2.088 9.516l2.734-2.73v8.268a6.89 6.89 0 0 1-1.516-1.157c-.671-.67-1.211-1.464-1.48-2.227-.254-.723-.308-1.584.262-2.154Z"
      />
    </svg>
  );
};

export default IconArmaturaFilled16;
