import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWhatShotFireFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.04 4.15c0-1.41-.509-3.15-.509-3.15C12.22 3.054 14 6.211 14 9.75c0 2.9-2.461 5.25-5.5 5.25S3 12.65 3 9.75a8.8 8.8 0 0 1 2.22-5.836l-.02.236c0 1.353 1.072 2.45 2.496 2.45 1.416 0 2.344-1.096 2.344-2.449Zm-3.327 6.63c0-.82.556-1.398 1.491-1.582.942-.184 1.912-.61 2.455-1.313.213.656.316 1.346.316 2.048 0 1.345-1.141 2.435-2.55 2.435-.95 0-1.712-.709-1.712-1.588Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWhatShotFireFilled16;
