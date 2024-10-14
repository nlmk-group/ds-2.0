import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGoalsMap24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m15.02 11.1 8.69-8.69h-.01L22.29 1l-7.31 7.31-3.29-3.12-1.38 1.45 4.71 4.46ZM8 7.26v-.01h-.01l.01.01Zm0 10.6V7.26l1.99 2.16v8.44l4 1.4v-6.05h2v6.05l3-1v-7.55l2-2v10.24c0 .22-.06.41-.19.58-.12.17-.29.3-.51.38l-5.3 1.8-6-2.1-4.65 1.8c-.33.14-.64.1-.92-.11a.998.998 0 0 1-.42-.84v-14c0-.21.06-.4.19-.57.12-.17.29-.3.51-.38L9 3.71l.86.3-1.89 2.16L5 7.16v11.85l3-1.15Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconGoalsMap24;
