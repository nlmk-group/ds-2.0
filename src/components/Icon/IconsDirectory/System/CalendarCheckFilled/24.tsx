import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarCheckFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9 2v2h6V2h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4V2h2Zm11 7H4v11h16V9Zm-4.964 2.136L11.5 14.672 9.38 12.55l-1.416 1.414L11.5 17.5l4.95-4.95-1.414-1.414Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarCheckFilled24;
