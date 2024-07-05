import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconModelling32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22.364 1a1 1 0 0 0-.537.156l-7.55 4.805a1 1 0 0 0-.463.844v5.492a1 1 0 0 0 1.6.8L29.142 2.8a1 1 0 0 0-.6-1.8h-6.178Zm-6.55 6.354L22.654 3h2.887l-9.729 7.297V7.354Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.21 11.243a1 1 0 0 0-.88-.217l-5.555 1.286a1 1 0 1 0 .45 1.948l5.061-1.171 6.56 5.668a1 1 0 0 0 1.308 0l6.56-5.668 5.06 1.171a1 1 0 0 0 .452-1.948l-5.556-1.286a1 1 0 0 0-.88.217l-6.29 5.435-6.29-5.435Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.33 17.026a1 1 0 0 1 .88.217l6.29 5.436 6.29-5.436a1 1 0 0 1 .88-.217l5.556 1.285a1 1 0 1 1-.451 1.949l-5.06-1.171-6.561 5.668a1 1 0 0 1-1.308 0l-6.56-5.668-5.06 1.171a1 1 0 0 1-.451-1.949l5.555-1.285Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.21 23.243a1 1 0 0 0-.88-.217L2.775 24.31a1 1 0 1 0 .45 1.949l5.061-1.171 6.56 5.668a1 1 0 0 0 1.308 0l6.56-5.668 5.06 1.171a1 1 0 0 0 .452-1.949l-5.556-1.285a1 1 0 0 0-.88.217L15.5 28.68l-6.29-5.436Z"
      />
    </svg>
  );
};

export default IconModelling32;
