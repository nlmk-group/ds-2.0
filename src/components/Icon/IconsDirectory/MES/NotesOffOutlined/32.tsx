import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotesOffOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.12 1.24 1.24 3.12 3.92 5.8l-.013 22.653L9.24 23.12h12l7.64 7.64 1.88-1.88L3.12 1.24Zm24.787 19.213v-16H10.12L7.454 1.787h20.453c1.467 0 2.667 1.2 2.667 2.666v16c0 1.2-.814 2.214-1.907 2.547l-2.547-2.547h1.787Zm-16-5.333H9.24v2.667h2.667V15.12Zm13.333-4h-8.453l2.667 2.667h5.786V11.12Zm-10.666-4H25.24v2.667h-9.786l-.88-.88V7.12Zm-8 14.893 1.56-1.56h10.44l-6.667-6.666H9.24V11.12L6.574 8.453v13.56Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconNotesOffOutlined32;
