import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnterOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M6.33 2h5.33c.73 0 1.33.59 1.33 1.33v9.35c0 .73-.6 1.32-1.33 1.32H6.33C5.6 14 5 13.41 5 12.68V10h1.33v2.68h5.33V3.32H6.33V6H5V3.33C5 2.6 5.6 2 6.33 2ZM10 8l-2.67 2.67v-2H2V7.34h5.33V5.33L10 8Z"
      />
    </svg>
  );
};

export default IconEnterOutlined16;
