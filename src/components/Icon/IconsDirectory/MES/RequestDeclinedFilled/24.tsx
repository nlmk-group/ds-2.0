import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestDeclinedFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.5 22.5h-15A1.5 1.5 0 0 1 3 21V3a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 3v18a1.5 1.5 0 0 1-1.5 1.5ZM7.593 18.832l1.325 1.325L12 17.076l3.082 3.081 1.325-1.325-3.081-3.082 3.081-3.082-1.325-1.325L12 14.424l-3.082-3.081-1.325 1.325 3.081 3.082-3.081 3.082ZM8.25 9h4.5a.75.75 0 1 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5Zm7.5-4.5h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 1 0 0-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestDeclinedFilled24;
