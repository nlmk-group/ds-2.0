import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileImage24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.045 10.118c.225 0 .463.097.59.31l3.658 6.083.038.076a.64.64 0 0 1-.037.58.7.7 0 0 1-.249.243.7.7 0 0 1-.344.09H7.3a.7.7 0 0 1-.348-.092.7.7 0 0 1-.25-.249.64.64 0 0 1 .018-.666l2.612-4.055a.7.7 0 0 1 .246-.227.71.71 0 0 1 .665-.001.7.7 0 0 1 .248.227l.39.607 1.573-2.617c.128-.21.367-.31.592-.31m-4.518 6.064h2.768l-1.384-2.15zM11.7 14.31l1.202 1.872h2.614l-2.471-4.11zM8.866 8.071c.956 0 1.728.755 1.728 1.673 0 .919-.772 1.673-1.728 1.673s-1.728-.754-1.728-1.673c0-.918.772-1.672 1.728-1.673m-.15 3.187.15.007q-.08 0-.156-.008zm.15-1.869a.37.37 0 0 0-.254.102.353.353 0 0 0 .254.608.37.37 0 0 0 .254-.102.353.353 0 0 0-.254-.608"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12zM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileImage24;
