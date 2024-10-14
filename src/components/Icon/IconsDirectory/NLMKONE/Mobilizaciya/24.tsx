import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMobilizaciya24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12 1a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM7.348 3.51a1 1 0 1 0-1.696 1.06l2.5 4a1 1 0 0 0 1.696-1.06l-2.5-4Zm-2.9 4.636a1 1 0 1 0-.895 1.788l3 1.5a1 1 0 0 0 .894-1.788l-3-1.5ZM16.651 3.51a1 1 0 0 1 1.696 1.06l-2.5 4a1 1 0 1 1-1.696-1.06l2.5-4Zm2.901 4.636a1 1 0 1 1 .894 1.788l-3 1.5a1 1 0 0 1-.894-1.788l3-1.5Zm-6.49 2.025a1.2 1.2 0 0 0-2.125 0l-1.424 2.707-3.015.518a1.2 1.2 0 0 0-.656 2.02l2.135 2.19-.44 3.028a1.2 1.2 0 0 0 1.719 1.248L12 20.53l2.743 1.353a1.2 1.2 0 0 0 1.719-1.248l-.44-3.027 2.135-2.191a1.2 1.2 0 0 0-.656-2.02l-3.015-.518-1.424-2.707ZM11.1 14.159l.899-1.71.9 1.71a1.2 1.2 0 0 0 .858.624l1.905.327-1.349 1.384a1.2 1.2 0 0 0-.328 1.01l.278 1.912-1.733-.855a1.2 1.2 0 0 0-1.062 0l-1.733.855.278-1.913a1.2 1.2 0 0 0-.328-1.01L8.337 15.11l1.905-.327a1.2 1.2 0 0 0 .859-.624Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMobilizaciya24;
