import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHeartFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.018 29h-.036a.65.65 0 0 1-.39-.131c-.374-.28-9.212-6.9-12.468-12.485l-.013-.023A8.454 8.454 0 0 1 2 12.156C2 7.659 5.484 4 9.766 4c2.479 0 4.78 1.237 6.234 3.292C17.453 5.237 19.756 4 22.235 4 26.515 4 30 7.659 30 12.156c0 1.486-.384 2.94-1.11 4.205l-.014.023C25.62 21.97 16.782 28.59 16.407 28.87a.647.647 0 0 1-.39.13Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHeartFilled32;
