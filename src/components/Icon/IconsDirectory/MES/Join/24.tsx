import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJoin24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9 5a7 7 0 0 0 0 14c1.04 0 2.06-.24 3-.68.94.44 1.96.68 3 .68a7 7 0 1 0 0-14c-1.04 0-2.06.24-3 .68-.94-.44-1.96-.68-3-.68Zm0 2c.34 0 .67.03 1 .1-1.28 1.31-2 3.07-2 4.9 0 1.83.72 3.59 2 4.89-.33.07-.66.11-1 .11A5 5 0 0 1 9 7Zm6 0a5 5 0 1 1 0 10c-.34 0-.67-.03-1-.1 1.28-1.31 2-3.07 2-4.9 0-1.83-.72-3.59-2-4.89.33-.07.66-.11 1-.11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconJoin24;
