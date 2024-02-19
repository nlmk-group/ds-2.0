import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddPlusCircleFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M19.812 18.241A9.956 9.956 0 0 0 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10a9.956 9.956 0 0 0 6.241-2.188l1.571-1.57ZM7.556 10.89h3.333V7.556h2.222v3.333h3.333v2.222h-3.333v3.333H10.89v-3.333H7.556V10.89Z"
      />
    </svg>
  );
};

export default IconAddPlusCircleFilled24;
