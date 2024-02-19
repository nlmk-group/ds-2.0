import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCraneFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M20.244 9.498 14.111 4.79h5.8c.404 0 .773-.333.773-.737a.738.738 0 0 0-.734-.738H4.062a.741.741 0 0 0-.737.738.74.74 0 0 0 .737.737h5.8L3.587 9.608a.653.653 0 0 0-.262.634v9.705a.74.74 0 0 0 .737.737h15.85a.795.795 0 0 0 .772-.702v-9.807a.738.738 0 0 0-.44-.677Zm-2.452-.06H6.156l5.832-4.463 5.804 4.462Zm-8.788 7.3a.741.741 0 0 1-.737.738.739.739 0 0 1-.737-.738v-3.391c0-.404.333-.738.737-.738.404 0 .737.334.737.738v3.391Zm7.445 0a.741.741 0 0 1-.737.738.739.739 0 0 1-.737-.738v-3.391c0-.404.333-.738.737-.738.404 0 .737.334.737.738v3.391Zm-3.724 0a.741.741 0 0 1-.737.738.739.739 0 0 1-.737-.738v-3.391c0-.404.333-.738.737-.738.404 0 .737.334.737.738v3.391Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCraneFilled24;
