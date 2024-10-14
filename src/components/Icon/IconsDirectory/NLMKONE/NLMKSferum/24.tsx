import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNLMKSferum24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12 3c3.12 0 5.87 1.588 7.485 4H21.8A11 11 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11a11 11 0 0 0 9.8-6h-2.316A9 9 0 1 1 12 3Zm0 16a6.977 6.977 0 0 0 4.899-2H12a5 5 0 0 1 0-10h4.899A7 7 0 1 0 12 19ZM10 8h5v2h-3v1h2v2h-2v3h-2V8Zm6 0h5v2h-3v1h2v2h-2v1h3v2h-5V8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNLMKSferum24;
