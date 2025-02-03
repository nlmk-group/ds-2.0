import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSpectatTelega16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h.085a1.5 1.5 0 1 0 2.83 0h6.17a1.5 1.5 0 1 0 2.83 0H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2Zm.2 1.2v3.2h3.2V3.2H2.2Zm0 5.2v-.8h3.2v.8H2.2Zm0 3.4V9.6h11.6v2.2H2.2Zm11.6-4.2v.8h-3.2v-.8h3.2Zm0-4.4v3.2h-3.2V3.2h3.2Zm-7.2 0h2.8v3.2H6.6V3.2Zm2.8 5.2H6.6v-.8h2.8v.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSpectatTelega16;
