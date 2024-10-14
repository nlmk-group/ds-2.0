import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestOkFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.5 22.5h-15A1.5 1.5 0 0 1 3 21V3a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 3v18a1.5 1.5 0 0 1-1.5 1.5Zm-3.75-18h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 1 0 0-1.5ZM7.5 8.25a.75.75 0 0 0 .75.75h4.5a.75.75 0 1 0 0-1.5h-4.5a.75.75 0 0 0-.75.75Zm8.494 3.652-4.508 4.508-2.917-2.917-1.459 1.459 4.376 4.375 5.966-5.966-1.458-1.459Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestOkFilled24;
