import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconEducation24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#clip0_16445_298727)">
        <path
          d="M12.0771 2L0.0771484 8.66667L4.44078 11.0889V17.7556L12.0771 22L19.7135 17.7556V11.0889L21.8953 9.87778V17.5556H24.0771V8.66667L12.0771 2ZM19.5171 8.66667L12.0771 12.8L4.63715 8.66667L12.0771 4.53333L19.5171 8.66667ZM17.5317 16.4333L12.0771 19.4667L6.6226 16.4333V12.3L12.0771 15.3333L17.5317 12.3V16.4333Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_16445_298727">
          <rect width="24" height="24" fill={htmlColor || 'currentColor'} transform="translate(0.0771484)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconEducation24;
