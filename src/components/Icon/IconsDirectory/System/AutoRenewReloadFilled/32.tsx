import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewReloadFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21.7 7.09 15.5.778V5.33c-5.576.265-10 4.947-10 10.67 0 2.095.603 4.045 1.626 5.686l.335.54 2.528-2.574-.173-.323A7.08 7.08 0 0 1 9 16c0-3.773 2.879-6.857 6.5-7.118v4.523l6.2-6.314Zm3.174 3.224-.335-.54-2.524 2.57.165.321A7.27 7.27 0 0 1 23 16c0 3.773-2.878 6.856-6.5 7.118v-4.522l-6.2 6.313 6.2 6.314V26.67c5.576-.266 10-4.947 10-10.67 0-2.095-.603-4.045-1.626-5.686Z"
      />
    </svg>
  );
};

export default IconAutoRenewReloadFilled32;
