import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotEqualSign24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 20.075 19.076 3l1.651 1.651-3.582 3.582H22v2.335h-7.19l-4.204 4.204H22v2.335H8.271l-4.62 4.62-1.65-1.652Zm4.603-5.303H3.317v2.335h.95l2.336-2.335Zm-3.286-6.54h9.825l-2.335 2.336h-7.49V8.233Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNotEqualSign24;
