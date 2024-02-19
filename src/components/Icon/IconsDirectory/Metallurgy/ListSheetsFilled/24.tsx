import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListSheetsFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m4.22 10.13.3-.3.589-.393a7.146 7.146 0 0 1 9.024.89l.01-.011.68.678 5.69-5.691a7.178 7.178 0 0 1-.487 9.322l.004.004-5.778 5.769A7.176 7.176 0 0 1 2 15.32a7.18 7.18 0 0 1 2.22-5.191Zm4.86 7.118a1.866 1.866 0 1 0-.001-3.733 1.866 1.866 0 0 0 0 3.733Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.963 6.41a9.009 9.009 0 0 0-2.053.032l1.715-1.714a7.177 7.177 0 0 1 9.567-.744l-4.413 4.414a9.012 9.012 0 0 0-4.816-1.989Z"
      />
    </svg>
  );
};

export default IconListSheetsFilled24;
