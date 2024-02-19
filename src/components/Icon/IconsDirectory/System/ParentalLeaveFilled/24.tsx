import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconParentalLeaveFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17 4h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8v-2h7V8H4v1.5H2V5a1 1 0 0 1 1-1h4V2h2v2h6V2h2v2Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M18 11v2h-2v-2h2Zm0 4v2h-2v-2h2ZM7.81 13.154l.01-3.804A.353.353 0 0 1 8.191 9c2.421.176 3.77 1.645 3.809 4.154H7.81ZM4.666 22.5c.868 0 1.572-.697 1.572-1.558 0-.86-.704-1.557-1.572-1.557-.868 0-1.571.697-1.571 1.557S3.798 22.5 4.666 22.5Zm5.239 0c.868 0 1.572-.697 1.572-1.558 0-.86-.704-1.557-1.572-1.557-.868 0-1.571.697-1.571 1.557S9.037 22.5 9.905 22.5Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m11.508 16.922.492-2.47H4.37l-.389-2.731a.748.748 0 0 0-.74-.644H1.748a.749.749 0 0 0-.747.75c0 .414.335.75.747.75h.847l.61 4.284c.078.55.555.966 1.11.966h6.095c.532 0 .994-.38 1.099-.905Z"
      />
    </svg>
  );
};

export default IconParentalLeaveFilled24;
