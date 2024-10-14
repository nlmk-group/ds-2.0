import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestion24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.88 12.03c.32-.25.74-.59 1.06-1.06.38-.56.56-1.2.56-1.97 0-1.65-1.57-3-3.5-3-.99 0-1.89.35-2.52.98-.59.59-.93 1.41-.98 2.32h2c.05-.47.24-.75.4-.91.18-.18.51-.39 1.1-.39 1.15 0 1.5.73 1.5 1 0 .47-.12.7-.22.84-.13.19-.3.34-.66.63-.32.25-.74.59-1.06 1.06-.37.56-.56 1.2-.56 1.97v.8h2v-.8c0-.47.12-.7.22-.84.13-.19.3-.34.66-.63Zm-.83 5.22a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1 12C1 5.93 5.93 1 12 1s11 4.93 11 11-4.93 11-11 11S1 18.06 1 12Zm2 0c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9-9 4.04-9 9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconQuestion24;
