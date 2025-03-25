import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTemperatureFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12.615 8.606a.65.65 0 1 0-1.3 0v6.006a2.292 2.292 0 1 0 1.3 0V8.606Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.65 3.01a3.275 3.275 0 0 1 5.59 2.315v7.818a4.916 4.916 0 1 1-6.55 0V5.325c0-.869.345-1.702.96-2.316Zm2.315.34A1.975 1.975 0 0 0 9.99 5.325v8.121c0 .2-.092.39-.25.513a3.616 3.616 0 1 0 4.45 0 .65.65 0 0 1-.25-.513V5.325a1.975 1.975 0 0 0-1.975-1.975Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTemperatureFilled24;
