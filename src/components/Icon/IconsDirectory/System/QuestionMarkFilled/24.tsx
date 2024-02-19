import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionMarkFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.563 14.585a2.933 2.933 0 0 0-.02.138c-.035.268-.054.655-.054 1.277v.5H9.585l-.006-.494a16.523 16.523 0 0 0-.007-.276c-.023-.77-.061-2.023.554-3.124.49-.879 1.107-1.476 1.68-1.99l.244-.218c.482-.428.9-.798 1.235-1.276l.002-.002c.355-.5.438-1.237.17-1.841-.25-.566-.837-1.069-1.958-1.069-1.38 0-2.09 1.017-2.416 1.998l-.17.511-3.535-1.477.148-.441C6.299 4.498 8.413 2.5 11.489 2.5c2.53 0 4.317 1.151 5.24 2.648.397.648.7 1.552.76 2.512.06.963-.122 2.018-.743 2.931v.001c-.634.928-1.234 1.493-1.743 1.972l-.007.006c-.51.48-.9.852-1.216 1.43-.11.202-.173.34-.217.585ZM8.985 20c0-1.38 1.133-2.5 2.514-2.5 1.38 0 2.514 1.12 2.514 2.5s-1.134 2.5-2.514 2.5A2.513 2.513 0 0 1 8.985 20Z"
      />
    </svg>
  );
};

export default IconQuestionMarkFilled24;
