import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconServicesCKR24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M2.64 5.363A4 4 0 0 1 6.589 2h2.69a2 2 0 0 1 2 2.065l-.161 4.967-.032.968H4.241a2 2 0 0 1-1.975-2.318l.374-2.319ZM6.589 4a2 2 0 0 0-1.975 1.682L4.241 8h4.91l.129-4H6.589Zm-3.12 8a2 2 0 0 0-1.985 1.76l-.454 3.76A4 4 0 0 0 5.001 22h3.851a2 2 0 0 0 2-1.952l.17-7.024.024-1.024H3.47Zm0 2h5.528l-.145 6h-3.85a2 2 0 0 1-1.986-2.24L3.47 14Zm17.065-2a2 2 0 0 1 1.986 1.76l.454 3.76A4 4 0 0 1 19.003 22h-3.851a2 2 0 0 1-2-1.952l-.169-7.024L12.958 12h7.576Zm0 2h-5.527l.145 6h3.85a2 2 0 0 0 1.986-2.24L20.534 14ZM17.415 2a4 4 0 0 1 3.949 3.363l.374 2.319A2 2 0 0 1 19.763 10h-6.845l-.032-.968-.16-4.967A2 2 0 0 1 14.723 2h2.691Zm1.975 3.682A2 2 0 0 0 17.415 4h-2.69l.129 4h4.91l-.374-2.318Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconServicesCKR24;
