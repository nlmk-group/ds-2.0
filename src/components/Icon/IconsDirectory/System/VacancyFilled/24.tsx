import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVacancyFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m22.314 20.899-4.283-4.282A8.96 8.96 0 0 0 20 11c0-4.968-4.032-9-9-9s-9 4.032-9 9 4.032 9 9 9a8.96 8.96 0 0 0 5.617-1.969l4.282 4.283 1.415-1.415ZM8.251 8.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 1 1-5.5 0Zm-.786 5.786a4.998 4.998 0 0 1-.871-1.173c1.228-.782 3.208-1.175 4.407-1.175 1.199 0 3.177.392 4.406 1.174a5.002 5.002 0 0 1-7.942 1.174Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVacancyFilled24;
