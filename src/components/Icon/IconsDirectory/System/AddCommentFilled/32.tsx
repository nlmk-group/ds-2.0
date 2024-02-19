import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddCommentFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 5.294V30l5.444-5.444h19.262A3.294 3.294 0 0 0 30 21.26V5.294A3.294 3.294 0 0 0 26.706 2H5.294A3.294 3.294 0 0 0 2 5.294Zm13.177 13.177v-4.942h-4.942v-1.647h4.942v-4.94h1.646v4.94h4.942v1.647h-4.942v4.942h-1.646Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAddCommentFilled32;
